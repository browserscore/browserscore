export default {
	title: 'CSS Fonts Module Level 4',
	links: {
		tr: 'css-fonts-4',
		dev: 'css-fonts-4',
	},
	status: {
		stability: 'stable',
	},
	values: {
		properties: ['font-family'],
		'system-ui': {
			links: {
				tr: '#system-ui-def',
				dev: '#system-ui-def',
				mdn: 'font-family',
			},
			tests: 'system-ui',
		},
		'emoji': {
			links: {
				tr: '#emoji-def',
				dev: '#emoji-def',
				mdn: 'font-family',
			},
			tests: 'emoji',
		},
		'math': {
			links: {
				tr: '#math-def',
				dev: '#math-def',
				mdn: 'font-family',
			},
			tests: 'math',
		},
		'generic(fangsong)': {
			links: {
				tr: '#fangsong-def',
				dev: '#generic(fangsong)-def',
				mdn: 'font-family',
			},
			tests: 'generic(fangsong)',
		},
		'generic(kai)': {
			links: {
				dev: '#generic(kai)-def',
				mdn: 'font-family',
			},
			tests: 'generic(kai)',
		},
		'generic(nastaliq)': {
			links: {
				dev: '#generic(nastaliq)-def',
				mdn: 'font-family',
			},
			tests: 'generic(nastaliq)',
		},
		'ui-serif': {
			links: {
				tr: '#ui-serif-def',
				dev: '#ui-serif-def',
				mdn: 'font-family',
			},
			tests: 'ui-serif',
		},
		'ui-sans-serif': {
			links: {
				tr: '#ui-sans-serif-def',
				dev: '#ui-sans-serif-def',
				mdn: 'font-family',
			},
			tests: 'ui-sans-serif',
		},
		'ui-monospace': {
			links: {
				tr: '#ui-monospace-def',
				dev: '#ui-monospace-def',
				mdn: 'font-family',
			},
			tests: 'ui-monospace',
		},
		'ui-rounded': {
			links: {
				tr: '#ui-rounded-def',
				dev: '#ui-rounded-def',
				mdn: 'font-family',
			},
			tests: 'ui-rounded',
		},
		'xxx-large': {
			links: {
				tr: '#font-size-prop',
				dev: '#font-size-prop',
			},
			properties: ['font-size'],
			tests: ['xxx-large'],
		},
		'math in font-size': {
			links: {
				tr: '#font-size-prop',
				dev: '#font-size-prop',
			},
			properties: ['font-size'],
			tests: ['math'],
		},
		'arbitrary font weights': {
			links: {
				tr: '#font-weight-prop',
				dev: '#font-weight-prop',
			},
			properties: ['font-weight'],
			tests: ['1', '90', '750', '1000'],
		},
		'angle for oblique': {
			links: {
				tr: '#font-style-prop',
				dev: '#font-style-prop',
			},
			properties: ['font-style'],
			tests: ['oblique 15deg', 'oblique -15deg', 'oblique 0deg'],
		},
		'font-variant functions and keywords': {
			links: {
				tr: '#font-variant-prop',
				dev: '#font-variant-prop',
			},
			properties: ['font-variant'],
			tests: [
				'stylistic(salt01)',
				'historical-forms',
				'styleset(ss01)',
				'styleset(stacked-g, geometric-m)',
				'character-variant(cv02)',
				'character-variant(beta-3, gamma)',
				'swash(flowing)',
				'ornaments(leaves)',
				'annotation(blocky)',
				'text',
				'emoji',
				'unicode',
				'discretionary-ligatures character-variant(leo-B, leo-M, leo-N, leo-T, leo-U)',
			],
		},
	},
	properties: {
		'font-variant-alternates': {
			links: {
				tr: '#font-variant-alternates-prop',
				dev: '#font-variant-alternates-prop',
			},
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
			links: {
				tr: '#font-variant-emoji-prop',
				dev: '#font-variant-emoji-prop',
			},
			tests: [
				'normal',
				'text',
				'emoji',
				'unicode',
			],
		},
		'font-variation-settings': {
			links: {
				tr: '#font-variation-settings-def',
				dev: '#font-variation-settings-def',
			},
			tests: [
				'normal',
				'"wght" 2',
				'"wght" 2, "ital" 1.2',
			],
		},
		'font-feature-settings': {
			links: {
				tr: '#font-feature-settings-prop',
				dev: '#font-feature-settings-prop',
			},
			tests: ['normal', "'swsh' 2"],
		},
		'font-language-override': {
			links: {
				tr: '#font-language-override',
				dev: '#font-language-override',
			},
			tests: ['normal', "'SRB'"],
		},
		'font-synthesis-weight': {
			links: {
				tr: '#font-synthesis-weight',
				dev: '#font-synthesis-weight',
			},
			tests: ['auto', 'none'],
		},
		'font-synthesis-style': {
			links: {
				tr: '#font-synthesis-style',
				dev: '#font-synthesis-style',
			},
			tests: ['auto', 'none'],
		},
		'font-synthesis-small-caps': {
			links: {
				tr: '#font-synthesis-small-caps',
				dev: '#font-synthesis-small-caps',
			},
			tests: ['auto', 'none'],
		},
		'font-synthesis': {
			links: {
				tr: '#font-synthesis',
				dev: '#font-synthesis',
			},
			tests: [
				'small-caps',
				'weight small-caps',
				'style small-caps',
				'style small-caps weight',
			],
		},
		'font-optical-sizing': {
			links: {
				tr: '#font-optical-sizing-def',
				dev: '#font-optical-sizing-def',
			},
			tests: ['none', 'auto'],
		},
		'font-palette': {
			links: {
				tr: '#font-palette-prop',
				dev: '#font-palette-prop',
			},
			tests: ['normal', 'light', 'dark', '--custom-palette'],
		},
	},
	'@rules': {
		'@font-feature-values': {
			links: {
				tr: '#font-feature-values',
				dev: '#font-feature-values',
			},
			tests: [
				'@font-feature-values Jupiter Sans {\n  @stylistic {\n    some-style: 1;\n  }\n}',
				'@font-feature-values Jupiter Sans {\n  @historical-forms {\n    some-style: 1;\n  }\n}',
				'@font-feature-values Jupiter Sans {\n  @styleset {\n    some-style: 1;\n  }\n}',
				'@font-feature-values Jupiter Sans {\n  @character-variant {\n    some-style: 1;\n  }\n}',
				'@font-feature-values Jupiter Sans {\n  @swash {\n    some-style: 1;\n  }\n}',
				'@font-feature-values Jupiter Sans {\n  @ornaments {\n    some-style: 1;\n  }\n}',
				'@font-feature-values Jupiter Sans {\n  @annotation {\n    some-style: 1;\n  }\n}',
				'@font-feature-values Jupiter Sans, Foo Bar {\n  @styleset {\n    some-style: 1;\n  }\n}',
				'@font-feature-values Jupiter Sans {\n  @styleset {\n    some-style: 1 2 3;\n  }\n}',
				'@font-feature-values Jupiter Sans {\n  @styleset {\n    some-style: 1;\n  }\n@styleset {\n    other-style: 2;\n  }\n}',
			],
		},
		'@font-palette-values': {
			links: {
				tr: '#font-palette-values',
				dev: '#font-palette-values',
			},
			tests: [
				'@font-palette-values --custom-palette {\n  font-family: Handover Sans;\n  base-palette: 3;\n}',
				'@font-palette-values --custom-palette {\n  font-family: Handover Sans;\n  override-colors: 0 #000, 1 red;\n}',
			],
		},
	},
	descriptors: {
		'@font-face/ascent-override': {
			links: {
				tr: '#descdef-font-face-ascent-override',
				dev: '#descdef-font-face-ascent-override',
			},
			tests: ['normal', '125%'],
		},
		'@font-face/descent-override': {
			links: {
				tr: '#descdef-font-face-descent-override',
				dev: '#descdef-font-face-descent-override',
			},
			tests: ['normal', '125%'],
		},
		'@font-face/line-gap-override': {
			links: {
				tr: '#descdef-font-face-line-gap-override',
				dev: '#descdef-font-face-line-gap-override',
			},
			tests: ['normal', '90%'],
		},
		'@font-face/font-named-instance': {
			links: {
				tr: '#font-named-instance',
				dev: '#font-named-instance',
			},
			tests: ['auto', "'Grotesque'"],
		},
		'@font-face/font-display': {
			links: {
				tr: '#descdef-font-face-font-display',
				dev: '#descdef-font-face-font-display',
			},
			tests: ['auto', 'block', 'swap', 'fallback', 'optional'],
		},
		'@font-face/font-stretch': {
			links: {
				tr: '#descdef-font-face-font-stretch',
				dev: '#descdef-font-face-font-stretch',
			},
			tests: [
				'auto',
				'condensed normal',
			],
		},
		'@font-face/font-style': {
			links: {
				tr: '#descdef-font-face-font-style',
				dev: '#descdef-font-face-font-style',
			},
			tests: [
				'auto',
				'10deg',
				'10deg 5deg',
			],
		},
		'@font-face/font-variation-settings': {
			links: {
				tr: '#descdef-font-face-font-variation-settings',
				dev: '#descdef-font-face-font-variation-settings',
			},
			tests: [
				'normal',
				'"wght" 2',
				'"wght" 2, "ital" 1.2',
			],
		},
		'@font-face/font-weight': {
			links: {
				tr: '#descdef-font-face-font-weight',
				dev: '#descdef-font-face-font-weight',
			},
			tests: [
				'auto',
				'100 300',
			],
		},
		'@font-face/src': {
			links: {
				tr: '#font-face-src-parsing',
				dev: '#font-face-src-parsing',
			},
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
		'@font-feature-values/font-display': {
			links: {
				tr: '#font-display-font-feature-values',
				dev: '#font-display-font-feature-values',
			},
			tests: ['auto', 'block', 'swap', 'fallback', 'optional'],
		},
	},
	interfaces: {
		CSSRule: {
			links: {
				tr: '#om-fontfeaturevalues',
				dev: '#om-fontfeaturevalues',
				mdnGroup: 'DOM',
			},
			tests: ['FONT_FEATURE_VALUES_RULE'],
			required: 'div { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSFontFeatureValuesRule: {
			links: {
				tr: '#om-fontfeaturevalues',
				dev: '#om-fontfeaturevalues',
				mdnGroup: 'DOM',
			},
			tests: [
				'fontFamily',
				'annotation',
				'ornaments',
				'stylistic',
				'swash',
				'characterVariant',
				'styleset',
				'cssText',
				'parentRule',
				'parentStyleSheet',
			],
			required: '@font-feature-values Font One { @styleset { nice-style: 12; } }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSFontFeatureValuesMap: {
			links: {
				tr: '#cssfontfeaturevaluesmap',
				dev: '#cssfontfeaturevaluesmap',
				mdnGroup: 'DOM',
			},
			tests: [
				'has',
				'get',
				'set',
				'keys',
				'values',
				'entries',
				'forEach',
				'clear',
				'delete',
				'size',
			],
			required: '@font-feature-values Font One { @styleset { nice-style: 12; } }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleset;
			},
		},
		CSSFontPaletteValuesRule: {
			links: {
				tr: '#om-fontpalettevalues',
				dev: '#om-fontpalettevalues',
				mdnGroup: 'DOM',
			},
			tests: [
				'name',
				'fontFamily',
				'basePalette',
				'overrideColors',
				'cssText',
				'parentRule',
				'parentStyleSheet',
			],
			required: '@font-palette-values --identifier { font-family: foo; override-colors: 0 #00ffbb, 1 #007744; }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
	},
};
