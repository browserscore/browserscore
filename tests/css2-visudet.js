export default {
	id: 'css2-visudet',
	title: 'CSS 2 Visual Formatting Model Details',
	links: {
		tr: 'CSS22/visudet.html',
		dev: 'css2/',
	},
	status: 'stable',
	firstSnapshot: 2.2,
	lastSnapshot: 2.2,
	properties: {
		height: {
			link: '#the-height-property',
			tests: ['auto', '100px', '10%'],
		},
		'line-height': {
			link: '#propdef-line-height',
			tests: ['normal', '2', '2em', '150%'],
		},
		'max-height': {
			link: '#min-max-heights',
			tests: ['none', '100px', '80%'],
		},
		'max-width': {
			link: '#min-max-widths',
			tests: ['none', '100px', '80%'],
		},
		'min-height': {
			link: '#min-max-heights',
			tests: ['100px', '10%'],
		},
		'min-width': {
			link: '#min-max-widths',
			tests: ['100px', '10%'],
		},
		'vertical-align': {
			link: '#propdef-vertical-align',
			tests: ['baseline', 'sub', 'super', 'top', 'text-top', 'middle', 'bottom', 'text-bottom', '10px', '10%'],
		},
		width: {
			link: '#the-width-property',
			tests: ['auto', '100px', '10%'],
		},
	},
};
