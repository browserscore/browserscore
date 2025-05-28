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
		'scroll-target-group': {
			links: {
				tr: '#scroll-target-group',
				dev: '#scroll-target-group',
			},
			tests: [
				'none',
				'auto',
			],
		},
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
		'::scroll-button()': {
			links: {
				tr: '#scroll-buttons',
				dev: '#scroll-buttons',
			},
			tests: [
				'::scroll-button(*)',
				'::scroll-button(up)',
				'::scroll-button(down)',
				'::scroll-button(left)',
				'::scroll-button(right)',
				'::scroll-button(block-start)',
				'::scroll-button(block-end)',
				'::scroll-button(inline-start)',
				'::scroll-button(inline-end)',
				'::scroll-button(prev)',
				'::scroll-button(next)',
			],
		},
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
