export default {
	title: 'CSS Display Module Level 4',
	links: {
		tr: 'css-display-4',
		dev: 'css-display-4',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'reading-flow': {
			links: {
				tr: '#propdef-reading-flow',
				dev: '#propdef-reading-flow',
			},
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
			links: {
				tr: '#propdef-reading-order',
				dev: '#propdef-reading-order',
			},
			tests: [
				'-1',
				'0',
				'1',
			],
		},
	},
};
