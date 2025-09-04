export default {
	id: 'css-layout-api-1',
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
			properties: {
				layoutWorklet: {
					instanceof: 'Worklet',
				}
			},
		},
	},
};
