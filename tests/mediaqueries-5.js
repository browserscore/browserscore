export default {
	title: 'Media Queries Level 5',
	links: {
		tr: 'mediaqueries-5',
		dev: 'mediaqueries-5',
	},
	status: {
		stability: 'experimental',
	},
	'Media queries': {
		'display-mode': {
			links: {
				tr: '#display-modes',
				dev: '#display-modes',
			},
			tests: [
				'(display-mode: fullscreen)',
				'(display-mode: standalone)',
				'(display-mode: minimal-ui)',
				'(display-mode: browser)',
			],
		},
		'prefers-reduced-motion': {
			links: {
				tr: '#prefers-reduced-motion',
				dev: '#prefers-reduced-motion',
			},
			tests: [
				'(prefers-reduced-motion)',
				'(prefers-reduced-motion: no-preference)',
				'(prefers-reduced-motion: reduce)',
			],
		},
		'prefers-reduced-transparency': {
			links: {
				tr: '#prefers-reduced-transparency',
				dev: '#prefers-reduced-transparency',
			},
			tests: [
				'(prefers-reduced-transparency)',
				'(prefers-reduced-transparency: no-preference)',
				'(prefers-reduced-transparency: reduce)',
			],
		},
		'prefers-contrast': {
			links: {
				tr: '#prefers-contrast',
				dev: '#prefers-contrast',
			},
			tests: [
				'(prefers-contrast)',
				'(prefers-contrast: no-preference)',
				'(prefers-contrast: less)',
				'(prefers-contrast: more)',
				'(prefers-contrast: custom)',
			],
		},
		'prefers-color-scheme': {
			links: {
				tr: '#prefers-color-scheme',
				dev: '#prefers-color-scheme',
			},
			tests: ['(prefers-color-scheme)', '(prefers-color-scheme: light)', '(prefers-color-scheme: dark)'],
		},
		scripting: {
			links: {
				tr: '#scripting',
				dev: '#scripting',
			},
			tests: ['(scripting)', '(scripting: none)', '(scripting: initial-only)', '(scripting: enabled)'],
		},
		'environment-blending': {
			links: {
				tr: '#environment-blending',
				dev: '#environment-blending',
			},
			tests: [
				'(environment-blending)',
				'(environment-blending: opaque)',
				'(environment-blending: additive)',
				'(environment-blending: subtractive)',
			],
		},
		'forced-colors': {
			links: {
				tr: '#forced-colors',
				dev: '#prefers-contrast',
			},
			tests: ['(forced-colors)', '(forced-colors: none)', '(forced-colors: active)'],
		},
		'dynamic-range': {
			links: {
				tr: '#dynamic-range',
				dev: '#dynamic-range',
			},
			tests: ['(dynamic-range)', '(dynamic-range: standard)', '(dynamic-range: high)'],
		},
		'horizontal-viewport-segments': {
			links: {
				tr: '#mf-horizontal-viewport-segments',
				dev: '#mf-horizontal-viewport-segments',
			},
			tests: ['(horizontal-viewport-segments: 2)'],
		},
		'vertical-viewport-segments': {
			links: {
				tr: '#mf-vertical-viewport-segments',
				dev: '#mf-vertical-viewport-segments',
			},
			tests: ['(vertical-viewport-segments: 2)'],
		},
		'inverted-colors': {
			links: {
				tr: '#inverted',
				dev: '#inverted',
			},
			tests: ['(inverted-colors)', '(inverted-colors: none)', '(light-level: inverted)'],
		},
		'nav-controls': {
			links: {
				tr: '#nav-controls',
				dev: '#nav-controls',
			},
			tests: ['(nav-controls)', '(nav-controls: none)', '(nav-controls: back)'],
		},
		'video-color-gamut': {
			links: {
				dev: '#video-color-gamut',
				tr: '#video-color-gamut',
			},
			tests: [
				'(video-color-gamut)',
				'(video-color-gamut: srgb)',
				'(video-color-gamut: p3)',
				'(video-color-gamut: rec2020)',
			],
		},
		'video-dynamic-range': {
			links: {
				dev: '#video-dynamic-range',
				tr: '#video-dynamic-range',
			},
			tests: ['(video-dynamic-range)', '(video-dynamic-range: standard)', '(video-dynamic-range: high)'],
		},
	},
};
