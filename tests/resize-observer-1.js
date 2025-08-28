export default {
	title: 'Resize Observer',
	link: 'resize-observer-1',
	status: 'experimental',
	interfaces: {
		ResizeObserver: {
			link: '#api',
			mdnGroup: 'DOM',
			tests: ['observe', 'unobserve', 'disconnect'],
			interface: function() {
				return new ResizeObserver(function() {});
			}
		},
		ResizeObserverEntry: {
			link: '#resize-observer-entry-interface',
			mdnGroup: 'DOM',
			tests: ['ResizeObserverEntry'],
		},
		ResizeObserverSize: {
			link: '#resizeobserversize',
			mdnGroup: 'DOM',
			tests: ['ResizeObserverEntry'],
		},
	},
};
