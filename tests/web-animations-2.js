export default {
	id: 'web-animations-2',
	title: 'Web Animations Level 2',
	link: 'web-animations-2',
	status: 'experimental',
	globals: {
		AnimationTimeline: {
			link: '#the-animationtimeline-interface',
			mdnGroup: 'DOM',
			members: ['currentTime', 'duration'],
			methods: ['play'],
		},
		AnimationEffect: {
			link: '#the-animationeffect-interface',
			mdnGroup: 'DOM',
			members: [
				'parent',
				'previousSibling',
				'nextSibling',
			],
			methods: ['before', 'after', 'replace', 'remove'],
		},
		GroupEffect: {
			link: '#the-groupeffect-interface',
			mdnGroup: 'DOM',
			members: [
				'children',
				'firstChild',
				'lastChild',
			],
			methods: ['clone', 'prepend', 'append'],
		},
		AnimationNodeList: {
			link: '#the-animationnodelist-interface',
			mdnGroup: 'DOM',
			members: ['length', 'item'],
		},
		SequenceEffect: {
			link: '#the-sequenceeffect-interface',
			mdnGroup: 'DOM',
			extends: 'GroupEffect',
			methods: ['clone'],
		},
		KeyframeEffect: {
			link: '#the-keyframeeffect-interface',
			mdnGroup: 'DOM',
			members: ['iteratonComposite'],
		},
	},
};
