export default {
	id: 'css2-text',
	title: 'CSS 2 Text',
	link: 'css2/',
	specLink: 'CSS22/text.html',
	status: 'stable',
	version: 2.2,
	properties: {
		'letter-spacing': {
			link: '#propdef-letter-spacing',
			tests: ['normal', '10px'],
		},
		'text-align': {
			link: '#alignment-prop',
			tests: ['left', 'right', 'center', 'justify'],
		},
		'text-decoration': {
			link: '#lining-striking-props',
			tests: [
				'none',
				'underline',
				'overline',
				'line-through',
				'blink',
				'underline overline',
				'underline overline line-through',
			],
		},
		'text-indent': {
			link: '#indentation-prop',
			tests: ['10px', '10%'],
		},
		'text-transform': {
			link: '#caps-prop',
			tests: ['none', 'capitalize', 'uppercase', 'lowercase'],
		},
		'white-space': {
			link: '#white-space-prop',
			tests: ['normal', 'pre', 'nowrap', 'pre-wrap', 'pre-line'],
		},
		'word-spacing': {
			link: '#propdef-word-spacing',
			tests: ['normal', '10px'],
		},
	},
};
