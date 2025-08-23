export default {
	title: 'Resize Observer',
	link: 'resize-observer-1',
	status: {
		stability: 'experimental',
	},
	interfaces: {
		ResizeObserver: {
			link: '#api',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['observe', 'unobserve', 'disconnect'],
			interface: function() {
				return new ResizeObserver(function() {});
			}
		},
		ResizeObserverEntry: {
			link: '#resize-observer-entry-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['ResizeObserverEntry'],
		},
		ResizeObserverSize: {
			link: '#resizeobserversize',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['ResizeObserverEntry'],
		},
	},
};
