export default {
	"title": "CSS Lists Module Level 3",
	"links": {
		"tr": "css-lists-3",
		"dev": "css-lists-3"
	},
	"status": {
		"stability": "stable"
	},
	"properties": {
		"list-style-type": {
			"links": {
				"tr": "#text-markers",
				"dev": "#text-markers"
			},
			"tests": [
				"disclosure-closed", "disclosure-open",
				"hebrew",
				"cjk-decimal", "cjk-ideographic",
				"hiragana", "katakana", "hiragana-iroha", "katakana-iroha",
				"japanese-informal", "japanese-formal", "korean-hangul-formal",
				"korean-hanja-informal", "korean-hanja-formal",
				"simp-chinese-informal", "simp-chinese-formal",
				"trad-chinese-informal", "trad-chinese-formal",
				"cjk-heavenly-stem", "cjk-earthly-branch",
				"trad-chinese-informal", "trad-chinese-formal",
				"simp-chinese-informal", "simp-chinese-formal",
				"japanese-informal", "japanese-formal",
				"arabic-indic", "persian", "urdu",
				"devanagari", "gurmukhi", "gujarati",
				"oriya", "kannada", "malayalam", "bengali",
				"tamil", "telugu", "thai", "lao",
				"myanmar", "khmer",
				"hangul", "hangul-consonant",
				"ethiopic-halehame", "ethiopic-numeric",
				"ethiopic-halehame-am",
				"ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et",
				"other-style", "inside", "outside", "\\32 style",
				'"-"', "'-'",
				"symbols(\"*\" \"\\2020\" \"\\2021\" \"\\A7\")",
				"symbols(cyclic '*' '\\2020' '\\2021' '\\A7')"
			]
		},
		"marker-side": {
			"links": {
				"tr": "#marker-side",
				"dev": "#marker-side"
			},
			"tests": ["match-self", "match-parent"]
		},
		"counter-reset": {
			"links": {
				"tr": "#counter-reset",
				"dev": "#counter-reset"
			},
			"tests": [
				"none",
				"foo",
				"foo 1",
				"foo -3",
				"foo 1 bar",
				"foo 1 bar 2",
				"list-item",
				"list-item 1",
				"list-item 1 bar 2",
				"reversed(foo)",
				"reversed(foo) -3",
				"reversed(list-item)",
				"reversed(foo1) 1 foo2 9 reversed(foo3) 4"
			]
		},
		"counter-set": {
			"links": {
				"tr": "#increment-set",
				"dev": "#increment-set"
			},
			"tests": ["foo", "foo 1", "foo 1 bar", "foo 1 bar 2", "none"]
		},
		"counter-increment": {
			"links": {
				"tr": "#increment-set",
				"dev": "#increment-set"
			},
			"tests": ["foo", "foo 1", "foo 1 bar", "foo 1 bar 2", "none"]
		},
		"content": {
			"links": {
				"tr": "#counter-functions",
				"dev": "#counter-functions"
			},
			"tests": [
				"counter(chno, upper-latin) '. '",
				"counter(section, upper-roman) ' - '",
				"' [' counter(bq, decimal) ']'",
				"counter(notecntr, disc) ' '",
				"counter(p, none)",
				"counter(h1, upper-alpha) '.' counter(h2, decimal) ' '",
				"'(' counters(list-item, '.') ') '"
			]
		}
	}
};
