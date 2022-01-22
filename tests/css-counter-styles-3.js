export default {
	"title": "CSS Counter Styles Level 3",
	"links": {
		"tr": "css-counter-styles-3",
		"dev": "css-counter-styles-3"
	},
	"status": {
		"stability": "stable",
		"first-snapshot": 2021
	},
	"@rules": {
		"@counter-style": {
			"links": {
				"tr": "#the-counter-style-rule",
				"dev": "#the-counter-style-rule"
			},
			"tests": "@counter-style foo {\n  system: numeric;\n  symbols: '0' '1' '2' '3' '4' '5' '6' '7' '8' '9';\n}"
		}
	},
	"descriptors": {
		"@counter-style example/system": {
			"links": {
				"tr": "#counter-style-system",
				"dev": "#counter-style-system"
			},
			"required" : {
				'*' : { "descriptor" : "system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C"},
				'extends decimal' : { }
			},
			"tests": [
				"cyclic", "numeric", "alphabetic", "symbolic", "additive", "fixed 3", "extends decimal"
			]
		},
		"@counter-style example/negative": {
			"links": {
				"tr": "#counter-style-negative",
				"dev": "#counter-style-negative"
			},
			"required" : {
				'*' : { "descriptor" : "system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C"}
			},
			"tests": [
				"'-'", "'(' ')'"
			]
		},
		"@counter-style example/prefix": {
			"links": {
				"tr": "#counter-style-prefix",
				"dev": "#counter-style-prefix"
			},
			"required" : {
				'*' : { "descriptor" : "system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C"}
			},
			"tests": [
				"»", "url(https://lea.verou.me/mark.svg)"
			]
		},
		"@counter-style example/suffix": {
			"links": {
				"tr": "#counter-style-suffix",
				"dev": "#counter-style-suffix"
			},
			"required" : {
				'*' : { "descriptor" : "system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C"}
			},
			"tests": [
				"»", "url(https://lea.verou.me/mark.svg)"
			]
		},
		"@counter-style example/range": {
			"links": {
				"tr": "#counter-style-range",
				"dev": "#counter-style-range"
			},
			"required" : {
				'*' : { "descriptor" : "system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C"}
			},
			"tests": [
				"auto", "2 5", "infinite 10", "10 infinite", "infinite infinite", "2 5, 8 10", "infinite 8, 6 infinite"
			]
		},
		"@counter-style example/symbols": {
			"links": {
				"tr": "#counter-style-symbols",
				"dev": "#counter-style-symbols"
			},
			"required" : {
				'*' : { "descriptor" : "system: alphabetic"},
				'custom-numbers' : { "rule" : "@counter-style custom-numbers { system: fixed; symbols: A B C D E;}"}
			},
			"tests": [
				"A B C D E F",
				"'\\24B6' '\\24B7' '\\24B8' D E F",
				"'0' '1' '2' '4' '5' '6' '7'",
				"'1' url('second.svg') '2'",
				"url('first.svg') url('second.svg') url('third.svg')",
				"custom-numbers"
			]
		},
		"@counter-style example/additive-symbols": {
			"links": {
				"tr": "#additive-system",
				"dev": "#descdef-counter-style-additive-symbols"
			},
			"required" : {
				'*' : { "descriptor" : "system: additive"}
			},
			"tests": [
				"3 '0'", "3 '1', 2 '\\2E\\20'", "3 '1', 2 url(symbol.svg)",
			]
		},
		"@counter-style example/pad": {
			"links": {
				"tr": "#counter-style-pad",
				"dev": "#counter-style-pad"
			},
			"required" : {
				'*' : { "descriptor" : "system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C"}
			},
			"tests": [
				"0 ''", "3 '0'", "'0' 3"
			]
		},
		"@counter-style example/fallback": {
			"links": {
				"tr": "#counter-style-fallback",
				"dev": "#counter-style-fallback"
			},
			"required" : {
				'*' : { "descriptor" : "system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C"}
			},
			"tests": [
				"decimal"
			]
		},
		"@counter-style example/speak-as": {
			"links": {
				"tr": "#counter-style-speak-as",
				"dev": "#counter-style-speak-as"
			},
			"required" : {
				'*' : { "descriptor" : "system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C"}
			},
			"tests": [
				"auto", "bullets", "numbers", "words", "spell-out", "example-counter",
			]
		}
	}
};
