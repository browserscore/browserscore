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
		'linear-gradient() color interpolation': {
			links: {
				tr: '#color-interpolation',
				dev: '#color-interpolation',
				mdn : 'linear-gradient'
			},
			tests: [
				'linear-gradient(to right in lch, #A37, #595)',
				'linear-gradient(in lch to right, #A37, #595)',
				'linear-gradient(in lab to right, #A37, #595)',
				'linear-gradient(in srgb to right, #A37, #595)',
				'linear-gradient(in oklab to right, #A37, #595)',
				'linear-gradient(in oklch to right, #A37, #595)',
				'linear-gradient(in srgb-linear to right, #A37, #595)',
				'linear-gradient(in xyz to right, #A37, #595)',
				'linear-gradient(in xyz-d50 to right, #A37, #595)',
				'linear-gradient(in xyz-d65 to right, #A37, #595)',
				'linear-gradient(in hwb to right, #A37, #595)',
				'linear-gradient(in hsl to right, #A37, #595)',
				'linear-gradient(in hsl shorter hue to right, #A37, #595)',
				'linear-gradient(in hsl longer hue to right, #A37, #595)',
				'linear-gradient(in hsl increasing hue to right, #A37, #595)',
				'linear-gradient(in hsl decreasing hue to right, #A37, #595)',

				// allow a single color stop with 0-1 positions
				// https://github.com/w3c/csswg-drafts/issues/10092#issuecomment-2145860054
				'linear-gradient(in lch, red)',
				'linear-gradient(in lab, red 0)',
				'linear-gradient(in oklab to right, red 50px)',
				'linear-gradient(in hsl shorter hue, red)',
			],
		},
		'radial-gradient()': {
			links: {
				tr: '#radial-gradients',
				dev: '#radial-gradients',
			},
			tests: ['radial-gradient(center, red 0% 25%, blue 25% 75%, red 75% 100%)'],
		},
		'radial-gradient() color interpolation': {
			links: {
				tr: '#radial-color-interpolation',
				dev: '#radial-color-interpolation',
				mdn: 'radial-gradient'
			},
			tests: [
				'radial-gradient(farthest-side at left bottom in lab, color(display-p3 0.918 0.2 0.161), #081)',
				'radial-gradient(in lab farthest-side at left bottom, color(display-p3 0.918 0.2 0.161), #081)',
				'radial-gradient(in srgb farthest-side at left bottom, color(display-p3 0.918 0.2 0.161), #081)',
				'radial-gradient(in oklab farthest-side at left bottom, color(display-p3 0.918 0.2 0.161), #081)',
				'radial-gradient(in hsl shorter hue at left bottom, color(display-p3 0.918 0.2 0.161), #081)',
				// allow a single color stop with 0-1 positions
				// https://github.com/w3c/csswg-drafts/issues/10092#issuecomment-2145860054
				'radial-gradient(in lch, red)',
				'radial-gradient(in lab, red 0)',
				'radial-gradient(in oklab at 50%, red 50px)',
				'radial-gradient(in hsl shorter hue, red)',
			],
		},
		'conic-gradient()': {
			links: {
				tr: '#conic-gradients',
				dev: '#conic-gradients',
			},
			tests: [
				'conic-gradient(white, black)',
				'conic-gradient(from 0, white, black)',
				'conic-gradient(from 5deg, white, black)',
				'conic-gradient(at top left, white, black)',
				'conic-gradient(white 50%, black)',
				'conic-gradient(white 5deg, black)',
				'conic-gradient(white, #f06, black)',
				'conic-gradient(currentColor, black)',
				'conic-gradient(black 25%, white 0deg 50%, black 0deg 75%, white 0deg)',

				'conic-gradient(red 0 0)',
				'conic-gradient(red 90deg 50%)',
				'conic-gradient(from 0, red 0 0)',
				'conic-gradient(from 20deg, red 45deg 20%)',

				// allow a single color stop with 0-1 positions
				// https://github.com/w3c/csswg-drafts/issues/10092#issuecomment-2145860054
				'conic-gradient(red)',
				'conic-gradient(red 0)',
				'conic-gradient(red 50%)',
				'conic-gradient(red 90deg)',
				'conic-gradient(from 0, red)',
			],
		},
		'conic-gradient() color interpolation': {
			links: {
				tr: '#conic-gradients',
				dev: '#conic-gradients',
				mdn: 'conic-gradient'
			},
			tests: [
				'conic-gradient(in lab, #f06, gold)',
				'conic-gradient(in lab, #f06 0deg, gold 1turn)',
				'conic-gradient(from 45deg in lch, white, black, white)',
				'conic-gradient(in srgb from 45deg, white, black, white)',
				'conic-gradient(in oklab at top left, white, black, white)',
				'conic-gradient(in hsl shorter hue from 45deg, white, black, white)',

				// allow a single color stop with 0-1 positions
				// https://github.com/w3c/csswg-drafts/issues/10092#issuecomment-2145860054
				'conic-gradient(in lab, red)',
				'conic-gradient(from 45deg in lch, red 0)',
				'conic-gradient(in oklab at top left, red 50%)',
				'conic-gradient(in hsl shorter hue from 45deg, red 90deg)',
				'conic-gradient(from 0 in srgb, red)',
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
			interface: function () {
				return CSS;
			},
		},
	},
};
