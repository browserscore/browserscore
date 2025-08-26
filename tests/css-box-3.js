export default {
	title: 'CSS 2 Box Model',
	links: {
		tr: 'CSS22/box.html',
		dev: 'css2/',
	},
	status: 'stable',
	firstSnapshot: 2.2,
	lastSnapshot: 2.2,
	properties: {
		'border-color': {
			link: '#border-color-properties',
			tests: ['black', '#ff0000 rgb(0, 255, 0)', 'rgb(0%, 0%, 100%) #0f0 transparent', 'red green blue yellow'],
		},
		'border-style': {
			link: '#border-style-properties',
			tests: ['none', 'hidden', 'none dashed', 'none dashed dotted', 'none dashed dotted solid'],
		},
		'border-top': {
			link: '#border-shorthand-properties',
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
			link: '#border-shorthand-properties',
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
			link: '#border-shorthand-properties',
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
			link: '#border-shorthand-properties',
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
			link: '#border-color-properties',
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)', 'transparent'],
		},
		'border-right-color': {
			link: '#border-color-properties',
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)', 'transparent'],
		},
		'border-bottom-color': {
			link: '#border-color-properties',
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)', 'transparent'],
		},
		'border-left-color': {
			link: '#border-color-properties',
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)', 'transparent'],
		},
		'border-top-style': {
			link: '#border-style-properties',
			tests: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
		},
		'border-right-style': {
			link: '#border-style-properties',
			tests: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
		},
		'border-bottom-style': {
			link: '#border-style-properties',
			tests: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
		},
		'border-left-style': {
			link: '#border-style-properties',
			tests: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
		},
		'border-top-width': {
			link: '#border-width-properties',
			tests: ['thin', 'medium', 'thick', '5px'],
		},
		'border-right-width': {
			link: '#border-width-properties',
			tests: ['thin', 'medium', 'thick', '5px'],
		},
		'border-bottom-width': {
			link: '#border-width-properties',
			tests: ['thin', 'medium', 'thick', '5px'],
		},
		'border-left-width': {
			link: '#border-width-properties',
			tests: ['thin', 'medium', 'thick', '5px'],
		},
		'border-width': {
			link: '#border-width-properties',
			tests: ['thin', 'thin medium', 'thin medium thick', 'thin medium thick 5px'],
		},
		border: {
			link: '#border-shorthand-properties',
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
			link: '#propdef-margin-right',
			tests: ['auto', '10px', '5%'],
		},
		'margin-left': {
			link: '#propdef-margin-left',
			tests: ['auto', '10px', '5%'],
		},
		'margin-top': {
			link: '#propdef-margin-top',
			tests: ['auto', '10px', '5%'],
		},
		'margin-bottom': {
			link: '#propdef-margin-bottom',
			tests: ['auto', '10px', '5%'],
		},
		margin: {
			link: '#propdef-margin',
			tests: ['10px', '10px 5%', '10px 5px auto', '10px 5px auto 1em'],
		},
		'padding-top': {
			link: '#padding-properties',
			tests: ['10px', '5%'],
		},
		'padding-right': {
			link: '#padding-properties',
			tests: ['10px', '5%'],
		},
		'padding-bottom': {
			link: '#padding-properties',
			tests: ['10px', '5%'],
		},
		'padding-left': {
			link: '#padding-properties',
			tests: ['10px', '5%'],
		},
		padding: {
			link: '#padding-properties',
			tests: ['10px', '10px 5%', '10px 5% 0.5em', '10px 5% 0.5em 0.8mm'],
		},
	},
};
