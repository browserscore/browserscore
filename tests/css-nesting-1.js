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
	interfaces: {
		CSSStyleRule: {
			link: '#cssom-style',
			mdnGroup: 'DOM',
			tests: ['cssRules', 'insertRule', 'deleteRule'],
		},
		CSSNestedDeclarations: {
			link: '#the-cssnestrule',
		}
	},
};
