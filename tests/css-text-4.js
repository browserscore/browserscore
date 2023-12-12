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
		'hyphenate-character': {
			links: {
				tr: '#hyphenate-character',
				dev: '#hyphenate-character',
			},
			tests: ['auto', "'\\2010'"],
		},
		'hyphenate-limit-chars': {
			links: {
				tr: '#hyphenate-char-limits',
				dev: '#hyphenate-char-limits',
			},
			tests: ['auto', '5', 'auto 3', '5 4 3'],
		},
		'hyphenate-limit-last': {
			links: {
				tr: '#hyphenate-line-limits',
				dev: '#hyphenate-line-limits',
			},
			tests: ['none', 'always', 'column', 'page', 'spread'],
		},
		'hyphenate-limit-lines': {
			links: {
				tr: '#hyphenate-line-limits',
				dev: '#hyphenate-line-limits',
			},
			tests: ['no-limit', '2'],
		},
		'hyphenate-limit-zone': {
			links: {
				tr: '#hyphenate-size-limits',
				dev: '#hyphenate-size-limits',
			},
			tests: ['1%', '1em'],
		},
		'letter-spacing': {
			links: {
				tr: '#letter-spacing-property',
				dev: '#letter-spacing-property',
			},
			tests: ['1%'],
		},
		'line-padding': {
			links: {
				tr: '#line-padding-property',
				dev: '#line-padding-property',
			},
			tests: ['1em'],
		},
		'text-align': {
			links: {
				tr: '#text-align-property',
				dev: '#text-align-property',
			},
			tests: ['"a"'],
		},
		'text-align-all': {
			links: {
				tr: '#text-align-all-property',
				dev: '#text-align-all-property',
			},
			tests: ['"a"'],
		},
		'text-autospace': {
			links: {
				tr: '#text-autospace-property',
				dev: '#text-autospace-property',
			},
			tests: [
				'normal',
				'no-autospace',
				'ideograph-alpha',
				'ideograph-numeric',
				'punctuation',
				'ideograph-alpha punctuation',
				'ideograph-alpha ideograph-numeric punctuation',
				'insert',
				'replace',
				'ideograph-alpha insert',
				'ideograph-alpha replace',
				'auto',
			],
		},
		'text-group-align': {
			links: {
				tr: '#text-group-align-property',
				dev: '#text-group-align-property',
			},
			tests: ['none', 'start', 'end', 'left', 'right', 'center'],
		},
		'text-justify': {
			links: {
				tr: '#text-justify-property',
				dev: '#text-justify-property',
			},
			tests: ['ruby', 'no-compress', 'inter-word no-compress'],
		},
		'text-spacing': {
			links: {
				tr: '#text-spacing-property',
				dev: '#text-spacing-property',
			},
			tests: [
				'normal',
				'none',
				'auto',
				'space-all',
				'trim-auto',
				'allow-end',
				'space-first',
				'allow-end space-first',
				'trim-all',
				'no-autospace',
				'ideograph-alpha',
				'ideograph-numeric',
				'punctuation',
				'ideograph-alpha punctuation',
				'ideograph-alpha ideograph-numeric punctuation',
				'insert',
				'replace',
				'ideograph-alpha insert',
				'ideograph-alpha replace',
				'trim-auto no-autospace',
			],
		},
		'text-spacing-trim': {
			links: {
				tr: '#text-spacing-property',
				dev: '#text-spacing-property',
			},
			tests: [
				'space-all',
				'trim-auto',
				'allow-end',
				'space-first',
				'allow-end space-first',
				'trim-all',
			],
		},
		'text-wrap': {
			links: {
				tr: '#text-wrap-shorthand',
				dev: '#text-wrap-shorthand',
			},
			tests: [
				'wrap',
				'nowrap',
				"auto",
				"balance",
				"stable",
				"pretty",
				"nowrap pretty",
				"wrap balance",
			],
		},
		'text-wrap-mode': {
			links: {
				tr: '#text-wrap-mode',
				dev: '#text-wrap-mode',
			},
			tests: ['wrap', 'nowrap'],
		},
		'text-wrap-style': {
			links: {
				tr: '#text-wrap-style',
				dev: '#text-wrap-style',
			},
			tests: ['auto', 'balance', 'stable', 'pretty'],
		},
		'white-space': {
			links: {
				tr: '#white-space-property',
				dev: '#white-space-property',
			},
			tests: [
				'collapse',
				'discard',
				'preserve',
				'preserve-breaks',
				'preserve-spaces',
				'break-spaces',
				'wrap',
				'none',
				'discard-before',
				'discard-after',
				'discard-inner',
				'discard-before discard-inner',
				'discard-inner discard-before discard-after',
			],
		},
		'white-space-collapse': {
			links: {
				tr: '#white-space-collapsing',
				dev: '#white-space-collapsing',
			},
			tests: [
				'collapse',
				'discard',
				'preserve',
				'preserve-breaks',
				'preserve-spaces',
				'break-spaces',
			],
		},
		'white-space-trim': {
			links: {
				tr: '#white-space-trim',
				dev: '#white-space-trim',
			},
			tests: [
				'none',
				'discard-before',
				'discard-after',
				'discard-inner',
				'discard-before discard-inner',
				'discard-inner discard-before discard-after',
			],
		},
		'word-break': {
			links: {
				tr: '#word-break-property',
				dev: '#word-break-property',
			},
			tests: ['manual', 'auto-phrase'],
		},
		'word-space-transform': {
			links: {
				tr: '#word-space-transform',
				dev: '#word-space-transform',
			},
			tests: [
				'none',
				'space',
				'ideographic-space',
				'space auto-phrase',
				'ideographic-space auto-phrase',
			],
		},
		'word-spacing': {
			links: {
				tr: '#word-spacing-property',
				dev: '#word-spacing-property',
			},
			tests: ['1%'],
		},
		'wrap-after': {
			links: {
				tr: '#wrap-before',
				dev: '#wrap-before',
			},
			tests: [
				'auto',
				'avoid',
				'avoid-line',
				'avoid-flex',
				'line',
				'flex',
			],
		},
		'wrap-before': {
			links: {
				tr: '#wrap-before',
				dev: '#wrap-before',
			},
			tests: [
				'auto',
				'avoid',
				'avoid-line',
				'avoid-flex',
				'line',
				'flex',
			],
		},
		'wrap-inside': {
			links: {
				tr: '#wrap-inside',
				dev: '#wrap-inside',
			},
			tests: ['auto', 'avoid'],
		},
	},
};
