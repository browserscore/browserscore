export default {
	id: 'css-multicol-2',
	title: 'CSS Multi-column Layout Module Level 2',
	link: 'css-multicol-2',
	status: 'experimental',
	properties: {
		'column-height': {
			link: '#cc',
			tests: ['2', 'auto'],
		},
		'column-wrap': {
			link: '#cwr',
			tests: ['auto', 'nowrap', 'wrap'],
		},
		'column-span': {
			link: '#column-span',
			tests: ['2', 'auto'],
		},
	},
	selectors: {
		'::column': {
			link: '#column-pseudo',
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
