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
				'color(display-p3 1 0.5 0)',
				'color(display-p3 .2 .4 .6  / .5)',
				'color(display-p3 20% 40% 60%)',
				'color(srgb 1 0.5 0)',
				'color(srgb .2 .4 .6  / .5)',
				'color(srgb 20% 40% 60%)',
				'color(srgb-linear 1 0.5 0)',
				'color(srgb-linear .2 .4 .6  / .5)',
				'color(srgb-linear 20% 40% 60%)',
				'color(a98-rgb 1 0.5 0)',
				'color(a98-rgb .2 .4 .6  / .5)',
				'color(a98-rgb 20% 40% 60%)',
				'color(prophoto-rgb 1 0.5 0)',
				'color(prophoto-rgb .2 .4 .6  / .5)',
				'color(prophoto-rgb 20% 40% 60%)',
				'color(rec2020 1 0.5 0)',
				'color(rec2020 .2 .4 .6  / .5)',
				'color(rec2020 20% 40% 60%)',
				'color(xyz 1 0.5 0)',
				'color(xyz .2 .4 .6  / .5)',
				'color(xyz 20% 40% 60%)',
				'color(xyz-d50 1 0.5 0)',
				'color(xyz-d50 .2 .4 .6  / .5)',
				'color(xyz-d50 20% 40% 60%)',
				'color(xyz-d65 1 0.5 0)',
				'color(xyz-d65 .2 .4 .6  / .5)',
				'color(xyz-d65 20% 40% 60%)',
				'color(xyz-d65 .2 .4 .6 / none)',
				'color(xyz-d65 .2 .4 none / .5)',
				'color(xyz-d65 .2 none .4 / .5)',
				'color(xyz-d65 none .2 .4 / .5)',
				'color(xyz-d65 none none .4 / .5)',
				'color(xyz-d65 none none none)',
				'color(xyz-d65 none none none / none)',
			],
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
