export default {
	title: 'Web Animations Level 2',
	link: 'web-animations-2',
	status: {
		stability: 'experimental',
	},
	interfaces: {
		AnimationTimeline: {
			link: '#the-animationtimeline-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['duration', 'play'],
			interface: function() {
				return document.timeline;
			}
		},
		AnimationEffect: {
			link: '#the-animationeffect-interface',
			links: {
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
			link: '#the-groupeffect-interface',
			links: {
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
			link: '#the-animationnodelist-interface',
			links: {
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
			link: '#the-sequenceeffect-interface',
			links: {
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
			link: '#the-keyframeeffect-interface',
			links: {
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
