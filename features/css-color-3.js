export default {
	id: 'css-color-3',
	title: 'CSS Color Module Level 3',
	link: 'css-color-3',
	status: 'stable',
	firstSnapshot: 2007,
	lastSnapshot: 2021,
	values: {
		properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
		rgba: {
			link: '#rgba-color',
			mdn: 'color_value/rgba()',
			tests: 'rgba(0,0,0,.5)',
		},
		hsl: {
			link: '#hsl-color',
			mdn: 'color_value/hsl()',
			tests: 'hsl(0,0%,0%)',
		},
		hsla: {
			link: '#hsla-color',
			mdn: 'color_value/hsla()',
			tests: 'hsl(0,0%,0%,.5)',
		},
		currentColor: {
			link: '#currentcolor',
			mdn: 'color_value',
			tests: 'currentColor',
		},
		transparent: {
			link: '#transparent',
			mdn: 'color_value',
			tests: 'transparent',
		},
	},
	properties: {
		opacity: {
			link: '#transparency',
			tests: ['-5', '0', '.5', '1', '2'],
		},
	},
};
