export default {
	title: 'CSS Cascading and Inheritance Level 5',
	links: {
		tr: 'css-cascade-5',
		dev: 'css-cascade-5',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['color', 'font-weight', 'background-image', 'all'],
		'revert-layer': {
			links: {
				tr: '#revert-layer',
				dev: '#revert-layer',
			},
			tests: 'revert-layer',
		},
	},
	properties: {
		all: {
			links: {
				tr: '#revert-layer',
				dev: '#revert-layer',
			},
			tests: 'revert-layer',
		},
	},
	'@rules': {
		'@layer': {
			links: {
				tr: '#at-layer',
				dev: '#at-layer',
			},
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
			links: {
				tr: '#extensions-to-cssimportrule-interface',
				dev: '#extensions-to-cssimportrule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['layerName'],
			required: '@import url("foo.css") layer(mylayer);',
		},
		*/
		CSSLayerBlockRule: {
			links: {
				tr: '#the-csslayerblockrule-interface',
				dev: '#the-csslayerblockrule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['name', 'cssRules', 'insertRule', 'deleteRule'],
			required: '@layer mylayer { }',
		},
		CSSLayerStatementRule: {
			links: {
				tr: '#the-csslayerstatementrule-interface',
				dev: '#the-csslayerstatementrule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['nameList', 'cssText', 'parentRule', 'parentStyleSheet'],
			required: '@layer firstLayer, secondLayer;',
		},
	},
};
