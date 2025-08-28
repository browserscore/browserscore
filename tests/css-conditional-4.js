export default {
	title: 'CSS Conditional Rules Module Level 4',
	link: 'css-conditional-4',
	status: 'experimental',
	atrules: {
		'@supports': {
			title: '`@supports selector()`',
			link: '#at-supports-ext',
			tests: [
				'@supports selector(::before) {}',
				'@supports not selector(::-webkit-unknown-pseudo) {}',
				'@supports selector(div, div) {}',
			],
		},
	},
};
