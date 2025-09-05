export default {
	id: 'css-break-4',
	title: 'CSS Fragmentation Module Level 4',
	link: 'css-break-4',
	status: 'experimental',
	values: {
		properties: ['break-before', 'break-after'],
		always: {
			link: '#valdef-break-before-always',
			mdn: 'break-before#values',
			tests: 'always',
		},
		all: {
			link: '#valdef-break-before-all',
			mdn: 'break-before#values',
			tests: 'all',
		},
	},
	properties: {
		'margin-break': {
			link: '#break-margins',
			tests: ['auto', 'keep', 'discard'],
		},
	},
};
