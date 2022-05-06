export default {
	title: 'CSS 2 Selectors',
	links: {
		tr: 'CSS22/selector.html',
		dev: 'css2/',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 1998,
		'last-snapshot': 1998,
	},
	selectors: {
		'Universal selector': {
			links: {
				tr: '#universal-selector',
				dev: '#universal-selector',
			},
			tests: '*',
		},
		'Type selector': {
			links: {
				tr: '#type-selectors',
				dev: '#type-selectors',
			},
			tests: 'h1',
		},
		'Descendant selector': {
			links: {
				tr: '#descendant-selectors',
				dev: '#descendant-selectors',
			},
			tests: 'div p',
		},
		'Child selector': {
			links: {
				tr: '#child-selectors',
				dev: '#child-selectors',
			},
			tests: 'div > p',
		},
		'Adjacent sibling selector': {
			links: {
				tr: '#adjacent-selectors',
				dev: '#adjacent-selectors',
			},
			tests: 'div + p',
		},
		'Attribute selectors': {
			links: {
				tr: '#attribute-selectors',
				dev: '#attribute-selectors',
			},
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
			links: {
				tr: '#class-html',
				dev: '#class-html',
			},
			tests: ['.class'],
		},
		'ID selector': {
			links: {
				tr: '#id-selectors',
				dev: '#id-selectors',
			},
			tests: '#id',
		},
		':first-child': {
			links: {
				tr: '#first-child',
				dev: '#first-child',
			},
			tests: ':first-child',
		},
		':link': {
			links: {
				tr: '#link-pseudo-classes',
				dev: '#link-pseudo-classes',
			},
			tests: ':link',
		},
		':visited': {
			links: {
				tr: '#link-pseudo-classes',
				dev: '#link-pseudo-classes',
			},
			tests: ':visited',
		},
		':hover': {
			links: {
				tr: '#dynamic-pseudo-classes',
				dev: '#dynamic-pseudo-classes',
			},
			tests: ':hover',
		},
		':active': {
			links: {
				tr: '#dynamic-pseudo-classes',
				dev: '#dynamic-pseudo-classes',
			},
			tests: ':active',
		},
		':focus': {
			links: {
				tr: '#dynamic-pseudo-classes',
				dev: '#dynamic-pseudo-classes',
			},
			tests: ':focus',
		},
		':lang()': {
			links: {
				tr: '#lang',
				dev: '#lang',
			},
			tests: [':lang(en)', ':lang(en-US)'],
		},
		':first-line': {
			links: {
				tr: '#first-line-pseudo',
				dev: '#first-line-pseudo',
			},
			tests: ':first-line',
		},
		':first-letter': {
			links: {
				tr: '#first-letter',
				dev: '#first-letter',
			},
			tests: ':first-letter',
		},
	},
};
