export default {
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
		/* Doesn't currently work because style sheet is only available once imported
		CSSImportRule: {
			link: '#extensions-to-cssimportrule-interface',
			mdnGroup: 'DOM',
			tests: ['layerName'],
			required: '@import url("foo.css") layer(mylayer);',
		},
		*/
		CSSLayerBlockRule: {
			link: '#the-csslayerblockrule-interface',
			mdnGroup: 'DOM',
			tests: ['name', 'cssRules', 'insertRule', 'deleteRule'],
			required: '@layer mylayer { }',
		},
		CSSLayerStatementRule: {
			link: '#the-csslayerstatementrule-interface',
			mdnGroup: 'DOM',
			tests: ['nameList', 'cssText', 'parentRule', 'parentStyleSheet'],
			required: '@layer firstLayer, secondLayer;',
		},
	},
};
