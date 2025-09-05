export default {
	id: 'css-easing-1',
	title: 'CSS Easing Functions Level 1',
	link: 'css-easing-1',
	status: 'stable',
	firstSnapshot: 2020,
	properties: {
		'transition-timing-function': {
			link: '#easing-functions',
			tests: ['steps(2, jump-start)', 'steps(2, jump-end)', 'steps(1, jump-both)', 'steps(2, jump-none)'],
		},
	},
};
