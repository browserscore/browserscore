export default {
	id: 'css-images-3',
	title: 'CSS Images Module Level 3',
	links: {
		tr: 'css3-images',
		dev: 'css-images-3',
	},
	status: 'stable',
	firstSnapshot: 2015,
	values: {
		'linear-gradient()': {
			link: '#linear-gradients',
			mdn : 'linear-gradient',
			dataType: 'image',
			args: [
				'white, black',
				'to right, white, black',
				'45deg, white, black',
				'white 50%, black 5px',

				// allow a single color stop with 0-1 positions
				// https://github.com/w3c/csswg-drafts/issues/10092#issuecomment-2145860054
				'red',
				'red 0',
				'red 50px',
				'0, red',
			],
		},
		'radial-gradient()': {
			link: '#radial-gradients',
			mdn: 'radial-gradient',
			dataType: 'image',
			args: [
				'white, black',
				'circle, white, black',
				'ellipse, white, black',
				'closest-corner, white, black',
				'circle farthest-side, white, black',
				'60% 60%, white, black',

				// allow a single color stop with 0-1 positions
				// https://github.com/w3c/csswg-drafts/issues/10092#issuecomment-2145860054
				'red',
				'red 0%',
				'red 0% 100%',
			],
		},
		'repeating-linear-gradient()': {
			link: '#repeating-gradients',
			dataType: 'image',
			args: [
				'white, black',
				'red',
			],
		},
		'repeating-radial-gradient()': {
			link: '#repeating-gradients',
			dataType: 'image',
			args: [
				'white, black',
				'red',
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
			link: '#the-image-rendering',
			tests: ['auto', 'smooth', 'high-quality', 'crisp-edges', 'pixelated'],
		},
	},
};
