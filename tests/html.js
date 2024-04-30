export default {
	title: 'HTML Living Standard',
	links: {
		dev: 'html',
		devtype: 'whatwg',
	},
	status: {
		stability: 'experimental',
	},
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
};
