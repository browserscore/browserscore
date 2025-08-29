export default {
	title: 'Paged Media Module Level 3',
	link: 'css-page-3',
	status: 'experimental',
	properties: {
		page: {
			links: {
				tr: '#using-named-pages',
				dev: '#using-named-pagest',
			},
			tests: ['auto', 'customName'],
		},
	},
	atrules: {
		'@page': {
			link: '#at-page-rule',
			tests: ['@page :blank { margin: 2cm }', '@page customName { margin: 2cm }'],
			prelude: ':blank',
		},
		'`@page` descriptors': {
			id: '@page',
			forceTotal: false,
			descriptors: {
				size: {
					link: '#page-size-prop',
					values: [
						'4in 6in',
						'4em 6em',
						'auto',
						'landscape',
						'portrait',
						'a3',
						'a4',
						'a5',
						'b4',
						'b5',
						'jis-b4',
						'jis-b5',
						'ledger',
						'legal',
						'letter',
						'a3 landscape',
						'a3 portrait',
						'landscape a3',
						'portrait a3',
					],
				},
				'page-orientation': {
					link: '#page-orientation-prop',
					values: ['upright', 'rotate-left', 'rotate-right'],
				},
				marks: {
					link: '#marks',
					values: ['none', 'crop', 'cross', 'crop cross'],
				},
				bleed: {
					link: '#bleed',
					values: ['auto', '6pt'],
				},
			},
		},
		'@page custom': {
			link: '#at-page-rule',
			suffixes: [
				', foo',
				':left',
				':right',
				':first',
			]
		}
	},
};
