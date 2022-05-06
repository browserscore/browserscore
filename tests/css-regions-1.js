export default {
	title: 'CSS Regions Module Level 1',
	links: {
		tr: 'css-regions-1',
		dev: 'css-regions-1',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'flow-from': {
			links: {
				tr: '#flow-from',
				dev: '#flow-from',
			},
			tests: ['none', 'named-flow'],
		},
		'flow-into': {
			links: {
				tr: '#the-flow-into-property',
				dev: '#the-flow-into-property',
			},
			tests: ['none', 'named-flow', 'named-flow element', 'named-flow content'],
		},
		'region-fragment': {
			links: {
				tr: '#the-region-fragment-property',
				dev: '#the-region-fragment-property',
			},
			tests: ['auto', 'break'],
		},
	},
};
