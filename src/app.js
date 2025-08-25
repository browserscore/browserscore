import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';
import AbstractFeature from './classes/AbstractFeature.js';
import Score from './classes/Score.js';
import Specs from './tests.js';
import Spec from './classes/Spec.js';
import content from './vue/directives/content.js';
import { passclass, round, percent } from './util.js';
import CarbonAds from './vue/components/carbon-ads.js';
import SupportStatus from './vue/components/support-status/support-status.js';

let allSpecs = {};

let root = new AbstractFeature();

for (let id in Specs) {
	let spec = Specs[id];
	spec.id = id;
	spec = new Spec(spec, root);
	allSpecs[id] = spec;
}

let components = {
	"support-status": SupportStatus,
	"carbon-ads": CarbonAds,
}

let appSpec = {
	data() {
		return {
			root,

			/**
			 * All specs as dictionary
			 * @type {Record<string, Spec>}
			 */
			allSpecs,
			filter: new URLSearchParams(window.location.search).get('filter') ?? '',
			// TODO move this to Score
			testTime: 0,
			favicon: '',
		};
	},

	computed: {
		/** Sorted and filtered specs
		 * @type {Spec[]}
		 */
		specs () {
			return this.allSpecsList.filter(spec => spec.matchesFilter(this.filter)).sort((a, b) => a.title.localeCompare(b.title));
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

	mounted() {
		this.updateFavicon();
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
			handler() {
				// Update address bar
				let searchParams = new URLSearchParams(location.search);
				if (this.filter) {
					searchParams.set('filter', this.filter);
				}
				else {
					searchParams.delete('filter');
				}

				let newUrl = location.pathname + '?' + searchParams + location.hash;

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

	components,

	compilerOptions: {
		isCustomElement: tag => !Object.keys(components).includes(tag),
	},
};

let app = createApp(appSpec).mount("#content");

// Global exports
Object.assign(globalThis, {
	app,
	appSpec,
	allSpecs,
});
