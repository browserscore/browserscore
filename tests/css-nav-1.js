export default {
	title: 'CSS Spatial Navigation Level 1',
	link: 'css-nav-1',
	status: {
		stability: 'experimental',
	},
	properties: {
		'spatial-navigation-action': {
			link: '#css-property-spatialnavigationaction',
			tests: ['auto', 'focus', 'scroll'],
		},
		'spatial-navigation-contain': {
			link: '#container',
			tests: ['auto', 'contain'],
		},
		'spatial-navigation-function': {
			link: '#css-property-spatialnavigationfunction',
			tests: ['normal', 'grid'],
		},
	},
	interfaces: {
		Window: {
			link: '#high-level-api',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['navigate'],
			interface: function() {
				return window;
			}
		},
		Element: {
			link: '#low-level-api',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['getSpatialNavigationContainer', 'focusableAreas', 'spatialNavigationSearch'],
			interface: function() {
				return document.body;
			}
		},
		NavigationEvent: {
			link: '#events-navigationevent',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['dir', 'relatedTarget'],
			interface: function() {
				return new NavigationEvent('navbeforefocus');
			}
		},
	},
};
