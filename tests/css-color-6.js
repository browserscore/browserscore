export default {
	title: 'CSS Color Module Level 6',
	links: {
		dev: 'css-color-6',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
		'color-contrast()': {
			links: {
				dev: '#colorcontrast',
				mdn: 'color_value/color-contrast',
			},
			tests: [
				'color-contrast(wheat vs tan, sienna, #b22222, #d2691e)',
				'color-contrast(hsl(200 50% 80%) vs hsl(200 83% 23%), purple, hsl(300 100% 25%))',
			],
		},
	},
};
