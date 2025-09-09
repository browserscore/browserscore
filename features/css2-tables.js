export default {
	id: 'css2-tables',
	title: 'CSS 2 Tables',
	link: 'css2/',
	specLink: 'CSS22/tables.html',
	status: 'stable',
	version: 2.2,
	properties: {
		'border-collapse': {
			link: '#propdef-border-collapse',
			tests: ['collapse', 'separate'],
		},
		'border-spacing': {
			link: '#propdef-border-spacing',
			tests: ['10px', '1em 0.5cm'],
		},
		'caption-side': {
			link: '#caption-position',
			tests: ['top', 'bottom'],
		},
		'empty-cells': {
			link: '#empty-cells',
			tests: ['show', 'hide'],
		},
		'table-layout': {
			link: '#width-layout',
			tests: ['auto', 'fixed'],
		},
	},
};
