export default {
	id: 'css-view-transitions-1',
	title: 'CSS View Transitions Module Level 1',
	link: 'css-view-transitions-1',
	status: 'stable',
	properties: {
		'view-transition-name': {
			link: '#view-transition-name-prop',
			tests: ['none', '--view-transition'],
		},
	},
	selectors: {
		'::view-transition': {
			link: '#selectordef-view-transition',
			tests: ['::view-transition'],
		},
		'::view-transition-group()': {
			link: '#selectordef-view-transition-group-pt-name-selector',
			tests: ['::view-transition-group(*)', '::view-transition-group(--foo)'],
		},
		'::view-transition-image-pair()': {
			link: '#selectordef-view-transition-image-pair-pt-name-selector',
			tests: ['::view-transition-image-pair(*)', '::view-transition-image-pair(--foo)'],
		},
		'::view-transition-new()': {
			link: '#selectordef-view-transition-new-pt-name-selector',
			tests: ['::view-transition-new(*)', '::view-transition-new(--foo)'],
		},
		'::view-transition-old()': {
			link: '#selectordef-view-transition-old-pt-name-selector',
			tests: ['::view-transition-old(*)', '::view-transition-old(--foo)'],
		},
	},
	globals: {
		document: {
			link: '#additions-to-document-api',
			mdnGroup: 'DOM',
			functions: ['startViewTransition'],
		},
		ViewTransition: {
			link: '#the-domtransition-interface',
			mdnGroup: 'DOM',
			members: ['updateCallbackDone', 'ready', 'finished'],
			methods: ['skipTransition'],
		},
	},
};
