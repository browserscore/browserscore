export default {
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
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['highlights'],
			interface: function() {
				return CSS;
			}
		},
		Highlight: {
			link: '#creation',
			links: {
				mdnGroup: 'DOM',
			},
			tests: [
				'priority',
				'type',
				'has',
				'add',
				'delete',
				'clear',
				'values',
				'keys',
				'entries',
				'forEach',
			],
			interface: function(style) {
				var range = new Range();
				range.setStart(document.body, 10);
				range.setEnd(document.body, 20);
				return new Highlight(range);
			}
		},
	}
};
