export default {
	title: 'CSS Conditional Rules Module Level 3',
	links: {
		tr: 'css3-conditional',
		dev: 'css-conditional-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
	},
	'@rules': {
		'@supports': {
			links: {
				tr: '#at-supports',
				dev: '#at-supports',
			},
			tests: [
				'@supports (color: green) {}',
				'@supports not (foo: bar) {}',
				'@supports (color: green) or (color: red) {}',
				'@supports (color: green) and (color: red) {}',
				'@supports (color: green) and (not (foo: bar)) {}',
				'@supports (color: green) or (not (foo: bar)) {}',
			],
		},
	},
};
