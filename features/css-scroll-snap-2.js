export default {
	id: 'css-scroll-snap-2',
	title: 'CSS Scroll Snap Module Level 2',
	link: 'css-scroll-snap-2',
	status: 'experimental',
	properties: {
		'scroll-start-target': {
			link: '#scroll-start-target',
			tests: [
				'none',
				'auto',
			],
		},
	},
	selectors: {
		':snapped': {
			link: '#snapped',
			tests: ':snapped',
		},
		':snapped-x': {
			link: '#selectordef-snapped-x',
			tests: ':snapped-x',
		},
		':snapped-y': {
			link: '#selectordef-snapped-y',
			tests: ':snapped-y',
		},
		':snapped-inline': {
			link: '#selectordef-snapped-inline',
			tests: ':snapped-inline',
		},
		':snapped-block': {
			link: '#selectordef-snapped-block',
			tests: ':snapped-block',
		},
	},
	globals: {
		SnapEvent: {
			link: '#snap-events',
			mdnGroup: 'DOM',
			extends: 'Event',
			members: ['snapTargetBlock', 'snapTargetInline'],
		},
		Element: {
			link: '#interface-globaleventhandlers',
			mdnGroup: 'DOM',
			members: ['onsnapchanged', 'onsnapchanging'],
		}
	},
};
