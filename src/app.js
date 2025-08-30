import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';
import AbstractFeature from './classes/AbstractFeature.js';
import * as specs from './specs.js';
import { orgs, groups } from './data.js';
import Spec from './classes/Spec.js';
import content from './vue/directives/content.js';
import { IS_DEV, passclass, round, percent, capitalize } from './util.js';
import { titles as featureTypeTitles } from './features.js';

// Vue components
import * as components from './vue/components/index.js';

let root = new AbstractFeature();

for (let key in specs) {
	let spec = specs[key];
	spec = new Spec(spec, root);
}

root.children = [...Spec.all].sort((a, b) => a.title.localeCompare(b.title));

// Components available in every component
let globalComponents = {
	"support-status": components.SupportStatus,
	"bs-feature": components.Feature,
	"wrap-if": components.WrapIf,
};

// Components only available in the top-level app instance
let localComponents = {
	"carbon-ads": components.CarbonAds,
	"color-scheme-toggle": components.ColorSchemeToggle,
	"bs-filter": components.Filter,
};

let urlParams = new URLSearchParams(window.location.search);
let defaultFilter = {
	show: '',
	q: '',
	spec: '',
	snapshot: '',
	version: '',
	group: '',
	org: '',
	type: '',
	status: '',
};
let filter = { ...defaultFilter };

for (let param in defaultFilter) {
	if (urlParams.has(param)) {
		filter[param] = urlParams.get(param);
	}
}

let appSpec = {
	data() {
		return {
			root,

			/**
			 * All specs as dictionary
			 * @type {Record<string, Spec>}
			 */
			allSpecs: Spec.byId,
			filter,
			// TODO move this to Score
			testTime: 0,
			favicon: '',
			mounted: false,
			score: null,
		};
	},

	created () {
		// Add constants that we don't need to be reactive
		Object.assign(this, {
			IS_DEV,
			featureTypes: Spec.featureTypes,
			featureTypeTitles,
			currentYear: new Date().getFullYear(),
			urlParams,
			orgs,
			groups,
		});
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

			let specs = Spec.all.filter(spec => spec.matchesFilter(this.filter));

			if (this.filter.spec) {
				specs = specs.filter(spec => spec.id.indexOf(this.filter.spec) > -1);
			}

			return specs.sort((a, b) => a.title.localeCompare(b.title));
		},

		snapshots () {
			let firstSnapshot = 2007;
			return Array(this.currentYear - firstSnapshot).fill(0).map((_, i) => firstSnapshot + i);
		},
	},

	methods: {
		passclass,
		round,
		percent,
		capitalize,

		async updateFavicon() {
			if (this.$refs.supportStatus) {
				let favicon = await this.$refs.supportStatus.getDataUrl();
				this.favicon = favicon;
				document.getElementById('favicon').href = favicon;
			}
		},
	},

	watch: {
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
					if (this.score) {
						this.updateFavicon();
					}
				});
			},
			immediate: true,
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

for (let [tag, directive] of Object.entries(appSpec.directives)) {
	createdApp.directive(tag, directive);
}

let app = createdApp.mount("#content");

// Global exports
Object.assign(globalThis, {
	app,
	appSpec,
	Spec,
});
