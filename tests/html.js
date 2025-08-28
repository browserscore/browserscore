export default {
	title: 'HTML Living Standard',
	link: 'html',
	group: 'whatwg',
	status: 'experimental',
	selectors: {
		':autofill': {
			link: '#selector-autofill',
			tests: ':autofill',
		},
		':popover-open': {
			link: '#selector-popover-open',
			tests: ':popover-open',
		},
		':state()': {
			link: '#selector-custom',
			tests: ':state(checked)',
		},
	},
	interfaces: {
		PageRevealEvent: {
			link: '#the-pagerevealevent-interface',
			mdnGroup: 'DOM',
			tests: ['viewTransition'],
			interface: function() {
				return new PageRevealEvent('reveal');
			},
		},
	}
};
