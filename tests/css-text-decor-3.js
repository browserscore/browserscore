export default {
	title: 'CSS Text Decoration Module Level 3',
	link: 'css-text-decor-3',
	status: {
		stability: 'stable',
	},
	properties: {
		'text-decoration': {
			link: '#text-decoration-property',
			tests: 'underline dotted green',
		},
		'text-decoration-line': {
			link: '#text-decoration-line-property',
			tests: ['none', 'underline', 'overline', 'line-through', 'underline overline'],
		},
		'text-decoration-color': {
			link: '#text-decoration-color-property',
			tests: 'white',
		},
		'text-decoration-style': {
			link: '#text-decoration-style-property',
			tests: ['solid', 'double', 'dotted', 'dashed', 'wavy'],
		},
		'text-underline-position': {
			link: '#text-underline-position-property',
			tests: ['auto', 'under', 'left', 'right', 'under left', 'under right'],
		},
		'text-emphasis-style': {
			link: '#text-emphasis-style-property',
			tests: [
				'none',
				'filled',
				'open',
				'dot',
				'circle',
				'double-circle',
				'triangle',
				'sesame',
				'open dot',
				"'foo'",
			],
		},
		'text-emphasis-color': {
			link: '#text-emphasis-color-property',
			tests: 'green',
		},
		'text-emphasis': {
			link: '#text-emphasis-property',
			tests: 'open dot green',
		},
		'text-emphasis-position': {
			link: '#text-emphasis-position-property',
			tests: ['over left', 'over right', 'under left', 'under right'],
		},
		'text-shadow': {
			link: '#text-shadow-property',
			tests: ['none', '1px 1px', '0 0 black', '1px 2px 3px black'],
		},
	},
};
