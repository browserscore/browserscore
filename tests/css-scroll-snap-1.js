export default {
	title: 'CSS Scroll Snap Module Level 1',
	links: {
		tr: 'css-scroll-snap-1',
		dev: 'css-scroll-snap-1',
	},
	status: {
		stability: 'stable',
	},
	properties: {
		'scroll-margin': {
			links: {
				tr: '#scroll-margin',
				dev: '#scroll-margin',
			},
			tests: [
				'0px',
				'6px 5px',
				'10px 20px 30px',
				'10px 20px 30px 40px',
				'20px 3em 1in 5rem',
				'calc(2px)',
				'calc(3 * 25px)',
				'calc(3 * 25px) 5px 10em calc(1vw - 5px)',
			],
		},
		'scroll-margin-block': {
			links: {
				tr: '#margin-longhands-logical',
				dev: '#margin-longhands-logical',
			},
			tests: ['10px', '10px 10px'],
		},
		'scroll-margin-block-end': {
			links: {
				tr: '#margin-longhands-logical',
				dev: '#margin-longhands-logical',
			},
			tests: ['10px'],
		},
		'scroll-margin-block-start': {
			links: {
				tr: '#margin-longhands-logical',
				dev: '#margin-longhands-logical',
			},
			tests: ['10px'],
		},
		'scroll-margin-bottom': {
			links: {
				tr: '#margin-longhands-physical',
				dev: '#margin-longhands-physical',
			},
			tests: ['10px'],
		},
		'scroll-margin-inline': {
			links: {
				tr: '#margin-longhands-logical',
				dev: '#margin-longhands-logical',
			},
			tests: ['10px', '10px 10px'],
		},
		'scroll-margin-inline-start': {
			links: {
				tr: '#margin-longhands-logical',
				dev: '#margin-longhands-logical',
			},
			tests: ['10px'],
		},
		'scroll-margin-inline-end': {
			links: {
				tr: '#margin-longhands-logical',
				dev: '#margin-longhands-logical',
			},
			tests: ['10px'],
		},
		'scroll-margin-left': {
			links: {
				tr: '#margin-longhands-physical',
				dev: '#margin-longhands-physical',
			},
			tests: ['10px'],
		},
		'scroll-margin-right': {
			links: {
				tr: '#margin-longhands-physical',
				dev: '#margin-longhands-physical',
			},
			tests: ['10px'],
		},
		'scroll-margin-top': {
			links: {
				tr: '#margin-longhands-physical',
				dev: '#margin-longhands-physical',
			},
			tests: ['10px'],
		},
		'scroll-padding': {
			links: {
				tr: '#scroll-padding',
				dev: '#scroll-padding',
			},
			tests: [
				'auto',
				'0px',
				'6px 5px',
				'10px 20px 30px',
				'10px 20px 30px 40px',
				'10px auto 30px auto',
				'10%',
				'20% 3em 1in 5rem',
				'calc(2px)',
				'calc(50%)',
				'calc(3 * 25px)',
				'calc(3 * 25px) 5px 10% calc(10% - 5px)',
			],
		},
		'scroll-padding-block': {
			links: {
				tr: '#padding-longhands-logical',
				dev: '#padding-longhands-logical',
			},
			tests: ['10px', '50%', '10px 50%', '50% 50%'],
		},
		'scroll-padding-block-end': {
			links: {
				tr: '#padding-longhands-logical',
				dev: '#padding-longhands-logical',
			},
			tests: ['10px', '50%'],
		},
		'scroll-padding-block-start': {
			links: {
				tr: '#padding-longhands-logical',
				dev: '#padding-longhands-logical',
			},
			tests: ['10px', '50%'],
		},
		'scroll-padding-bottom': {
			links: {
				tr: '#padding-longhands-physical',
				dev: '#padding-longhands-physical',
			},
			tests: ['10px', '50%'],
		},
		'scroll-padding-inline': {
			links: {
				tr: '#padding-longhands-logical',
				dev: '#padding-longhands-logical',
			},
			tests: ['10px', '50%', '10px 50%', '50% 50%'],
		},
		'scroll-padding-inline-end': {
			links: {
				tr: '#padding-longhands-logical',
				dev: '#padding-longhands-logical',
			},
			tests: ['10px', '50%'],
		},
		'scroll-padding-inline-start': {
			links: {
				tr: '#padding-longhands-logical',
				dev: '#padding-longhands-logical',
			},
			tests: ['10px', '50%'],
		},
		'scroll-padding-left': {
			links: {
				tr: '#padding-longhands-physical',
				dev: '#padding-longhands-physical',
			},
			tests: ['10px', '50%'],
		},
		'scroll-padding-right': {
			links: {
				tr: '#padding-longhands-physical',
				dev: '#padding-longhands-physical',
			},
			tests: ['10px', '50%'],
		},
		'scroll-padding-top': {
			links: {
				tr: '#padding-longhands-physical',
				dev: '#padding-longhands-physical',
			},
			tests: ['10px', '50%'],
		},
		'scroll-snap-align': {
			links: {
				tr: '#scroll-snap-align',
				dev: '#scroll-snap-align',
			},
			tests: [
				'none',
				'start',
				'end',
				'center',
				'none start',
				'end center',
				'center start',
				'end none',
				'center center',
			],
		},
		'scroll-snap-stop': {
			links: {
				tr: '#scroll-snap-stop',
				dev: '#scroll-snap-stop',
			},
			tests: ['normal', 'always'],
		},
		'scroll-snap-type': {
			links: {
				tr: '#scroll-snap-type',
				dev: '#scroll-snap-type',
			},
			tests: [
				'none',
				'x mandatory',
				'y mandatory',
				'block mandatory',
				'inline mandatory',
				'both mandatory',
				'x proximity',
				'y proximity',
				'block proximity',
				'inline proximity',
				'both proximity',
			],
		},
	},
};
