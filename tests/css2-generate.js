export default {
	title: 'CSS 2 Generated Content, Automatic Numbering, and Lists',
	links: {
		tr: 'CSS22/generate.html',
		dev: 'css2/',
	},
	status: 'stable',
	firstSnapshot: 2.2,
	lastSnapshot: 2.2,
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
			link: '#counters',
			tests: ['none', 'example-counter 1', 'example-counter1 2 example-counter2'],
		},
		'counter-reset': {
			link: '#counters',
			tests: ['none', 'example-counter 1', 'example-counter1 2 example-counter2'],
		},
		'list-style-image': {
			link: '#propdef-list-style-image',
			tests: ['none', 'url(image.png)'],
		},
		'list-style-position': {
			link: '#propdef-list-style-position',
			tests: ['inside', 'outside'],
		},
		'list-style-type': {
			link: '#propdef-list-style-type',
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
			link: '#propdef-list-style',
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
			link: '#quotes-specify',
			tests: ['none', '"»" "«"', '\'"\' \'"\' "\'" "\'"'],
		},
	},
	selectors: {
		':before': {
			link: '#before-after-content',
			tests: ':before',
		},
		':after': {
			link: '#before-after-content',
			tests: ':after',
		},
	},
};
