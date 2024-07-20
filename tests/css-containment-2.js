export default {
	title: 'CSS Containment Module Level 2',
	links: {
		tr: 'css-contain-2',
		dev: 'css-contain-2',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		contain: {
			links: {
				tr: '#contain-property',
				dev: '#contain-property',
			},
			tests: ['style', 'size style', 'size layout style', 'size layout style paint'],
		},
		'content-visibility': {
			links: {
				tr: '#content-visibility',
				dev: '#content-visibility',
			},
			tests: ['visible', 'auto', 'hidden'],
		},
	},
	interfaces: {
		ContentVisibilityAutoStateChangeEvent: {
			links: {
				dev: '#content-visibility-auto-state-change',
				mdnGroup: 'DOM',
			},
			tests: ['skipped'],
			interface: function() {
				return new ContentVisibilityAutoStateChangeEvent('contentvisibilityautostatechange');
			}
		},
	}
};
