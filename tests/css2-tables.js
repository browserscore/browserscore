export default {
	title: 'CSS 2 Tables',
	links: {
		tr: 'CSS22/tables.html',
		dev: 'css2/',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 1998,
		'last-snapshot': 1998,
	},
	properties: {
		'border-collapse': {
			links: {
				tr: '#propdef-border-collapse',
				dev: '#propdef-border-collapse',
			},
			tests: ['collapse', 'separate'],
		},
		'border-spacing': {
			links: {
				tr: '#propdef-border-spacing',
				dev: '#propdef-border-spacing',
			},
			tests: ['10px', '1em 0.5cm'],
		},
		'caption-side': {
			links: {
				tr: '#caption-position',
				dev: '#caption-position',
			},
			tests: ['top', 'bottom'],
		},
		'empty-cells': {
			links: {
				tr: '#empty-cells',
				dev: '#empty-cells',
			},
			tests: ['show', 'hide'],
		},
		'table-layout': {
			links: {
				tr: '#width-layout',
				dev: '#width-layout',
			},
			tests: ['auto', 'fixed'],
		},
	},
};
