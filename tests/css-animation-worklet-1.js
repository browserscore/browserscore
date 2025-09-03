export default {
	id: 'css-animation-worklet-1',
	title: 'CSS Animation Worklet Level 1',
	group: 'houdini',
	link: 'css-animation-worklet-1',
	status: 'experimental',
	interfaces: {
		CSS: {
			link: '#animation-worklet-desc',
			properties: ['animationWorklet'],
		},
		Worklet: {
			link: '#animation-worklet-desc',
			interface: function() {
				return CSS.animationWorklet;
			},
			methods: ['addModule'],
		},
		WorkletAnimation: {
			link: '#worklet-animation-interface',
			extends: 'Animation',
			members: ['animatorName'],
		},
	},
};
