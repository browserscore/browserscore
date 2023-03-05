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
		'animation-timeline': {
			links: {
				tr: '#animation-timeline',
				dev: '#animation-timeline',
			},
			tests: [
				'auto',
				'none',
				'custom-timeline',
				'scroll()',
				'scroll(root)',
				'scroll(nearest)',
				'scroll(block)',
				'scroll(inline)',
				'scroll(vertical)',
				'scroll(horizontal)',
				'scroll(nearest inline)',
				'scroll(vertical root)',
				'view()',
				'view(block)',
				'view(inline)',
				'view(vertical)',
				'view(horizontal)',
				'view(auto)',
				'view(100px)',
				'view(-100px)',
				'view(10%)',
				'view(100px auto)',
				'view(100px 10%)',
				'view(100px, 10%, 200px auto)',
				'view(100px inline)',
				'view(vertical 10%)',
				'view(block 100px 10%)',
				'view(100px, 10% horizontal)',
				'auto, none, custom-timeline, scroll(), view()',
			],
		},
		animation: {
			links: {
				tr: '#animation-shorthand',
				dev: '#animation-shorthand',
			},
			tests: ['1s both infinite auto'],
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
