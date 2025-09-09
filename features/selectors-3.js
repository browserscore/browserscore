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
			args: [
				'even',
				'odd',
				'n',
				'-n',
				'0n',
				'1',
				'-1',
				'0',
				'n+1',
				'3n+1',
				'3n + 1',
				'-n+1',
				'3n-1',
			],
		},
		':nth-last-child()': {
			link: '#nth-last-child-pseudo',
			args: [
				'even',
				'odd',
				'n',
				'-n',
				'0n',
				'1',
				'-1',
				'0',
				'n+1',
				'3n+1',
				'3n + 1',
				'-n+1',
				'3n-1',
			],
		},
		':nth-of-type()': {
			link: '#nth-of-type-pseudo',
			args: [
				'even',
				'odd',
				'n',
				'-n',
				'0n',
				'1',
				'-1',
				'0',
				'n+1',
				'3n+1',
				'3n + 1',
				'-n+1',
				'3n-1',
			],
		},
		':nth-last-of-type()': {
			link: '#nth-last-of-type-pseudo',
			args: [
				'even',
				'odd',
				'n',
				'-n',
				'0n',
				'1',
				'-1',
				'0',
				'n+1',
				'3n+1',
				'3n + 1',
				'-n+1',
				'3n-1',
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
