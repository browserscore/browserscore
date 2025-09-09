export default {
	id: 'css-logical-1',
	title: 'CSS Logical Properties and Values Level 1',
	link: 'css-logical-1',
	status: 'stable',
	properties: {
		'caption-side': {
			link: '#caption-side',
			tests: ['inline-start', 'inline-end'],
		},
		float: {
			link: '#float-clear',
			tests: ['inline-start', 'inline-end'],
		},
		clear: {
			link: '#float-clear',
			tests: ['inline-start', 'inline-end'],
		},
		'text-align': {
			link: '#text-align',
			tests: ['start', 'end'],
		},
		'block-size': {
			link: '#dimension-properties',
			tests: ['100px'],
		},
		'inline-size': {
			link: '#dimension-properties',
			tests: ['100px'],
		},
		'min-block-size': {
			link: '#dimension-properties',
			tests: ['100px'],
		},
		'min-inline-size': {
			link: '#dimension-properties',
			tests: ['100px'],
		},
		'max-block-size': {
			link: '#dimension-properties',
			tests: ['100px'],
		},
		'max-inline-size': {
			link: '#dimension-properties',
			tests: ['100px'],
		},
		'margin-block': {
			link: '#margin-properties',
			tests: ['10px', '10px 10px'],
		},
		'margin-block-start': {
			link: '#margin-properties',
			tests: ['10px'],
		},
		'margin-block-end': {
			link: '#margin-properties',
			tests: ['10px'],
		},
		'margin-inline': {
			link: '#margin-properties',
			tests: ['10px', '10px 10px'],
		},
		'margin-inline-start': {
			link: '#margin-properties',
			tests: ['10px'],
		},
		'margin-inline-end': {
			link: '#margin-properties',
			tests: ['10px'],
		},
		inset: {
			link: '#inset-properties',
			tests: ['10px', '10px 10px', '10px 10px 10px', '10px 10px 10px 10px'],
		},
		'inset-block': {
			link: '#inset-properties',
			tests: ['10px', '10px 10px'],
		},
		'inset-block-start': {
			link: '#inset-properties',
			tests: ['10px'],
		},
		'inset-block-end': {
			link: '#inset-properties',
			tests: ['10px'],
		},
		'inset-inline': {
			link: '#inset-properties',
			tests: ['10px', '10px 10px'],
		},
		'inset-inline-start': {
			link: '#inset-properties',
			tests: ['10px'],
		},
		'inset-inline-end': {
			link: '#inset-properties',
			tests: ['10px'],
		},
		'padding-block': {
			link: '#padding-properties',
			tests: ['10px', '10px 10px'],
		},
		'padding-block-start': {
			link: '#padding-properties',
			tests: ['10px'],
		},
		'padding-block-end': {
			link: '#padding-properties',
			tests: ['10px'],
		},
		'padding-inline': {
			link: '#padding-properties',
			tests: ['10px', '10px 10px'],
		},
		'padding-inline-start': {
			link: '#padding-properties',
			tests: ['10px'],
		},
		'padding-inline-end': {
			link: '#padding-properties',
			tests: ['10px'],
		},
		'border-block': {
			link: '#border-shorthands',
			tests: ['1px', '2px dotted', 'medium dashed green'],
		},
		'border-block-start': {
			link: '#border-shorthands',
			tests: ['1px', '2px dotted', 'medium dashed green'],
		},
		'border-block-start-width': {
			link: '#border-width',
			tests: ['thin'],
		},
		'border-block-start-width': {
			link: '#border-width',
			tests: ['thin'],
		},
		'border-block-start-style': {
			link: '#border-style',
			tests: ['dotted'],
		},
		'border-block-start-color': {
			link: '#border-color',
			tests: ['navy'],
		},
		'border-block-end': {
			link: '#border-shorthands',
			tests: ['1px', '2px dotted', 'medium dashed green'],
		},
		'border-block-end-width': {
			link: '#border-width',
			tests: ['thin'],
		},
		'border-block-end-style': {
			link: '#border-style',
			tests: ['dotted'],
		},
		'border-block-end-color': {
			link: '#border-color',
			tests: ['navy'],
		},
		'border-block-width': {
			link: '#border-width',
			tests: ['thin 2px'],
		},
		'border-block-style': {
			link: '#border-style',
			tests: ['dotted dashed'],
		},
		'border-block-color': {
			link: '#border-color',
			tests: ['navy blue'],
		},
		'border-inline': {
			link: '#border-shorthands',
			tests: ['1px', '2px dotted', 'medium dashed green'],
		},
		'border-inline-start': {
			link: '#border-shorthands',
			tests: ['1px', '2px dotted', 'medium dashed green'],
		},
		'border-inline-start-width': {
			link: '#border-width',
			tests: ['thin'],
		},
		'border-inline-start-style': {
			link: '#border-style',
			tests: ['dotted'],
		},
		'border-inline-start-color': {
			link: '#border-color',
			tests: ['navy'],
		},
		'border-inline-end': {
			link: '#border-shorthands',
			tests: ['1px', '2px dotted', 'medium dashed green'],
		},
		'border-inline-end-width': {
			link: '#border-width',
			tests: ['thin'],
		},
		'border-inline-end-style': {
			link: '#border-style',
			tests: ['dotted'],
		},
		'border-inline-end-color': {
			link: '#border-color',
			tests: ['navy'],
		},
		'border-inline-width': {
			link: '#border-width',
			tests: ['thin 2px'],
		},
		'border-inline-style': {
			link: '#border-style',
			tests: ['dotted dashed'],
		},
		'border-inline-color': {
			link: '#border-color',
			tests: ['navy blue'],
		},
		'border-start-start-radius': {
			link: '#border-radius-properties',
			specLink: '#border-radius-shorthands',
			tests: ['0', '50%', '250px 100px'],
		},
		'border-start-end-radius': {
			link: '#border-radius-properties',
			specLink: '#border-radius-shorthands',
			tests: ['0', '50%', '250px 100px'],
		},
		'border-end-start-radius': {
			link: '#border-radius-properties',
			specLink: '#border-radius-shorthands',
			tests: ['0', '50%', '250px 100px'],
		},
		'border-end-end-radius': {
			link: '#border-radius-properties',
			specLink: '#border-radius-shorthands',
			tests: ['0', '50%', '250px 100px'],
		},
		margin: {
			link: '#logical-shorthand-keyword',
			tests: ['logical 5px 10px 15px 20px'],
		},
		padding: {
			link: '#logical-shorthand-keyword',
			tests: ['logical 5px 10px 15px 20px'],
		},
		'border-color': {
			link: '#logical-shorthand-keyword',
			tests: ['logical red green blue yellow'],
		},
		'border-style': {
			link: '#logical-shorthand-keyword',
			tests: ['logical solid dotted dashed none'],
		},
		'border-width': {
			link: '#logical-shorthand-keyword',
			tests: ['logical 5px 10px 15px 20px'],
		},
	},
};
