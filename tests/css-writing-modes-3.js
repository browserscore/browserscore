export default {
	title: 'CSS Writing Modes Level 3',
	links: {
		tr: 'css-writing-modes-3',
		dev: 'css-writing-modes-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2017,
	},
	properties: {
		'unicode-bidi': {
			links: {
				tr: '#unicode-bidi',
				dev: '#unicode-bidi',
			},
			tests: ['isolate', 'isolate-override', 'plaintext'],
		},
		'writing-mode': {
			links: {
				tr: '#block-flow',
				dev: '#block-flow',
			},
			tests: ['horizontal-tb', 'vertical-rl', 'vertical-lr'],
		},
		'text-orientation': {
			links: {
				tr: '#text-orientation',
				dev: '#text-orientation',
			},
			tests: ['mixed', 'upright', 'sideways'],
		},
		'text-combine-upright': {
			links: {
				tr: '#text-combine-upright',
				dev: '#text-combine-upright',
			},
			tests: ['none', 'all'],
		},
	},
};
