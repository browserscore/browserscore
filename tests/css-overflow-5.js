export default {
	title: 'CSS Overflow Module Level 5',
	links: {
		tr: 'css-overflow-5',
		dev: 'css-overflow-5',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'scroll-marker-group': {
			links: {
				tr: '#scroll-marker-group-property',
				dev: '#scroll-marker-group-property',
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
				tr: '#scroll-marker-pseudo',
				dev: '#scroll-marker-pseudo',
			},
			tests: ['::scroll-marker'],
		},
		'::scroll-marker-group': {
			links: {
				tr: '#scroll-marker-group-pseudo',
				dev: '#scroll-marker-group-pseudo',
			},
			tests: ['::scroll-marker-group'],
		},
		':target-current': {
			links: {
				tr: '#active-scroll-marker',
				dev: '#active-scroll-marker',
			},
			tests: [':target-current'],
		},
	},
};
