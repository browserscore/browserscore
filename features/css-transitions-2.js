export default {
	id: 'css-transitions-2',
	title: 'CSS Transitions 2',
	link: 'css-transitions-2',
	status: 'experimental',
	atrules: {
		'@starting-style': {
			link: '#defining-before-change-style-the-starting-style-rule',
		},
	},
	properties: {
		'transition-behavior': {
			link: '#transition-behavior-property',
			tests: ['normal', 'allow-discrete'],
		},
	},
	globals: {
		CSSStartingStyleRule: {
			link: '#the-cssstartingstylerule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSGroupingRule',
		},
		CSSTransition: {
			link: '#the-CSSTransition-interface',
			mdnGroup: 'DOM',
			extends: 'Animation',
			members: ['transitionProperty'],
		},
	},
};
