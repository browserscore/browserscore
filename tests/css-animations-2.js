export default {
	title: 'CSS Animations Level 2',
	link: 'css-animations-2',
	status: {
		stability: 'experimental',
	},
	properties: {
		'animation-composition': {
			link: '#animation-composition',
			tests: ['replace', 'add', 'accumulate', 'replace, add, accumulate'],
		},
		'animation-duration': {
			link: '#animation-duration',
			tests: ['auto'],
		},
		'animation-timeline': {
			link: '#animation-timeline',
			tests: [
				'auto',
				'none',
				'custom-timeline',
				'auto, none, custom-timeline',
			],
		},
		animation: {
			link: '#animation-shorthand',
			tests: [
				'1s both infinite auto',
				'1s both infinite my-animation --animation-timeline'
			],
		},
	},
	interfaces: {
		CSSAnimation: {
			link: '#the-CSSAnimation-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['animationName'],
			required: '@keyframes slide-in { 0% { transform: translateY(-1000px); } 100% { transform: translateY(0); } } .animate { animation: slide-in 0.7s both; }',
			interface: function(style) {
				var div = document.createElement('div');
				div.className = 'animate';
				body.append(div);
				var animations = div.getAnimations && div.getAnimations();
				div.remove();
				return animations.length > 0 && animations[0];
			}
		},
	},
};
