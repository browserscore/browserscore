import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';
import AbstractFeature from './classes/AbstractFeature.js';
import { orgs, groups, specs } from './data/index.js';
import Spec from './classes/Spec.js';
import content from './vue/directives/content.js';
import { IS_DEV, passclass, round, percent, capitalize, symmetricDifference, mapObject } from './util.js';
import URLParams from './util/urlparams.js';
import featureTypes from './data/types.js';
import { groupFeatures } from './classes/feature-utils.js';
import Feature from './classes/Feature.js';
import FeatureProxy from './classes/FeatureProxy.js';

// Vue components
import * as components from './vue/components/index.js';

let root = new AbstractFeature();
root.children = specs.flatMap(spec => spec.children);

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
	supported: ['pass', 'partial', 'fail'],
};
let defaultGroupBy = ['spec', 'type'];

let appSpec = {
	data() {
		let filter = Object.assign({}, defaultFilter, urlParams.toJSON({properties: new Set(Object.keys(defaultFilter))}));
		let groupBy = urlParams.getAll('groupby');
		groupBy = groupBy.length > 0 ? groupBy : defaultGroupBy;

		return {
			root,

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
			featureTypes,
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
				return {key: 'type', titles: mapObject(featureTypes, type => type.title), level: this.groupBy.includes('spec') ? 1 : 0}
			}

			return null;
		},

		hasFilter () {
			if (!this.filter) {
				return false;
			}

			let filters = { ...Spec.allFilters, ...Feature.allFilters};

			for (let key in filters) {
				let filterSpec = filters[key];

				if (!filterSpec) {
					continue;
				}

				let value = this.filter[key];
				let defaultValue = filterSpec.default || '';

				if (!defaultValue && value) {
					return true;
				}

				if (symmetricDifference(value, defaultValue).length > 0) {
					return true;
				}
			}

			return false;
		},

		computedFilter () {
			if (!this.filter || !this.hasFilter) {
				return null;
			}

			return this.filter;
		},

		computedRoot () {
			if (!this.groupBy.length && !this.computedFilter) {
				return root;
			}

			let children = this.computedFilter ? root.children.filter(child => child.matchesFilter(this.computedFilter)) : root.children;
			children = this.groupBy.length ? groupFeatures(children, this.groupBy) : children;

			return new FeatureProxy(this.root, children);
		}
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
				let changed = false;

				for (let param in this.filter) {
					let oldValue = this.urlParams.getAny(param);
					let value = this.filter[param];
					let defaultValue = defaultFilter[param];

					if (symmetricDifference(value, defaultValue).length === 0) {
						changed = this.urlParams.has(param);
						this.urlParams.delete(param);
					}
					else if (symmetricDifference(value, oldValue).length > 0) {
						changed = true;
						this.urlParams.setAll(param, value);
					}
				}

				if (changed) {
					this.urlParamsObject = this.urlParams.toJSON();
				}
			},
		},

		groupBy: {
			handler(groupBy, oldGroupBy) {
				groupBy = groupBy.filter(Boolean);
				// We want to store the empty value as it's not the same as the default grouping
				groupBy = groupBy.length === 0 ? [''] : groupBy;

				if (symmetricDifference(groupBy, oldGroupBy).length === 0) {
					// No change
					return;
				}

				let changed = false;

				if (symmetricDifference(groupBy, defaultGroupBy).length === 0) {
					this.urlParams.delete('groupby');
					changed = true;
				}
				else {
					this.urlParams.setAll('groupby', groupBy);
					changed = true;
				}

				if (changed) {
					this.urlParamsObject = this.urlParams.toJSON();
				}
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

		computedRoot: {
			handler() {
				this.computedRoot.score.recalc({descendants: this.groupBy.length});
			},
			immediate: true,
		}
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
