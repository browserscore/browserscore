export default {
	title: 'CSS Images Module Level 3',
	links: {
		tr: 'css3-images',
		dev: 'css-images-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
	},
	values: {
		properties: ['background-image', 'list-style-image', 'border-image-source', 'mask-image', 'mask-border-source', 'shape-outside', 'content'],
		'linear-gradient()': {
			links: {
				tr: '#linear-gradients',
				dev: '#linear-gradients',
			},
			tests: [
				'linear-gradient(white, black)',
				'linear-gradient(to right, white, black)',
				'linear-gradient(0, white, black)',
				'linear-gradient(45deg, white, black)',
				'linear-gradient(white 50%, black)',
				'linear-gradient(white 5px, black)',
				'linear-gradient(white, #f06, black)',
				'linear-gradient(currentColor, black)',
				'linear-gradient(red -50px, white calc(-25px + 50%), blue 100%)',

				// allow a single color stop with 0-1 positions
				// https://github.com/w3c/csswg-drafts/issues/10092#issuecomment-2145860054
				'linear-gradient(red)',
				'linear-gradient(red 0)',
				'linear-gradient(red 50px)',
				'linear-gradient(0, red)',
			],
		},
		'radial-gradient()': {
			links: {
				tr: '#radial-gradients',
				dev: '#radial-gradients',
			},
			tests: [
				'radial-gradient(white, black)',
				'radial-gradient(circle, white, black)',
				'radial-gradient(ellipse, white, black)',
				'radial-gradient(closest-corner, white, black)',
				'radial-gradient(circle closest-corner, white, black)',
				'radial-gradient(farthest-side, white, black)',
				'radial-gradient(circle farthest-side, white, black)',
				'radial-gradient(0, white, black)',
				'radial-gradient(50%, white, black)',
				'radial-gradient(60% 60%, white, black)' /*,
				"radial-gradient(at 60% 60%, white, black)",
				"radial-gradient(30% 30% at 20% 20%, white, black)",
				"radial-gradient(5em circle at top left, yellow, blue)",
				"radial-gradient(circle farthest-side at top left, white, black)"*/,

				// allow a single color stop with 0-1 positions
				// https://github.com/w3c/csswg-drafts/issues/10092#issuecomment-2145860054
				'radial-gradient(red)',
				'radial-gradient(red 0)',
				'radial-gradient(red 50px)',
				'radial-gradient(0%, red)',
				'radial-gradient(50% 60%, red)',
				'radial-gradient(circle, red)',
				'radial-gradient(circle closest-corner, red)',
			],
		},
		'repeating-linear-gradient()': {
			links: {
				tr: '#repeating-gradients',
				dev: '#repeating-gradients',
			},
			tests: [
				'repeating-linear-gradient(red)',
				'repeating-linear-gradient(white, black)',
			],
		},
		'repeating-radial-gradient()': {
			links: {
				tr: '#repeating-gradients',
				dev: '#repeating-gradients',
			},
			tests: [
				'repeating-radial-gradient(red)',
				'repeating-radial-gradient(white, black)',
			]
		},
	},
	properties: {
		'object-fit': {
			links: {
				tr: '#object-fit',
				dev: '#the-object-fit',
			},
			tests: ['fill', 'contain', 'cover', 'none', 'scale-down'],
		},
		'object-position': {
			links: {
				tr: '#object-position',
				dev: '#the-object-position',
			},
			tests: ['50% 50%', 'center', 'top right', 'bottom 10px right 20px'],
		},
		'image-orientation': {
			links: {
				tr: '#image-orientation',
				dev: '#the-image-orientation',
			},
			tests: ['from-image', '0deg', '90deg', '45deg', '45deg flip', '1turn', '100grad', '2rad'],
		},
		'image-rendering': {
			links: {
				tr: '#the-image-rendering',
				dev: '#the-image-rendering',
			},
			tests: ['auto', 'smooth', 'high-quality', 'crisp-edges', 'pixelated'],
		},
	},
};
