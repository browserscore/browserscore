export default {
	title: 'CSS Spatial Navigation Level 1',
	links: {
		tr: 'css-nav-1',
		dev: 'css-nav-1',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'spatial-navigation-action': {
			links: {
				tr: '#css-property-spatialnavigationaction',
				dev: '#css-property-spatialnavigationaction',
			},
			tests: ['auto', 'focus', 'scroll'],
		},
		'spatial-navigation-contain': {
			links: {
				tr: '#container',
				dev: '#container',
			},
			tests: ['auto', 'contain'],
		},
		'spatial-navigation-function': {
			links: {
				tr: '#css-property-spatialnavigationfunction',
				dev: '#css-property-spatialnavigationfunction',
			},
			tests: ['normal', 'grid'],
		},
	},
	interfaces: {
		Window: {
			links: {
				tr: '#high-level-api',
				dev: '#high-level-api',
				mdnGroup: 'DOM',
			},
			tests: ['navigate'],
			interface: function() {
				return window;
			}
		},
		Element: {
			links: {
				tr: '#low-level-api',
				dev: '#low-level-api',
				mdnGroup: 'DOM',
			},
			tests: ['getSpatialNavigationContainer', 'focusableAreas', 'spatialNavigationSearch'],
			interface: function() {
				return document.body;
			}
		},
		NavigationEvent: {
			links: {
				tr: '#events-navigationevent',
				dev: '#events-navigationevent',
				mdnGroup: 'DOM',
			},
			tests: ['dir', 'relatedTarget'],
			interface: function() {
				return new NavigationEvent('navbeforefocus');
			}
		},
	},
};
