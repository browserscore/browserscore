export default {
	title: 'CSS Fonts Module Level 3',
	links: {
		tr: 'css-fonts-3',
		dev: 'css-fonts-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
	},
	properties: {
		'font-stretch': {
			links: {
				tr: '#font-stretch-prop',
				dev: '#font-stretch-prop',
			},
			tests: [
				'normal',
				'ultra-condensed',
				'extra-condensed',
				'condensed',
				'semi-condensed',
				'semi-expanded',
				'expanded',
				'extra-expanded',
				'ultra-expanded',
			],
		},
		'font-size-adjust': {
			links: {
				tr: '#font-size-adjust-prop',
				dev: '#font-size-adjust-prop',
			},
			tests: ['none', '.5'],
		},
		'font-synthesis': {
			links: {
				tr: '#font-synthesis-prop',
				dev: '#font-synthesis-prop',
			},
			tests: ['none', 'weight', 'style', 'weight style', 'style weight'],
		},
		'font-kerning': {
			links: {
				tr: '#font-kerning-prop',
				dev: '#font-kerning-prop',
			},
			tests: ['auto', 'normal', 'none'],
		},
		'font-variant-position': {
			links: {
				tr: '#font-variant-position-prop',
				dev: '#font-variant-position-prop',
			},
			tests: ['normal', 'sub', 'super'],
		},
		'font-variant-ligatures': {
			links: {
				tr: '#font-variant-ligatures-prop',
				dev: '#font-variant-ligatures-prop',
			},
			tests: [
				'normal',
				'none',
				'common-ligatures',
				'no-common-ligatures',
				'discretionary-ligatures',
				'no-discretionary-ligatures',
				'historical-ligatures',
				'no-historical-ligatures',
				'contextual',
				'no-contextual',
				'common-ligatures discretionary-ligatures historical-ligatures contextual',
			],
		},
		'font-variant-caps': {
			links: {
				tr: '#font-variant-caps-prop',
				dev: '#font-variant-caps-prop',
			},
			tests: [
				'normal',
				'small-caps',
				'all-small-caps',
				'petite-caps',
				'all-petite-caps',
				'titling-caps',
				'unicase',
			],
		},
		'font-variant-numeric': {
			links: {
				tr: '#font-variant-numeric-prop',
				dev: '#font-variant-numeric-prop',
			},
			tests: [
				'normal',
				'lining-nums',
				'oldstyle-nums',
				'proportional-nums',
				'tabular-nums',
				'diagonal-fractions',
				'stacked-fractions',
				'ordinal',
				'slashed-zero',
				'lining-nums proportional-nums diagonal-fractions',
				'oldstyle-nums tabular-nums stacked-fractions ordinal slashed-zero',
				'slashed-zero ordinal tabular-nums stacked-fractions oldstyle-nums',
			],
		},
		'font-variant-east-asian': {
			links: {
				tr: '#font-variant-east-asian-prop',
				dev: '#font-variant-east-asian-prop',
			},
			tests: [
				'normal',
				'jis78',
				'jis83',
				'jis90',
				'jis04',
				'simplified',
				'traditional',
				'full-width',
				'proportional-width',
				'ruby',
				'simplified full-width ruby',
			],
		},

		'font-feature-settings': {
			links: {
				tr: '#font-feature-settings-prop',
				dev: '#font-feature-settings-prop',
			},
			tests: ['normal', "'c2sc'", "'smcp' on", "'liga' off", "'smcp', 'swsh' 2"],
		},
	},
	descriptors: {
		'@font-face/src': {
			links: {
				tr: '#descdef-src',
				dev: '#descdef-src',
			},
			tests: [
				'url(http://example.com/fonts/Gentium.woff)',
				'url(ideal-sans-serif.woff2) format("woff2"), url(good-sans-serif.woff) format("woff"), url(basic-sans-serif.ttf) format("opentype")',
				'local(Gentium), url(Gentium.woff)',
			],
		},
		'@font-face/font-family': {
			links: {
				tr: '#descdef-font-family',
				dev: '#descdef-font-family',
			},
			tests: ['Gentium'],
		},
		'@font-face/font-style': {
			links: {
				tr: '#font-prop-desc',
				dev: '#font-prop-desc',
			},
			tests: ['normal', 'italic', 'oblique '],
		},
		'@font-face/font-weight': {
			links: {
				tr: '#font-prop-desc',
				dev: '#font-prop-desc',
			},
			tests: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
		},
		'@font-face/font-stretch': {
			links: {
				tr: '#font-prop-desc',
				dev: '#font-prop-desc',
			},
			tests: [
				'normal',
				'ultra-condensed',
				'extra-condensed',
				'condensed',
				'semi-condensed',
				'semi-expanded',
				'expanded',
				'extra-expanded',
				'ultra-expanded ',
			],
		},
		'@font-face/font-feature-settings': {
			links: {
				tr: '#font-rend-desc',
				dev: '#font-rend-desc',
			},
			tests: ['normal', "'c2sc'", "'smcp' on", "'liga' off", "'smcp', 'swsh' 2"],
		},
		'@font-face/font-variation-settings': {
			links: {
				tr: '#font-rend-desc',
				dev: '#font-rend-desc',
			},
			tests: ['normal', "'swsh' 2"],
		},
		'@font-face/unicode-range': {
			links: {
				tr: '#unicode-range-desc',
				dev: '#unicode-range-desc',
			},
			tests: ['U+416', 'U+0-7F', 'U+A5, U+4E00-9FFF', 'U+30??'],
		},
	},
	'@rules': {
		'@font-face': {
			links: {
				tr: '#font-face-rule',
				dev: '#font-face-rule',
			},
			tests: "@font-face {\n  font-family: foo;\n  src: local('Arial');\n}",
		},
	},
};
