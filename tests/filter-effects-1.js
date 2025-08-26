export default {
	title: 'Filter Effects Module Level 1',
	link: 'filter-effects-1',
	group: 'fxtf',
	status: {
		stability: 'stable',
	},
	values: {
		properties: ['background-image', 'list-style-image', 'border-image-source', 'cursor', 'mask-image', 'mask-border-source', 'shape-outside', 'content'],
		// https://caniuse.com/css-filter-function
		// There was a bug in Safari before 18.4,
		// https://bugs.webkit.org/show_bug.cgi?id=250303
		'filter()': {
			links: {
				tr: '#FilterCSSImageValue',
				dev: '#FilterCSSImageValue',
			},
			tests: [
				// filter() = filter( [ <image> | <string> ], <filter-value-list> )
				'filter(conic-gradient(red), invert(1))',
				'filter(conic-gradient(red, orange), invert(1))',
				'filter(conic-gradient(red 0 0), invert(1))',
				'filter(conic-gradient(red 0 100%), invert(1))',
				'filter(linear-gradient(red, orange), invert(1))',
				'filter(radial-gradient(red, orange), invert(1))',
				'filter(repeating-conic-gradient(red, red 5%, black 5%, black 10%), invert(1))',
				'filter(repeating-linear-gradient(red, red 10px, black 10px, black 20px), invert(1))',
				'filter(repeating-radial-gradient(red, red 10px, black 10px, black 20px), invert(1))',
				'filter(url("#foo"), blur(8px))',
				'filter(url(#foo), blur(8px))',
				'filter(url(foo.png), blur(8px))',
			],
		},
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
