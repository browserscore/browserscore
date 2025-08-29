export default {
	title: 'CSS Functions and Mixins Module',
	link: 'css-mixins-1',
	status: 'experimental',
	atrules: {
		'@function': {
			links: {
				dev: '#defining-custom-functions',
			},
			preludeRequired: true,
			contents: 'result: var(--a, 1);',
			preludes: [
				'--foo()',
				'--foo(--a)',
				'--foo(--a) returns <length>',
				'--foo(--a <length>)',
				'--foo(--a type(<number>))',
				'--foo(--a type(<number> | <percentage>))',
			],
			// TODO declarations and rules inside @function
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
