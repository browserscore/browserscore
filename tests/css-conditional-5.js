export default {
	title: 'CSS Conditional Rules Module Level 5',
	links: {
		tr: 'css-conditional-5',
		dev: 'css-conditional-5',
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
			tests: ['@supports font-tech(features-opentype) {}', '@supports font-format(woff2) {}'],
		},
		'@when': {
			links: {
				tr: '#when-rule',
				dev: '#when-rule',
			},
			tests: [
				'@when media(min-width: 200px) {}',
				'@when media(width >= 200px) {}',
				'@when media(pointer) {}',
				'@when supports(display: flex) {}',
			],
		},
		'@else': {
			links: {
				tr: '#else-rule',
				dev: '#else-rule',
			},
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
