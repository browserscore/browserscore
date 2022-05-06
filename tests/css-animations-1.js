export default {
	title: 'CSS Animations Level 1',
	links: {
		tr: 'css-animations-1',
		dev: 'css-animations-1',
	},
	status: {
		stability: 'stable',
	},
	properties: {
		'animation-name': {
			links: {
				tr: '#animation-name',
				dev: '#animation-name',
			},
			tests: ['foo', 'foo, bar'],
		},
		'animation-duration': {
			links: {
				tr: '#animation-duration',
				dev: '#animation-duration',
			},
			tests: ['0s', '1s', '100ms'],
		},
		'animation-timing-function': {
			links: {
				tr: '#animation-timing-function',
				dev: '#animation-timing-function',
			},
			tests: [
				'ease',
				'linear',
				'ease-in',
				'ease-out',
				'ease-in-out',
				'cubic-bezier(.5, .5, .5, .5)',
				'cubic-bezier(.5, 1.5, .5, -2.5)',
				'step-start',
				'step-end',
				'steps(3, start)',
				'steps(5, end)',
			],
		},
		'animation-iteration-count': {
			links: {
				tr: '#animation-iteration-count',
				dev: '#animation-iteration-count',
			},
			tests: ['infinite', '8', '4.35'],
		},
		'animation-direction': {
			links: {
				tr: '#animation-direction',
				dev: '#animation-direction',
			},
			tests: ['normal', 'alternate', 'reverse', 'alternate-reverse'],
		},
		'animation-play-state': {
			links: {
				tr: '#animation-play-state',
				dev: '#animation-play-state',
			},
			tests: ['running', 'paused'],
		},
		'animation-delay': {
			links: {
				tr: '#animation-delay',
				dev: '#animation-delay',
			},
			tests: ['1s', '-1s'],
		},
		'animation-fill-mode': {
			links: {
				tr: '#animation-fill-mode',
				dev: '#animation-fill-mode',
			},
			tests: ['none', 'forwards', 'backwards', 'both'],
		},
		animation: {
			links: {
				tr: '#animation',
				dev: '#animation',
			},
			tests: 'foo 1s 2s infinite linear alternate both',
		},
	},
	'@rules': {
		'@keyframes': {
			links: {
				tr: '#keyframes',
				dev: '#keyframes',
			},
			tests: [
				'@keyframes foo {\n  from: {\n    color: blue;\n  }\n  to: {\n    color: red;\n  }\n}',
				'@keyframes foo {\n  from: {\n    color: blue;\n  }\n  50%: {\n    color: green;\n  }\n  to: {\n    color: red;\n  }\n}',
			],
		},
	},
};
