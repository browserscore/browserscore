export default {
	title: 'CSS View Transitions Module Level 1',
	links: {
		tr: 'css-view-transitions-1',
		dev: 'css-view-transitions-1',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'view-transition-name': {
			links: {
				tr: '#view-transition-name-prop',
				dev: '#view-transition-name-prop',
			},
			tests: ['none', '--view-transition'],
		},
	},
	selectors: {
		'::view-transition': {
			links: {
				tr: '#selectordef-view-transition',
				dev: '#selectordef-view-transition',
			},
			tests: ['::view-transition'],
		},
		'::view-transition-group()': {
			links: {
				tr: '#selectordef-view-transition-group-pt-name-selector',
				dev: '#selectordef-view-transition-group-pt-name-selector',
			},
			tests: [
				'::view-transition-group(*)',
				'::view-transition-group(--foo)',
			],
		},
		'::view-transition-image-pair()': {
			links: {
				tr: '#selectordef-view-transition-image-pair-pt-name-selector',
				dev: '#selectordef-view-transition-image-pair-pt-name-selector',
			},
			tests: [
				'::view-transition-image-pair(*)',
				'::view-transition-image-pair(--foo)',
			],
		},
		'::view-transition-new()': {
			links: {
				tr: '#selectordef-view-transition-new-pt-name-selector',
				dev: '#selectordef-view-transition-new-pt-name-selector',
			},
			tests: [
				'::view-transition-new(*)',
				'::view-transition-new(--foo)',
			],
		},
		'::view-transition-old()': {
			links: {
				tr: '#selectordef-view-transition-old-pt-name-selector',
				dev: '#selectordef-view-transition-old-pt-name-selector',
			},
			tests: [
				'::view-transition-old(*)',
				'::view-transition-old(--foo)',
			],
		},
	},
};
