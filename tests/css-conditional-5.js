export default {
	title: 'CSS Conditional Rules Module Level 5',
	link: 'css-conditional-5',
	status: 'experimental',
	atrules: {
		'@supports': {
			link: '#at-supports-ext',
			preludeRequired: true,
			children: [
				{
					title: '`@supports font-tech()`',
					prelude: 'font-tech(features-opentype)',

				},
				{
					title: '`@supports font-format()`',
					prelude: 'font-format(woff2)',
				},
			],
		},
		'@when': {
			link: '#when-rule',
			preludeRequired: true,
			preludes: [
				'media(min-width: 0px)',
				'media(pointer)',
				'supports(color: red)',
			],
		},
		'@else': {
			link: '#else-rule',
			preludeRequired: true,
			contentBefore: '@when media(min-width: 0px) {} ',
			preludes: [
				'media(min-width: 200px)',
				'media(width >= 200px)',
				'media(pointer)',
				'supports(display: flex)',
			],
			// TODO @else media(min-width: 0px) {} @else {}
		},
	},
};
