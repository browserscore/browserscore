export default {
	"title": "CSS Fonts Module Level 5",
	"links": {
		"dev": "css-fonts-5"
	},
	"status": {
		"stability": "experimental"
	},
	"properties": {
		"font-size-adjust": {
			"links": {
				"dev": "#font-size-adjust-prop"
			},
			"tests": [
				"ex-height 0.545", "ex-height from-font",
				"cap-height 0.545", "cap-height from-font",
				"ch-width 0.545", "ch-width from-font",
				"ic-width 0.545", "ic-width from-font",
				"ic-height 0.545", "ic-height from-font"
			]
		},
	},
	"descriptors": {
		"@font-face/size-adjust": {
			"links": {
				"dev": "#size-adjust-desc"
			},
			"tests": ["100%"]
		},
	}
};
