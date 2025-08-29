export default {
	title: 'CSS Animations Level 1',
	link: 'css-animations-1',
	status: 'stable',
	properties: {
		'animation-name': {
			link: '#animation-name',
			tests: ['foo', 'foo, bar'],
		},
		'animation-duration': {
			link: '#animation-duration',
			tests: ['0s', '1s', '100ms'],
		},
		'animation-timing-function': {
			link: '#animation-timing-function',
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
			link: '#animation-iteration-count',
			tests: ['infinite', '8', '4.35'],
		},
		'animation-direction': {
			link: '#animation-direction',
			tests: ['normal', 'alternate', 'reverse', 'alternate-reverse'],
		},
		'animation-play-state': {
			link: '#animation-play-state',
			tests: ['running', 'paused'],
		},
		'animation-delay': {
			link: '#animation-delay',
			tests: ['1s', '-1s'],
		},
		'animation-fill-mode': {
			link: '#animation-fill-mode',
			tests: ['none', 'forwards', 'backwards', 'both'],
		},
		animation: {
			link: '#animation',
			tests: 'foo 1s 2s infinite linear alternate both',
		},
	},
	atrules: {
		'@keyframes': {
			link: '#keyframes',
			tests: [
				'@keyframes foo {\n  from: {\n    color: blue;\n  }\n  to: {\n    color: red;\n  }\n}',
				'@keyframes foo {\n  from: {\n    color: blue;\n  }\n  50%: {\n    color: green;\n  }\n  to: {\n    color: red;\n  }\n}',
			],
		},
	},
	interfaces: {
		AnimationEvent: {
			link: '#interface-animationevent',
			mdnGroup: 'DOM',
			tests: ['animationName', 'elapsedTime', 'pseudoElement'],
			interface: function() {
				return new AnimationEvent('animationstart');
			}
		},
		CSSRule: {
			link: '#interface-cssrule',
			mdnGroup: 'DOM',
			tests: [
				'KEYFRAMES_RULE',
				'KEYFRAME_RULE',
			],
		},
		CSSKeyframesRule: {
			link: '#interface-csskeyframesrule',
			mdnGroup: 'DOM',
			tests: ['name', 'cssRules', 'length', 'appendRule', 'deleteRule', 'findRule'],
			required: '@keyframes foo { from {} to {} }',
		},
		CSSKeyframeRule: {
			link: '#interface-csskeyframerule',
			mdnGroup: 'DOM',
			tests: ['keyText', 'style'],
			required: '@keyframes foo { from {} to {} }',
		},
		Element: {
			link: '#interface-globaleventhandlers',
			mdnGroup: 'DOM',
			tests: ['onanimationstart', 'onanimationiteration', 'onanimationend', 'onanimationcancel'],
			interface: function(style) {
				return document.body;
			},
		}
	},
};
