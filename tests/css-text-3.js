export default {
	title: 'CSS Text Module Level 3',
	link: 'css-text-3',
	status: 'stable',
	properties: {
		'text-transform': {
			links: {
				tr: '#text-transform',
				dev: '#text-transform-property',
			},
			tests: ['full-width', 'full-size-kana', 'capitalize full-width', 'capitalize full-width full-size-kana'],
		},
		'tab-size': {
			link: '#tab-size-property',
			tests: ['4', '1em'],
		},
		'line-break': {
			link: '#line-break-property',
			tests: ['auto', 'loose', 'normal', 'strict', 'anywhere'],
		},
		'word-break': {
			link: '#word-break-property',
			tests: ['normal', 'keep-all', 'break-all'],
		},
		'white-space': {
			link: '#white-space-property',
			tests: ['break-spaces'],
		},
		hyphens: {
			link: '#hyphenation',
			tests: ['auto', 'manual', 'none'],
		},
		'overflow-wrap': {
			link: '#overflow-wrap-property',
			tests: ['normal', 'break-word', 'anywhere'],
		},
		'word-wrap': {
			link: '#overflow-wrap-property',
			tests: ['normal', 'break-word', 'anywhere'],
		},
		'text-align': {
			link: '#text-align-property',
			tests: ['start', 'end', 'match-parent', 'justify-all'],
		},
		'text-align-all': {
			link: '#text-align-all-property',
			tests: ['start', 'end', 'left', 'right', 'center', 'justify', 'match-parent'],
		},
		'text-align-last': {
			link: '#text-align-last-property',
			tests: ['auto', 'start', 'end', 'left', 'right', 'center', 'justify', 'match-parent'],
		},
		'text-justify': {
			link: '#text-justify-property',
			tests: ['auto', 'none', 'inter-word', 'inter-character'],
		},
		'word-spacing': {
			link: '#word-spacing-property',
			tests: ['50%'],
		},
		'text-indent': {
			link: '#text-indent-property',
			tests: ['1em hanging', '1em each-line', '1em hanging each-line'],
		},
		'hanging-punctuation': {
			link: '#hanging-punctuation-property',
			tests: [
				'none',
				'first',
				'last',
				'force-end',
				'allow-end',
				'first last',
				'first force-end',
				'first force-end last',
				'first allow-end last',
			],
		},
	},
};
