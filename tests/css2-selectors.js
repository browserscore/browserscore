export default {
	title: 'CSS 2 Selectors',
	links: {
		tr: 'CSS22/selector.html',
		dev: 'css2/',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2.2,
		'last-snapshot': 2.2,
	},
	selectors: {
		'Universal selector': {
			link: '#universal-selector',
			tests: '*',
		},
		'Type selector': {
			link: '#type-selectors',
			tests: 'h1',
		},
		'Descendant selector': {
			link: '#descendant-selectors',
			tests: 'div p',
		},
		'Child selector': {
			link: '#child-selectors',
			tests: 'div > p',
		},
		'Adjacent sibling selector': {
			link: '#adjacent-selectors',
			tests: 'div + p',
		},
		'Attribute selectors': {
			link: '#attribute-selectors',
			tests: [
				'[title]',
				'[title=example]',
				'[title="example"]',
				'[rel~=copyright]',
				'[rel~="copyright"]',
				'[lang|=en]',
				'[lang|="en"]',
			],
		},
		'Class selector': {
			link: '#class-html',
			tests: ['.class'],
		},
		'ID selector': {
			link: '#id-selectors',
			tests: '#id',
		},
		':first-child': {
			link: '#first-child',
			tests: ':first-child',
		},
		':link': {
			link: '#link-pseudo-classes',
			tests: ':link',
		},
		':visited': {
			link: '#link-pseudo-classes',
			tests: ':visited',
		},
		':hover': {
			link: '#dynamic-pseudo-classes',
			tests: ':hover',
		},
		':active': {
			link: '#dynamic-pseudo-classes',
			tests: ':active',
		},
		':focus': {
			link: '#dynamic-pseudo-classes',
			tests: ':focus',
		},
		':lang()': {
			link: '#lang',
			tests: [':lang(en)', ':lang(en-US)'],
		},
		':first-line': {
			link: '#first-line-pseudo',
			tests: ':first-line',
		},
		':first-letter': {
			link: '#first-letter',
			tests: ':first-letter',
		},
	},
};
