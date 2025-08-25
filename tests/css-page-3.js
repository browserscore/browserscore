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
	'@rules': {
		'@page': {
			link: '#at-page-rule',
			tests: ['@page :blank { margin: 2cm }', '@page customName { margin: 2cm }'],
		},
	},
	descriptors: {
		'@page/size': {
			link: '#page-size-prop',
			tests: [
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
		'@page/page-orientation': {
			link: '#page-orientation-prop',
			tests: ['upright', 'rotate-left', 'rotate-right'],
		},
		'@page/marks': {
			link: '#marks',
			tests: ['none', 'crop', 'cross', 'crop cross'],
		},
		'@page/bleed': {
			link: '#bleed',
			tests: ['auto', '6pt'],
		},
	},
};
