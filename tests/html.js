export default {
	title: 'HTML Living Standard',
	link: 'html',
	group: 'whatwg',
	status: 'experimental',
	selectors: {
		':autofill': {
			links: {
				dev: '#selector-autofill',
			},
			tests: ':autofill',
		},
		':popover-open': {
			links: {
				dev: '#selector-popover-open',
			},
			tests: ':popover-open',
		},
		':state()': {
			links: {
				dev: '#selector-custom',
			},
			tests: ':state(checked)',
		},
	},
	interfaces: {
		PageRevealEvent: {
			links: {
				dev: '#the-pagerevealevent-interface',
				mdnGroup: 'DOM',
			},
			tests: ['viewTransition'],
			interface: function() {
				return new PageRevealEvent('reveal');
			},
		},
	}
};
