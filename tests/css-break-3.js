export default {
	title: 'CSS Fragmentation Module Level 3',
	links: {
		tr: 'css-break-3',
		dev: 'css-break-3',
	},
	status: {
		stability: 'stable',
	},
	properties: {
		'break-before': {
			links: {
				tr: '#break-between',
				dev: '#break-between',
			},
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
			links: {
				tr: '#break-between',
				dev: '#break-between',
			},
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
			links: {
				tr: '#break-within',
				dev: '#break-within',
			},
			tests: ['auto', 'avoid', 'avoid-page', 'avoid-column', 'avoid-region'],
		},
		'box-decoration-break': {
			links: {
				tr: '#break-decoration',
				dev: '#break-decoration',
			},
			tests: ['slice', 'clone'],
		},
	},
};
