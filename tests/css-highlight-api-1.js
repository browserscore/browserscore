export default {
	id: 'css-highlight-api-1',
	title: 'CSS Custom Highlight API Module Level 1',
	link: 'css-highlight-api-1',
	status: 'experimental',
	selectors: {
		'::highlight()': {
			link: '#custom-highlight-pseudo',
			tests: ['::highlight(example-highlight)'],
		},
	},
	interfaces: {
		CSS: {
			link: '#registration',
			mdnGroup: 'DOM',
			properties: ['highlights'],
		},
		Highlight: {
			link: '#creation',
			mdnGroup: 'DOM',
			members: [
				'priority',
				'type',
			],
			methods: [
				'has',
				'add',
				'delete',
				'clear',
				'values',
				'keys',
				'entries',
				'forEach',
			],
		},
	}
};
