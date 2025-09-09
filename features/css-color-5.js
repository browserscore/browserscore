export default {
	id: 'css-color-5',
	title: 'CSS Color Module Level 5',
	link: 'css-color-5',
	status: 'experimental',
	values: {
		properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
		'color-mix()': {
			link: '#color-mix',
			mdn: 'color_value/color-mix',
			tests: [
				'color-mix(in srgb, teal 65%, olive)',
				'color-mix(in srgb, rgb(255, 0, 0, .2) 65%, olive)',
				'color-mix(in srgb, currentColor, rgba(0, 0, 0, .5) 65%',
				'color-mix(in srgb, currentColor 10%, rgba(0, 0, 0, .5) 65%',
				'color-mix(in lch, teal 65%, olive)',
				'color-mix(in hsl, teal 65%, olive)',
				'color-mix(in hwb, teal 65%, olive)',
				'color-mix(in xyz, teal 65%, olive)',
				'color-mix(in lab, teal 65%, olive)',
			],
		},
		'color-adjust()': {
			link: '#coloradjust',
			mdn: 'color_value',
			tests: ['color-adjust(peru lightness -20%)'],
		},

		'relative color': {
			link: '#relative-colors',
			mdn: 'color_value',
			tests: [
				'rgb(from indianred 255 g b)',
				'hsl(from lightseagreen calc(h + 180) s l)',
				'lab(from orchid l 0 0)',
				'lch(from peru calc(l * 0.8) c h)',
				'oklab(from oklab(54.3% -22.5% -5%) calc(1.0 - l) calc(a * 0.8) b)',
				'oklch(from oklch(52.6% 0.115 44.6deg) l c  calc(h + 90))',
				'color(from color(srgb 0 0 0 / 60%) srgb alpha 0.6 0.6 / 0.9)',
				'linear-gradient(in oklab to right, oklch(from hsl(none 3% 50%) calc(l * 0.8) c h), #4C3)'
			],
		},

		'light-dark()': {
			link: '#light-dark',
			mdn: 'light-dark',
			tests: ['light-dark(green, red)'],
		},

		'device-cmyk()': {
			link: '#cmyk-colors',
			mdn: 'color_value/device-cmyk',
			tests: ['device-cmyk(.2 .3 .4 .5)', 'device-cmyk(.2 .3 .4 .5 / .5)', 'device-cmyk(.2 .3 .4 .5 / 50%)'],
		},
	},
	globals: {
		CSSColorProfileRule: {
			link: '#the-csscolorprofilerule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSRule',
			members: ['name', 'src', 'renderingIntent', 'components'],
		},
	}
};
