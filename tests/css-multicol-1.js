export default {
	title: 'CSS Multi-column Layout Module Level 1',
	link: 'css-multicol-1',
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
	},
	properties: {
		'column-width': {
			link: '#cw',
			tests: ['10em', 'auto'],
		},
		'column-count': {
			link: '#cc',
			tests: ['2', 'auto'],
		},
		columns: {
			link: '#columns',
			tests: ['100px', '3', '10em 2', 'auto 2', '10em auto', 'auto auto', '2 10em', 'auto 10em', '2 auto'],
		},
		'column-rule-color': {
			link: '#crc',
			tests: 'red',
		},
		'column-rule-style': {
			link: '#crs',
			tests: ['none', 'solid', 'dotted'],
		},
		'column-rule-width': {
			link: '#crw',
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
			link: '#column-span',
			tests: ['none', 'all'],
		},
		'column-fill': {
			link: '#cf',
			tests: ['auto', 'balance', 'balance-all'],
		},
	},
};
