export default {
	title: 'CSS Text Module Level 4',
	links: {
		tr: 'css-text-4',
		dev: 'css-text-4',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'text-space-collapse': {
			links: {
				tr: '#white-space-collapsing',
				dev: '#white-space-collapsing',
			},
			tests: ['collapse', 'discard', 'preserve', 'preserve-breaks', 'preserve-spaces'],
		},
		'text-space-trim': {
			links: {
				tr: '#white-space-trim',
				dev: '#white-space-trim',
			},
			tests: [
				'none',
				'trim-inner',
				' discard-before',
				'discard-after',
				'trim-inner discard-before',
				'trim-inner discard-before discard-after',
			],
		},
		'text-wrap': {
			links: {
				tr: '#text-wrap',
				dev: '#text-wrap',
			},
			tests: ['wrap', 'nowrap', 'balance '],
		},
		'wrap-before': {
			links: {
				tr: '#wrap-before',
				dev: '#wrap-before',
			},
			tests: ['auto', 'avoid', 'avoid-line', 'avoid-flex', 'line', 'flex'],
		},
		'wrap-after': {
			links: {
				tr: '#wrap-before',
				dev: '#wrap-before',
			},
			tests: ['auto', 'avoid', 'avoid-line', 'avoid-flex', 'line', 'flex'],
		},
		'wrap-inside': {
			links: {
				tr: '#wrap-inside',
				dev: '#wrap-inside',
			},
			tests: ['auto', 'avoid'],
		},
		'hyphenate-character': {
			links: {
				tr: '#hyphenate-character',
				dev: '#hyphenate-character',
			},
			tests: ['auto', "'\\2010'"],
		},
		'hyphenate-limit-zone': {
			links: {
				tr: '#hyphenate-size-limits',
				dev: '#hyphenate-size-limits',
			},
			tests: ['1%', '1em'],
		},
		'hyphenate-limit-chars': {
			links: {
				tr: '#hyphenate-char-limits',
				dev: '#hyphenate-char-limits',
			},
			tests: ['auto', '5', 'auto 3', '5 4 3'],
		},
		'hyphenate-limit-lines': {
			links: {
				tr: '#hyphenate-line-limits',
				dev: '#hyphenate-line-limits',
			},
			tests: ['no-limit', '2'],
		},
		'hyphenate-limit-last': {
			links: {
				tr: '#hyphenate-line-limits',
				dev: '#hyphenate-line-limits',
			},
			tests: ['none', 'always', 'column', 'page', 'spread'],
		},
	},
};
