export default {
	title: 'CSS Cascading and Inheritance Level 6',
	link: 'css-cascade-6',
	status: 'experimental',
	atrules: {
		'@scope': {
			link: '#scope-atrule',
			tests: [
				'@scope (#hero) {\n  img {\n    border-radius: 50%;\n  }\n}',
				'@scope ([data-scope="main-component"]) to ([data-scope]) {\n  p {\n    color: red;\n  }\n\n  section {\n    background-color: snow;\n  }\n}',
			],
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
