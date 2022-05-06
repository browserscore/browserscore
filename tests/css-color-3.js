export default {
	title: 'CSS Color Module Level 3',
	links: {
		tr: 'css-color-3',
		dev: 'css-color-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2007,
	},
	values: {
		properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
		rgba: {
			links: {
				tr: '#rgba-color',
				dev: '#rgba-color',
				mdn: 'color_value/rgba()',
			},
			tests: 'rgba(0,0,0,.5)',
		},
		hsl: {
			links: {
				tr: '#hsl-color',
				dev: '#hsl-color',
				mdn: 'color_value/hsl()',
			},
			tests: 'hsl(0,0%,0%)',
		},
		hsla: {
			links: {
				tr: '#hsla-color',
				dev: '#hsla-color',
				mdn: 'color_value/hsla()',
			},
			tests: 'hsl(0,0%,0%,.5)',
		},
		currentColor: {
			links: {
				tr: '#currentcolor',
				dev: '#currentcolor',
				mdn: 'color_value',
			},
			tests: 'currentColor',
		},
		transparent: {
			links: {
				tr: '#transparent',
				dev: '#transparent',
				mdn: 'color_value',
			},
			tests: 'transparent',
		},
	},
	properties: {
		opacity: {
			links: {
				tr: '#transparency',
				dev: '#transparency',
			},
			tests: ['-5', '0', '.5', '1', '2'],
		},
	},
};
