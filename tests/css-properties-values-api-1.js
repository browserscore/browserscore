export default {
	id: 'css-properties-values-api-1',
	title: 'CSS Properties and Values API Level 1',
	link: 'css-properties-values-api-1',
	group: 'houdini',
	status: 'experimental',
	xdescriptors: {
		'@property --foo/syntax': {
			link: '#the-syntax-descriptor',
			required: {
				"'*'": {
					descriptor: "inherits: false; initial-value: foo",
				},
				"'x'": {
					descriptor: "inherits: false; initial-value: x",
				},
				"'<length>'": {
					descriptor: "inherits: false; initial-value: 100px",
				},
				"'<number>'": {
					descriptor: "inherits: false; initial-value: 1.23",
				},
				"'<percentage>'": {
					descriptor: "inherits: false; initial-value: 50%",
				},
				"'<length-percentage>'": {
					descriptor: "inherits: false; initial-value: calc(50% + 10px)",
				},
				"'<string>'": {
					descriptor: "inherits: false; initial-value: 'foo'",
				},
				"'<color>'": {
					descriptor: "inherits: false; initial-value: red",
				},
				"'<image>'": {
					descriptor: "inherits: false; initial-value: linear-gradient(red, blue)",
				},
				"'<url>'": {
					descriptor: "inherits: false; initial-value: url('foo.png')",
				},
				"'<integer>'": {
					descriptor: "inherits: false; initial-value: 1",
				},
				"'<angle>'": {
					descriptor: "inherits: false; initial-value: 90deg",
				},
				"'<time>'": {
					descriptor: "inherits: false; initial-value: 1s",
				},
				"'<resolution>'": {
					descriptor: "inherits: false; initial-value: 300dpi",
				},
				"'<transform-function>'": {
					descriptor: "inherits: false; initial-value: rotate(90deg)",
				},
				"'<custom-ident>'": {
					descriptor: "inherits: false; initial-value: foo",
				},
				"'<transform-list>'": {
					descriptor: "inherits: false; initial-value: rotate(90deg) translate(10px, 20px)",
				},
				"'<length>+'": {
					descriptor: "inherits: false; initial-value: 100px 50px",
				},
				"'<length>#'": {
					descriptor: "inherits: false; initial-value: 100px, 50px",
				},
				"'x | y'": {
					descriptor: "inherits: false; initial-value: y",
				},
				"'<length> | <color>+ | foo'": {
					descriptor: "inherits: false; initial-value: red #00f",
				},
			},
			tests: [
				"'*'",
				"'x'",
				"'<length>'",
				"'<number>'",
				"'<percentage>'",
				"'<length-percentage>'",
				"'<string>'",
				"'<color>'",
				"'<image>'",
				"'<url>'",
				"'<integer>'",
				"'<angle>'",
				"'<time>'",
				"'<resolution>'",
				"'<transform-function>'",
				"'<custom-ident>'",
				"'<transform-list>'",
				"'<length>+'",
				"'<length>#'",
				"'x | y'",
				"'<length> | <color>+ | foo'",
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
	atrules: {
		'@property': {
			link: '#at-property-rule',
			prelude: '--foo',
			preludeRequired: true,
			contents: 'syntax: "*"; inherits: true;'
		},
	},
	interfaces: {
		CSS: {
			link: '#registering-custom-properties',
			mdnGroup: 'DOM',
			tests: ['registerProperty'],
			interface: function() {
				return CSS;
			},
		},
		CSSPropertyRule: {
			link: '#the-css-property-rule-interface',
			mdnGroup: 'DOM',
			tests: ['name', 'syntax', 'inherits', 'initialValue'],
		},
	},
};
