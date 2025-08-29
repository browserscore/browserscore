export default {
	title: 'CSS Conditional Rules Module Level 3',
	links: {
		tr: 'css3-conditional',
		dev: 'css-conditional-3',
	},
	status: 'stable',
	firstSnapshot: 2015,
	atrules: {
		'@supports': {
			link: '#at-supports',
			tests: [
				'@supports (color: green) {}',
				'@supports not (foo: bar) {}',
				'@supports (color: green) or (color: red) {}',
				'@supports (color: green) and (color: red) {}',
				'@supports (color: green) and (not (foo: bar)) {}',
				'@supports (color: green) or (not (foo: bar)) {}',
			],
		},
	},
	interfaces: {
		CSSRule: {
			link: '#extensions-to-cssrule-interface',
			mdnGroup: 'DOM',
			tests: ['SUPPORTS_RULE'],
		},
		CSSConditionRule: {
			link: '#the-cssconditionrule-interface',
			mdnGroup: 'DOM',
			tests: ['conditionText', 'cssRules', 'insertRule', 'deleteRule'],
		},
		CSSMediaRule: {
			link: '#the-cssmediarule-interface',
			mdnGroup: 'DOM',
			tests: ['media', 'matches', 'conditionText'],
		},
		CSSSupportsRule: {
			link: '#the-csssupportsrule-interface',
			mdnGroup: 'DOM',
			tests: ['matches', 'conditionText'],
		},
		CSS: {
			link: '#the-css-namespace',
			mdnGroup: 'DOM',
			tests: ['supports'],
			interface: function() {
				return CSS;
			}
		},
	},
};
