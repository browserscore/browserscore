export default {
	title: 'WebVTT: The Web Video Text Tracks Format',
	links: {
		tr: 'webvtt1',
		dev: 'webvtt',
	},
	group: 'github',
	status: {
		stability: 'experimental',
	},
	selectors: {
		'::cue': {
			link: '#the-cue-pseudo-element',
			tests: ['::cue'],
		},
		'::cue()': {
			link: '#the-cue-pseudo-element',
			tests: ['::cue(span)'],
		},
		'::cue-region': {
			link: '#the-cue-region-pseudo-element',
			tests: ['::cue-region'],
		},
		'::cue-region()': {
			link: '#the-cue-region-pseudo-element',
			tests: ['::cue-region(span)'],
		},
	},
};
