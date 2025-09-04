export default {
	id: 'css-nav-1',
	title: 'CSS Spatial Navigation Level 1',
	link: 'css-nav-1',
	status: 'experimental',
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
	globals: {
		window: {
			link: '#high-level-api',
			mdnGroup: 'DOM',
			functions: ['navigate'],
		},
		Element: {
			link: '#low-level-api',
			mdnGroup: 'DOM',
			methods: ['getSpatialNavigationContainer', 'focusableAreas', 'spatialNavigationSearch'],
		},
		NavigationEvent: {
			link: '#events-navigationevent',
			mdnGroup: 'DOM',
			extends: 'UIEvent',
			properties: ['dir', 'relatedTarget'],
		},
	},
};
