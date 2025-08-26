export default {
	title: 'CSS Conditional Rules Module Level 3',
	links: {
		tr: 'css3-conditional',
		dev: 'css-conditional-3',
	},
	status: 'stable',
	firstSnapshot: 2015,
	'@rules': {
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
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['SUPPORTS_RULE'],
			required: 'div { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSConditionRule: {
			link: '#the-cssconditionrule-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['conditionText', 'cssRules', 'insertRule', 'deleteRule'],
			required: '@supports (color: green) { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSMediaRule: {
			link: '#the-cssmediarule-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['media', 'matches', 'conditionText'],
			required: '@media (min-width: 500px) { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSSupportsRule: {
			link: '#the-csssupportsrule-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['matches', 'conditionText'],
			required: '@supports (display: grid) { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSS: {
			link: '#the-css-namespace',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['supports'],
			interface: function() {
				return CSS;
			}
		},
	},
};
