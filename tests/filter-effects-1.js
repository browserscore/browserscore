export default {
	"title": "Filter Effects Module Level 1",
	"links": {
		"tr": "filter-effects-1",
		"dev": "filter-effects-1",
		"devtype": "fxtf"
	},
	"status": {
		"stability": "stable"
	},
	"properties": {
		"filter": {
			"links": {
				"tr": "#FilterProperty",
				"dev": "#FilterProperty"
			},
			"tests": [
				"none",
				"url(#id)",
				"url(image.svg#id)",
				"blur(5px)",
				"brightness(0.5)",
				"contrast(150%)",
				"drop-shadow(15px 15px 15px black)",
				"grayscale(50%)",
				"hue-rotate(50deg)",
				"invert(50%)",
				"opacity(50%)",
				"sepia(50%)",
				"saturate(150%)",
				"grayscale(100%) sepia(100%)"
			]
		},
		"flood-color": {
			"links": {
				"tr": "#FloodColorProperty",
				"dev": "#FloodColorProperty"
			},
			"tests": ["black", "#FFF"]
		},
		"flood-opacity": {
			"links": {
				"tr": "#FloodOpacityProperty",
				"dev": "#FloodOpacityProperty"
			},
			"tests": ["1", "0", "0.2", "45%"]
		},
		"color-interpolation-filters": {
			"links": {
				"tr": "#ColorInterpolationFiltersProperty",
				"dev": "#ColorInterpolationFiltersProperty"
			},
			"tests": ["auto", "sRGB", "linearRGB"]
		},
		"lighting-color": {
			"links": {
				"tr": "#LightingColorProperty",
				"dev": "#LightingColorProperty"
			},
			"tests": ["white", "#000"]
		}
	}
};
