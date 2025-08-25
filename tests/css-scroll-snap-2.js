export default {
	title: 'CSS Scroll Snap Module Level 2',
	links: {
		dev: 'css-scroll-snap-2',
	},
	status: 'experimental',
	properties: {
		'scroll-start-target': {
			links: {
				dev: '#scroll-start-target',
			},
			tests: [
				'none',
				'auto',
			],
		},
	},
	selectors: {
		':snapped': {
			links: {
				dev: '#snapped',
			},
			tests: ':snapped',
		},
		':snapped-x': {
			links: {
				dev: '#selectordef-snapped-x',
			},
			tests: ':snapped-x',
		},
		':snapped-y': {
			links: {
				dev: '#selectordef-snapped-y',
			},
			tests: ':snapped-y',
		},
		':snapped-inline': {
			links: {
				dev: '#selectordef-snapped-inline',
			},
			tests: ':snapped-inline',
		},
		':snapped-block': {
			links: {
				dev: '#selectordef-snapped-block',
			},
			tests: ':snapped-block',
		},
	},
	interfaces: {
		SnapEvent: {
			links: {
				dev: '#snap-events',
				mdnGroup: 'DOM',
			},
			tests: ['snapTargetBlock', 'snapTargetInline'],
			interface: function() {
				return new SnapEvent('scrollsnapchange');
			},
		},
		Element: {
			link: '#interface-globaleventhandlers',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['onsnapchanged', 'onsnapchanging'],
			interface: function(style) {
				return document.body;
			},
		}
	},
};
