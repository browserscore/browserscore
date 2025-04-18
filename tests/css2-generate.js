export default {
	title: 'CSS 2 Generated Content, Automatic Numbering, and Lists',
	links: {
		tr: 'CSS22/generate.html',
		dev: 'css2/',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2.2,
		'last-snapshot': 2.2,
	},
	properties: {
		content: {
			links: {
				tr: '#content',
				dev: '#content①',
			},
			tests: [
				'normal',
				'none',
				'"content"',
				"'content'",
				'url(image.png)',
				'attr(x)',
				'open-quote',
				'close-quote',
				'no-open-quote',
				'no-close-quote',
				'open-quote close-quote',
				'"content" url(image.png)',
			],
		},
		'counter-increment': {
			links: {
				tr: '#counters',
				dev: '#counters',
			},
			tests: ['none', 'example-counter 1', 'example-counter1 2 example-counter2'],
		},
		'counter-reset': {
			links: {
				tr: '#counters',
				dev: '#counters',
			},
			tests: ['none', 'example-counter 1', 'example-counter1 2 example-counter2'],
		},
		'list-style-image': {
			links: {
				tr: '#propdef-list-style-image',
				dev: '#propdef-list-style-image',
			},
			tests: ['none', 'url(image.png)'],
		},
		'list-style-position': {
			links: {
				tr: '#propdef-list-style-position',
				dev: '#propdef-list-style-position',
			},
			tests: ['inside', 'outside'],
		},
		'list-style-type': {
			links: {
				tr: '#propdef-list-style-type',
				dev: '#propdef-list-style-type',
			},
			tests: [
				'disc',
				'circle',
				'square',
				'decimal',
				'decimal-leading-zero',
				'lower-roman',
				'upper-roman',
				'lower-greek',
				'lower-latin',
				'upper-latin',
				'armenian',
				'georgian',
				'lower-alpha',
				'upper-alpha',
				'none',
			],
		},
		'list-style': {
			links: {
				tr: '#propdef-list-style',
				dev: '#propdef-list-style',
			},
			tests: [
				'disc',
				'inside',
				"url('image.png')",
				'circle outside',
				'square url(image.png)',
				'decimal inside url(image.png)',
			],
		},
		quotes: {
			links: {
				tr: '#quotes-specify',
				dev: '#quotes-specify',
			},
			tests: ['none', '"»" "«"', '\'"\' \'"\' "\'" "\'"'],
		},
	},
	selectors: {
		':before': {
			links: {
				tr: '#before-after-content',
				dev: '#before-after-content',
			},
			tests: ':before',
		},
		':after': {
			links: {
				tr: '#before-after-content',
				dev: '#before-after-content',
			},
			tests: ':after',
		},
	},
};
