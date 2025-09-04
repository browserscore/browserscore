export default {
	id: 'css-fonts-4',
	title: 'CSS Fonts Module Level 4',
	link: 'css-fonts-4',
	status: 'stable',
	properties: {
		'font-family': {
			isGroup: true,
			link: '#font-family-prop',
			mdn: 'font-family',
			tests: {
				'system-ui': {link: '#system-ui-def'},
				'emoji': {link: '#emoji-def'},
				'math': {link: '#math-def'},
				'generic(fangsong)': {link: '#generic(fangsong)-def'},
				'generic(kai)': {link: '#generic(kai)-def'},
				'generic(khmer-mul)': {link: '#generic(khmer-mul)-def'},
				'generic(nastaliq)': {link: '#generic(nastaliq)-def'},
				'ui-serif': {link: '#ui-serif-def'},
				'ui-sans-serif': {link: '#ui-sans-serif-def'},
				'ui-monospace': {link: '#ui-monospace-def'},
				'ui-rounded': {link: '#ui-rounded-def'},
			},
		},
		'font-size': {
			isGroup: true,
			link: '#font-size-prop',
			mdn: 'font-size',
			tests: {
				'xxx-large': {link: '#xxx-large-def'},
				'math': {link: '#math-in-font-size-def'},
			},
		},
		'font-weight': {
			title: 'Arbitrary font weights',
			link: '#font-weight-prop',
			mdn: 'font-weight',
			tests: ['1', '90', '750', '1000'],
		},
		'font-style': {
			title: '`oblique &lt;angle>`',
			link: '#font-style-prop',
			mdn: 'font-style',
			tests: ['oblique 15deg', 'oblique -15deg', 'oblique 0deg'],
		},
		'font-variant-alternates': {
			link: '#font-variant-alternates-prop',
			tests: [
				'normal',
				'stylistic(salt01)',
				'historical-forms',
				'styleset(ss01)',
				'styleset(stacked-g, geometric-m)',
				'character-variant(cv02)',
				'character-variant(beta-3, gamma)',
				'swash(flowing)',
				'ornaments(leaves)',
				'annotation(blocky)',
			],
		},
		'font-variant-emoji': {
			link: '#font-variant-emoji-prop',
			tests: [
				'normal',
				'text',
				'emoji',
				'unicode',
			],
		},
		'font-variant': {
			title: '`font-variant` functions and keywords',
			link: '#font-variant-prop',
			mdn: 'font-variant',
			tests: [
				// font-variant-alternates
				'stylistic(salt01)',
				'historical-forms',
				'styleset(ss01)',
				'styleset(stacked-g, geometric-m)',
				'character-variant(cv02)',
				'character-variant(beta-3, gamma)',
				'swash(flowing)',
				'ornaments(leaves)',
				'annotation(blocky)',
				// font-variant-emoji
				'text',
				'emoji',
				'unicode',
				'discretionary-ligatures character-variant(leo-B, leo-M, leo-N, leo-T, leo-U)',
			]
		},
		'font-variation-settings': {
			link: '#font-variation-settings-def',
			tests: [
				'normal',
				'"wght" 2',
				'"wght" 2, "ital" 1.2',
			],
		},
		'font-feature-settings': {
			link: '#font-feature-settings-prop',
			tests: ['normal', "'swsh' 2"],
		},
		'font-language-override': {
			link: '#font-language-override',
			tests: ['normal', "'SRB'"],
		},
		'font-synthesis-weight': {
			link: '#font-synthesis-weight',
			tests: ['auto', 'none'],
		},
		'font-synthesis-style': {
			link: '#font-synthesis-style',
			tests: ['auto', 'none', 'oblique-only'],
		},
		'font-synthesis-small-caps': {
			link: '#font-synthesis-small-caps',
			tests: ['auto', 'none'],
		},
		'font-synthesis': {
			link: '#font-synthesis',
			tests: [
				'small-caps',
				'weight small-caps',
				'style small-caps',
				'style small-caps weight',
			],
		},
		'font-optical-sizing': {
			link: '#font-optical-sizing-def',
			tests: ['none', 'auto'],
		},
		'font-palette': {
			link: '#font-palette-prop',
			tests: ['normal', 'light', 'dark', '--custom-palette'],
		},
	},
	atrules: {
		'@font-face': {
			isGroup: true,
			descriptors: {
				'ascent-override': {
					link: '#descdef-font-face-ascent-override',
					tests: ['normal', '125%'],
				},
				'descent-override': {
					link: '#descdef-font-face-descent-override',
					tests: ['normal', '125%'],
				},
				'line-gap-override': {
					link: '#descdef-font-face-line-gap-override',
					tests: ['normal', '90%'],
				},
				'font-named-instance': {
					link: '#font-named-instance',
					tests: ['auto', "'Grotesque'"],
				},
				'font-display': {
					link: '#descdef-font-face-font-display',
					tests: ['auto', 'block', 'swap', 'fallback', 'optional'],
				},
				'font-stretch': {
					link: '#descdef-font-face-font-stretch',
					tests: [
						'auto',
						'condensed normal',
					],
				},
				'font-style': {
					link: '#descdef-font-face-font-style',
					tests: [
						'auto',
						'left',
						'right',
						'10deg',
						'10deg 5deg',
					],
				},
				'font-variation-settings': {
					link: '#descdef-font-face-font-variation-settings',
					tests: [
						'normal',
						'"wght" 2',
						'"wght" 2, "ital" 1.2',
					],
				},
				'font-weight': {
					link: '#descdef-font-face-font-weight',
					tests: [
						'auto',
						'100 300',
					],
				},
				'src': {
					code: 'tech()',
					link: '#font-face-src-parsing',
					tests: [
						'url("foo") format("woff") tech(features-opentype)',
						'url("foo") format("woff") tech(features-graphite)',
						'url("foo") format("woff") tech(features-aat)',
						'url("foo") format("woff") tech(color-COLRv0)',
						'url("foo") format("woff") tech(color-COLRv1)',
						'url("foo") format("woff") tech(color-SVG)',
						'url("foo") format("woff") tech(color-sbix)',
						'url("foo") format("woff") tech(color-CBDT)',
						'url("foo") format("woff") tech(variations)',
						'url("foo") format("woff") tech(palettes)',
						'url("foo") format("woff") tech(incremental)',
						'url("foo") tech(color-COLRv1)',
						'url("foo") format("woff") tech(features-opentype, color-COLRv1)',
					],
				},
			},
		},
		'@font-feature-values': {
			link: '#font-feature-values',
			preludeRequired: true,
			prelude: 'Foo',
			atrules: {
				'@stylistic': { contents: 'a: 1' },
				'@historical-forms': { contents: 'a: 1' },
				'@styleset': { contents: 'a: 1' },
				'@character-variant': { contents: 'a: 1' },
				'@swash': { contents: 'a: 1' },
				'@ornaments': { contents: 'a: 1' },
				'@annotation': { contents: 'a: 1' },
				'@styleset': { contents: 'a: 1' },
			},
		},
		'@font-palette-values': {
			link: '#font-palette-values',
			prelude: '--custom-palette',
			descriptors: ['font-family', 'base-palette', 'override-colors', 'font-display'],
		},
	},
	globals: {
		CSSRule: {
			link: '#om-fontfeaturevalues',
			mdnGroup: 'DOM',
			properties: ['FONT_FEATURE_VALUES_RULE'],
		},
		CSSFontFeatureValuesRule: {
			link: '#om-fontfeaturevalues',
			mdnGroup: 'DOM',
			extends: 'CSSRule',
			members: [
				'fontFamily',
				'annotation',
				'ornaments',
				'stylistic',
				'swash',
				'characterVariant',
				'styleset',
			],
		},
		CSSFontFeatureValuesMap: {
			link: '#cssfontfeaturevaluesmap',
			mdnGroup: 'DOM',
			methods: ['set'],
		},
		CSSFontPaletteValuesRule: {
			link: '#om-fontpalettevalues',
			mdnGroup: 'DOM',
			extends: 'CSSRule',
			members: [
				'name',
				'fontFamily',
				'basePalette',
				'overrideColors',
			],
		},
	},
};
