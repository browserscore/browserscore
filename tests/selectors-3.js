export default {
	id: 'selectors-3',
	title: 'Selectors Level 3',
	link: 'selectors-3',
	mdn: 'Glossary/CSS_Selector',
	status: 'stable',
	firstSnapshot: 2007,
	selectors: {
		'Sibling combinator': {
			link: '#sibling-combinators',
			mdn: 'General_sibling_combinator',
			tests: 'foo ~ bar',
		},
		'::before': {
			link: '#gen-content',
		},
		'::after': {
			link: '#gen-content',
		},
		'::first-letter': {
			link: '#first-letter',
		},
		'::first-line': {
			link: '#first-line',
		},
		'[att^=val]': {
			link: '#attribute-substrings',
			mdn: 'Attribute_selectors',
			tests: ['[att^=val]', '[att^="val"]'],
		},
		'[att*=val]': {
			link: '#attribute-substrings',
			mdn: 'Attribute_selectors',
			tests: ['[att*=val]', '[att*="val"]'],
		},
		'[att$=val]': {
			link: '#attribute-substrings',
			mdn: 'Attribute_selectors',
			tests: ['[att$=val]', '[att$="val"]'],
		},
		Namespaces: {
			link: '#attrnmsp',
			mdn: 'CSS_Namespaces',
			tests: ['*|html', '[*|attr]', '[*|attr=val]', '*|html[*|attr]'],
		},
		':target': {
			link: '#target-pseudo',
		},
		':enabled': {
			link: '#enableddisabled',
		},
		':disabled': {
			link: '#enableddisabled',
		},
		':checked': {
			link: '#checked',
		},
		':indeterminate': {
			link: '#indeterminate',
		},
		':root': {
			link: '#root-pseudo',
		},
		':nth-child()': {
			link: '#nth-child-pseudo',
			tests: [
				':nth-child(even)',
				':nth-child(odd)',
				':nth-child(n)',
				':nth-child(-n)',
				':nth-child(0n)',
				':nth-child(1)',
				':nth-child(-1)',
				':nth-child(0)',
				':nth-child(n+1)',
				':nth-child(3n+1)',
				':nth-child(3n + 1)',
				':nth-child(-n+1)',
				':nth-child(3n-1)',
			],
		},
		':nth-last-child()': {
			link: '#nth-last-child-pseudo',
			tests: [
				':nth-last-child(even)',
				':nth-last-child(odd)',
				':nth-last-child(n)',
				':nth-last-child(-n)',
				':nth-last-child(0n)',
				':nth-last-child(1)',
				':nth-last-child(-1)',
				':nth-last-child(0)',
				':nth-last-child(n+1)',
				':nth-last-child(3n+1)',
				':nth-last-child(3n + 1)',
				':nth-last-child(-n+1)',
				':nth-last-child(3n-1)',
			],
		},
		':nth-of-type()': {
			link: '#nth-of-type-pseudo',
			tests: [
				':nth-of-type(even)',
				':nth-of-type(odd)',
				':nth-of-type(n)',
				':nth-of-type(-n)',
				':nth-of-type(0n)',
				':nth-of-type(1)',
				':nth-of-type(-1)',
				':nth-of-type(0)',
				':nth-of-type(n+1)',
				':nth-of-type(3n+1)',
				':nth-of-type(3n + 1)',
				':nth-of-type(-n+1)',
				':nth-of-type(3n-1)',
			],
		},
		':nth-last-of-type()': {
			link: '#nth-last-of-type-pseudo',
			tests: [
				':nth-last-of-type(even)',
				':nth-last-of-type(odd)',
				':nth-last-of-type(n)',
				':nth-last-of-type(-n)',
				':nth-last-of-type(0n)',
				':nth-last-of-type(1)',
				':nth-last-of-type(-1)',
				':nth-last-of-type(0)',
				':nth-last-of-type(n+1)',
				':nth-last-of-type(3n+1)',
				':nth-last-of-type(3n + 1)',
				':nth-last-of-type(-n+1)',
				':nth-last-of-type(3n-1)',
			],
		},
		':last-child': {
			link: '#last-child-pseudo',
		},
		':only-child': {
			link: '#only-child-pseudo',
		},
		':first-of-type': {
			link: '#first-of-type-pseudo',
		},
		':last-of-type': {
			link: '#last-of-type-pseudo',
		},
		':only-of-type': {
			link: '#only-of-type-pseudo',
		},
		':empty': {
			link: '#empty-pseudo',
		},
		':not()': {
			link: '#negation',
			tests: [':not(*)', ':not(element)', ':not(.class):not(#id):not([attr]):not(:link)'],
		},
	},
};
