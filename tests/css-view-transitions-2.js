export default {
	title: 'CSS View Transitions Module Level 2',
	links: {
		tr: 'css-view-transitions-2',
		dev: 'css-view-transitions-2',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'view-transition-class': {
			links: {
				tr: '#view-transition-class-prop',
				dev: '#view-transition-class-prop',
			},
			tests: [
				'none',
				'test-view-transition',
				'test-view-transition-1 test-view-transition-2',
			],
		},
		'view-transition-group': {
			links: {
				tr: '#view-transition-group-prop',
				dev: '#view-transition-group-prop',
			},
			tests: [
				'normal',
				'contain',
				'nearest',
				'test-view-transition',
			],
		},
		'view-transition-name': {
			links: {
				tr: '#additions-to-vt-name',
				dev: '#additions-to-vt-name',
			},
			tests: [
				'auto',
			],
		},
	},
	selectors: {
		':active-view-transition': {
			links: {
				tr: '#the-active-view-transition-pseudo',
				dev: '#the-active-view-transition-pseudo',
			},
			tests: [
				':active-view-transition',
			],
		},
		':active-view-transition-type()': {
			links: {
				tr: '#the-active-view-transition-type-pseudo',
				dev: '#the-active-view-transition-type-pseudo',
			},
			tests: [
				':active-view-transition(--foo)',
				':active-view-transition(--foo, --bar)'
			],
		},
		'::view-transition-group()': {
			links: {
				tr: '#pseudo-element-class-additions',
				dev: '#pseudo-element-class-additions',
			},
			tests: [
				'::view-transition-group(*.x)',
				'::view-transition-group(*.x.y)',
				'::view-transition-group(test-view-transition.x)',
				'::view-transition-group(test-view-transition.x.y)',
				'::view-transition-group(.x)',
				'::view-transition-group(.x.y)',
			],
		},
		'::view-transition-image-pair()': {
			links: {
				tr: '#pseudo-element-class-additions',
				dev: '#pseudo-element-class-additions',
			},
			tests: [
				'::view-transition-image-pair(*.x)',
				'::view-transition-image-pair(*.x.y)',
				'::view-transition-image-pair(test-view-transition.x)',
				'::view-transition-image-pair(test-view-transition.x.y)',
				'::view-transition-image-pair(.x)',
				'::view-transition-image-pair(.x.y)',
			],
		},
		'::view-transition-old()': {
			links: {
				tr: '#pseudo-element-class-additions',
				dev: '#pseudo-element-class-additions',
			},
			tests: [
				'::view-transition-old(*.x)',
				'::view-transition-old(*.x.y)',
				'::view-transition-old(test-view-transition.x)',
				'::view-transition-old(test-view-transition.x.y)',
				'::view-transition-old(.x)',
				'::view-transition-old(.x.y)',
			],
		},
		'::view-transition-new()': {
			links: {
				tr: '#pseudo-element-class-additions',
				dev: '#pseudo-element-class-additions',
			},
			tests: [
				'::view-transition-new(*.x)',
				'::view-transition-new(*.x.y)',
				'::view-transition-new(test-view-transition.x)',
				'::view-transition-new(test-view-transition.x.y)',
				'::view-transition-new(.x)',
				'::view-transition-new(.x.y)',
			],
		},
		'::view-transition-group-children': {
			links: {
				tr: '#view-transition-group-children-pseudo',
				dev: '#view-transition-group-children-pseudo',
			},
			tests: [
				'::view-transition-group-children(*)',
				'::view-transition-group-children(*.x)',
				'::view-transition-group-children(*.x.y)',
				'::view-transition-group-children(test-view-transition)',
				'::view-transition-group-children(test-view-transition.x)',
				'::view-transition-group-children(test-view-transition.x.y)',
				'::view-transition-group-children(.x)',
				'::view-transition-group-children(.x.y)',
			],
		},
	},
	'@rules': {
		'@view-transition': {
			links: {
				tr: '#view-transition-rule',
				dev: '#view-transition-rule',
			},
			tests: [
				"@view-transition {\n  navigation: auto;\n}",
				"@view-transition {\n  navigation: none;\n}",
				"@view-transition {\n  types: none;\n}",
				"@view-transition {\n  types: test-view-transition;\n}",
				"@view-transition {\n  types: test-view-transition-1 test-view-transition-2;\n}",
			],
		},
	},
	interfaces: {
		CSSViewTransitionRule: {
			links: {
				tr: '#navgation-behavior-rule-interface',
				dev: '#navgation-behavior-rule-interface',
				mdnGroup: 'DOM',
			},
			tests: [
				'navigation',
				'types',
				'cssText',
				'parentRule',
				'parentStyleSheet',
			],
			required: '@view-transition { navigation: auto; }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			},
		},
		ViewTransition: {
			links: {
				tr: '#view-transitions-extension-types',
				dev: '#view-transitions-extension-types',
				mdnGroup: 'DOM',
			},
			tests: ['types'],
			interface: function() {
				return document.startViewTransition();
			},
		},
	},
};
