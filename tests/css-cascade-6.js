export default {
	title: 'CSS Cascading and Inheritance Level 6',
	link: 'css-cascade-6',
	status: 'experimental',
	atrules: {
		'@scope': {
			link: '#scope-atrule',
			preludes: [
				'(.foo)',
				'(.foo) to (.bar)',
			],
		},
	},
	interfaces: {
		CSSScopeRule: {
			link: '#the-cssscoperule-interface',
			mdnGroup: 'DOM',
			tests: ['start', 'end', 'cssRules', 'insertRule', 'deleteRule'],
		}
	}
}
