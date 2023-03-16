export default {
	title: 'CSS Layout API Level 1',
	links: {
		tr: 'css-layout-api-1',
		dev: 'css-layout-api-1',
		devtype: 'houdini',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		display: {
			links: {
				tr: '#layout-api-containers',
				dev: '#layout-api-containers',
			},
			tests: 'layout(foo)',
		},
	},
	interfaces: {
		CSS: {
			links: {
				tr: '#layout-worklet',
				dev: '#layout-worklet',
			},
			tests: ['layoutWorklet'],
			interface: function() {
				return CSS;
			},
		},
		Worklet: {
			links: {
				tr: '#layout-worklet',
				dev: '#layout-worklet',
			},
			tests: ['addModule'],
			interface: function() {
				return CSS.layoutWorklet;
			},
		},
	},
};
