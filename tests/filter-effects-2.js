export default {
	title: 'Filter Effects Module Level 2',
	links: {
		dev: 'filter-effects-2',
		devtype: 'fxtf',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'backdrop-filter': {
			links: {
				dev: '#BackdropFilterProperty',
			},
			tests: [
				'none',
				'url(#id)',
				'url(image.svg#id)',
				'blur(5px)',
				'brightness(0.5)',
				'contrast(150%)',
				'drop-shadow(15px 15px 15px black)',
				'grayscale(50%)',
				'hue-rotate(50deg)',
				'invert(50%)',
				'opacity(50%)',
				'sepia(50%)',
				'saturate(150%)',
				'grayscale(100%) sepia(100%)',
			],
		},
	},
};
