export default {
	id: 'css-viewport-1',
	title: 'CSS Viewport Module Level 1',
	links: {
		tr: 'css-viewport-1',
		dev: 'css-viewport',
	},
	status: 'experimental',
	properties: {
		'zoom': {
			link: '#zoom-property',
			tests: ['0', '1', '1.5', '110%'],
		},
	},
	interfaces: {
		Viewport: {
			links: {
				dev: '#the-viewport-interface',
				mdnGroup: 'DOM',
			},
			tests: ['segments'],
			interface: function() {
				return window.viewport;
			},
		},
	},
};
