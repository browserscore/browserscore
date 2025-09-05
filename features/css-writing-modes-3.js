export default {
	id: 'css-writing-modes-3',
	title: 'CSS Writing Modes Level 3',
	link: 'css-writing-modes-3',
	status: 'stable',
	firstSnapshot: 2017,
	properties: {
		'unicode-bidi': {
			link: '#unicode-bidi',
			tests: ['isolate', 'isolate-override', 'plaintext'],
		},
		'writing-mode': {
			link: '#block-flow',
			tests: ['horizontal-tb', 'vertical-rl', 'vertical-lr'],
		},
		'text-orientation': {
			link: '#text-orientation',
			tests: ['mixed', 'upright', 'sideways'],
		},
		'text-combine-upright': {
			link: '#text-combine-upright',
			tests: ['none', 'all'],
		},
	},
};
