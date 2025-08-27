import { IS_DEV, passclass } from '../../../util.js';

export default {
	props: {
		feature: {
			type: Object,
			required: true,
		},
	},

	mounted () {
		if (IS_DEV) {
			// Expose feature object on container for debugging
			this.$refs.container.feature = this.feature;
		}
	},

	template: "#feature-component-template",

	methods: {
		passclass,
	},
};
