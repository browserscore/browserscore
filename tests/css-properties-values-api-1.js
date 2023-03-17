export default {
	title: 'CSS Properties and Values API Level 1',
	links: {
		tr: 'css-properties-values-api-1',
		dev: 'css-properties-values-api-1',
	},
	status: {
		stability: 'experimental',
	},
	descriptors: {
		'@property --foo/syntax': {
			links: {
				tr: '#the-syntax-descriptor',
				dev: '#the-syntax-descriptor',
			},
			required: {
				'*': {
					descriptor: 'inherits: false',
				},
			},
			tests: [
				"'x | y'",
				"'<length>'",
			],
		},
		'@property --foo/inherits': {
			links: {
				tr: '#the-inherits-descriptor',
				dev: '#the-inherits-descriptor',
			},
			required: {
				'*': {
					descriptor: "syntax: '<color>'",
				},
			},
			tests: ['true', 'false'],
		},
		'@property --foo/initial-value': {
			links: {
				tr: '#the-initial-value-descriptor',
				dev: '#the-initial-value-descriptor',
			},
			required: {
				'*': {
					descriptor: "syntax: '<color>'; inherits: true",
				},
			},
			tests: ['blue', '#00f', 'rgb(0, 0, 255)'],
		},
	},
	'@rules': {
		'@property': {
			links: {
				tr: '#at-property-rule',
				dev: '#at-property-rule',
			},
			tests: "@property --cool-color {\n  syntax: '<color>';\n  inherits: true;\n}",
		},
	},
	interfaces: {
		CSS: {
			links: {
				tr: '#registering-custom-properties',
				dev: '#registering-custom-properties',
				mdnGroup: 'DOM',
			},
			tests: ['registerProperty'],
			interface: function() {
				return CSS;
			},
		},
		CSSPropertyRule: {
			links: {
				tr: '#the-css-property-rule-interface',
				dev: '#the-css-property-rule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['name', 'syntax', 'inherits', 'initialValue'],
			required: "@property --foo { syntax: '<color>'; inherits: true; initial-value: blue; }",
			interface: function(style) {
				return style.sheet.cssRules[0];
			},
		},
	},
};
