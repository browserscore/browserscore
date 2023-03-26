export default {
	title: 'CSS Color Module Level 4',
	links: {
		tr: 'css-color-4',
		dev: 'css-color-4',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2022,
	},
	values: {
		properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
		'comma-less colors': {
			links: {
				tr: '#funcdef-rgb',
				dev: '#funcdef-rgb',
				mdn: 'color_value',
			},
			tests: ['rgb(0% 20% 70%)', 'rgb(0 64 185)', 'hsl(0 0% 0%)'],
		},
		'/ alpha': {
			links: {
				tr: '#funcdef-rgb',
				dev: '#funcdef-rgb',
				mdn: 'color_value',
			},
			tests: [
				'rgba(0% 20% 70% / 50%)',
				'rgba(0% 20% 70% / .5)',
				'rgba(0 64 185 / 50%)',
				'rgba(0 64 185 / .5)',
				'hsla(0 0% 0% /.5)',
			],
		},
		'optional alpha': {
			links: {
				tr: '#funcdef-rgb',
				dev: '#funcdef-rgb',
				mdn: 'color_value',
			},
			tests: [
				'rgb(0% 20% 70% / 50%)',
				'rgb(0% 20% 70% / .5)',
				'rgb(0 64 185 / 50%)',
				'rgb(0 64 185 / .5)',
				'hsl(0 0% 0% / .5)',
			],
		},
		'Hex with alpha': {
			links: {
				tr: '#hex-notation',
				dev: '#hex-notation',
				mdn: 'color_value',
			},
			tests: ['#000F', '#000000FF'],
		},
		rebeccapurple: {
			links: {
				tr: '#named-colors',
				dev: '#named-colors',
				mdn: 'color_value',
			},
			tests: 'rebeccapurple',
		},
		'system colors': {
			links: {
				tr: '#css-system-colors',
				dev: '#css-system-colors',
				mdn: 'color_value',
			},
			tests: [
				'Canvas',
				'CanvasText',
				'LinkText',
				'VisitedText',
				'ActiveText',
				'ButtonFace',
				'Field',
				'FieldText',
				'Highlight',
				'HighlightText',
				'GrayText',
			],
		},
		'hwb()': {
			links: {
				tr: '#the-hwb-notation',
				dev: '#the-hwb-notation',
				mdn: 'color_value/hwb',
			},
			tests: ['hwb(0 0% 0%)', 'hwb(0 0% 0% / .5)'],
		},
		'lab()': {
			links: {
				tr: '#specifying-lab-lch',
				dev: '#specifying-lab-lch',
				mdn: 'color_value/lab',
			},
			tests: ['lab(0% 0 0)', 'lab(0% 0 0 /.5)'],
		},
		'oklab()': {
			links: {
				tr: '#specifying-oklab-lch',
				dev: '#specifying-oklab-lch',
				mdn: 'color_value/oklab',
			},
			tests: ['oklab(0% 0 0)', 'oklab(40.101% 0.1147 0.0453 / .5)'],
		},
		'lch()': {
			links: {
				tr: '#specifying-lch-lch',
				dev: '#specifying-lch-lch',
				mdn: 'color_value/lch',
			},
			tests: ['lch(0% 0 0)', 'lch(none 0% none)', 'lch(0% 0 0 / .5)'],
		},
		'oklch()': {
			links: {
				tr: '#specifying-oklch-lch',
				dev: '#specifying-oklch-lch',
				mdn: 'color_value/oklch',
			},
			tests: ['oklch(0% 0 0)', 'oklch(40.101% 0.12332 21.555 / .5)'],
		},
		'color()': {
			links: {
				tr: '#color-function',
				dev: '#color-function',
				mdn: 'color_value/color',
			},
			tests: [
				'color(.2 .4 .6)',
				'color(display-p3 .2. 4 .6)',
				'color(foo .2 .4 .6)',
				'color(.2 .4 .6 / .5)',
				'color(display-p3 .2 .4 .6  / .5)',
				'color(--foo .2 .4 .6 / .5)',
				'color(.2 .4 .6, #123456)',
				'color(display-p3 .2. 4 .6, #654321)',
				'color(20% 40% 60%)',
				'color(display-p3 20% 40% 60%)',
				'color(foo 20% 40% 60%)',
				'color(20% 40% 60% / .5)',
				'color(image-p3 20% 40% 60%  / .5)',
				'color(--foo 20% 40% 60% / .5)',
				'color(20% 40% 60%, #123456)',
				'color(display-p3 20% 40% 60%, #654321)',
				'color(--mycmyk 0% 20% 30% 5%)',
			],
		},
		'device-cmyk()': {
			links: {
				tr: '#cmyk-colors',
				dev: '#cmyk-colors',
				mdn: 'color_value/device-cmyk',
			},
			tests: ['device-cmyk(.2 .3 .4 .5)', 'device-cmyk(.2 .3 .4 .5 / .5)', 'device-cmyk(.2 .3 .4 .5 / 50%)'],
		},
		'percentages in opacity': {
			links: {
				tr: '#transparency',
				dev: '#transparency',
			},
			properties: ['opacity'],
			tests: ['45%'],
		},
	},
};
