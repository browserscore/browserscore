export default {
	title: 'CSS Animation Worklet Level 1',
	group: 'houdini',
	link: 'css-animation-worklet-1',
	status: 'experimental',
	interfaces: {
		CSS: {
			link: '#animation-worklet-desc',
			tests: ['animationWorklet'],
			interface: function() {
				return CSS;
			},
		},
		Worklet: {
			link: '#animation-worklet-desc',
			tests: ['addModule'],
			interface: function() {
				return CSS.animationWorklet;
			},
		},
		WorkletAnimation: {
			link: '#worklet-animation-interface',
			tests: ['animatorName'],
			interface: function() {
				return new WorkletAnimation('Animator', new KeyframeEffect(
					document.body,
					{transform: ['translateX(0)', 'translateX(50vw)']},
					{duration: 1000}
				));
			},
		},
	},
};
