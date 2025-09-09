export default {
	id: 'css2-visuren',
	title: 'CSS 2 Visual Formatting Model',
	link: 'css2/',
	specLink: 'CSS22/visuren.html',
	status: 'stable',
	version: 2.2,
	properties: {
		bottom: {
			link: '#position-props',
			tests: ['auto', '100px', '10%'],
		},
		clear: {
			link: '#flow-control',
			tests: ['none', 'left', 'right', 'both'],
		},
		direction: {
			link: '#propdef-direction',
			tests: ['ltr', 'rtl'],
		},
		display: {
			link: '#display-prop',
			tests: [
				'none',
				'inline',
				'block',
				'list-item',
				'inline-block',
				'table',
				'inline-table',
				'table-row-group',
				'table-header-group',
				'table-footer-group',
				'table-row',
				'table-column-group',
				'table-column',
				'table-cell',
				'table-caption',
			],
		},
		float: {
			link: '#float-position',
			tests: ['none', 'left', 'right'],
		},
		left: {
			link: '#position-props',
			tests: ['auto', '100px', '10%'],
		},
		position: {
			link: '#choose-position',
			tests: ['static', 'relative', 'absolute', 'fixed'],
		},
		right: {
			link: '#position-props',
			tests: ['auto', '100px', '10%'],
		},
		top: {
			link: '#position-props',
			tests: ['100px', '10%', 'auto'],
		},
		'unicode-bidi': {
			link: '#propdef-unicode-bidi',
			tests: ['normal', 'embed', 'bidi-override'],
		},
		'z-index': {
			link: '#z-index',
			tests: ['auto', '1', '-1'],
		},
	},
};
