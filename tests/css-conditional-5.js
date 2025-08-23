export default {
	title: 'CSS Conditional Rules Module Level 5',
	link: 'css-conditional-5',
	status: {
		stability: 'experimental',
	},
	'@rules': {
		'@supports': {
			link: '#at-supports-ext',
			tests: ['@supports font-tech(features-opentype) {}', '@supports font-format(woff2) {}'],
		},
		'@when': {
			link: '#when-rule',
			tests: [
				'@when media(min-width: 200px) {}',
				'@when media(width >= 200px) {}',
				'@when media(pointer) {}',
				'@when supports(display: flex) {}',
			],
		},
		'@else': {
			link: '#else-rule',
			tests: [
				'@when media(min-width: 200px) {} @else {}',
				'@when media(min-width: 200px) {} @else media(min-width: 100px) {}',
				'@when media(min-width: 200px) {} @else media(min-width >= 100px) {}',
				'@when media(min-width: 200px) {} @else supports(display: flex) {}',
				'@when media(min-width: 200px) {} @else media(min-width: 100px) {} @else {}',
			],
		},
	},
};
