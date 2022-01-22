export default {
	"title": "CSS 2 Visual Formatting Model",
	"links": {
		"tr": "CSS22/visuren.html",
		"dev": "css2/"
	},
	"status": {
		"stability": "stable",
		"first-snapshot": 1998,
		"last-snapshot": 1998
	},
	"properties": {
		"bottom": {
			"links": {
				"tr": "#position-props",
				"dev": "#position-props"
			},
			"tests": ["auto", "100px", "10%"]
		},
		"clear": {
			"links": {
				"tr": "#flow-control",
				"dev": "#flow-control"
			},
			"tests": ["none", "left", "right", "both"]
		},
		"direction": {
			"links": {
				"tr": "#propdef-direction",
				"dev": "#propdef-direction"
			},
			"tests": ["ltr", "rtl"]
		},
		"display": {
			"links": {
				"tr": "#display-prop",
				"dev": "#display-prop"
			},
			"tests": [
				"none", "inline", "block", "list-item", "inline-block", "table",
				"inline-table", "table-row-group", "table-header-group",
				"table-footer-group", "table-row", "table-column-group",
				"table-column", "table-cell", "table-caption"
			]
		},
		"float": {
			"links": {
				"tr": "#float-position",
				"dev": "#float-position"
			},
			"tests": ["none", "left", "right"]
		},
		"left": {
			"links": {
				"tr": "#position-props",
				"dev": "#position-props"
			},
			"tests": ["auto", "100px", "10%"]
		},
		"position": {
			"links": {
				"tr": "#choose-position",
				"dev": "#choose-position"
			},
			"tests": ["static", "relative", "absolute", "fixed"]
		},
		"right": {
			"links": {
				"tr": "#position-props",
				"dev": "#position-props"
			},
			"tests": ["auto", "100px", "10%"]
		},
		"top": {
			"links": {
				"tr": "#position-props",
				"dev": "#position-props"
			},
			"tests": ["100px", "10%", "auto"]
		},
		"unicode-bidi": {
			"links": {
				"tr": "#propdef-unicode-bidi",
				"dev": "#propdef-unicode-bidi"
			},
			"tests": ["normal", "embed", "bidi-override"]
		},
		"z-index": {
			"links": {
				"tr": "#z-index",
				"dev": "#z-index"
			},
			"tests": [
				"auto", "1", "-1"
			]
		}
	}
};
