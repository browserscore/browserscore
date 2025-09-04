export default {
	id: 'css-animation-worklet-1',
	title: 'CSS Animation Worklet Level 1',
	group: 'houdini',
	link: 'css-animation-worklet-1',
	status: 'experimental',
	globals: {
		CSS: {
			link: '#animation-worklet-desc',
			properties: {
				animationWorklet: {
					instanceof: 'Worklet',
				}
			},
		},
		WorkletAnimation: {
			link: '#worklet-animation-interface',
			extends: 'Animation',
			members: ['animatorName'],
		},
	},
};
