export default {
	id: 'css-overflow-3',
	title: 'CSS Overflow Module Level 3',
	link: 'css-overflow-3',
	status: 'experimental',
	properties: {
		'block-ellipsis': {
			link: '#block-ellipsis',
			tests: ['none', 'auto', '"… (continued on next page)"'],
		},
		'line-clamp': {
			link: '#line-clamp',
			mdn: '-webkit-line-clamp',
			tests: ['none', '1', '5 clip', '5 ellipsis', '5 "… (continued on next page)"'],
		},
		'max-lines': {
			link: '#max-lines',
			tests: ['none', '1'],
		},
		'overflow-x': {
			link: '#overflow-properties',
			tests: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
		},
		'overflow-y': {
			link: '#overflow-properties',
			tests: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
		},
		'overflow-inline': {
			link: '#logical',
			tests: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
		},
		'overflow-block': {
			link: '#logical',
			tests: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
		},
		'overflow-clip-margin': {
			link: '#overflow-clip-margin',
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
		continue: {
			link: '#continue',
			tests: ['auto', 'discard'],
		},
		'scrollbar-gutter': {
			link: '#scrollbar-gutter-property',
			tests: ['auto', 'stable', 'both-edges stable', 'stable both-edges'],
		},
	},
};
