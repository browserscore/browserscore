export default {
	title: 'CSS Animation Worklet Level 1',
	links: {
		tr: 'css-animation-worklet-1',
		dev: 'css-animation-worklet-1',
		devtype: 'houdini',
	},
	status: {
		stability: 'experimental',
	},
	interfaces: {
		CSS: {
			links: {
				tr: '#animation-worklet-desc',
				dev: '#animation-worklet-desc',
			},
			tests: ['animationWorklet'],
			interface: function() {
				return CSS;
			},
		},
		Worklet: {
			links: {
				tr: '#animation-worklet-desc',
				dev: '#animation-worklet-desc',
			},
			tests: ['addModule'],
			interface: function() {
				return CSS.animationWorklet;
			},
		},
		WorkletAnimation: {
			links: {
				tr: '#worklet-animation-interface',
				dev: '#worklet-animation-interface',
			},
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
