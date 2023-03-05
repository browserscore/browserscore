export default {
	title: 'Web Animations Level 2',
	links: {
		tr: 'web-animations-2',
		dev: 'web-animations-2',
	},
	status: {
		stability: 'experimental',
	},
	interfaces: {
		AnimationTimeline: {
			links: {
				tr: '#the-animationtimeline-interface',
				dev: '#the-animationtimeline-interface',
				mdnGroup: 'DOM',
			},
			tests: ['duration', 'play'],
			interface: function() {
				return document.timeline;
			}
		},
		AnimationEffect: {
			links: {
				tr: '#the-animationeffect-interface',
				dev: '#the-animationeffect-interface',
				mdnGroup: 'DOM',
			},
			tests: [
				'parent',
				'previousSibling',
				'nextSibling',
				'before',
				'after',
				'replace',
				'remove'
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
		GroupEffect: {
			links: {
				tr: '#the-groupeffect-interface',
				dev: '#the-groupeffect-interface',
				mdnGroup: 'DOM',
			},
			tests: [
				'children',
				'firstChild',
				'lastChild',
				'clone',
				'prepend',
				'append',
			],
			interface: function() {
				var div = document.createElement('div');
				return new GroupEffect(
					new KeyframeEffect(
						div,
						[
							{ transform: "translateY(0%)" },
							{ transform: "translateY(100%)" },
						],
						{ duration: 3000, fill: "forwards" }
					),
					new KeyframeEffect(
						div,
						[
							{ opacity: 0 },
							{ opacity: 1 },
						],
						{ duration: 3000, fill: "forwards" }
					),
				);
			}
		},
		AnimationNodeList: {
			links: {
				tr: '#the-animationnodelist-interface',
				dev: '#the-animationnodelist-interface',
				mdnGroup: 'DOM',
			},
			tests: ['length', 'item'],
			interface: function() {
				var div = document.createElement('div');
				return new GroupEffect(
					new KeyframeEffect(
						div,
						[
							{ transform: "translateY(0%)" },
							{ transform: "translateY(100%)" },
						],
						{ duration: 3000, fill: "forwards" }
					),
					new KeyframeEffect(
						div,
						[
							{ opacity: 0 },
							{ opacity: 1 },
						],
						{ duration: 3000, fill: "forwards" }
					),
				).children;
			}
		},
		SequenceEffect: {
			links: {
				tr: '#the-sequenceeffect-interface',
				dev: '#the-sequenceeffect-interface',
				mdnGroup: 'DOM',
			},
			tests: [
				'children',
				'firstChild',
				'lastChild',
				'clone',
				'prepend',
				'append',
			],
			interface: function() {
				var div = document.createElement('div');
				return new SequenceEffect(
					new KeyframeEffect(
						div,
						[
							{ transform: "translateY(0%)" },
							{ transform: "translateY(100%)" },
						],
						{ duration: 3000, fill: "forwards" }
					),
					new KeyframeEffect(
						div,
						[
							{ opacity: 0 },
							{ opacity: 1 },
						],
						{ duration: 3000, fill: "forwards" }
					),
				);
			}
		},
		KeyframeEffect: {
			links: {
				tr: '#the-keyframeeffect-interface',
				dev: '#the-keyframeeffect-interface',
				mdnGroup: 'DOM',
			},
			tests: ['iteratonComposite'],
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
	},
};
