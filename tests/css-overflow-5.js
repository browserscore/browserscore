export default {
	title: 'CSS Overflow Module Level 5',
	link: 'css-overflow-5',
	status: {
		stability: 'experimental',
	},
	properties: {
		'scroll-target-group': {
			link: '#scroll-target-group',
			tests: [
				'none',
				'auto',
			],
		},
		'scroll-marker-group': {
			link: '#scroll-marker-group-property',
			tests: [
				'none',
				'before',
				'after',
			],
		},
	},
	selectors: {
		'::scroll-button()': {
			link: '#scroll-buttons',
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
			link: '#scroll-marker-pseudo',
			tests: ['::scroll-marker'],
		},
		'::scroll-marker-group': {
			link: '#scroll-marker-group-pseudo',
			tests: ['::scroll-marker-group'],
		},
		':target-current': {
			link: '#active-scroll-marker',
			tests: [':target-current'],
		},
	},
};
