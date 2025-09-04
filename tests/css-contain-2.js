export default {
	id: 'css-contain-2',
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
			link: 'https://drafts.csswg.org/css-contain/#content-visibility-auto-state-change',
			mdnGroup: 'DOM',
			extends: 'Event',
			members: ['skipped'],
		},
	}
};
