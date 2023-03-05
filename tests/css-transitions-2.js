export default {
	title: 'CSS Transitions 2',
	links: {
		dev: 'css-transitions-2',
	},
	status: {
		stability: 'experimental',
	},
	interfaces: {
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
