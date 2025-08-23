export default {
	title: 'Filter Effects Module Level 1',
	link: 'filter-effects-1',
	group: 'fxtf',
	status: {
		stability: 'stable',
	},
	properties: {
		filter: {
			link: '#FilterProperty',
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
		'flood-color': {
			link: '#FloodColorProperty',
			tests: ['black', '#FFF'],
		},
		'flood-opacity': {
			link: '#FloodOpacityProperty',
			tests: ['1', '0', '0.2', '45%'],
		},
		'color-interpolation-filters': {
			link: '#ColorInterpolationFiltersProperty',
			tests: ['auto', 'sRGB', 'linearRGB'],
		},
		'lighting-color': {
			link: '#LightingColorProperty',
			tests: ['white', '#000'],
		},
	},
};
