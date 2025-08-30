/**
 * Component to render one AbstractFeature instance (feature, feature group, spec, etc.)
 */
import { IS_DEV, passclass, groupBy, round, percent } from '../../../util.js';
import Score from '../../../classes/Score.js';

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
			filteredScore: null,
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
			return this.filter && Object.keys(this.filter).some(Boolean);
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
			if (this.hasFilter && this.level < 3) {
				return this.filter;
			}

			return null;
		},

		children () {
			if (this.hasFilter) {
				return this.feature.children.filter(child => child.matchesFilter(this.filter));
			}

			return this.feature.children;
		},

		renderedChildren () {
			// return !this.isCollapsible || this.everOpened ? this.feature.children : [];
			return !this.isCollapsible || this.everOpened ? this.children : [];
		},

		groupedChildren () {
			if (this.computedGroupBy) {
				if (this.computedGroupBy.level === this.level) {
					return groupBy(this.renderedChildren, this.computedGroupBy.key);
				}
			}
		},

		isCollapsible () {
			return this.level > 0 && this.feature.children?.length > 0;
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
		isFiltered: {
			handler() {
				if (this.filteredScore) {
					this.filteredScore.node = {children: this.children};
				}
				else {
					this.filteredScore = new Score({children: this.children});
				}
			},
			immediate: true,
		},

		children: {
			handler() {
				if (this.hasFilter) {
					this.filteredScore.node = {children: this.children};
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
