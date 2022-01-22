export default {
	"title": "CSS Scoping Module Level 1",
	"links": {
		"tr": "css-scoping-1",
		"dev": "css-scoping-1"
	},
	"status": {
		"stability": "experimental"
	},
	"selectors": {
		":host": {
			"links": {
				"tr": "#host-selector",
				"dev": "#host-selector"
			},
			"tests": ":host"
		},
		":host()": {
			"links": {
				"tr": "#host-selector",
				"dev": "#host-selector",
				"mdn": ":host()"
			},
			"tests": [":host(*)", ":host(.foo)"]
		},
		":host-context()": {
			"links": {
				"tr": "#host-selector",
				"dev": "#host-selector",
				"mdn": ":host-context()"
			},
			"tests": [":host-context(*)", ":host-context(.foo)"]
		},
		"::slotted()": {
			"links": {
				"dev": "#slotted-pseudo"
			},
			"tests": ["::slotted(*)", "::slotted(.foo)"]
		}
	}
};
