import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';
import AbstractFeature from './classes/AbstractFeature.js';
import Score from './classes/Score.js';
import Specs from './tests.js';
import Spec from './classes/Spec.js';
import content from './vue/directives/content.js';
import { passclass, round, percent } from './util.js';
import { titles as featureTypeTitles } from './features.js';

// Vue components
import Feature from './vue/components/feature/feature.js';
import CarbonAds from './vue/components/carbon-ads.js';
import SupportStatus from './vue/components/support-status/support-status.js';
import ColorSchemeToggle from './vue/components/color-scheme-toggle/color-scheme-toggle.js';

let allSpecs = {};

let root = new AbstractFeature();

for (let id in Specs) {
	let spec = Specs[id];
	spec.id = id;
	spec = new Spec(spec, root);
	allSpecs[id] = spec;
}

// Components available in every component
let globalComponents = {
	"support-status": SupportStatus,
	"bs-feature": Feature,
};

// Components only available in the top-level app instance
let localComponents = {
	"carbon-ads": CarbonAds,
	"color-scheme-toggle": ColorSchemeToggle,
};

let urlParams = new URLSearchParams(window.location.search);
let filterParams = new Set(['show', 'q', 'spec']);

let appSpec = {
	data() {
		return {
			root,

			/**
			 * All specs as dictionary
			 * @type {Record<string, Spec>}
			 */
			allSpecs,
			filter: Object.fromEntries([...urlParams].filter(e => filterParams.has(e[0]))),
			// TODO move this to Score
			testTime: 0,
			favicon: '',
			mounted: false,
		};
	},

	created () {
		// Add constants that we don't need to be reactive
		this.featureTypeTitles = featureTypeTitles;
	},

	mounted() {
		this.updateFavicon();
		this.mounted = true;
	},

	computed: {
		/** Sorted and filtered specs
		 * @type {Spec[]}
		 */
		specs () {
			if (!this.mounted) {
				return [];
			}

			let specs = this.allSpecsList.filter(spec => spec.matchesFilter(this.filter.show));

			if (this.filter.spec) {
				specs = specs.filter(spec => spec.id.indexOf(this.filter.spec) > -1);
			}

			return specs.sort((a, b) => a.title.localeCompare(b.title));
		},

		/** All specs as array
		 * @type {Spec[]}
		 */
		allSpecsList () {
			return Object.values(this.allSpecs);
		},

		/** Score for filtered specs
		 * @type {Score}
		 */
		score () {
			return this.root.score;
		},
	},

	methods: {
		passclass,
		round,
		percent,

		async updateFavicon() {
			if (this.$refs.supportStatus) {
				let favicon = await this.$refs.supportStatus.getDataUrl();
				this.favicon = favicon;
				document.getElementById('favicon').href = favicon;
			}
		},
	},

	watch: {
		specs: {
			handler() {
				this.root.children = this.specs;

				for (let spec of this.specs) {
					spec.test();
				}

				this.root.score.recalc();
			},
			immediate: true,
		},

		filter: {
			deep: true,

			handler() {
				// Update address bar
				for (let param in this.filter) {
					if (this.filter[param]) {
						urlParams.set(param, this.filter[param]);
					}
					else {
						urlParams.delete(param);
					}
				}

				let newUrl = location.pathname + '?' + urlParams + location.hash;

				history.replaceState({}, '', newUrl);
			},
		},

		"score.value": {
			handler() {
				this.$nextTick(() => {
					this.updateFavicon();
				});
			},
		},
	},

	directives: {
		content,
	},

	components: localComponents,

	compilerOptions: {
		isCustomElement: tag => !(tag in globalComponents || tag in localComponents),
	},
};

let createdApp = createApp(appSpec)

// Global components
for (let [tag, component] of Object.entries(globalComponents)) {
	createdApp.component(tag, component);
}

let app = createdApp.mount("#content");

// Global exports
Object.assign(globalThis, {
	app,
	appSpec,
	allSpecs,
});
