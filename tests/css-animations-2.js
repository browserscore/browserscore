export default {
	title: 'CSS Animations Level 2',
	links: {
		tr: 'css-animations-2',
		dev: 'css-animations-2',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'animation-composition': {
			links: {
				tr: '#animation-composition',
				dev: '#animation-composition',
			},
			tests: ['replace', 'add', 'accumulate', 'replace, add, accumulate'],
		},
		'animation-duration': {
			links: {
				tr: '#animation-duration',
				dev: '#animation-duration',
			},
			tests: ['auto'],
		},
		'animation-timeline': {
			links: {
				tr: '#animation-timeline',
				dev: '#animation-timeline',
			},
			tests: [
				'auto',
				'none',
				'custom-timeline',
				'auto, none, custom-timeline',
			],
		},
		animation: {
			links: {
				tr: '#animation-shorthand',
				dev: '#animation-shorthand',
			},
			tests: [
				'1s both infinite auto',
				'1s both infinite my-animation --animation-timeline'
			],
		},
	},
	interfaces: {
		CSSAnimation: {
			links: {
				tr: '#the-CSSAnimation-interface',
				dev: '#the-CSSAnimation-interface',
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
