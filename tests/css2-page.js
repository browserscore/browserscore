export default {
	id: 'css2-page',
	title: 'CSS 2 Paged Media',
	links: {
		tr: 'CSS22/page.html',
		dev: 'css2/',
	},
	status: 'stable',
	firstSnapshot: 2.2,
	lastSnapshot: 2.2,
	atrules: {
		'@page': {
			link: '#page-box',
			preludes: [
				':left',
				':right',
				':first',
			],
		},
		'`@page` descriptors': {
			id: '@page',
			link: '#page-box',
			forceTotal: false,
			descriptors: ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
		},
	},
	xdescriptors: {
		'@page/margin': {
			link: '#page-box',
			tests: ['2cm', '4%', 'auto'],
		},
		'@page/margin-top': {
			link: '#page-box',
			tests: ['2cm', '4%', 'auto'],
		},
		'@page/margin-right': {
			link: '#page-box',
			tests: ['2cm', '4%', 'auto'],
		},
		'@page/margin-bottom': {
			link: '#page-box',
			tests: ['2cm', '4%', 'auto'],
		},
		'@page/margin-left': {
			link: '#page-box',
			tests: ['2cm', '4%', 'auto'],
		},
	},
	properties: {
		orphans: {
			link: '#break-inside',
			tests: ['1', '2'],
		},
		'page-break-after': {
			link: '#page-break-props',
			tests: ['auto', 'always', 'avoid', 'left', 'right'],
		},
		'page-break-before': {
			link: '#page-break-props',
			tests: ['auto', 'always', 'avoid', 'left', 'right'],
		},
		'page-break-inside': {
			link: '#page-break-props',
			tests: ['auto', 'avoid'],
		},
		widows: {
			link: '#break-inside',
			tests: ['1', '2'],
		},
	},
};
