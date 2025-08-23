export default {
	title: 'CSS Fragmentation Module Level 3',
	link: 'css-break-3',
	status: {
		stability: 'stable',
	},
	properties: {
		'break-before': {
			link: '#break-between',
			tests: [
				'auto',
				'avoid',
				'avoid-page',
				'page',
				'left',
				'right',
				'recto',
				'verso',
				'avoid-column',
				'column',
				'avoid-region',
				'region ',
			],
		},
		'break-after': {
			link: '#break-between',
			tests: [
				'auto',
				'avoid',
				'avoid-page',
				'page',
				'left',
				'right',
				'recto',
				'verso',
				'avoid-column',
				'column',
				'avoid-region',
				'region ',
			],
		},
		'break-inside': {
			link: '#break-within',
			tests: ['auto', 'avoid', 'avoid-page', 'avoid-column', 'avoid-region'],
		},
		'box-decoration-break': {
			link: '#break-decoration',
			tests: ['slice', 'clone'],
		},
	},
};
