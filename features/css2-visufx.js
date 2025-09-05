export default {
	id: 'css2-visufx',
	title: 'CSS 2 Visual Effects',
	links: {
		tr: 'CSS22/visufx.html',
		dev: 'css2/',
	},
	status: 'stable',
	version: 2.2,
	properties: {
		clip: {
			link: '#clipping',
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
			link: '#visibility',
			tests: ['visible', 'hidden', 'collapse'],
		},
	},
};
