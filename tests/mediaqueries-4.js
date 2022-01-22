export default {
	"title": "Media Queries Level 4",
	"links": {
		"tr": "mediaqueries-4",
		"dev": "mediaqueries-4"
	},
	"status": {
		"stability": "stable"
	},
	"Media queries": {
		"resolution": {
			"links": {
				"tr": "#resolution",
				"dev": "#resolution"
			},
			"tests": ["(resolution: infinite)"]
		},
		"hover": {
			"links": {
				"tr": "#hover",
				"dev": "#hover"
			},
			"tests": ["(hover)", "(hover: none)", "(hover: hover)"]
		},
		"any-hover": {
			"links": {
				"tr": "#any-input",
				"dev": "#any-input"
			},
			"tests": ["(any-hover)", "(any-hover: none)", "(any-hover: hover)"]
		},
		"pointer": {
			"links": {
				"tr": "#pointer",
				"dev": "#pointer"
			},
			"tests": ["(pointer)", "(pointer: none)", "(pointer: coarse)", "(pointer: fine)"]
		},
		"any-pointer": {
			"links": {
				"tr": "#any-input",
				"dev": "#any-input"
			},
			"tests": ["(any-pointer)", "(any-pointer: none)", "(any-pointer: coarse)", "(any-pointer: fine)"]
		},
		"update": {
			"links": {
				"tr": "#update",
				"dev": "#update"
			},
			"tests": ["(update)", "(update: none)", "(update: slow)", "(update: fast)"]
		},
		"overflow-block": {
			"links": {
				"tr": "#mf-overflow-block",
				"dev": "#mf-overflow-block"
			},
			"tests": ["(overflow-block: none)", "(overflow-block: scroll)", "(overflow-block: optional-paged)", "(overflow-block: paged)"]
		},
		"overflow-inline": {
			"links": {
				"tr": "#mf-overflow-inline",
				"dev": "#mf-overflow-inline"
			},
			"tests": ["(overflow-inline: none)", "(overflow-inline: scroll)"]
		},
		"color-gamut": {
			"links": {
				"tr": "#color-gamut",
				"dev": "#color-gamut"
			},
			"tests": ["(color-gamut)", "(color-gamut: srgb)", "(color-gamut: p3)", "(color-gamut: rec2020)"]
		},
		"aspect-ratio": {
			"links": {
				"tr": "#aspect-ratio",
				"dev": "#aspect-ratio"
			},
			"tests": [
				"(aspect-ratio: 1280.1/720.01)",
				"(max-aspect-ratio: 1280.1/720.01)",
				"(min-aspect-ratio: 0.2)",
			]
		},
		"device-aspect-ratio": {
			"links": {
				"tr": "#device-aspect-ratio",
				"dev": "#device-aspect-ratio"
			},
			"tests": [
				"(device-aspect-ratio:1280.1/720.01)",
				"(max-device-aspect-ratio:1280.1/720.01)",
				"(min-device-aspect-ratio:0.2)",
			]
		}
	}
};
