export default {
	title: 'CSS Painting API Level 1',
	link: 'css-paint-api-1',
	group: 'houdini',
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['background-image', 'list-style-image', 'border-image', 'cursor', 'content'],
		'paint()': {
			link: '#paint-notation',
			tests: [
				'paint(company-logo)',
				'paint(simple, blue)',
			],
		},
	},
	interfaces: {
		CSS: {
			link: '#paint-worklet',
			tests: ['paintWorklet'],
			interface: function() {
				return CSS;
			},
		},
		Worklet: {
			link: '#paint-worklet',
			tests: ['addModule'],
			interface: function() {
				return CSS.paintWorklet;
			},
		},
	}
};
