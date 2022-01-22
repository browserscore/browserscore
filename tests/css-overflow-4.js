export default {
	"title": "CSS Overflow Module Level 4",
	"links": {
		"tr": "css-overflow-4",
		"dev": "css-overflow-4"
	},
	"status": {
		"stability": "experimental"
	},
	"selectors": {
		"::nth-fragment()": {
			"links": {
				"tr": "#fragment-pseudo-element",
				"dev": "#fragment-pseudo-element"
			},
			"tests": [
				":nth-fragment(even)", ":nth-fragment(odd)",
				":nth-fragment(n)", ":nth-fragment(-n)", ":nth-fragment(0n)",
				":nth-fragment(1)", ":nth-fragment(-1)", ":nth-fragment(0)",
				":nth-fragment(n+1)", ":nth-fragment(3n+1)", ":nth-fragment(3n + 1)",
				":nth-fragment(-n+1)", ":nth-fragment(3n-1)"
			]
		}
	}
};
