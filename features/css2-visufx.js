export default {
	id: 'css2-visufx',
	title: 'CSS 2 Visual Effects',
	link: 'css2/',
	specLink: 'CSS22/visufx.html',
	status: 'stable',
	version: 2.2,
	properties: {
		clip: {
			link: '#clipping',
			tests: ['auto', 'rect(1px, 10em, 3ex, 0.2mm)'],
		},
		overflow: {
			link: '#overflow①',
			specLink: '#overflow',
			tests: ['auto', 'visible', 'hidden', 'scroll'],
		},
		visibility: {
			link: '#visibility',
			tests: ['visible', 'hidden', 'collapse'],
		},
	},
};
