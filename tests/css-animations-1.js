export default {
	id: 'css-animations-1',
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
			prelude: 'foo',
			// TODO from, to, <percentage>
		},
	},
	interfaces: {
		AnimationEvent: {
			link: '#interface-animationevent',
			mdnGroup: 'DOM',
			extends: 'Event',
			members: ['animationName', 'elapsedTime', 'pseudoElement'],
		},
		CSSRule: {
			link: '#interface-cssrule',
			mdnGroup: 'DOM',
			properties: [
				'KEYFRAMES_RULE',
				'KEYFRAME_RULE',
			],
		},
		CSSKeyframesRule: {
			link: '#interface-csskeyframesrule',
			mdnGroup: 'DOM',
			extends: 'CSSRule',
			members: ['name', 'cssRules', 'length'],
			methods: ['appendRule', 'deleteRule', 'findRule'],
		},
		CSSKeyframeRule: {
			link: '#interface-csskeyframerule',
			mdnGroup: 'DOM',
			extends: 'CSSRule',
			members: ['keyText', 'style'],
		},
		HTMLElement: {
			link: '#interface-globaleventhandlers',
			mdnGroup: 'DOM',
			members: ['onanimationstart', 'onanimationiteration', 'onanimationend', 'onanimationcancel'],
		}
	},
};
