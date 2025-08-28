export default {
	title: 'CSS Fonts Module Level 4',
	link: 'css-fonts-4',
	status: 'stable',
	values: {
		properties: ['font-family'],
		'system-ui': {
			link: '#system-ui-def',
			mdn: 'font-family',
			tests: 'system-ui',
		},
		'emoji': {
			link: '#emoji-def',
			mdn: 'font-family',
			tests: 'emoji',
		},
		'math': {
			link: '#math-def',
			mdn: 'font-family',
			tests: 'math',
		},
		'generic(fangsong)': {
			links: {
				tr: '#fangsong-def',
				dev: '#generic(fangsong)-def',
				},
			mdn: 'font-family',
			tests: 'generic(fangsong)',
		},
		'generic(kai)': {
			links: {
				dev: '#generic(kai)-def',
				},
			mdn: 'font-family',
			tests: 'generic(kai)',
		},
		'generic(khmer-mul)': {
			links: {
				dev: '#generic(khmer-mul)-def',
				},
			mdn: 'font-family',
			tests: 'generic(khmer-mul)',
		},
		'generic(nastaliq)': {
			links: {
				dev: '#generic(nastaliq)-def',
				},
			mdn: 'font-family',
			tests: 'generic(nastaliq)',
		},
		'ui-serif': {
			link: '#ui-serif-def',
			mdn: 'font-family',
			tests: 'ui-serif',
		},
		'ui-sans-serif': {
			link: '#ui-sans-serif-def',
			mdn: 'font-family',
			tests: 'ui-sans-serif',
		},
		'ui-monospace': {
			link: '#ui-monospace-def',
			mdn: 'font-family',
			tests: 'ui-monospace',
		},
		'ui-rounded': {
			link: '#ui-rounded-def',
			mdn: 'font-family',
			tests: 'ui-rounded',
		},
		'xxx-large': {
			link: '#font-size-prop',
			properties: ['font-size'],
			tests: ['xxx-large'],
		},
		'math in font-size': {
			link: '#font-size-prop',
			properties: ['font-size'],
			tests: ['math'],
		},
		'arbitrary font weights': {
			link: '#font-weight-prop',
			properties: ['font-weight'],
			tests: ['1', '90', '750', '1000'],
		},
		'angle for oblique': {
			link: '#font-style-prop',
			properties: ['font-style'],
			tests: ['oblique 15deg', 'oblique -15deg', 'oblique 0deg'],
		},
		'font-variant functions and keywords': {
			link: '#font-variant-prop',
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
		'@font-feature-values': {
			link: '#font-feature-values',
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
			link: '#font-palette-values',
			tests: [
				'@font-palette-values --custom-palette {\n  font-family: Handover Sans;\n  base-palette: 3;\n}',
				'@font-palette-values --custom-palette {\n  font-family: Handover Sans;\n  override-colors: 0 #000, 1 red;\n}',
			],
		},
	},
	descriptors: {
		'@font-face/ascent-override': {
			link: '#descdef-font-face-ascent-override',
			tests: ['normal', '125%'],
		},
		'@font-face/descent-override': {
			link: '#descdef-font-face-descent-override',
			tests: ['normal', '125%'],
		},
		'@font-face/line-gap-override': {
			link: '#descdef-font-face-line-gap-override',
			tests: ['normal', '90%'],
		},
		'@font-face/font-named-instance': {
			link: '#font-named-instance',
			tests: ['auto', "'Grotesque'"],
		},
		'@font-face/font-display': {
			link: '#descdef-font-face-font-display',
			tests: ['auto', 'block', 'swap', 'fallback', 'optional'],
		},
		'@font-face/font-stretch': {
			link: '#descdef-font-face-font-stretch',
			tests: [
				'auto',
				'condensed normal',
			],
		},
		'@font-face/font-style': {
			link: '#descdef-font-face-font-style',
			tests: [
				'auto',
				'left',
				'right',
				'10deg',
				'10deg 5deg',
			],
		},
		'@font-face/font-variation-settings': {
			link: '#descdef-font-face-font-variation-settings',
			tests: [
				'normal',
				'"wght" 2',
				'"wght" 2, "ital" 1.2',
			],
		},
		'@font-face/font-weight': {
			link: '#descdef-font-face-font-weight',
			tests: [
				'auto',
				'100 300',
			],
		},
		'@font-face/src': {
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
		'@font-feature-values/font-display': {
			link: '#font-display-font-feature-values',
			tests: ['auto', 'block', 'swap', 'fallback', 'optional'],
		},
	},
	interfaces: {
		CSSRule: {
			link: '#om-fontfeaturevalues',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['FONT_FEATURE_VALUES_RULE'],
			required: 'div { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSFontFeatureValuesRule: {
			link: '#om-fontfeaturevalues',
			links: {
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
			link: '#cssfontfeaturevaluesmap',
			links: {
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
			link: '#om-fontpalettevalues',
			links: {
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
