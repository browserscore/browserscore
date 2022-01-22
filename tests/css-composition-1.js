export default {
	"title": "Compositing and Blending Level 1",
	"links": {
		"tr": "compositing-1",
		"dev": "compositing-1",
		"devtype": "fxtf"
	},
	"status": {
		"stability": "stable",
		"first-snapshot": 2015
	},
	"properties": {
		"mix-blend-mode": {
			"links": {
				"tr": "#mix-blend-mode",
				"dev": "#mix-blend-mode"
			},
			"tests": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
		},
		"isolation": {
			"links": {
				"tr": "#isolation",
				"dev": "#isolation"
			},
			"tests": ["auto", "isolate"]
		},
		"background-blend-mode": {
			"links": {
				"tr": "#background-blend-mode",
				"dev": "#background-blend-mode"
			},
			"tests": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "normal, multiply"]
		}
	}
};
