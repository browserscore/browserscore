export default {
	title: 'CSS Containment Module Level 2',
	link: 'css-contain-2',
	status: 'experimental',
	properties: {
		contain: {
			link: '#contain-property',
			tests: ['style', 'size style', 'size layout style', 'size layout style paint'],
		},
		'content-visibility': {
			link: '#content-visibility',
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
