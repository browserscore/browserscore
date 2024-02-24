export default {
	title: 'CSS Transitions 2',
	links: {
		dev: 'css-transitions-2',
	},
	status: {
		stability: 'experimental',
	},
	'@rules': {
		'@starting-style': {
			links: {
				dev: '#defining-before-change-style-the-starting-style-rule',
			},
			tests: "@starting-style {\n  h1 {\n    background-color: red;\n  }\n}",
		},
	},
	properties: {
		'transition-behavior': {
			links: {
				tr: '#transition-behavior-property',
				dev: '#transition-behavior-property',
			},
			tests: ['normal', 'allow-discrete'],
		},
	},
	interfaces: {
		CSSStartingStyleRule: {
			links: {
				dev: '#the-cssstartingstylerule-interface',
				mdnGroup: 'DOM',
			},
			tests: [
				'cssRules',
				'addRule',
				'deleteRule',
			],
			required: '@starting-style { h1 { background-color: red; } }',
		},
		CSSTransition: {
			links: {
				dev: '#the-CSSTransition-interface',
				mdnGroup: 'DOM',
			},
			tests: [
				'transitionProperty',
				'id',
				'effect',
				'timeline',
				'startTime',
				'currentTime',
				'playbackRate',
				'playState',
				'replaceState',
				'pending',
				'ready',
				'finished',
				'onfinish',
				'oncancel',
				'onremove',
				'cancel',
				'finish',
				'play',
				'pause',
				'updatePlaybackRate',
				'reverse',
				'persist',
				'commitStyles',
			],
			interface: function() {
				var div = document.createElement('div');
				document.body.append(div);
				div.style.transition = 'opacity 100s';
				div.style.opacity = '0';
				getComputedStyle(div).opacity;
				div.style.opacity = '1';
				return div.getAnimations()[0];
			}
		},
	},
};
