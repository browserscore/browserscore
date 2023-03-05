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
	interfaces: {
		Document: {
			links: {
				tr: '#the-namedflow-interface',
				dev: '#the-namedflow-interface',
				mdnGroup: 'DOM',
			},
			tests: ['namedFlows'],
			interface: function() {
				return document;
			}
		},
		Element: {
			links: {
				tr: '#the-region-interface',
				dev: '#the-region-interface',
				mdnGroup: 'DOM',
			},
			tests: ['regionOverset', 'getRegionFlowRanges'],
			interface: function() {
				return document.body;
			}
		},
		NamedFlowMap: {
			links: {
				dev: '#namedflowmap',
				mdnGroup: 'DOM',
			},
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
			links: {
				dev: '#namedflow',
				mdnGroup: 'DOM',
			},
			tests: [
				'name',
				'overset',
				'getRegions',
				'firstEmptyRegionIndex',
				'getContent',
				'getRegionsByContent',
			],
			required: 'div { flow-from: --named-flow; }',
			interface: function() {
				return document.namedFlows.get('--named-flow');
			}
		},
	},
};
