export default {
	title: 'CSS Properties and Values API Level 1',
	links: {
		tr: 'css-properties-values-api-1',
		dev: 'css-properties-values-api-1',
		devtype: 'houdini',
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
				"'x | y'": {
					descriptor: "inherits: false; initial-value: x",
				},
				"'<length>'": {
					descriptor: "inherits: false; initial-value: 100px",
				},
				"'<color>'": {
					descriptor: "inherits: false; initial-value: red",
				},
			},
			tests: [
				"'x | y'",
				"'<length>'",
				"'<color>'",
			],
		},
		'@property --foo/inherits': {
			links: {
				tr: '#inherits-descriptor',
				dev: '#inherits-descriptor',
			},
			required: {
				'*': {
					descriptor: "syntax: '<color>'; initial-value: red",
				},
			},
			tests: ['true', 'false'],
		},
		'@property --foo/initial-value': {
			links: {
				tr: '#initial-value-descriptor',
				dev: '#initial-value-descriptor',
			},
			required: {
				'*': {
					descriptor: "syntax: '<color>'; inherits: false",
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
			tests: "@property --cool-color {\n  syntax: '<color>';\n  inherits: true;\n  initial-value: red;\n}",
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
