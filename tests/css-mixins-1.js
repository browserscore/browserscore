export default {
	id: 'css-mixins-1',
	title: 'CSS Functions and Mixins Module',
	link: 'css-mixins-1',
	status: 'experimental',
	atrules: {
		'@function': {
			link: '#defining-custom-functions',
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
	globals: {
		CSSFunctionRule: {
			link: '#the-function-interface',
			mdnGroup: 'DOM',
			extends: 'CSSGroupingRule',
			members: ['name', 'returnType'],
			methods: ['getParameters'],
		},
		CSSFunctionDeclarations: {
			link: '#the-function-declarations-interface',
			mdnGroup: 'DOM',
			extends: 'CSSRule',
			members: ['style'],
		},
	},
};
