export default {
	title: 'CSS Viewport Module Level 1',
	links: {
		tr: 'css-viewport-1',
		dev: 'css-viewport',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'zoom': {
			links: {
				tr: '#zoom-property',
				dev: '#zoom-property',
			},
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
