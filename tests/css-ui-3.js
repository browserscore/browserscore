export default {
	"title": "CSS Basic User Interface Module Level 3 (CSS3 UI)",
	"links": {
		"tr": "css-ui-3",
		"dev": "css-ui-3"
	},
	"status": {
		"stability": "stable",
		"first-snapshot": 2015
	},
	"properties": {
		"box-sizing": {
			"links": {
				"tr": "#box-sizing",
				"dev": "#box-sizing"
			},
			"tests": ["border-box", "content-box"]
		},
		"outline-style": {
			"links": {
				"tr": "#outline-style",
				"dev": "#outline-style"
			},
			"tests": ["auto"]
		},
		"outline-offset": {
			"links": {
				"tr": "#outline-offset",
				"dev": "#outline-offset"
			},
			"tests": ["-5px", "0", "5px"]
		},
		"resize": {
			"links": {
				"tr": "#resize",
				"dev": "#resize"
			},
			"tests": ["none", "both", "horizontal", "vertical"]
		},
		"text-overflow": {
			"links": {
				"tr": "#text-overflow",
				"dev": "#text-overflow"
			},
			"tests": ["clip", "ellipsis"]
		},
		"cursor": {
			"links": {
				"tr": "#cursor",
				"dev": "#cursor"
			},
			"tests": [
				"url(foo.png) 2 2, auto", "none", "context-menu", "cell", "vertical-text", "alias", "copy", "no-drop", "not-allowed",
				"grab", "grabbing", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "col-resize", "row-resize", "all-scroll", "zoom-in",
				"zoom-out"
			]
		},
		"caret-color": {
			"links": {
				"tr": "#caret-color",
				"dev": "#caret-color"
			},
			"tests": ["auto", "green"]
		}
	}
};
