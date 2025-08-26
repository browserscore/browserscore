export default {
	title: 'CSS Properties and Values API Level 1',
	link: 'css-properties-values-api-1',
	group: 'houdini',
	status: 'experimental',
	descriptors: {
		'@property --foo/syntax': {
			link: '#the-syntax-descriptor',
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
			link: '#inherits-descriptor',
			required: {
				'*': {
					descriptor: "syntax: '<color>'; initial-value: red",
				},
			},
			tests: ['true', 'false'],
		},
		'@property --foo/initial-value': {
			link: '#initial-value-descriptor',
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
			link: '#at-property-rule',
			tests: "@property --cool-color {\n  syntax: '<color>';\n  inherits: true;\n  initial-value: red;\n}",
		},
	},
	interfaces: {
		CSS: {
			link: '#registering-custom-properties',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['registerProperty'],
			interface: function() {
				return CSS;
			},
		},
		CSSPropertyRule: {
			link: '#the-css-property-rule-interface',
			links: {
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
