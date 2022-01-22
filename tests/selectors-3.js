export default {
	"title": "Selectors Level 3",
	"links": {
		"tr": "selectors-3",
		"dev": "selectors-3",
		"mdn": "Glossary/CSS_Selector"
	},
	"status": {
		"stability": "stable",
		"first-snapshot": 2007
	},
	"selectors": {
		"Sibling combinator": {
			"links": {
				"tr": "#sibling-combinators",
				"dev": "#sibling-combinators",
				"mdn": "General_sibling_combinator"
			},
			"tests": "foo ~ bar"
		},
		"::before": {
			"links": {
				"tr": "#gen-content",
				"dev": "#gen-content"
			},
			"tests": "::before"
		},
		"::after": {
			"links": {
				"tr": "#gen-content",
				"dev": "#gen-content"
			},
			"tests": "::after"
		},
		"::first-letter": {
			"links": {
				"tr": "#first-letter",
				"dev": "#first-letter"
			},
			"tests": "::first-letter"
		},
		"::first-line": {
			"links": {
				"tr": "#first-line",
				"dev": "#first-line"
			},
			"tests": "::first-line"
		},
		"[att^=val]": {
			"links": {
				"tr": "#attribute-substrings",
				"dev": "#attribute-substrings",
				"mdn": "Attribute_selectors"
			},
			"tests": ["[att^=val]", "[att^=\"val\"]"]
		},
		"[att*=val]": {
			"links": {
				"tr": "#attribute-substrings",
				"dev": "#attribute-substrings",
				"mdn": "Attribute_selectors"
			},
			"tests": ["[att*=val]", "[att*=\"val\"]"]
		},
		"[att$=val]": {
			"links": {
				"tr": "#attribute-substrings",
				"dev": "#attribute-substrings",
				"mdn": "Attribute_selectors"
			},
			"tests": ["[att$=val]", "[att$=\"val\"]"]
		},
		"Namespaces": {
			"links": {
				"tr": "#attrnmsp",
				"dev": "#attrnmsp",
				"mdn": "CSS_Namespaces"
			},
			"tests": ["*|html", "[*|attr]", "[*|attr=val]", "*|html[*|attr]"]
		},
		":target": {
			"links": {
				"tr": "#target-pseudo",
				"dev": "#target-pseudo"
			},
			"tests": ":target"
		},
		":enabled": {
			"links": {
				"tr": "#enableddisabled",
				"dev": "#enableddisabled"
			},
			"tests": ":enabled"
		},
		":disabled": {
			"links": {
				"tr": "#enableddisabled",
				"dev": "#enableddisabled"
			},
			"tests": ":disabled"
		},
		":checked": {
			"links": {
				"tr": "#checked",
				"dev": "#checked"
			},
			"tests": ":checked"
		},
		":indeterminate": {
			"links": {
				"tr": "#indeterminate",
				"dev": "#indeterminate"
			},
			"tests": ":indeterminate"
		},
		":root": {
			"links": {
				"tr": "#root-pseudo",
				"dev": "#root-pseudo"
			},
			"tests": ":root"
		},
		":nth-child()": {
			"links": {
				"tr": "#nth-child-pseudo",
				"dev": "#nth-child-pseudo"
			},
			"tests": [
				":nth-child(even)", ":nth-child(odd)",
				":nth-child(n)", ":nth-child(-n)", ":nth-child(0n)",
				":nth-child(1)", ":nth-child(-1)", ":nth-child(0)",
				":nth-child(n+1)", ":nth-child(3n+1)", ":nth-child(3n + 1)",
				":nth-child(-n+1)", ":nth-child(3n-1)"
			]
		},
		":nth-last-child()": {
			"links": {
				"tr": "#nth-last-child-pseudo",
				"dev": "#nth-last-child-pseudo"
			},
			"tests": [
				":nth-last-child(even)", ":nth-last-child(odd)",
				":nth-last-child(n)", ":nth-last-child(-n)", ":nth-last-child(0n)",
				":nth-last-child(1)", ":nth-last-child(-1)", ":nth-last-child(0)",
				":nth-last-child(n+1)", ":nth-last-child(3n+1)", ":nth-last-child(3n + 1)",
				":nth-last-child(-n+1)", ":nth-last-child(3n-1)"
			]
		},
		":nth-of-type()": {
			"links": {
				"tr": "#nth-of-type-pseudo",
				"dev": "#nth-of-type-pseudo"
			},
			"tests": [
				":nth-of-type(even)", ":nth-of-type(odd)",
				":nth-of-type(n)", ":nth-of-type(-n)", ":nth-of-type(0n)",
				":nth-of-type(1)", ":nth-of-type(-1)", ":nth-of-type(0)",
				":nth-of-type(n+1)", ":nth-of-type(3n+1)", ":nth-of-type(3n + 1)",
				":nth-of-type(-n+1)", ":nth-of-type(3n-1)"
			]
		},
		":nth-last-of-type()": {
			"links": {
				"tr": "#nth-last-of-type-pseudo",
				"dev": "#nth-last-of-type-pseudo"
			},
			"tests": [
				":nth-last-of-type(even)", ":nth-last-of-type(odd)",
				":nth-last-of-type(n)", ":nth-last-of-type(-n)", ":nth-last-of-type(0n)",
				":nth-last-of-type(1)", ":nth-last-of-type(-1)", ":nth-last-of-type(0)",
				":nth-last-of-type(n+1)", ":nth-last-of-type(3n+1)", ":nth-last-of-type(3n + 1)",
				":nth-last-of-type(-n+1)", ":nth-last-of-type(3n-1)"
			]
		},
		":last-child": {
			"links": {
				"tr": "#last-child-pseudo",
				"dev": "#last-child-pseudo"
			},
			"tests": ":last-child"
		},
		":only-child": {
			"links": {
				"tr": "#only-child-pseudo",
				"dev": "#only-child-pseudo"
			},
			"tests": ":only-child"
		},
		":first-of-type": {
			"links": {
				"tr": "#first-of-type-pseudo",
				"dev": "#first-of-type-pseudo"
			},
			"tests": ":first-of-type"
		},
		":last-of-type": {
			"links": {
				"tr": "#last-of-type-pseudo",
				"dev": "#last-of-type-pseudo"
			},
			"tests": ":last-of-type"
		},
		":only-of-type": {
			"links": {
				"tr": "#only-of-type-pseudo",
				"dev": "#only-of-type-pseudo"
			},
			"tests": ":only-of-type"
		},
		":empty": {
			"links": {
				"tr": "#empty-pseudo",
				"dev": "#empty-pseudo"
			},
			"tests": ":empty"
		},
		":not()": {
			"links": {
				"tr": "#negation",
				"dev": "#negation"
			},
			"tests": [":not(*)", ":not(element)", ":not(.class):not(#id):not([attr]):not(:link)"]
		}
	}
};
