export default {
	"title": "CSS Text Module Level 3",
	"links": {
		"tr": "css-text-3",
		"dev": "css-text-3"
	},
	"status": {
		"stability": "stable"
	},
	"properties": {
		"text-transform": {
			"links": {
				"tr": "#text-transform",
				"dev": "#text-transform-property"
			},
			"tests": ["full-width", "full-size-kana", "capitalize full-width", "capitalize full-width full-size-kana"]
		},
		"tab-size": {
			"links": {
				"tr": "#tab-size-property",
				"dev": "#tab-size-property"
			},
			"tests": ["4", "1em"]
		},
		"line-break": {
			"links": {
				"tr": "#line-break-property",
				"dev": "#line-break-property"
			},
			"tests": ["auto", "loose", "normal", "strict", "anywhere"]
		},
		"word-break": {
			"links": {
				"tr": "#word-break-property",
				"dev": "#word-break-property"
			},
			"tests": ["normal", "keep-all", "break-all"]
		},
		"white-space": {
			"links": {
				"tr": "#white-space-property",
				"dev": "#white-space-property"
			},
			"tests": ["break-spaces"]
		},
		"hyphens": {
			"links": {
				"tr": "#hyphenation",
				"dev": "#hyphenation"
			},
			"tests": ["auto", "manual", "none"]
		},
		"overflow-wrap": {
			"links": {
				"tr": "#overflow-wrap-property",
				"dev": "#overflow-wrap-property"
			},
			"tests": ["normal", "break-word", "anywhere"]
		},
		"word-wrap": {
			"links": {
				"tr": "#overflow-wrap-property",
				"dev": "#overflow-wrap-property"
			},
			"tests": ["normal", "break-word", "anywhere"]
		},
		"text-align": {
			"links": {
				"tr": "#text-align-property",
				"dev": "#text-align-property"
			},
			"tests": ["start", "end", "match-parent", "justify-all"]
		},
		"text-align-all": {
			"links": {
				"tr": "#text-align-all-property",
				"dev": "#text-align-all-property"
			},
			"tests": ["start", "end", "left", "right", "center", "justify", "match-parent"]
		},
		"text-align-last": {
			"links": {
				"tr": "#text-align-last-property",
				"dev": "#text-align-last-property"
			},
			"tests": ["auto", "start", "end", "left", "right", "center", "justify", "match-parent"]
		},
		"text-justify": {
			"links": {
				"tr": "#text-justify-property",
				"dev": "#text-justify-property"
			},
			"tests": ["auto", "none", "inter-word", "inter-character"]
		},
		"word-spacing": {
			"links": {
				"tr": "#word-spacing-property",
				"dev": "#word-spacing-property"
			},
			"tests": ["50%"]
		},
		"text-indent": {
			"links": {
				"tr": "#text-indent-property",
				"dev": "#text-indent-property"
			},
			"tests": ["1em hanging", "1em each-line", "1em hanging each-line"]
		},
		"hanging-punctuation": {
			"links": {
				"tr": "#hanging-punctuation-property",
				"dev": "#hanging-punctuation-property"
			},
			"tests": [
				"none", "first", "last", "force-end", "allow-end", "first last", "first force-end",
				"first force-end last", "first allow-end last"
			]
		}
	}
};
