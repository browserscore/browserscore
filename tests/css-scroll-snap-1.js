export default {
	title: 'CSS Scroll Snap Module Level 1',
	link: 'css-scroll-snap-1',
	status: 'stable',
	properties: {
		'scroll-margin': {
			link: '#scroll-margin',
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
			link: '#margin-longhands-logical',
			tests: ['10px', '10px 10px'],
		},
		'scroll-margin-block-end': {
			link: '#margin-longhands-logical',
			tests: ['10px'],
		},
		'scroll-margin-block-start': {
			link: '#margin-longhands-logical',
			tests: ['10px'],
		},
		'scroll-margin-bottom': {
			link: '#margin-longhands-physical',
			tests: ['10px'],
		},
		'scroll-margin-inline': {
			link: '#margin-longhands-logical',
			tests: ['10px', '10px 10px'],
		},
		'scroll-margin-inline-start': {
			link: '#margin-longhands-logical',
			tests: ['10px'],
		},
		'scroll-margin-inline-end': {
			link: '#margin-longhands-logical',
			tests: ['10px'],
		},
		'scroll-margin-left': {
			link: '#margin-longhands-physical',
			tests: ['10px'],
		},
		'scroll-margin-right': {
			link: '#margin-longhands-physical',
			tests: ['10px'],
		},
		'scroll-margin-top': {
			link: '#margin-longhands-physical',
			tests: ['10px'],
		},
		'scroll-padding': {
			link: '#scroll-padding',
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
			link: '#padding-longhands-logical',
			tests: ['10px', '50%', '10px 50%', '50% 50%'],
		},
		'scroll-padding-block-end': {
			link: '#padding-longhands-logical',
			tests: ['10px', '50%'],
		},
		'scroll-padding-block-start': {
			link: '#padding-longhands-logical',
			tests: ['10px', '50%'],
		},
		'scroll-padding-bottom': {
			link: '#padding-longhands-physical',
			tests: ['10px', '50%'],
		},
		'scroll-padding-inline': {
			link: '#padding-longhands-logical',
			tests: ['10px', '50%', '10px 50%', '50% 50%'],
		},
		'scroll-padding-inline-end': {
			link: '#padding-longhands-logical',
			tests: ['10px', '50%'],
		},
		'scroll-padding-inline-start': {
			link: '#padding-longhands-logical',
			tests: ['10px', '50%'],
		},
		'scroll-padding-left': {
			link: '#padding-longhands-physical',
			tests: ['10px', '50%'],
		},
		'scroll-padding-right': {
			link: '#padding-longhands-physical',
			tests: ['10px', '50%'],
		},
		'scroll-padding-top': {
			link: '#padding-longhands-physical',
			tests: ['10px', '50%'],
		},
		'scroll-snap-align': {
			link: '#scroll-snap-align',
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
			link: '#scroll-snap-stop',
			tests: ['normal', 'always'],
		},
		'scroll-snap-type': {
			link: '#scroll-snap-type',
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
