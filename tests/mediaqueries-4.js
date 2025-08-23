export default {
	title: 'Media Queries Level 4',
	link: 'mediaqueries-4',
	status: {
		stability: 'stable',
	},
	'Media queries': {
		Syntax: {
			link: '#mq-syntax',
			tests: [
				'not (width)',
				'(width) or (height)',
				'(not (width))',
				'((width) and (height))',
				'((width) or (height))',
				'all and not (width)',
				'all and (not (width))',
				'all and ((width) and (height))',
				'all and ((width) or (height))',
				'(width = 1280px)',
				'(width < 1000000px)',
				'(width <= 1000000px)',
				'(width > 1px)',
				'(width >= 1px)',
				'(1280px = width)',
				'(1px < width)',
				'(1px <= width)',
				'(1000000px > width)',
				'(1000000px >= width)',
				'(1px <= width < 1000000px)',
				'(1000000px > width >= 1px)',
			],
		},
		resolution: {
			link: '#resolution',
			tests: ['(resolution: infinite)'],
		},
		hover: {
			link: '#hover',
			tests: ['(hover)', '(hover: none)', '(hover: hover)'],
		},
		'any-hover': {
			link: '#any-input',
			tests: ['(any-hover)', '(any-hover: none)', '(any-hover: hover)'],
		},
		pointer: {
			link: '#pointer',
			tests: ['(pointer)', '(pointer: none)', '(pointer: coarse)', '(pointer: fine)'],
		},
		'any-pointer': {
			link: '#any-input',
			tests: ['(any-pointer)', '(any-pointer: none)', '(any-pointer: coarse)', '(any-pointer: fine)'],
		},
		update: {
			link: '#update',
			tests: ['(update)', '(update: none)', '(update: slow)', '(update: fast)'],
		},
		'overflow-block': {
			link: '#mf-overflow-block',
			tests: [
				'(overflow-block)',
				'(overflow-block: none)',
				'(overflow-block: scroll)',
				'(overflow-block: paged)',
			],
		},
		'overflow-inline': {
			link: '#mf-overflow-inline',
			tests: ['(overflow-inline)', '(overflow-inline: none)', '(overflow-inline: scroll)'],
		},
		'color-gamut': {
			link: '#color-gamut',
			tests: ['(color-gamut)', '(color-gamut: srgb)', '(color-gamut: p3)', '(color-gamut: rec2020)'],
		},
		'aspect-ratio': {
			link: '#aspect-ratio',
			tests: ['(aspect-ratio: 1280.1/720.01)', '(max-aspect-ratio: 1280.1/720.01)', '(min-aspect-ratio: 0.2)'],
		},
		'device-aspect-ratio': {
			link: '#device-aspect-ratio',
			tests: [
				'(device-aspect-ratio:1280.1/720.01)',
				'(max-device-aspect-ratio:1280.1/720.01)',
				'(min-device-aspect-ratio:0.2)',
			],
		},
	},
};
