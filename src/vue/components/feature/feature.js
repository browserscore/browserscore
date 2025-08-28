import { IS_DEV, passclass } from '../../../util.js';

export default {
	props: {
		feature: {
			type: Object,
			required: true,
		},
	},

	data () {
		return {
			open: false,
			everOpened: false,
			renderedChildren: []
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

	methods: {
		passclass,

		handleToggle (event) {
			let open = event.target.open;
			this.open = open;

			if (open && !this.everOpened) {
				this.everOpened = true;
			}

		},
	},

	watch: {
		everOpened: {
			handler (newVal) {
				if (newVal) {
					this.renderedChildren = this.feature.children;
				}
			},
		},
	}
};
