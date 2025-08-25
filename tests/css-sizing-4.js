export default {
	title: 'CSS Box Sizing Module Level 4',
	link: 'css-sizing-4',
	status: 'experimental',
	properties: {
		'aspect-ratio': {
			link: '#aspect-ratio',
			tests: ['auto', '2', '16 / 9', 'auto 16 / 9'],
		},
		'contain-intrinsic-size': {
			link: '#propdef-contain-intrinsic-size',
			tests: ['none', '10px', 'auto 10px', '10px 15px', 'auto 10px auto 15px'],
		},
		'contain-intrinsic-width': {
			link: '#intrinsic-size-override',
			tests: ['none', '10px', 'auto none', 'auto 10px'],
		},
		'contain-intrinsic-height': {
			link: '#intrinsic-size-override',
			tests: ['none', '10px', 'auto none', 'auto 10px'],
		},
		'contain-intrinsic-block-size': {
			link: '#intrinsic-size-override',
			tests: ['none', '10px', 'auto none', 'auto 10px'],
		},
		'contain-intrinsic-inline-size': {
			link: '#intrinsic-size-override',
			tests: ['none', '10px', 'auto none', 'auto 10px'],
		},
		'min-intrinsic-sizing': {
			link: '#intrinsic-contribution-override',
			tests: [
				'legacy',
				'zero-if-scroll',
				'zero-if-extrinsic',
				'zero-if-scroll zero-if-extrinsic'
			],
		},
		width: {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'min-width': {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'max-width': {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		height: {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'min-height': {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'max-height': {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'inline-size': {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'min-inline-size': {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'max-inline-size': {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'block-size': {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'min-block-size': {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'max-block-size': {
			link: '#sizing-values',
			tests: ['stretch', 'fit-content', 'contain'],
		},
	},
};
