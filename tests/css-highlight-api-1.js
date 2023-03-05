export default {
	title: 'CSS Custom Highlight API Module Level 1',
	links: {
		tr: 'css-highlight-api-1',
		dev: 'css-highlight-api-1',
	},
	status: {
		stability: 'experimental',
	},
	selectors: {
		'::highlight()': {
			links: {
				tr: '#custom-highlight-pseudo',
				dev: '#custom-highlight-pseudo',
			},
			tests: ['::highlight(example-highlight)'],
		},
	},
	interfaces: {
		CSS: {
			links: {
				tr: '#registration',
				dev: '#registration',
				mdnGroup: 'DOM',
			},
			tests: ['highlights'],
			interface: function() {
				return CSS;
			}
		},
		Highlight: {
			links: {
				tr: '#creation',
				dev: '#creation',
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
