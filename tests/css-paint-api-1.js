export default {
	id: 'css-paint-api-1',
	title: 'CSS Painting API Level 1',
	link: 'css-paint-api-1',
	group: 'houdini',
	status: 'experimental',
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
	globals: {
		CSS: {
			link: '#paint-worklet',
			properties: {
				paintWorklet: {
					instanceof: 'Worklet',
				}
			},
		},
	}
};
