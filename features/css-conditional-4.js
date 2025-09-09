export default {
	id: 'css-conditional-4',
	title: 'CSS Conditional Rules Module Level 4',
	link: 'css-conditional-4',
	status: 'experimental',
	atrules: {
		'@supports selector()': {
			link: '#at-supports-ext',
			args: [
				'.foo',
				'::unknown-pseudo',
			],
		},
	},
};
