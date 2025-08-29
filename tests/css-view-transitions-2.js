export default {
	title: 'CSS View Transitions Module Level 2',
	link: 'css-view-transitions-2',
	status: 'experimental',
	properties: {
		'view-transition-class': {
			link: '#view-transition-class-prop',
			tests: [
				'none',
				'test-view-transition',
				'test-view-transition-1 test-view-transition-2',
			],
		},
		'view-transition-group': {
			link: '#view-transition-group-prop',
			tests: [
				'normal',
				'contain',
				'nearest',
				'test-view-transition',
			],
		},
		'view-transition-name': {
			link: '#additions-to-vt-name',
			tests: [
				'auto',
			],
		},
	},
	selectors: {
		':active-view-transition': {
			link: '#the-active-view-transition-pseudo',
			tests: [
				':active-view-transition',
			],
		},
		':active-view-transition-type()': {
			link: '#the-active-view-transition-type-pseudo',
			tests: [
				':active-view-transition(--foo)',
				':active-view-transition(--foo, --bar)'
			],
		},
		'::view-transition-group()': {
			link: '#pseudo-element-class-additions',
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
			link: '#pseudo-element-class-additions',
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
			link: '#pseudo-element-class-additions',
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
			link: '#pseudo-element-class-additions',
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
			link: '#view-transition-group-children-pseudo',
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
	atrules: {
		'@view-transition': {
			link: '#view-transition-rule',
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
			link: '#navgation-behavior-rule-interface',
			mdnGroup: 'DOM',
			tests: [
				'navigation',
				'types',
				'cssText',
				'parentRule',
				'parentStyleSheet',
			],
		},
		ViewTransition: {
			link: '#view-transitions-extension-types',
			mdnGroup: 'DOM',
			tests: ['types'],
			interface: function() {
				return ViewTransition.prototype;
			},
		},
	},
};
