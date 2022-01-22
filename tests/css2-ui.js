export default {
	"title": "CSS 2 User Interface",
	"links": {
		"tr": "CSS22/ui.html",
		"dev": "css2/"
	},
	"status": {
		"stability": "stable",
		"first-snapshot": 1998,
		"last-snapshot": 1998
	},
	"properties": {
		"cursor": {
			"links": {
				"tr": "#cursor-props",
				"dev": "#cursor-props"
			},
			"tests": [
				"auto", "crosshair", "default", "pointer", "move", "e-resize",
				"ne-resize", "nw-resize", "n-resize", "se-resize", "sw-resize",
				"s-resize", "w-resize", "text", "wait", "help", "progress",
				"url(cursor.png), auto", "url(cursor.svg), url(cursor.png), pointer"
			]
		},
		"outline-color": {
			"links": {
				"tr": "#dynamic-outlines",
				"dev": "#dynamic-outlines"
			},
			"tests": [
				"black", "#00f", "#000000", "rgb(255, 255, 255)",
				"rgb(100%, 50%, 50%)"
			]
		},
		"outline-style": {
			"links": {
				"tr": "#dynamic-outlines",
				"dev": "#dynamic-outlines"
			},
			"tests": [
				"none", "dotted", "dashed", "solid", "double", "groove",
				"ridge", "inset", "outset"
			]
		},
		"outline-width": {
			"links": {
				"tr": "#dynamic-outlines",
				"dev": "#dynamic-outlines"
			},
			"tests": ["thin", "medium", "thick", "5px"]
		},
		"outline": {
			"links": {
				"tr": "#dynamic-outlines",
				"dev": "#dynamic-outlines"
			},
			"tests": [
				"black", "dotted", "5px", "#ff0000 dashed", "solid 0.2em",
				"rgb(0, 0, 255) 0.1ex", "#0f0 double 0.8mm"
			]
		}
	}
};
