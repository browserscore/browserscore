export default {
	title: 'Fullscreen API',
	links: {
		dev: 'fullscreen',
		devtype: 'whatwg',
	},
	status: {
		stability: 'experimental',
	},
	selectors: {
		'::backdrop': {
			links: {
				dev: '#::backdrop-pseudo-element',
			},
			tests: '::backdrop',
		},
		':fullscreen': {
			links: {
				dev: '#:fullscreen-pseudo-class',
			},
			tests: ':fullscreen',
		},
	},
};
