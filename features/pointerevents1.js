export default {
	id: 'pointerevents-1',
	title: 'Pointer Events Level 1',
	links: {
		tr: 'pointerevents1',
	},
	status: 'stable',
	properties: {
		'touch-action': {
			links: {
				tr: '#the-touch-action-css-property',
			},
			tests: ['auto', 'none', 'pan-x', 'pan-y', 'pan-x pan-y', 'manipulation'],
		},
	},
};
