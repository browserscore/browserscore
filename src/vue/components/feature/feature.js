/**
 * Component to render one AbstractFeature instance (feature, feature group, spec, etc.)
 */
import { IS_DEV, passclass, groupBy, round, percent, symmetricDifference, pick, log } from '../../../util.js';
import * as data from '../../../data/index.js';
import FeatureProxy from '../../../classes/FeatureProxy.js';

export default {
	props: {
		feature: {
			type: Object,
			required: true,
		},

		level: {
			type: Number,
			default: 0,
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
			return this.species !== 'Feature' || this.level === 0;
		},

		isEmpty () {
			return !this.feature.children?.length;
		},

		score () {
			return this.feature.score;
		},

		children () {
			return this.feature.children;
		},

		renderedChildren () {
			return !this.isCollapsible || this.everOpened ? this.feature.children : [];
		},

		species () {
			return this.feature.species;
		},

		isCollapsible () {
			return this.level > 0 && this.feature.children?.length > 0;
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
	},

	watch: {
		children: {
			handler() {
				this.feature.test();
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
