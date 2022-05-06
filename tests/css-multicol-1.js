export default {
	title: 'CSS Multi-column Layout Module Level 1',
	links: {
		tr: 'css-multicol-1',
		dev: 'css-multicol-1',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
	},
	properties: {
		'column-width': {
			links: {
				tr: '#cw',
				dev: '#cw',
			},
			tests: ['10em', 'auto'],
		},
		'column-count': {
			links: {
				tr: '#cc',
				dev: '#cc',
			},
			tests: ['2', 'auto'],
		},
		columns: {
			links: {
				tr: '#columns',
				dev: '#columns',
			},
			tests: ['100px', '3', '10em 2', 'auto 2', '10em auto', 'auto auto', '2 10em', 'auto 10em', '2 auto'],
		},
		'column-rule-color': {
			links: {
				tr: '#crc',
				dev: '#crc',
			},
			tests: 'red',
		},
		'column-rule-style': {
			links: {
				tr: '#crs',
				dev: '#crs',
			},
			tests: ['none', 'solid', 'dotted'],
		},
		'column-rule-width': {
			links: {
				tr: '#crw',
				dev: '#crw',
			},
			tests: '1px',
		},
		'column-rule': {
			links: {
				tr: '#column-rule',
				dev: '#cr',
			},
			tests: ['transparent', '1px solid black'],
		},
		'column-span': {
			links: {
				tr: '#column-span',
				dev: '#column-span',
			},
			tests: ['none', 'all'],
		},
		'column-fill': {
			links: {
				tr: '#cf',
				dev: '#cf',
			},
			tests: ['auto', 'balance', 'balance-all'],
		},
	},
};
