export default {
	title: 'CSS Nesting Module',
	link: 'css-nesting-1',
	status: {
		stability: 'experimental',
	},
	interfaces: {
		CSSStyleRule: {
			link: '#cssom-style',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['cssRules', 'insertRule', 'deleteRule'],
			required: 'div { }',
		},
	},
};
