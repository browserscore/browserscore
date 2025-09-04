export default {
	id: 'css-regions-1',
	title: 'CSS Regions Module Level 1',
	link: 'css-regions-1',
	status: 'experimental',
	properties: {
		'flow-from': {
			link: '#flow-from',
			tests: ['none', 'named-flow'],
		},
		'flow-into': {
			link: '#the-flow-into-property',
			tests: ['none', 'named-flow', 'named-flow element', 'named-flow content'],
		},
		'region-fragment': {
			link: '#the-region-fragment-property',
			tests: ['auto', 'break'],
		},
	},
	interfaces: {
		document: {
			link: '#the-namedflow-interface',
			mdnGroup: 'DOM',
			properties: ['namedFlows'],
		},
		Element: {
			link: '#the-region-interface',
			mdnGroup: 'DOM',
			members: ['regionOverset'],
			methods: ['getRegionFlowRanges'],
		},
		NamedFlowMap: {
			link: '#namedflowmap',
			mdnGroup: 'DOM',
		},
		NamedFlow: {
			link: '#namedflow',
			mdnGroup: 'DOM',
			extends: 'EventTarget',
			members: [
				'name',
				'overset',
				'firstEmptyRegionIndex',
			],
			methods: ['getRegions', 'getContent', 'getRegionsByContent'],
		},
	},
};
