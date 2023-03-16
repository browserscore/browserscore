export default {
	title: 'CSS Painting API Level 1',
	links: {
		tr: 'css-paint-api-1',
		dev: 'css-paint-api-1',
		devtype: 'houdini',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['background-image', 'list-style-image', 'border-image', 'cursor', 'content'],
		'paint()': {
			links: {
				tr: '#paint-notation',
				dev: '#paint-notation',
			},
			tests: [
				'paint(company-logo)',
				'paint(simple, blue)',
			],
		},
	},
	interfaces: {
		CSS: {
			links: {
				tr: '#paint-worklet',
				dev: '#paint-worklet',
			},
			tests: ['paintWorklet'],
			interface: function() {
				return CSS;
			},
		},
		Worklet: {
			links: {
				tr: '#paint-worklet',
				dev: '#paint-worklet',
			},
			tests: ['addModule'],
			interface: function() {
				return CSS.paintWorklet;
			},
		},
	}
};
