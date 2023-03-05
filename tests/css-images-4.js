export default {
	title: 'CSS Images Module Level 4',
	links: {
		tr: 'css-images-4',
		dev: 'css-images-4',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['background-image', 'list-style-image', 'border-image', 'cursor', 'content'],
		'linear-gradient()': {
			links: {
				tr: '#linear-gradients',
				dev: '#linear-gradients',
			},
			tests: ['linear-gradient(45deg, #f06 25%, yellow 25% 50%, #f06 50% 75%, yellow 75%)'],
		},
		'radial-gradient()': {
			links: {
				tr: '#radial-gradients',
				dev: '#radial-gradients',
			},
			tests: ['radial-gradient(center, red 0% 25%, blue 25% 75%, red 75% 100%)'],
		},
		'conic-gradient()': {
			links: {
				tr: '#conic-gradients',
				dev: '#conic-gradients',
			},
			tests: [
				'conic-gradient(white, black)',
				'conic-gradient(from 5deg, white, black)',
				'conic-gradient(at top left, white, black)',
				'conic-gradient(white 50%, black)',
				'conic-gradient(white 5deg, black)',
				'conic-gradient(white, #f06, black)',
				'conic-gradient(currentColor, black)',
				'conic-gradient(black 25%, white 0deg 50%, black 0deg 75%, white 0deg)',
			],
		},
		'repeating-conic-gradient()': {
			links: {
				tr: '#repeating-gradients',
				dev: '#repeating-gradients',
			},
			tests: [
				'repeating-conic-gradient(white, black)',
				'repeating-conic-gradient(hsla(0, 0%, 100%, .2) 0deg 15deg, hsla(0, 0%, 100%, 0) 0deg 30deg)',
			],
		},
		'image()': {
			links: {
				tr: '#image-notation',
				dev: '#image-notation',
			},
			tests: [
				"image('sprites.png#xywh=10,30,60,20')",
				"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
				"image('dark.png', black)",
				'image(green)',
			],
		},
		'image-set()': {
			links: {
				tr: '#image-set-notation',
				dev: '#image-set-notation',
			},
			tests: [
				"image-set('foo.png' 1x, 'foo-2x.png' 2x, 'foo-print.png' 600dpi)",
				'image-set(linear-gradient(green, green) 1x, url(foobar.png) 2x)',
				'image-set(linear-gradient(red, red), url(foobar.png) 2x)',
				'image-set(url(foobar.png) 2x)',
				'image-set(url(foobar.png) 1x, url(bar.png) 2x, url(baz.png) 3x)',
				"image-set('foobar.png', 'bar.png' 2x, url(baz.png) 3x)",
				"image-set(image-set('foobar.png', 'bar.png' 2x) 1x, url(baz.png) 3x)",
				"image-set(url(foobar.png) type('image/png'))",
				"image-set(url(foobar.png) 1x type('image/png'))",
				"image-set(url(foobar.png) type('image/png') 1x)",
			],
		},
		'element()': {
			links: {
				tr: '#element-notation',
				dev: '#element-notation',
			},
			tests: 'element(#foo)',
		},
		'cross-fade()': {
			links: {
				tr: '#cross-fade-function',
				dev: '#cross-fade-function',
			},
			tests: [
				'cross-fade(url(a.png), url(b.png))',
				'cross-fade(url(a.png) 50%, url(b.png))',
				'cross-fade(url(a.png) 50%, white)',
			],
		},
	},
	properties: {
		'image-resolution': {
			links: {
				tr: '#the-image-resolution',
				dev: '#the-image-resolution',
			},
			tests: [
				'from-image',
				'from-image snap',
				'snap from-image',
				'1dppx',
				'1dpcm',
				'300dpi',
				'from-image 300dpi',
				'300dpi from-image',
				'300dpi from-image snap',
			],
		},
	},
	interfaces: {
		CSS: {
			links: {
				tr: '#elementsources',
				dev: '#elementsources',
				mdnGroup: 'DOM',
			},
			tests: ['elementSources'],
			interface: function() {
				return CSS;
			}
		},
	},
};
