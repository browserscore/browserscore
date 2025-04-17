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
		'contrast-color()': {
			links: {
				dev: '#colorcontrast',
				mdn: 'color_value/contrast-color',
			},
			tests: [
				'contrast-color(wheat tbd-fg)',
				'contrast-color(wheat tbd-bg)',
				'contrast-color(wheat tbd-bg wcag2))',
				'contrast-color(wheat tbd-bg wcag2(4.2))',
				'contrast-color(wheat tbd-bg wcag2(aa))',
				'contrast-color(wheat tbd-bg wcag2(aaa))',
				'contrast-color(wheat tbd-bg wcag2(aa large))',
				'contrast-color(wheat tbd-bg wcag2(aaa large))',
				'contrast-color(wheat tbd-bg wcag2(aa), tan, sienna, #b22222, #d2691e)',
				'contrast-color(hsl(200 50% 80%) tbd-bg wcag2(aa), hsl(200 83% 23%), purple, hsl(300 100% 25%))',
			],
		},
		'color-layers()': {
			links: {
				dev: '#color-layers',
				mdn: 'color_value/color-layers',
			},
			tests: [
				'color-layers(wheat)',
				'color-layers(wheat, red)',
				'color-layers(wheat, color(display-p3 1 0.5 0))',
				'color-layers(wheat, currentcolor, #000)',
				'color-layers(multiply, wheat)',
				'color-layers(lighten, wheat)',
			],
		},
	},
};
