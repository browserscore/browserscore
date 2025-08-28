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
			tests: [
				'@layer framework {\n  h1, h2 { color: maroon; background: white; }\n}',
				'@layer framework {\n  h1, h2 { color: maroon; background: white; }\n  \n  @media (prefers-color-scheme: dark) {\n    h1, h2 { color: red; background: black; }\n  }\n}',
				'@layer framework;',
				'@layer default, framework;',
			],
		},
	},
	interfaces: {
		/* Doesn't currently work because style sheet is only available once imported
		CSSImportRule: {
			link: '#extensions-to-cssimportrule-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['layerName'],
			required: '@import url("foo.css") layer(mylayer);',
		},
		*/
		CSSLayerBlockRule: {
			link: '#the-csslayerblockrule-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['name', 'cssRules', 'insertRule', 'deleteRule'],
			required: '@layer mylayer { }',
		},
		CSSLayerStatementRule: {
			link: '#the-csslayerstatementrule-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['nameList', 'cssText', 'parentRule', 'parentStyleSheet'],
			required: '@layer firstLayer, secondLayer;',
		},
	},
};
