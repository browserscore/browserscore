export default {
	title: 'Web Animations',
	links: {
		tr: 'web-animations-1',
		dev: 'web-animations-1',
	},
	status: {
		stability: 'experimental',
	},
	interfaces: {
		Animation: {
			links: {
				tr: '#the-animation-interface',
				dev: '#the-animation-interface',
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
			links: {
				tr: '#the-animationtimeline-interface',
				dev: '#the-animationtimeline-interface',
				mdnGroup: 'DOM',
			},
			tests: ['currentTime'],
			interface: function() {
				return document.timeline;
			}
		},
		AnimationEffect: {
			links: {
				tr: '#animationeffect',
				dev: '#animationeffect',
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
			links: {
				tr: '#the-keyframeeffect-interface',
				dev: '#the-keyframeeffect-interface',
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
			links: {
				tr: '#the-animatable-interface-mixin',
				dev: '#the-animatable-interface-mixin',
				mdnGroup: 'DOM',
			},
			tests: ['animate', 'getAnimations'],
			interface: function() {
				return document.body;
			}
		},
		Document: {
			links: {
				tr: '#extensions-to-the-documentorshadowroot-interface-mixin',
				dev: '#extensions-to-the-documentorshadowroot-interface-mixin',
				mdnGroup: 'DOM',
			},
			tests: ['timeline', 'getAnimations'],
			interface: function() {
				return document;
			}
		},
		DocumentTimeline: {
			links: {
				tr: '#the-documenttimeline-interface',
				dev: '#the-documenttimeline-interface',
				mdnGroup: 'DOM',
			},
			tests: ['currentTime'],
			interface: function() {
				return document.timeline;
			}
		},
		AnimationPlaybackEvent: {
			links: {
				tr: '#the-animationplaybackevent-interface',
				dev: '#the-animationplaybackevent-interface',
				mdnGroup: 'DOM',
			},
			tests: ['currentTime', 'timelineTime'],
			interface: function() {
				return new AnimationPlaybackEvent('finish');
			},
		},
	},
};
