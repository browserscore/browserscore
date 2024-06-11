export default {
	title: 'CSS Overflow Module Level 5',
	links: {
		dev: 'css-overflow-5',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		'continue': {
			links: {
				dev: '#channelling-overflow',
			},
			properties: ['continue'],
			tests: [
				'overflow',
				'paginate',
				'fragments',
			],
		},
	},
	selectors: {
		'::nth-fragment()': {
			links: {
				dev: '#fragment-pseudo-element',
			},
			tests: [
				':nth-fragment(even)',
				':nth-fragment(odd)',
				':nth-fragment(n)',
				':nth-fragment(-n)',
				':nth-fragment(0n)',
				':nth-fragment(1)',
				':nth-fragment(-1)',
				':nth-fragment(0)',
				':nth-fragment(n+1)',
				':nth-fragment(3n+1)',
				':nth-fragment(3n + 1)',
				':nth-fragment(-n+1)',
				':nth-fragment(3n-1)',
			],
		},
	},
};
