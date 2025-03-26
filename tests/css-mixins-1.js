export default {
	title: 'CSS Functions and Mixins Module',
	links: {
		tr: 'css-mixins-1',
		dev: 'css-mixins-1',
	},
	status: {
		stability: 'experimental',
	},
	'@rules': {
		'@function': {
			links: {
				dev: '#defining-custom-functions',
			},
			tests: [
				'@function --negative (--value) {\n  result: calc(-1 * var(--value));\n}',
				'@function --negative-length (--value) returns <length> {\n  result: calc(-1 * var(--value));\n}',
				'@function --negative-length (--value <length>) returns <length> {\n  result: calc(-1 * var(--value));\n}',
				'@function --negative-number-or-percentage(--value type(<number> | <percentage>)) {\n  result: calc(-1 * var(--value));\n}',
				'@function --circle-area (--r) {\n  result: calc(3.1415 * var(--r2));\n  --r2: calc(var(--r) * var(--r));\n}',
				'@function --multiply (--value) using (--used) {\n  result: calc(var(--used) * var(--value));\n}',
				'@function --multiply-length (--value) using (--used <length>) {\n  result: calc(var(--used) * var(--value));\n}',
				'@function --multiply-length (--value) using (--used <length>: 1em) {\n  result: calc(var(--used) * var(--value));\n}',
				'@function --suitable-font-size() {\n  result: 16px;\n  @media (width > 1000px) {\n    result: 20px;\n  }\n}',
			],
		},
	},
	interfaces: {
		CSSFunctionRule: {
			links: {
				dev: '#cssfunctionrule',
				mdnGroup: 'DOM',
			},
			tests: ['cssRules', 'insertRule', 'deleteRule'],
			required: 'div { }',
		},
	},
};
