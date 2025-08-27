export default {
	title: 'Compatibility',
	group: 'whatwg',
	link: 'compat',
	status: 'stable',
	properties: {
		'touch-action': {
			links: {
				dev: '#touch-action',
			},
			tests: ['pinch-zoom', 'pan-x pinch-zoom', 'pan-y pinch-zoom', 'pan-x pan-y pinch-zoom'],
		},
	},
};
