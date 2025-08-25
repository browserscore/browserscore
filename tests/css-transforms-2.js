export default {
	title: 'CSS Transforms Module Level 2',
	link: 'css-transforms-2',
	status: 'stable',
	properties: {
		translate: {
			link: '#individual-transforms',
			tests: ['none', '50%', '50% 50%', '50% 50% 10px'],
		},
		scale: {
			link: '#individual-transforms',
			tests: ['none', '2', '2 2', '2 2 2'],
		},
		rotate: {
			link: '#individual-transforms',
			tests: [
				'none',
				' 45deg',
				'x 45deg',
				'y 45deg',
				'z 45deg',
				'-1 0 2 45deg',
				'45deg x',
				'45deg y',
				'45deg z',
				'45deg -1 0 2',
			],
		},
		transform: {
			link: '#transform-property',
			tests: [
				'perspective(none)',
				'translate3d(0, 0, 5px)',
				'scale3d(1, 0, -1)',
				'rotate3d(1, 1, 1, 45deg)',
				'matrix3d(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)',
				'matrix3d(0,0,0,0,0,0,0,0,0,0,1,0,10,10,0,1)',
				'translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) scale3d(-1, 0, .5)',
			],
		},
		'transform-style': {
			link: '#transform-style-property',
			tests: ['flat', 'preserve-3d'],
		},
		perspective: {
			link: '#perspective-property',
			tests: ['none', '600px'],
		},
		'perspective-origin': {
			link: '#perspective-origin-property',
			tests: ['10px', 'top', 'top left', '50% 100%', 'left 0%'],
		},
		'backface-visibility': {
			link: '#backface-visibility-property',
			tests: ['visible', 'hidden'],
		},
	},
};
