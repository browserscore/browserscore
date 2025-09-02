export default {
	id: 'css-properties-values-api-1',
	title: 'CSS Properties and Values API Level 1',
	link: 'css-properties-values-api-1',
	group: 'houdini',
	status: 'experimental',
	atrules: {
		'@property': {
			link: '#at-property-rule',
			prelude: '--foo',
			preludeRequired: true,
			contents: 'syntax: "*"; inherits: true;'
		},
	},
	interfaces: {
		CSS: {
			link: '#registering-custom-properties',
			mdnGroup: 'DOM',
			tests: ['registerProperty'],
			interface: function() {
				return CSS;
			},
		},
		CSSPropertyRule: {
			link: '#the-css-property-rule-interface',
			mdnGroup: 'DOM',
			tests: ['name', 'syntax', 'inherits', 'initialValue'],
		},
	},
};
