export default {
	id: 'css-cascade-6',
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
	globals: {
		CSSScopeRule: {
			link: '#the-cssscoperule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSGroupingRule',
			members: ['start', 'end'],
		}
	}
}
