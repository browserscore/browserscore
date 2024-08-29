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
		'color-layers()': {
			links: {
				dev: '#color-layers',
				mdn: 'color_value/color-layers',
			},
			tests: [
				'color-layers(rgb(from yellow r g b / 0.5))',
				'color-layers(rgb(from yellow r g b / 0.5), red)',
				'color-layers(rgb(from yellow r g b / 0.5), color(display-p3 1 0.5 0))',
				'color-layers(rgb(from yellow r g b / 0.5), color-mix(in lab, red, blue))',
				'color-layers(rgb(from yellow r g b / 0.5), rgba(0, 255, 128, 0.6), currentcolor, hsla(0, 100%, 20%, 0.4))',
				'color-layers(rgb(from yellow r g b / 0.5), rgba(0, 255, 128, 0.6), color-mix(in lab, purple, rgba(0,0,0,0.5)), color(display-p3 1 0.5 0))',
				'color-layers(color(display-p3 1 0.5 0), rgb(from yellow r g b / 0.5), rgba(0, 255, 128, 0.6), color-mix(in lab, purple, rgba(0,0,0,0.5)), hsla(0, 100%, 20%, 0.4))'
			],
		},
	},
};
