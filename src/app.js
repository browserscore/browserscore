import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';
import AbstractFeature from './classes/AbstractFeature.js';
import * as specs from './specs.js';
import { orgs, groups } from './data.js';
import Spec from './classes/Spec.js';
import content from './vue/directives/content.js';
import { IS_DEV, passclass, round, percent, capitalize } from './util.js';
import URLParams from './util/urlparams.js';
import { titles as featureTypeTitles } from './features.js';

// Vue components
import * as components from './vue/components/index.js';

let specRoot = new AbstractFeature();
let featureRoot = new AbstractFeature();

for (let key in specs) {
	let spec = specs[key];
	spec = new Spec(spec, specRoot);
	featureRoot.children.push(...spec.children);
}

specRoot.children = [...Spec.all].sort((a, b) => a.title.localeCompare(b.title));

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

let urlParams = new URLParams();
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
let defaultGroupBy = ['spec', 'type'];

let appSpec = {
	data() {
		let filter = Object.assign({}, defaultFilter, urlParams.toJSON({properties: new Set(Object.keys(defaultFilter))}));
		let groupBy = urlParams.getAll('groupby');
		groupBy = groupBy.length > 0 ? groupBy : defaultGroupBy;

		return {
			root: specRoot,

			/**
			 * All specs as dictionary
			 * @type {Record<string, Spec>}
			 */
			allSpecs: Spec.byId,
			filter,
			groupBy,
			// TODO move this to Score
			testTime: 0,
			favicon: '',
			mounted: false,
			score: null,
			urlParams,
			urlParamsObject: urlParams.toJSON(),
		};
	},

	created () {
		// Add constants that we don't need to be reactive
		Object.assign(this, {
			IS_DEV,
			featureTypes: Spec.featureTypes,
			featureTypeTitles,
			currentYear: new Date().getFullYear(),
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

		rootGroupBy () {
			if (this.groupBy.includes('type')) {
				return {key: 'type', titles: featureTypeTitles, level: this.groupBy.includes('spec') ? 1 : 0}
			}

			return null;
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
		urlParamsObject: {
			deep: true,
			handler() {
				// Update location
				let newUrl = location.pathname + '?' + this.urlParams + location.hash;
				history.replaceState({}, '', newUrl);
			},
		},

		filter: {
			deep: true,

			handler() {
				// Update address bar
				for (let param in this.filter) {
					if (this.filter[param] && this.filter[param] !== defaultFilter[param]) {
						this.urlParams.set(param, this.filter[param]);
					}
					else {
						this.urlParams.delete(param);
					}
				}

				this.urlParamsObject = this.urlParams.toJSON();
			},
		},

		groupBy: {
			handler() {
				this.root = this.groupBy.includes('spec') ? specRoot : featureRoot;

				let groupBy = this.groupBy.filter(Boolean);
				// We want to store the empty value as it's not the same as the default grouping
				groupBy = groupBy.length === 0 ? [''] : groupBy;

				if (groupBy.sort().toString() === defaultGroupBy.sort().toString()) {
					this.urlParams.delete('groupby');
				}
				else {
					this.urlParams.setAll('groupby', groupBy);
				}

				this.urlParamsObject = this.urlParams.toJSON();
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
