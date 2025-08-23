export default {
	props: {
		params: {
			type: String,
			required: true,
		},
	},

	template: `<div id="carbonads-wrapper" ref="host"></div>`,

	mounted() {
		if (this.initialized) {
			return;
		}

		this.initialized = true;

		let script = document.createElement('script');
		script.async = true;
		script.id = '_carbonads_js';
		script.src = `https://cdn.carbonads.com/carbon.js?${this.params}`;
		this.$refs.host.appendChild(script);
	}
};
