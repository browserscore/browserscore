export default {
	title: 'CSS Conditional Rules Module Level 4',
	links: {
		tr: 'css-conditional-4',
		dev: 'css-conditional-4',
	},
	status: {
		stability: 'experimental',
	},
	'@rules': {
		'@supports': {
			links: {
				tr: '#at-supports-ext',
				dev: '#at-supports-ext',
			},
			tests: [
				'@supports selector(::before) {}',
				'@supports not selector(::-webkit-unknown-pseudo) {}',
				'@supports selector(div, div) {}',
			],
		},
	},
};
