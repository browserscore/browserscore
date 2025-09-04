export default {
	id: 'css-nesting-1',
	title: 'CSS Nesting Module',
	link: 'css-nesting-1',
	status: 'experimental',
	selectors: {
		'&': {
			link: '#nest-selector',
		}
	},
	globals: {
		CSSStyleRule: {
			link: '#cssom-style',
			mdnGroup: 'DOM',
			members: ['cssRules'],
			methods: ['insertRule', 'deleteRule'],
		},
		CSSNestedDeclarations: {
			link: '#cssnesteddeclarations',
			extends: 'CSSRule',
			members: ['style'],
		},
	},
};
