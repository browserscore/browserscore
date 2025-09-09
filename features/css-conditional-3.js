export default {
	id: 'css-conditional-3',
	title: 'CSS Conditional Rules Module Level 3',
	link: 'css-conditional-3',
	specLink: 'css3-conditional',
	status: 'stable',
	firstSnapshot: 2015,
	atrules: {
		'@supports': {
			link: '#at-supports',
			preludeRequired: true,
			preludes: [
				'(color: green)',
				'not (color: green)',
				'(color: green) or (color: red)',
				'(color: green) and (color: red)',
				'(color: green) and (not (foo: bar))',
				'(color: green) or (not (foo: bar))',
			],
		},
	},
	globals: {
		CSSRule: {
			link: '#extensions-to-cssrule-interface',
			mdnGroup: 'DOM',
			properties: ['SUPPORTS_RULE'],
		},
		CSSConditionRule: {
			link: '#the-cssconditionrule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSGroupingRule',
			members: ['conditionText'],
		},
		CSSMediaRule: {
			link: '#the-cssmediarule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSConditionRule',
			members: ['media', 'matches'],
		},
		CSSSupportsRule: {
			link: '#the-csssupportsrule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSConditionRule',
			members: ['matches'],
		},
		CSS: {
			link: '#the-css-namespace',
			mdnGroup: 'DOM',
			properties: ['supports'],
		},
	},
};
