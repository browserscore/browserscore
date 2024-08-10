export default {
	title: 'CSS Overflow Module Level 5',
	links: {
		dev: 'css-overflow-5',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'scroll-marker-group': {
			links: {
				dev: '#scroll-marker-group',
			},
			tests: [
				'none',
				'before',
				'after',
			],
		},
	},
	selectors: {
		'::scroll-marker': {
			links: {
				dev: '#scroll-marker-pseudo',
			},
			tests: ['::scroll-marker'],
		},
		'::scroll-marker-group': {
			links: {
				dev: '#scroll-marker-group-pseudo',
			},
			tests: ['::scroll-marker-group'],
		},
	},
};
