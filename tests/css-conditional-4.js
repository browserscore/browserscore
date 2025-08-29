export default {
	title: 'CSS Conditional Rules Module Level 4',
	link: 'css-conditional-4',
	status: 'experimental',
	atrules: {
		'@supports': {
			title: '`@supports selector()`',
			link: '#at-supports-ext',
			preludes: [
				'selector(.foo)',
				'selector(::-webkit-unknown-pseudo)',
			],
		},
	},
};
