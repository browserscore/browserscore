export default {
	id: 'css2-page',
	title: 'CSS 2 Paged Media',
	link: 'css2/',
	specLink: 'CSS22/page.html',
	status: 'stable',
	version: 2.2,
	atrules: {
		'@page': {
			link: '#page-box',
			preludes: [
				':left',
				':right',
				':first',
			],
			descriptors: ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
		},
	},
	properties: {
		orphans: {
			link: '#break-inside',
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
		},
	},
};
