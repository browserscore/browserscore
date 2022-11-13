export default {
	title: 'CSS Namespaces Module Level 3',
	links: {
		tr: 'css-namespaces-3',
		dev: 'css-namespaces-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2007,
	},
	'@rules': {
		'@namespace': {
			links: {
				tr: '#declaration',
				dev: '#declaration',
			},
			tests: [
				"@namespace \"http://www.w3.org/1999/xhtml\";",
				"@namespace svg \"http://www.w3.org/2000/svg\";",
			],
		},
	},
};
