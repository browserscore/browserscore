export default {
	id: 'css-counter-styles-3',
	title: 'CSS Counter Styles Level 3',
	link: 'css-counter-styles-3',
	status: 'stable',
	firstSnapshot: 2021,
	atrules: {
		'@counter-style': {
			link: '#the-counter-style-rule',
			isGroup: true,
			preludeRequired: true,
			prelude: 'foo',
			descriptors: {
				'system': {
					link: '#counter-style-system',
					mdn: '@counter-style/system',
					values: ['cyclic', 'numeric', 'alphabetic', 'symbolic', 'additive', 'fixed 3', 'extends decimal'],
				},
				'symbols': {
					link: '#counter-style-symbols',
					mdn: '@counter-style/symbols',
					values: [
						'A B C D E F',
						"'\\24B6' '\\24B7' '\\24B8' D E F",
						"'0' '1' '2' '4' '5' '6' '7'",
						"'1' url('image.png') '2'",
						"url('image1.png') url('image2.png') url('image3.png')",
						'custom-numbers',
					],
				},
				'additive-symbols': {
					link: '#counter-style-additive-symbols',
					mdn: '@counter-style/additive-symbols',
					values: [
						'1000 M, 500 C',
						'1000 M, 500 C, 100 L, 50 X',
					],
				},
				'negative': {
					link: '#counter-style-negative',
					mdn: '@counter-style/negative',
					values: [
						'"--"',
						'"(" ")"',
					],
				},
				'prefix': {
					link: '#counter-style-prefix',
					mdn: '@counter-style/prefix',
					values: [
						'a', // <custom-ident>
						'"a"', // <string>
						'url(image.png)', // <image>
					],
				},
				'suffix': {
					link: '#counter-style-suffix',
					mdn: '@counter-style/suffix',
					values: [
						'a', // <custom-ident>
						'"a"', // <string>
						'url(image.png)', // <image>
					],
				},
				'range': {
					link: '#counter-style-range',
					mdn: '@counter-style/range',
					values: [
						'auto',
						'2 5',
						'infinite 10',
						'10 infinite',
						'infinite infinite',
						'2 5, 8 10',
						'infinite 8, 6 infinite',
					],
				},
				'pad': {
					link: '#counter-style-pad',
					mdn: '@counter-style/pad',
					values: [
						'3 "0"',
						'"0" 3',
					],
				},
				'speak-as': {
					link: '#counter-style-speak-as',
					mdn: '@counter-style/speak-as',
					values: [
						'auto',
						'bullets',
						'numbers',
						'words',
						'spell-out',
						'example-counter',
					],
				},
				'fallback': {
					link: '#counter-style-fallback',
					mdn: '@counter-style/fallback',
					values: ['decimal'],
				},
			},
		},
	},
	interfaces: {
		CSSRule: {
			link: '#extensions-to-cssrule-interface',
			mdnGroup: 'DOM',
			properties: ['COUNTER_STYLE_RULE'],
		},
		CSSCounterStyleRule: {
			link: '#the-csscounterstylerule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSRule',
			members: [
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
			],
		},
	},
};
