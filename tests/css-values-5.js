export default {
	title: 'CSS Values and Units Module Level 5',
	links: {
		dev: 'css-values-5',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['width', 'padding'],
		'attr()': {
			links: {
				dev: '#attr-notation',
			},
			tests: [
				'attr(data-px)',
				'attr(data-px px)',
				'attr(data-px px, initial)',
				'attr(data-string string)',
				'attr(data-url url)',
				'attr(data-ident ident)',
				'attr(data-color color)',
				'attr(data-number number)',
				'attr(data-percentage percentage)',
				'attr(data-length length)',
				'attr(data-angle angle)',
				'attr(data-time time)',
				'attr(data-frequency frequency)',
				'attr(data-flex flex)',
			],
		},
		'toggle() with lengths': {
			links: {
				dev: '#toggle-notation',
			},
			tests: ['toggle(1px, 2px)'],
		},
		'toggle() with keywords': {
			links: {
				dev: '#toggle-notation',
			},
			properties: ['font-style'],
			tests: ['toggle(italic, normal)'],
		},
		'toggle() with mixed keywords and lengths': {
			links: {
				dev: '#toggle-notation',
			},
			properties: ['background-position'],
			tests: ['toggle(top left, 100% 50%)'],
		},
	},
};
