export default {
	title: 'CSS Box Sizing Module Level 4',
	links: {
		tr: 'css-sizing-4',
		dev: 'css-sizing-4',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'aspect-ratio': {
			links: {
				tr: '#aspect-ratio',
				dev: '#aspect-ratio',
			},
			tests: ['auto', '2', '16 / 9', 'auto 16 / 9'],
		},
		'contain-intrinsic-size': {
			links: {
				tr: '#propdef-contain-intrinsic-size',
				dev: '#propdef-contain-intrinsic-size',
			},
			tests: ['none', '10px', 'auto 10px', '10px 15px', 'auto 10px auto 15px'],
		},
		'contain-intrinsic-width': {
			links: {
				tr: '#intrinsic-size-override',
				dev: '#intrinsic-size-override',
			},
			tests: ['none', '10px', 'auto 10px'],
		},
		'contain-intrinsic-height': {
			links: {
				tr: '#intrinsic-size-override',
				dev: '#intrinsic-size-override',
			},
			tests: ['none', '10px', 'auto 10px'],
		},
		'contain-intrinsic-block-size': {
			links: {
				tr: '#intrinsic-size-override',
				dev: '#intrinsic-size-override',
			},
			tests: ['none', '10px', 'auto 10px'],
		},
		'contain-intrinsic-inline-size': {
			links: {
				tr: '#intrinsic-size-override',
				dev: '#intrinsic-size-override',
			},
			tests: ['none', '10px', 'auto 10px'],
		},
		'min-intrinsic-sizing': {
			links: {
				tr: '#intrinsic-contribution-override',
				dev: '#intrinsic-contribution-override',
			},
			tests: [
				'legacy',
				'zero-if-scroll',
				'zero-if-extrinsic',
				'zero-if-scroll zero-if-extrinsic'
			],
		},
		width: {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'min-width': {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'max-width': {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		height: {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'min-height': {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'max-height': {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'inline-size': {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'min-inline-size': {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'max-inline-size': {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'block-size': {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'min-block-size': {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
		'max-block-size': {
			links: {
				tr: '#sizing-values',
				dev: '#sizing-values',
			},
			tests: ['stretch', 'fit-content', 'contain'],
		},
	},
};
