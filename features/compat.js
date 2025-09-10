export default {
	id: 'compat',
	title: 'Compatibility',
	group: 'whatwg',
	link: 'compat',
	status: 'stable',
	properties: {
		'touch-action': {
			link: '#touch-action',
			values: [
				'pinch-zoom',
				'pan-x pinch-zoom',
				'pan-y pinch-zoom',
				'pan-x pan-y pinch-zoom',
			],
		},
	},
};
