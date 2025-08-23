export default {
	title: 'CSS Regions Module Level 1',
	link: 'css-regions-1',
	status: {
		stability: 'experimental',
	},
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
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['namedFlows'],
			interface: function() {
				return document;
			}
		},
		Element: {
			link: '#the-region-interface',
			links: {
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
