/*
 * Note: the following media queries must be true in supporting UAs!
 */
export default {
	"title": "Media Queries Level 3",
	"links": {
		"tr": "css3-mediaqueries",
		"dev": "mediaqueries-3"
	},
	"status": {
		"stability": "stable",
		"first-snapshot": 2010
	},
	"Media queries": {
		"negation": {
			"links": {
				"tr": "#media0",
				"dev": "#media0",
				"mdn": "Media_Queries/Using_media_queries"
			},
			"tests": ["not print", "not all and (width:1px)"]
		},
		"width": {
			"links": {
				"tr": "#width",
				"dev": "#width",
				"mdn": "Media_Queries/Using_media_queries"
			},
			"tests": ["(width)", "(min-width:1px)", "(max-width:1000000px)"]
		},
		"height": {
			"links": {
				"tr": "#height",
				"dev": "#height",
				"mdn": "Media_Queries/Using_media_queries"
			},
			"tests": ["(height)", "(min-height:1px)", "(max-height:1000000px)"]
		},
		"device-width": {
			"links": {
				"tr": "#device-width",
				"dev": "#device-width"
			},
			"tests": ["(device-width)", "(min-device-width:1px)", "(max-device-width:1000000px)"]
		},
		"device-height": {
			"links": {
				"tr": "#device-height",
				"dev": "#device-height"
			},
			"tests": ["(device-height)", "(min-device-height:1px)", "(max-device-height:1000000px)"]
		},
		"orientation": {
			"links": {
				"tr": "#orientation",
				"dev": "#orientation"
			},
			"tests": "(orientation:portrait), (orientation:landscape)"
		},
		"aspect-ratio": {
			"links": {
				"tr": "#aspect-ratio",
				"dev": "#aspect-ratio"
			},
			"tests": [
				"(aspect-ratio)",
				"(min-aspect-ratio:1/1000000)",
				"(min-aspect-ratio:1 / 1000000)",
				"(max-aspect-ratio:1000000/1)",
			]
		},
		"device-aspect-ratio": {
			"links": {
				"tr": "#device-aspect-ratio",
				"dev": "#device-aspect-ratio"
			},
			"tests": [
				"(device-aspect-ratio)",
				"(min-device-aspect-ratio:1/1000000)",
				"(min-device-aspect-ratio:1 / 1000000)",
				"(max-device-aspect-ratio:1000000/1)",
			]
		},
		"color": {
			"links": {
				"tr": "#color",
				"dev": "#color"
			},
			"tests": [
				"(color)", "(min-color: 0)", "(max-color: 100)"
			]
		},
		"color-index": {
			"links": {
				"tr": "#color-index",
				"dev": "#color-index"
			},
			"tests": [
				"all, (color-index)",
				"(min-color-index: 0)",
				"(max-color-index: 10000000)"
			]
		},
		"monochrome": {
			"links": {
				"tr": "#monochrome",
				"dev": "#monochrome"
			},
			"tests": [
				"all, (monochrome)", "(min-monochrome: 0)", "(max-monochrome: 10000)"
			]
		},
		"resolution": {
			"links": {
				"tr": "#resolution",
				"dev": "#resolution"
			},
			"tests": [
				"(resolution)",
				"(min-resolution: 1dpi)",
				"(max-resolution: 1000000dpi)",
				"(max-resolution: 1000000dpcm)"
			]
		},
		"scan": {
			"links": {
				"tr": "#scan",
				"dev": "#scan"
			},
			"tests": ["not tv, (scan: progressive)", "not tv, (scan: interlace)"]
		},
		"grid": {
			"links": {
				"tr": "#grid",
				"dev": "#grid"
			},
			"tests": ["all, (grid)", "(grid: 0), (grid: 1)"]
		}
	}
};
