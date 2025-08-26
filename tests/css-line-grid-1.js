export default {
	title: 'CSS Line Grid Module Level 1',
	link: 'css-line-grid-1',
	status: 'experimental',
	properties: {
		'box-snap': {
			link: '#box-snap',
			tests: ['none', 'block-start', 'block-end', 'center', 'baseline', 'last-baseline'],
		},
		'line-grid': {
			link: '#line-grid',
			tests: ['match-parent', 'create'],
		},
		'line-snap': {
			link: '#line-snap',
			tests: ['none', 'baseline', 'contain'],
		},
	},
};
