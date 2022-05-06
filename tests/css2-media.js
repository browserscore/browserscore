export default {
	title: 'CSS 2 Media types',
	links: {
		tr: 'CSS22/media.html',
		dev: 'css2/',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 1998,
		'last-snapshot': 1998,
	},
	'@rules': {
		'@media': {
			links: {
				tr: '#at-media-rule',
				dev: '#at-media-rule',
			},
			tests: [
				'@media all {\n  p {\n    color: green;\n  }\n}',
				'@media print {\n  p {\n    color: green;\n  }\n}',
				'@media screen {\n  p {\n    color: green;\n  }\n}',
				'@media print, screen {\n  p {\n    color: green;\n  }\n}',
			],
		},
	},
};
