export default {
	title: 'CSS Easing Functions Level 1',
	link: 'css-easing-1',
	status: {
		stability: 'stable',
		'first-snapshot': 2020,
	},
	properties: {
		'transition-timing-function': {
			link: '#easing-functions',
			tests: ['steps(2, jump-start)', 'steps(2, jump-end)', 'steps(1, jump-both)', 'steps(2, jump-none)'],
		},
	},
};
