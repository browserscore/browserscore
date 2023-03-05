export default {
	title: 'CSS Nesting Module',
	links: {
		tr: 'css-nesting-1',
		dev: 'css-nesting-1',
	},
	status: {
		stability: 'experimental',
	},
	interfaces: {
		CSSStyleRule: {
			links: {
				tr: '#cssom-style',
				dev: '#cssom-style',
				mdnGroup: 'DOM',
			},
			tests: ['cssRules', 'insertRule', 'deleteRule'],
			required: 'div { }',
		},
	},
};
