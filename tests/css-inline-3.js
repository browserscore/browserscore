export default {
	"title": "CSS Inline Layout Module Level 3",
	"links": {
		"dev": "css-inline-3",
		"tr": "css-inline-3",
	},
	"status": {
		"stability": "experimental"
	},
	"properties": {
		"alignment-baseline": {
			"links": {
				"dev": "#alignment-baseline-property",
				"tr": "#alignment-baseline-property"
			},
			"tests": [
				"baseline", "text-bottom", "alphabetic", "ideographic", "middle",
				"central", "mathematical", "text-top"
			]
		},
		"baseline-shift": {
			"links": {
				"dev": "#baseline-shift-property",
				"tr": "#baseline-shift-property"
			},
			"tests": ["5px", "10%", "sub", "super", "top", "center", "bottom"]
		},
		"baseline-source": {
			"links": {
				"dev": "#baseline-source",
				"tr": "#baseline-source"
			},
			"tests": ["auto", "first", "last"]
		},
		"dominant-baseline": {
			"links": {
				"dev": "#dominant-baseline-property",
				"tr": "#dominant-baseline-property"
			},
			"tests": [
				"auto", "text-bottom", "alphabetic", "ideographic", "middle",
				"central", "mathematical", "hanging", "text-top"
			]
		},
		"initial-letter": {
			"links": {
				"dev": "#sizing-drop-initials",
				"tr": "#sizing-drop-initials"
			},
			"tests": ["normal", "1.4 3", "1.4", "1.4 drop", "1.4 raise"]
		},
		"initial-letter-align": {
			"links": {
				"dev": "#aligning-initial-letter",
				"tr": "#aligning-initial-letter"
			},
			"tests": [
				"border-box", "alphabetic", "ideographic", "hanging", "leading",
				"border-box alphabetic"
			]
		},
		"initial-letter-wrap": {
			"links": {
				"dev": "#initial-letter-wrapping",
				"tr": "#initial-letter-wrapping"
			},
			"tests": ["none", "first", "all", "grid", "30px", "10%"]
		},
		"inline-sizing": {
			"links": {
				"dev": "#line-fill",
				"tr": "#line-fill"
			},
			"tests": ["normal", "stretch"]
		},
		"leading-trim": {
			"links": {
				"dev": "#leading-trim",
				"tr": "#leading-trim"
			},
			"tests": ["normal", "start", "end", "both"]
		},
		"text-edge": {
			"links": {
				"dev": "#text-edges",
				"tr": "#text-edges"
			},
			"tests": [
				"leading", "text", "cap", "ex", "ideographic", "ideographic-ink",
				"text alphabetic", "cap ideographic-ink"
			]
		},
		"vertical-align": {
			"links": {
				"dev": "#transverse-alignment",
				"tr": "#transverse-alignment"
			},
			"tests": [
				"first", "last", "first text-bottom", "last sub", "super text-bottom first"
			]
		}
	}
};
