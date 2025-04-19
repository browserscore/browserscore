export default {
	title: 'CSS 2 Paged Media',
	links: {
		tr: 'CSS22/page.html',
		dev: 'css2/',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2.2,
		'last-snapshot': 2.2,
	},
	'@rules': {
		'@page': {
			links: {
				tr: '#page-box',
				dev: '#page-box',
			},
			tests: [
				'@page { margin: 2cm; }',
				'@page :left { margin: 2cm; }',
				'@page :right { margin: 2cm; }',
				'@page :first { margin: 2cm; }',
			],
		},
	},
	descriptors: {
		'@page/margin': {
			links: {
				tr: '#page-box',
				dev: '#page-box',
			},
			tests: ['2cm', '4%', 'auto'],
		},
		'@page/margin-top': {
			links: {
				tr: '#page-box',
				dev: '#page-box',
			},
			tests: ['2cm', '4%', 'auto'],
		},
		'@page/margin-right': {
			links: {
				tr: '#page-box',
				dev: '#page-box',
			},
			tests: ['2cm', '4%', 'auto'],
		},
		'@page/margin-bottom': {
			links: {
				tr: '#page-box',
				dev: '#page-box',
			},
			tests: ['2cm', '4%', 'auto'],
		},
		'@page/margin-left': {
			links: {
				tr: '#page-box',
				dev: '#page-box',
			},
			tests: ['2cm', '4%', 'auto'],
		},
	},
	properties: {
		orphans: {
			links: {
				tr: '#break-inside',
				dev: '#break-inside',
			},
			tests: ['1', '2'],
		},
		'page-break-after': {
			links: {
				tr: '#page-break-props',
				dev: '#page-break-props',
			},
			tests: ['auto', 'always', 'avoid', 'left', 'right'],
		},
		'page-break-before': {
			links: {
				tr: '#page-break-props',
				dev: '#page-break-props',
			},
			tests: ['auto', 'always', 'avoid', 'left', 'right'],
		},
		'page-break-inside': {
			links: {
				tr: '#page-break-props',
				dev: '#page-break-props',
			},
			tests: ['auto', 'avoid'],
		},
		widows: {
			links: {
				tr: '#break-inside',
				dev: '#break-inside',
			},
			tests: ['1', '2'],
		},
	},
};
