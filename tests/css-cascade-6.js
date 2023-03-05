export default {
	title: 'CSS Cascading and Inheritance Level 6',
	links: {
		tr: 'css-cascade-6',
		dev: 'css-cascade-6',
	},
	status: {
		stability: 'experimental',
	},
	'@rules': {
		'@scope': {
			links: {
				tr: '#scope-atrule',
				dev: '#scope-atrule',
			},
			tests: [
				'@scope (#hero) {\n  img {\n    border-radius: 50%;\n  }\n}',
				'@scope ([data-scope="main-component"]) to ([data-scope]) {\n  p {\n    color: red;\n  }\n\n  section {\n    background-color: snow;\n  }\n}',
			],
		},
	},
	selectors: {
		'Scoped Descendant Combinator': {
			links: {
				tr: '#scope-combinator',
				dev: '#scope-combinator',
			},
			tests: 'foo >> bar',
		},
	},
	interfaces: {
		CSSScopeRule: {
			links: {
				dev: '#the-cssscoperule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['start', 'end', 'cssRules', 'insertRule', 'deleteRule'],
			required: '@scope (foo) to (bar) {}',
		}
	}
}