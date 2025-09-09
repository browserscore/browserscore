export default {
	id: 'css2-generate',
	title: 'CSS 2 Generated Content, Automatic Numbering, and Lists',
	link: 'css2/',
	specLink: 'CSS22/generate.html',
	status: 'stable',
	version: 2.2,
	properties: {
		content: {
			link: '#content①',
			specLink: '#content',
			dataTypes: ['image', 'string'],
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
			dataTypes: ['image'],
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
		},
		':after': {
			link: '#before-after-content',
		},
	},
};
