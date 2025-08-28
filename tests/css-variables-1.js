export default {
	title: 'CSS Custom Properties for Cascading Variables Module Level 1',
	link: 'css-variables-1',
	status: 'stable',
	firstSnapshot: 2018,
	properties: {
		'--*': {
			link: '#defining-variables',
			mdn: '--*',
		},
	},
	declaration: {
		'var(--*)': {
			link: '#using-variables',
			mdn: 'var',
			tests: [
				'width: var(--foo)',
				'width: var(--foo, fallback)'
			],
		},
	},
};
