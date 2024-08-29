export default {
	title: 'Selectors Level 5',
	links: {
		tr: 'selectors-5',
		dev: 'selectors-5',
	},
	status: {
		stability: 'experimental',
	},
	selectors: {
		':local-link()': {
			links: {
				tr: '#local-pseudo',
				dev: '#local-pseudo',
			},
			tests: [
				':local-link(1)',
			],
		},
		':state()': {
			links: {
				tr: '#custom-state',
				dev: '#custom-state',
			},
			tests: [':state(stuck)'],
		},
		'Reference selector': {
			links: {
				tr: '#idref-combinators',
				dev: '#idref-combinators',
			},
			tests: [
				'label /for/ input',
			],
		},
	},
};
