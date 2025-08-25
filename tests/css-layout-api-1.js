export default {
	title: 'CSS Layout API Level 1',
	link: 'css-layout-api-1',
	group: 'houdini',
	status: 'experimental',
	properties: {
		display: {
			link: '#layout-api-containers',
			tests: 'layout(foo)',
		},
	},
	interfaces: {
		CSS: {
			link: '#layout-worklet',
			tests: ['layoutWorklet'],
			interface: function() {
				return CSS;
			},
		},
		Worklet: {
			link: '#layout-worklet',
			tests: ['addModule'],
			interface: function() {
				return CSS.layoutWorklet;
			},
		},
	},
};
