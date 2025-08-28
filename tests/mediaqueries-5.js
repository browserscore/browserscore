export default {
	title: 'Media Queries Level 5',
	link: 'mediaqueries-5',
	status: 'experimental',
	mediaqueries: {
		'display-mode': {
			link: '#display-modes',
			tests: [
				'(display-mode)',
				'(display-mode: fullscreen)',
				'(display-mode: standalone)',
				'(display-mode: minimal-ui)',
				'(display-mode: browser)',
			],
		},
		'prefers-reduced-motion': {
			link: '#prefers-reduced-motion',
			tests: [
				'(prefers-reduced-motion)',
				'(prefers-reduced-motion: no-preference)',
				'(prefers-reduced-motion: reduce)',
			],
		},
		'prefers-reduced-transparency': {
			link: '#prefers-reduced-transparency',
			tests: [
				'(prefers-reduced-transparency)',
				'(prefers-reduced-transparency: no-preference)',
				'(prefers-reduced-transparency: reduce)',
			],
		},
		'prefers-contrast': {
			link: '#prefers-contrast',
			tests: [
				'(prefers-contrast)',
				'(prefers-contrast: no-preference)',
				'(prefers-contrast: less)',
				'(prefers-contrast: more)',
				'(prefers-contrast: custom)',
			],
		},
		'prefers-color-scheme': {
			link: '#prefers-color-scheme',
			tests: ['(prefers-color-scheme)', '(prefers-color-scheme: light)', '(prefers-color-scheme: dark)'],
		},
		'prefers-reduced-data': {
			link: '#prefers-reduced-data',
			tests: ['(prefers-reduced-data)', '(prefers-reduced-data: no-preference)', '(prefers-reduced-data: reduce)'],
		},
		scripting: {
			link: '#scripting',
			tests: ['(scripting)', '(scripting: none)', '(scripting: initial-only)', '(scripting: enabled)'],
		},
		'environment-blending': {
			link: '#environment-blending',
			tests: [
				'(environment-blending)',
				'(environment-blending: opaque)',
				'(environment-blending: additive)',
				'(environment-blending: subtractive)',
			],
		},
		'forced-colors': {
			link: '#forced-colors',
			tests: ['(forced-colors)', '(forced-colors: none)', '(forced-colors: active)'],
		},
		'dynamic-range': {
			link: '#dynamic-range',
			tests: ['(dynamic-range)', '(dynamic-range: standard)', '(dynamic-range: high)'],
		},
		'horizontal-viewport-segments': {
			link: '#mf-horizontal-viewport-segments',
			tests: ['(horizontal-viewport-segments)', '(horizontal-viewport-segments: 2)'],
		},
		'vertical-viewport-segments': {
			link: '#mf-vertical-viewport-segments',
			tests: ['(vertical-viewport-segments)', '(vertical-viewport-segments: 2)'],
		},
		'inverted-colors': {
			link: '#inverted',
			tests: ['(inverted-colors)', '(inverted-colors: none)', '(inverted-colors: inverted)'],
		},
		'nav-controls': {
			link: '#nav-controls',
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
