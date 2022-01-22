export default {
	"title": "CSS 2 Fonts",
	"links": {
		"tr": "CSS22/fonts.html",
		"dev": "css2/"
	},
	"status": {
		"stability": "stable",
		"first-snapshot": 1998,
		"last-snapshot": 1998
	},
	"properties": {
		"font-family": {
			"links": {
				"tr": "#font-family-prop",
				"dev": "#font-family-prop"
			},
			"tests": [
				"Arial", "\"Helvetica\"", "'Some font'", "serif", "sans-serif",
				"cursive", "fantasy", "monospace", "'Some font', Arial, sans-serif"
			]
		},
		"font-size": {
			"links": {
				"tr": "#font-size-props",
				"dev": "#font-size-props"
			},
			"tests": [
				"xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large",
				"larger", "smaller", "1.5em", "80%"
			]
		},
		"font-style": {
			"links": {
				"tr": "#font-styling",
				"dev": "#font-styling"
			},
			"tests": ["normal", "italic", "oblique"]
		},
		"font-variant": {
			"links": {
				"tr": "#small-caps",
				"dev": "#small-caps"
			},
			"tests": ["normal", "small-caps"]
		},
		"font-weight": {
			"links": {
				"tr": "#font-boldness",
				"dev": "#font-boldness"
			},
			"tests": [
				"normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500",
				"600", "700", "800", "900"
			]
		},
		"font": {
			"links": {
				"tr": "#font-shorthand",
				"dev": "#font-shorthand"
			},
			"tests": [
				"caption", "icon", "menu", "message-box", "small-caption", "status-bar",
				"2em Arial", "italic 2em Arial", "small-caps 2em Arial", "bold 2em Arial",
				"italic 2em \'Custom font\', Arial, sans-serif", "small-caps 2em Arial",
				"bolder 2em Arial", "italic 200 2em Arial", "2em / 2 Arial"
			]
		}
	}
};
