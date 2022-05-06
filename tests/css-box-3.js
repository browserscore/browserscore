export default {
	title: 'CSS 2 Box Model',
	links: {
		tr: 'CSS22/box.html',
		dev: 'css2/',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 1998,
		'last-snapshot': 1998,
	},
	properties: {
		'border-color': {
			links: {
				tr: '#border-color-properties',
				dev: '#border-color-properties',
			},
			tests: ['black', '#ff0000 rgb(0, 255, 0)', 'rgb(0%, 0%, 100%) #0f0 transparent', 'red green blue yellow'],
		},
		'border-style': {
			links: {
				tr: '#border-style-properties',
				dev: '#border-style-properties',
			},
			tests: ['none', 'hidden', 'none dashed', 'none dashed dotted', 'none dashed dotted solid'],
		},
		'border-top': {
			links: {
				tr: '#border-shorthand-properties',
				dev: '#border-shorthand-properties',
			},
			tests: [
				'black',
				'dotted',
				'5px',
				'#ff0000 dashed',
				'solid 0.2em',
				'rgb(0, 0, 255) 0.1ex',
				'#0f0 double 0.8mm',
			],
		},
		'border-right': {
			links: {
				tr: '#border-shorthand-properties',
				dev: '#border-shorthand-properties',
			},
			tests: [
				'black',
				'dotted',
				'5px',
				'#ff0000 dashed',
				'solid 0.2em',
				'rgb(0, 0, 255) 0.1ex',
				'#0f0 double 0.8mm',
			],
		},
		'border-bottom': {
			links: {
				tr: '#border-shorthand-properties',
				dev: '#border-shorthand-properties',
			},
			tests: [
				'black',
				'dotted',
				'5px',
				'#ff0000 dashed',
				'solid 0.2em',
				'rgb(0, 0, 255) 0.1ex',
				'#0f0 double 0.8mm',
			],
		},
		'border-left': {
			links: {
				tr: '#border-shorthand-properties',
				dev: '#border-shorthand-properties',
			},
			tests: [
				'black',
				'dotted',
				'5px',
				'#ff0000 dashed',
				'solid 0.2em',
				'rgb(0, 0, 255) 0.1ex',
				'#0f0 double 0.8mm',
			],
		},
		'border-top-color': {
			links: {
				tr: '#border-color-properties',
				dev: '#border-color-properties',
			},
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)', 'transparent'],
		},
		'border-right-color': {
			links: {
				tr: '#border-color-properties',
				dev: '#border-color-properties',
			},
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)', 'transparent'],
		},
		'border-bottom-color': {
			links: {
				tr: '#border-color-properties',
				dev: '#border-color-properties',
			},
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)', 'transparent'],
		},
		'border-left-color': {
			links: {
				tr: '#border-color-properties',
				dev: '#border-color-properties',
			},
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)', 'transparent'],
		},
		'border-top-style': {
			links: {
				tr: '#border-style-properties',
				dev: '#border-style-properties',
			},
			tests: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
		},
		'border-right-style': {
			links: {
				tr: '#border-style-properties',
				dev: '#border-style-properties',
			},
			tests: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
		},
		'border-bottom-style': {
			links: {
				tr: '#border-style-properties',
				dev: '#border-style-properties',
			},
			tests: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
		},
		'border-left-style': {
			links: {
				tr: '#border-style-properties',
				dev: '#border-style-properties',
			},
			tests: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
		},
		'border-top-width': {
			links: {
				tr: '#border-width-properties',
				dev: '#border-width-properties',
			},
			tests: ['thin', 'medium', 'thick', '5px'],
		},
		'border-right-width': {
			links: {
				tr: '#border-width-properties',
				dev: '#border-width-properties',
			},
			tests: ['thin', 'medium', 'thick', '5px'],
		},
		'border-bottom-width': {
			links: {
				tr: '#border-width-properties',
				dev: '#border-width-properties',
			},
			tests: ['thin', 'medium', 'thick', '5px'],
		},
		'border-left-width': {
			links: {
				tr: '#border-width-properties',
				dev: '#border-width-properties',
			},
			tests: ['thin', 'medium', 'thick', '5px'],
		},
		'border-width': {
			links: {
				tr: '#border-width-properties',
				dev: '#border-width-properties',
			},
			tests: ['thin', 'thin medium', 'thin medium thick', 'thin medium thick 5px'],
		},
		border: {
			links: {
				tr: '#border-shorthand-properties',
				dev: '#border-shorthand-properties',
			},
			tests: [
				'black',
				'dotted',
				'5px',
				'#ff0000 dashed',
				'solid 0.2em',
				'rgb(0, 0, 255) 0.1ex',
				'rgb(100%, 50%, 50%) double 0.8mm',
			],
		},
		'margin-right': {
			links: {
				tr: '#propdef-margin-right',
				dev: '#propdef-margin-right',
			},
			tests: ['auto', '10px', '5%'],
		},
		'margin-left': {
			links: {
				tr: '#propdef-margin-left',
				dev: '#propdef-margin-left',
			},
			tests: ['auto', '10px', '5%'],
		},
		'margin-top': {
			links: {
				tr: '#propdef-margin-top',
				dev: '#propdef-margin-top',
			},
			tests: ['auto', '10px', '5%'],
		},
		'margin-bottom': {
			links: {
				tr: '#propdef-margin-bottom',
				dev: '#propdef-margin-bottom',
			},
			tests: ['auto', '10px', '5%'],
		},
		margin: {
			links: {
				tr: '#propdef-margin',
				dev: '#propdef-margin',
			},
			tests: ['10px', '10px 5%', '10px 5px auto', '10px 5px auto 1em'],
		},
		'padding-top': {
			links: {
				tr: '#padding-properties',
				dev: '#padding-properties',
			},
			tests: ['10px', '5%'],
		},
		'padding-right': {
			links: {
				tr: '#padding-properties',
				dev: '#padding-properties',
			},
			tests: ['10px', '5%'],
		},
		'padding-bottom': {
			links: {
				tr: '#padding-properties',
				dev: '#padding-properties',
			},
			tests: ['10px', '5%'],
		},
		'padding-left': {
			links: {
				tr: '#padding-properties',
				dev: '#padding-properties',
			},
			tests: ['10px', '5%'],
		},
		padding: {
			links: {
				tr: '#padding-properties',
				dev: '#padding-properties',
			},
			tests: ['10px', '10px 5%', '10px 5% 0.5em', '10px 5% 0.5em 0.8mm'],
		},
	},
};
