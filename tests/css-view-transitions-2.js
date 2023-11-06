export default {
	title: 'CSS View Transitions Module Level 2',
	links: {
		dev: 'css-view-transitions-2',
	},
	status: {
		stability: 'experimental',
	},
	selectors: {
		':active-view-transition()': {
			links: {
				dev: '#the-active-view-transition-pseudo',
			},
			tests: [
				':active-view-transition(*)',
				':active-view-transition(--foo)',
				':active-view-transition(--foo, --bar)'
			],
		},
	},
	'@rules': {
		'@view-transition': {
			links: {
				dev: '#view-transition-rule',
			},
			tests: [
				"@view-transition {\n  navigation: auto;\n}",
				"@view-transition {\n  navigation: none;\n}",
				"@view-transition {\n  type: --test-view-transition;\n}",
				"@view-transition {\n  type: --test-view-transition-1 --test-view-transition-2;\n}",
			],
		},
	},
	interfaces: {
		CSSRule: {
			links: {
				dev: '#extensions-to-cssrule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['VIEW_TRANSITION_RULE'],
			interface: function() {
				return CSSRule;
			},
		},
		CSSViewTransitionRule: {
			links: {
				dev: '#navgation-behavior-rule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['navigationConditionText', 'trigger'],
			required: '@view-transition same-origin { trigger: navigation; }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			},
		},
		RevealEvent: {
			links: {
				dev: '#ready-to-render-event',
				mdnGroup: 'DOM',
			},
			tests: ['RevealEvent'],
		},
	},
};
