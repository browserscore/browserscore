export default {
	title: 'Resize Observer',
	links: {
		tr: 'resize-observer-1',
		dev: 'resize-observer-1',
	},
	status: {
		stability: 'experimental',
	},
	interfaces: {
		ResizeObserver: {
			links: {
				tr: '#api',
				dev: '#api',
				mdnGroup: 'DOM',
			},
			tests: ['observe', 'unobserve', 'disconnect'],
			interface: function() {
				return new ResizeObserver(function() {});
			}
		},
		ResizeObserverEntry: {
			links: {
				tr: '#resize-observer-entry-interface',
				dev: '#resize-observer-entry-interface',
				mdnGroup: 'DOM',
			},
			tests: ['ResizeObserverEntry'],
		},
		ResizeObserverSize: {
			links: {
				tr: '#resizeobserversize',
				dev: '#resizeobserversize',
				mdnGroup: 'DOM',
			},
			tests: ['ResizeObserverEntry'],
		},
	},
};
