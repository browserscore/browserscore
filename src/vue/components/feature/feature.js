/**
 * Component to render one AbstractFeature instance (feature, feature group, spec, etc.)
 */
import { IS_DEV, passclass, groupBy } from '../../../util.js';

export default {
	props: {
		feature: {
			type: Object,
			required: true,
		},

		groupBy: {
			type: [String, Function],
		},

		groupTitle: {
			type: [Function, Object],
		},

		level: {
			type: Number,
			default: 0,
		}
	},

	data () {
		return {
			open: false,
			everOpened: false,
		};
	},

	mounted () {
		let container = this.$refs.container ?? this.$refs.details;

		if (IS_DEV) {
			// Expose feature object on container for debugging
			container.feature = this.feature;
		}
	},

	template: "#feature-component-template",

	computed: {
		groupedChildren () {
			if (this.groupBy) {
				return groupBy(this.feature.children, this.groupBy);
			}
		},

		renderedChildren () {
			return this.everOpened ? this.feature.children : [];
		},
	},

	methods: {
		passclass,

		handleToggle (event) {
			let open = event.target.open;
			this.open = open;

			if (open && !this.everOpened) {
				this.everOpened = true;
			}

		},

		getGroupTitle (type) {
			if (!this.groupTitle) {
				return type;
			}

			if (typeof this.groupTitle === 'function') {
				return this.groupTitle(type) ?? type;
			}

			return this.groupTitle[type] ?? type;
		},
	},
};
