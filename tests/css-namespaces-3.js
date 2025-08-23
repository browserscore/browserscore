export default {
	title: 'CSS Namespaces Module Level 3',
	link: 'css-namespaces-3',
	status: {
		stability: 'stable',
		'first-snapshot': 2007,
	},
	'@rules': {
		'@namespace': {
			link: '#declaration',
			tests: [
				"@namespace \"http://www.w3.org/1999/xhtml\";",
				"@namespace svg \"http://www.w3.org/2000/svg\";",
			],
		},
	},
};
