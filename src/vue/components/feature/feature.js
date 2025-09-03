/**
 * Component to render one AbstractFeature instance (feature, feature group, spec, etc.)
 */
import Score from '../../../classes/Score.js';
import Spec from '../../../classes/Spec.js';
import Feature from '../../../classes/Feature.js';
import { IS_DEV, passclass, groupBy, round, percent, symmetricDifference, pick, log } from '../../../util.js';

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

	created () {
		this.open = this.everOpened = this.defaultOpen;

		if (this.open) {
			this.test();
		}
	},

	mounted () {
		let container = this.$refs.container ?? this.$refs.details;

		if (IS_DEV && container) {
			// Expose feature object on container for debugging
			container.feature = this.feature;
		}
	},

	template: "#feature-component-template",

	computed: {
		defaultOpen () {
			if (this.isSpec) {
				return true;
			}

			return false;
		},


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
			return this.filteredChildren?.length < this.feature.children.length;
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
				old.node.children = this.filteredChildren;
				return old;
			}

			return new Score({children: this.filteredChildren});
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

		filteredChildren () {
			if (this.hasFilter) {
				return this.feature.children.filter(child => child.matchesFilter(this.filter));
			}
		},

		children () {
			return this.isFiltered ? this.filteredChildren : this.feature.children;
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

		species () {
			return this.feature.species;
		},

		isSpec () {
			return this.feature.species === 'Spec';
		},

		isCollapsible () {
			return this.isSpec || (this.level > 0 && this.feature.children?.length > 0);
		}
	},

	methods: {
		passclass,
		round,
		percent,
		log,

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

		test () {
			if (this.isFiltered) {
				for (let child of this.filteredChildren) {
					child.test();
				}

				this.filteredScore.recalc();
			}
			else {
				this.feature.test();
			}
		}
	},

	watch: {
		children: {
			handler() {
				this.test();
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
