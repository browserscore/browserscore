export default {
	title: 'CSS Cascading and Inheritance Level 3',
	link: 'css-cascade-3',
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
		'last-snapshot': 2018,
	},
	values: {
		properties: ['color', 'font-weight', 'background-image', 'width'],
		unset: {
			link: '#inherit-initial',
			tests: 'unset',
		},
	},
	properties: {
		all: {
			link: '#all-shorthand',
			tests: ['initial', 'unset'],
		},
	},
};
