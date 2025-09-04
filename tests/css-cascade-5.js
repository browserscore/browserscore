export default {
	id: 'css-cascade-5',
	title: 'CSS Cascading and Inheritance Level 5',
	link: 'css-cascade-5',
	status: 'experimental',
	values: {
		properties: ['color', 'font-weight', 'background-image', 'all'],
		'revert-layer': {
			link: '#revert-layer',
			tests: 'revert-layer',
		},
	},
	properties: {
		all: {
			link: '#revert-layer',
			tests: 'revert-layer',
		},
	},
	atrules: {
		'@layer': {
			link: '#at-layer',
			prelude: 'foo',
			children: [
				{/* block */},
				{prelude: 'foo, bar', contents: false},

			]
		},
	},
	interfaces: {
		CSSImportRule: {
			link: '#extensions-to-cssimportrule-interface',
			mdnGroup: 'DOM',
			members: ['layerName'],
		},

		CSSLayerBlockRule: {
			link: '#the-csslayerblockrule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSGroupingRule',
			members: ['name'],
		},

		CSSLayerStatementRule: {
			link: '#the-csslayerstatementrule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSRule',
			members: ['nameList'],
		},
	},
};
