export default {
	title: 'CSS Conditional Rules Module Level 3',
	links: {
		tr: 'css3-conditional',
		dev: 'css-conditional-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
	},
	'@rules': {
		'@supports': {
			links: {
				tr: '#at-supports',
				dev: '#at-supports',
			},
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
			links: {
				tr: '#extensions-to-cssrule-interface',
				dev: '#extensions-to-cssrule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['SUPPORTS_RULE'],
			required: 'div { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSConditionRule: {
			links: {
				tr: '#the-cssconditionrule-interface',
				dev: '#the-cssconditionrule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['conditionText', 'cssRules', 'insertRule', 'deleteRule'],
			required: '@supports (color: green) { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSMediaRule: {
			links: {
				tr: '#the-cssmediarule-interface',
				dev: '#the-cssmediarule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['media', 'conditionText'],
			required: '@media (min-width: 500px) { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSSupportsRule: {
			links: {
				tr: '#the-csssupportsrule-interface',
				dev: '#the-csssupportsrule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['conditionText'],
			required: '@supports (display: grid) { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSS: {
			links: {
				tr: '#the-css-namespace',
				dev: '#the-css-namespace',
				mdnGroup: 'DOM',
			},
			tests: ['supports'],
			interface: function() {
				return CSS;
			}
		},
	},
};
