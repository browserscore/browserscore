export default {
	title: 'CSS Multi-column Layout Module Level 2',
	links: {
		tr: 'css-multicol-2',
		dev: 'css-multicol-2',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'column-span': {
			links: {
				tr: '#column-span',
				dev: '#column-span',
			},
			tests: ['2', 'auto'],
		},
	},
	selectors: {
		'::column': {
			links: {
				tr: '#column-pseudo',
				dev: '#column-pseudo',
			},
			tests: [
				// Chrome bug: https://crbug.com/365680822
				'::column',
				'::column::scroll-marker',

				// Chrome bug: https://crbug.com/382090952
				'::before::column',
				'::after::column',
				'::before::column::scroll-marker',
				'::after::column::scroll-marker',
			],
		},
	}
};
