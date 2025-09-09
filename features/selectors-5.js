export default {
	id: 'selectors-5',
	title: 'Selectors Level 5',
	link: 'selectors-5',
	status: 'experimental',
	selectors: {
		':local-link()': {
			link: '#local-pseudo',
			tests: [
				':local-link(1)',
			],
		},
		':state()': {
			link: '#custom-state',
			tests: [':state(stuck)'],
		},
		'Reference selector': {
			link: '#idref-combinators',
			tests: [
				'label /for/ input',
			],
		},
	},
};
