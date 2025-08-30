/**
 * Like Vue’s <component> but allows *not* rendering anything if is is falsy
 */
export default {
	props: {
		is: {
			type: [String, Boolean],
		},
	},

	inheritAttrs: false,

	template: `
	<component :is="is" v-if="is" v-bind="$attrs">
		<slot></slot>
	</component>
	<slot v-else></slot>
	`,
};
