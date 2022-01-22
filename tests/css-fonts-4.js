export default {
	"title": "CSS Fonts Module Level 4",
	"links": {
		"tr": "css-fonts-4",
		"dev": "css-fonts-4"
	},
	"status": {
		"stability": "stable"
	},
	"properties": {
		"font-size": {
			"links": {
				"tr": "#font-size-prop",
				"dev": "#font-size-prop"
			},
			"tests": ["xxx-large"]
		},
		"font-variant": {
			"links": {
				"tr": "#font-variant-prop",
				"dev": "#font-variant-prop"
			},
			"tests": [
				"none", "all-petite-caps", "historical-forms", "super",
				"sub lining-nums contextual ruby",
				"annotation(circled)",
				"discretionary-ligatures character-variant(leo-B, leo-M, leo-N, leo-T, leo-U)"
			]
		},
		"font-variant-alternates": {
			"links": {
				"tr": "#font-variant-alternates-prop",
				"dev": "#font-variant-alternates-prop"
			},
			"tests": [
				"normal", "historical-forms",
				"styleset(ss01)", "styleset(stacked-g, geometric-m)",
				"character-variant(cv02)", "character-variant(beta-3, gamma)",
				"swash(flowing)", "ornaments(leaves)", "annotation(blocky)"
			]
		},
		"font-feature-settings": {
			"links": {
				"tr": "#font-feature-settings-prop",
				"dev": "#font-feature-settings-prop"
			},
			"tests": ["normal", "'swsh' 2"]
		},
		"font-language-override": {
			"links": {
				"tr": "#font-language-override",
				"dev": "#font-language-override"
			},
			"tests": ["normal", "'SRB'"]
		},
		"font-weight": {
			"links": {
				"tr": "#font-weight-prop",
				"dev": "#font-weight-prop"
			},
			"tests": ["1", "90", "750", "1000"]
		},
		"font-style": {
			"links": {
				"tr": "#font-style-prop",
				"dev": "#font-style-prop"
			},
			"tests": ["oblique 15deg", "oblique -15deg", "oblique 0deg"]
		},
		"font-optical-sizing": {
			"links": {
				"tr": "#font-optical-sizing-def",
				"dev": "#font-optical-sizing-def"
			},
			"tests": ["none", "auto"]
		},
		"font-palette": {
			"links": {
				"tr": "#font-palette-prop",
				"dev": "#font-palette-prop"
			},
			"tests": ["normal", "light", "dark"]
		}
	},
	"@rules": {
		"@font-feature-values": {
			"links": {
				"tr": "#font-feature-values",
				"dev": "#font-feature-values"
			},
			"tests": "@font-feature-values Jupiter Sans {\n  @styleset {\n    some-style: 1;\n  }\n}"
		},
		"@font-palette-values": {
			"links": {
				"tr": "#font-palette-values",
				"dev": "#font-palette-values"
			},
			"tests": "@font-palette-values Augusta {\n  font-family: Handover Sans;\n  base-palette: 3;\n}"
		},
	},
	"descriptors": {
		"@font-face/ascent-override": {
			"links": {
				"tr": "#descdef-font-face-ascent-override",
				"dev": "#descdef-font-face-ascent-override"
			},
			"tests": ["normal", "125%"]
		},
		"@font-face/descent-override": {
			"links": {
				"tr": "#descdef-font-face-descent-override",
				"dev": "#descdef-font-face-descent-override"
			},
			"tests": ["normal", "125%"]
		},
		"@font-face/line-gap-override": {
			"links": {
				"tr": "#descdef-font-face-line-gap-override",
				"dev": "#descdef-font-face-line-gap-override"
			},
			"tests": ["normal", "90%"]
		},
		"@font-face/font-named-instance": {
			"links": {
				"tr": "#font-named-instance",
				"dev": "#font-named-instance"
			},
			"tests": ["auto", "'Grotesque'"]
		},
		"@font-face/font-display": {
			"links": {
				"tr": "#descdef-font-face-font-display",
				"dev": "#descdef-font-face-font-display"
			},
			"tests": ["auto", "block", "swap", "fallback", "optional"]
		},
		"@font-feature-values/font-display": {
			"links": {
				"tr": "#font-display-font-feature-values",
				"dev": "#font-display-font-feature-values"
			},
			"tests": ["auto", "block", "swap", "fallback", "optional"]
		}
	}
};
