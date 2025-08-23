export default {
	title: 'Web Animations',
	link: 'web-animations-1',
	status: {
		stability: 'experimental',
	},
	interfaces: {
		Animation: {
			link: '#the-animation-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: [
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
				'addEventListener',
				'removeEventListener',
				'dispatchEvent',
			],
			interface: function() {
				var div = document.createElement('div');
				var keyFrames = new KeyframeEffect(
					div,
					[
						{ transform: 'translateY(0%)' },
						{ transform: 'translateY(100%)' }
					],
					{ duration: 3000, fill: 'forwards' }
				)
				return new Animation(keyFrames, document.timeline);
			}
		},
		AnimationTimeline: {
			link: '#the-animationtimeline-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['currentTime'],
			interface: function() {
				return document.timeline;
			}
		},
		AnimationEffect: {
			link: '#animationeffect',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['getTiming', 'getComputedTiming', 'updateTiming'],
			interface: function() {
				var div = document.createElement('div');
				return new KeyframeEffect(
					div,
					[
						{ transform: "translateY(0%)" },
						{ transform: "translateY(100%)" },
					],
					{ duration: 3000, fill: "forwards" }
				);
			}
		},
		KeyframeEffect: {
			link: '#the-keyframeeffect-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: [
				'target',
				'pseudoElement',
				'composite',
				'getKeyframes',
				'setKeyframes',
				'getTiming',
				'getComputedTiming',
				'updateTiming',
			],
			interface: function() {
				var div = document.createElement('div');
				return new KeyframeEffect(
					div,
					[
						{ transform: "translateY(0%)" },
						{ transform: "translateY(100%)" },
					],
					{ duration: 3000, fill: "forwards" }
				);
			}
		},
		Element: {
			link: '#the-animatable-interface-mixin',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['animate', 'getAnimations'],
			interface: function() {
				return document.body;
			}
		},
		Document: {
			link: '#extensions-to-the-documentorshadowroot-interface-mixin',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['timeline', 'getAnimations'],
			interface: function() {
				return document;
			}
		},
		DocumentTimeline: {
			link: '#the-documenttimeline-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['currentTime'],
			interface: function() {
				return document.timeline;
			}
		},
		AnimationPlaybackEvent: {
			link: '#the-animationplaybackevent-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['currentTime', 'timelineTime'],
			interface: function() {
				return new AnimationPlaybackEvent('finish');
			},
		},
	},
};
