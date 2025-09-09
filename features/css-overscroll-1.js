export default {
	id: 'css-overscroll-1',
	title: 'CSS Overscroll Behavior Module Level 1',
	link: 'css-overscroll-1',
	status: 'experimental',
	properties: {
		'overscroll-behavior': {
			link: '#overscroll-behavior-properties',
			tests: [
				'contain',
				'none',
				'auto',
				'contain contain',
				'none contain',
				'auto contain',
				'contain none',
				'none none',
				'auto none',
				'contain auto',
				'none auto',
				'auto auto',
			],
		},
		'overscroll-behavior-x': {
			link: '#overscroll-behavior-longhands-physical',
			tests: ['contain', 'none', 'auto'],
		},
		'overscroll-behavior-y': {
			link: '#overscroll-behavior-longhands-physical',
			tests: ['contain', 'none', 'auto'],
		},
		'overscroll-behavior-inline': {
			link: '#overscroll-behavior-longhands-logical',
			tests: ['contain', 'none', 'auto'],
		},
		'overscroll-behavior-block': {
			link: '#overscroll-behavior-longhands-logical',
			tests: ['contain', 'none', 'auto'],
		},
	},
};
