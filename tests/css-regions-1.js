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
		Document: {
			link: '#the-namedflow-interface',
			mdnGroup: 'DOM',
			tests: ['namedFlows'],
			interface: function() {
				return document;
			}
		},
		Element: {
			link: '#the-region-interface',
			mdnGroup: 'DOM',
			tests: ['regionOverset', 'getRegionFlowRanges'],
			interface: function() {
				return document.body;
			}
		},
		NamedFlowMap: {
			link: '#namedflowmap',
			mdnGroup: 'DOM',
			tests: [
				'has',
				'get',
				'set',
				'keys',
				'values',
				'entries',
				'forEach',
			],
			interface: function() {
				return document.namedFlows;
			}
		},
		NamedFlow: {
			link: '#namedflow',
			mdnGroup: 'DOM',
			tests: [
				'name',
				'overset',
				'getRegions',
				'firstEmptyRegionIndex',
				'getContent',
				'getRegionsByContent',
			],
			interface: function() {
				return document.namedFlows.get('--named-flow');
			}
		},
	},
};
