export default {
	title: 'CSS Counter Styles Level 3',
	link: 'css-counter-styles-3',
	status: {
		stability: 'stable',
		'first-snapshot': 2021,
	},
	'@rules': {
		'@counter-style': {
			link: '#the-counter-style-rule',
			tests: "@counter-style foo {\n  system: numeric;\n  symbols: '0' '1' '2' '3' '4' '5' '6' '7' '8' '9';\n}",
		},
	},
	descriptors: {
		'@counter-style example/system': {
			link: '#counter-style-system',
			required: {
				'*': {
					descriptor: 'system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C',
				},
				'extends decimal': {},
			},
			tests: ['cyclic', 'numeric', 'alphabetic', 'symbolic', 'additive', 'fixed 3', 'extends decimal'],
		},
		'@counter-style example/negative': {
			link: '#counter-style-negative',
			required: {
				'*': {
					descriptor: 'system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C',
				},
			},
			tests: ["'-'", "'(' ')'"],
		},
		'@counter-style example/prefix': {
			link: '#counter-style-prefix',
			required: {
				'*': {
					descriptor: 'system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C',
				},
			},
			tests: ['»', 'url(https://lea.verou.me/mark.svg)'],
		},
		'@counter-style example/suffix': {
			link: '#counter-style-suffix',
			required: {
				'*': {
					descriptor: 'system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C',
				},
			},
			tests: ['»', 'url(https://lea.verou.me/mark.svg)'],
		},
		'@counter-style example/range': {
			link: '#counter-style-range',
			required: {
				'*': {
					descriptor: 'system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C',
				},
			},
			tests: [
				'auto',
				'2 5',
				'infinite 10',
				'10 infinite',
				'infinite infinite',
				'2 5, 8 10',
				'infinite 8, 6 infinite',
			],
		},
		'@counter-style example/symbols': {
			link: '#counter-style-symbols',
			required: {
				'*': { descriptor: 'system: alphabetic' },
				'custom-numbers': {
					rule: '@counter-style custom-numbers { system: fixed; symbols: A B C D E;}',
				},
			},
			tests: [
				'A B C D E F',
				"'\\24B6' '\\24B7' '\\24B8' D E F",
				"'0' '1' '2' '4' '5' '6' '7'",
				"'1' url('second.svg') '2'",
				"url('first.svg') url('second.svg') url('third.svg')",
				'custom-numbers',
			],
		},
		'@counter-style example/additive-symbols': {
			links: {
				tr: '#additive-system',
				dev: '#descdef-counter-style-additive-symbols',
			},
			required: {
				'*': { descriptor: 'system: additive' },
			},
			tests: ["3 '0'", "3 '1', 2 '\\2E\\20'", "3 '1', 2 url(symbol.svg)"],
		},
		'@counter-style example/pad': {
			link: '#counter-style-pad',
			required: {
				'*': {
					descriptor: 'system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C',
				},
			},
			tests: ["0 ''", "3 '0'", "'0' 3"],
		},
		'@counter-style example/fallback': {
			link: '#counter-style-fallback',
			required: {
				'*': {
					descriptor: 'system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C',
				},
			},
			tests: ['decimal'],
		},
		'@counter-style example/speak-as': {
			link: '#counter-style-speak-as',
			required: {
				'*': {
					descriptor: 'system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C',
				},
			},
			tests: ['auto', 'bullets', 'numbers', 'words', 'spell-out', 'example-counter'],
		},
	},
	interfaces: {
		CSSRule: {
			link: '#extensions-to-cssrule-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['COUNTER_STYLE_RULE'],
			required: 'div { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSCounterStyleRule: {
			link: '#the-csscounterstylerule-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: [
				'name',
				'system',
				'symbols',
				'additiveSymbols',
				'negative',
				'prefix',
				'suffix',
				'range',
				'pad',
				'speakAs',
				'fallback',
				'cssText',
				'parentRule',
				'parentStyleSheet',
			],
			required: '@counter-style example { system: alphabetic; symbols: A B C D; additive-symbols: 1000 M, 500 C; }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
	},
};
