export default {
	id: 'css-display-4',
	title: 'CSS Display Module Level 4',
	link: 'css-display-4',
	status: 'experimental',
	properties: {
		'reading-flow': {
			link: '#propdef-reading-flow',
			tests: [
				'normal',
				'source-order',
				'flex-visual',
				'flex-flow',
				'grid-rows',
				'grid-columns',
				'grid-order',
			],
		},
		'reading-order': {
			link: '#propdef-reading-order',
			tests: [
				'-1',
				'0',
				'1',
			],
		},
	},
};
