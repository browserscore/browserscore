/**
 * Component to render one AbstractFeature instance (feature, feature group, spec, etc.)
 */
import { IS_DEV, passclass, groupBy, round, percent, symmetricDifference, pick } from '../../../util.js';
import Score from '../../../classes/Score.js';
import Spec from '../../../classes/Spec.js';
import Feature from '../../../classes/Feature.js';

export default {
	props: {
		feature: {
			type: Object,
			required: true,
		},

		groupBy: {
			type: [String, Function, Object],
		},

		groupTitle: {
			type: [Function, Object],
		},

		level: {
			type: Number,
			default: 0,
		},

		filter: {
			type: Object,
		},
	},

	inheritAttrs: false,

	data () {
		return {
			open: false,
			everOpened: false,
		};
	},

	emits: ['update:score'],

	mounted () {
		let container = this.$refs.container ?? this.$refs.details;

		if (IS_DEV && container) {
			// Expose feature object on container for debugging
			container.feature = this.feature;
		}
	},

	template: "#feature-component-template",

	computed: {
		hasFilter () {
			if (!this.filter) {
				return false;
			}

			let filters = { ...Spec.allFilters, ...Feature.allFilters};

			for (let key in filters) {
				if (hasFilter(filters[key], this.filter[key])) {
					return true;
				}
			}

			return false;
		},

		isFiltered () {
			return this.children.length < this.feature.children.length;
		},

		isEmpty () {
			if (!this.feature.children?.length) {
				// Leaf
				return false;
			}

			return this.children.length === 0;
		},

		filteredScore (_, old) {
			if (!this.hasFilter) {
				return null;
			}

			if (old) {
				old.node.children = [...this.children];
				return old;
			}

			return new Score({children: [...this.children]});
		},

		score () {
			return this.isFiltered ? this.filteredScore : this.feature.score;
		},

		computedGroupBy () {
			if (!this.groupBy) {
				return null;
			}

			if (typeof this.groupBy === 'object') {
				return this.groupBy;
			}

			return {key: this.groupBy, titles: this.groupTitle, level: this.level};
		},

		childGroupBy () {
			if (this.computedGroupBy && this.computedGroupBy.level > this.level) {
				return this.computedGroupBy;
			}

			return null;
		},

		childFilter () {
			if (!this.hasFilter || this.level >= 3) {
				return null;
			}

			if (this.feature.constructor.name === 'Spec') {
				// We can only have Spec instances in one level,
				// so we don't need to pass down those filters
				return pick(this.filter, Object.keys(Feature.allFilters));
			}

			return this.filter;
		},

		children () {
			if (this.hasFilter) {
				return this.feature.children.filter(child => child.matchesFilter(this.filter));
			}

			return this.feature.children;
		},

		renderedChildren () {
			return !this.isCollapsible || this.everOpened ? this.children : [];
		},

		groupedChildren () {
			if (this.computedGroupBy) {
				if (this.computedGroupBy.level === this.level || this.computedGroupBy.level === undefined) {
					return groupBy(this.renderedChildren, this.computedGroupBy.key);
				}
			}
		},

		isSpec () {
			return this.feature.constructor.name === 'Spec';
		},

		isCollapsible () {
			return this.isSpec || (this.level > 0 && this.feature.children?.length > 0);
		}
	},

	methods: {
		passclass,
		round,
		percent,

		handleToggle (event) {
			let open = event.target.open;
			this.open = open;

			if (open && !this.everOpened) {
				this.everOpened = true;
			}

		},

		getGroupTitle (key) {
			if (!this.computedGroupBy) {
				return key;
			}

			let getTitle = this.computedGroupBy.titles;
			let ret;

			if (getTitle) {
				if (typeof getTitle === 'function') {
					ret = getTitle(key);
				}

				ret = getTitle[key];
			}

			// No mapping provided or the mapping returned nothing, just use raw key
			return ret ?? key;
		},
	},

	watch: {
		children: {
			handler() {
				if (this.hasFilter) {
					this.filteredScore.node.children = [...this.children];
				}

				for (let child of this.children) {
					child.test();
				}

				if (this.score !== this.feature.score || this.level < 1) {
					this.score.recalc();
				}
			},
			immediate: true,
		},

		"score.value": {
			handler() {
				this.$emit('update:score', this.score);
			},
			immediate: true,
		},
	},

	compilerOptions: {
		isCustomElement: tag => tag === 'ui-tooltip',
	},
};


function hasFilter (filterSpec, value) {
	if (!filterSpec) {
		return false;
	}

	let defaultValue = filterSpec.default || '';

	if (!defaultValue && value) {
		return true;
	}

	if (symmetricDifference(value, defaultValue).length === 0) {
		return false;
	}

	return true;
}
