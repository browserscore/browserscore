export default {
	title: 'CSS 2 Visual Effects',
	links: {
		tr: 'CSS22/visufx.html',
		dev: 'css2/',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2.2,
		'last-snapshot': 2.2,
	},
	properties: {
		clip: {
			links: {
				tr: '#clipping',
				dev: '#clipping',
			},
			tests: ['auto', 'rect(1px, 10em, 3ex, 0.2mm)'],
		},
		overflow: {
			links: {
				tr: '#overflow',
				dev: '#overflow①',
			},
			tests: ['auto', 'visible', 'hidden', 'scroll'],
		},
		visibility: {
			links: {
				tr: '#visibility',
				dev: '#visibility',
			},
			tests: ['visible', 'hidden', 'collapse'],
		},
	},
};
