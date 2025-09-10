function get_color_args ({prefix = '', hueIndex} = {}) {
	let a = hueIndex === 0 ? 'deg' : '%';
	let b = hueIndex === 1 ? 'deg' : '%';
	let c = hueIndex === 2 ? 'deg' : '%';

	return [
		'0 0 0',
		'0 0 0 / .5',
		'0 0 0 / 50%',
		`0${a} 0 0`,
		`0 0${b} 0`,
		`0 0 0${c}`,
		'none none none',
		'0 0 0 / none',
	].map(arg => `${prefix}${arg}`);
}

export default {
	id: 'css-color-4',
	title: 'CSS Color Module Level 4',
	link: 'css-color-4',
	status: 'stable',
	firstSnapshot: 2022,
	values: {
		'rgb_hsl_extensions': {
			titleMd: 'Extensions to `rgb()`, `rgba()`, `hsl()`, `hsla()`',
			descriptionMd: 'Comma-less syntax, optional alpha, mixing types, `none`, `<angle>` for hue, `<number>` for any component',
			mdnGroup: 'CSS/color_value',
			children: {
				'rgb()': {
					link: '#funcdef-rgb',
					dataType: 'color',
					args: get_color_args(),
				},
				'rgba()': {
					link: '#funcdef-rgba',
					dataType: 'color',
					args: get_color_args(),
				},
				'hsl()': {
					link: '#funcdef-hsl',
					dataType: 'color',
					args: get_color_args({hueIndex: 0}),
				},
				'hsla()': {
					link: '#funcdef-hsla',
					dataType: 'color',
					args: get_color_args({hueIndex: 0}),
				},
			}
		},

		Hex: {
			link: '#hex-notation',
			dataType: 'color',
			children: {
				'#RGBA': {
					value: '#0008',
				},
				'#RRGGBBAA': {
					value: '#00000088',
				},
			},
		},
		rebeccapurple: {
			link: '#named-colors',
			mdn: 'color_value',
			dataType: 'color',
		},
		'system colors': {
			link: '#css-system-colors',
			mdn: 'color_value',
			dataType: 'color',
			children: [
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
			link: '#the-hwb-notation',
			mdn: 'color_value/hwb',
			dataType: 'color',
			args: get_color_args({hueIndex: 0}),
		},
		'lab()': {
			link: '#specifying-lab-lch',
			mdn: 'color_value/lab',
			dataType: 'color',
			args: get_color_args(),
		},
		'oklab()': {
			link: '#specifying-oklab-lch',
			mdn: 'color_value/oklab',
			dataType: 'color',
			args: get_color_args(),
		},
		'lch()': {
			link: '#specifying-lch-lch',
			mdn: 'color_value/lch',
			dataType: 'color',
			args: get_color_args({hueIndex: 2}),
		},
		'oklch()': {
			link: '#specifying-oklch-lch',
			mdn: 'color_value/oklch',
			dataType: 'color',
			args: get_color_args({hueIndex: 2}),
		},
		'color()': {
			link: '#color-function',
			mdn: 'color_value/color',
			dataType: 'color',
			children: {
				'srgb': {
					args: get_color_args({prefix: 'srgb '}),
				},
				'srgb-linear': {
					args: get_color_args({prefix: 'srgb-linear '}),
				},
				'display-p3': {
					args: get_color_args({prefix: 'display-p3 '}),
				},
				'display-p3-linear': {
					args: get_color_args({prefix: 'display-p3-linear '}),
				},
				'a98-rgb': {
					args: get_color_args({prefix: 'a98-rgb '}),
				},
				'prophoto-rgb': {
					args: get_color_args({prefix: 'prophoto-rgb '}),
				},
				'rec2020': {
					args: get_color_args({prefix: 'rec2020 '}),
				},
				'xyz': {
					args: get_color_args({prefix: 'xyz '}),
				},
				'xyz-d50': {
					args: get_color_args({prefix: 'xyz-d50 '}),
				},
				'xyz-d65': {
					args: get_color_args({prefix: 'xyz-d65 '}),
				}
			},
		},
	},
	properties: {
		opacity: {
			link: '#transparency',
			titleMd: 'Percentages in `opacity`',
			value: '50%',
		}
	}
};
