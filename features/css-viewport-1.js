export default {
	id: 'css-viewport-1',
	title: 'CSS Viewport Module Level 1',
	link: 'css-viewport-1',
	status: 'experimental',
	properties: {
		'zoom': {
			link: '#zoom-property',
			tests: ['0', '1', '1.5', '110%'],
		},
	},
	globals: {
		Viewport: {
			link: '#the-viewport-interface',
			mdnGroup: 'DOM',
			members: ['segments'],
		},
	},
};
