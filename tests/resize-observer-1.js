export default {
	id: 'resize-observer-1',
	title: 'Resize Observer',
	link: 'resize-observer-1',
	status: 'experimental',
	globals: {
		ResizeObserver: {
			link: '#api',
			mdnGroup: 'DOM',
			methods: ['observe', 'unobserve', 'disconnect'],
		},
		ResizeObserverEntry: {
			link: '#resize-observer-entry-interface',
			mdnGroup: 'DOM',
			members: ['target', 'contentRect', 'borderBoxSize', 'contentBoxSize', 'devicePixelContentBoxSize'],
		},
		ResizeObserverSize: {
			link: '#resizeobserversize',
			mdnGroup: 'DOM',
			members: ['inlineSize', 'blockSize'],
		},
	},
};
