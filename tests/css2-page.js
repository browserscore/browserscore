export default {
	id: 'css2-page',
	title: 'CSS 2 Paged Media',
	links: {
		tr: 'CSS22/page.html',
		dev: 'css2/',
	},
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
		},
		'`@page` descriptors': {
			id: '@page',
			link: '#page-box',
			isGroup: true,
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
