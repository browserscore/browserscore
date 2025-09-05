export default {
	id: 'css-variables-1',
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
	values: {
		'var(--*)': {
			link: '#using-variables',
			mdn: 'var',
			properties: ['width'],
			tests: [
				'var(--foo)',
				'var(--foo, fallback)'
			],
		},
	},
};
