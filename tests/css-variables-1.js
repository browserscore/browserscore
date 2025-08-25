export default {
	title: 'CSS Custom Properties for Cascading Variables Module Level 1',
	link: 'css-variables-1',
	status: 'stable',
	firstSnapshot: 2018,
	declaration: {
		'--*': {
			link: '#defining-variables',
			tests: ['--foo: 2px'],
		},
		'var(--*)': {
			link: '#using-variables',
			mdn: '--*',
			tests: [
				'width: var(--foo)',
				'width: var(--FOO)',
				'width: var(--foo, 4px)',
				'color: rgba(255, 255, 255, var(--foo, .2) )',
			],
		},
	},
};
