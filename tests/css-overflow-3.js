export default {
	title: 'CSS Overflow Module Level 3',
	links: {
		tr: 'css-overflow-3',
		dev: 'css-overflow-3',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'block-ellipsis': {
			links: {
				tr: '#block-ellipsis',
				dev: '#block-ellipsis',
			},
			tests: ['none', 'auto', '"… (continued on next page)"'],
		},
		'line-clamp': {
			links: {
				tr: '#line-clamp',
				dev: '#line-clamp',
				mdn: '-webkit-line-clamp',
			},
			tests: ['none', '1', '5 clip', '5 ellipsis', '5 "… (continued on next page)"'],
		},
		'max-lines': {
			links: {
				tr: '#max-lines',
				dev: '#max-lines',
			},
			tests: ['none', '1'],
		},
		'overflow-x': {
			links: {
				tr: '#overflow-properties',
				dev: '#overflow-properties',
			},
			tests: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
		},
		'overflow-y': {
			links: {
				tr: '#overflow-properties',
				dev: '#overflow-properties',
			},
			tests: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
		},
		'overflow-inline': {
			links: {
				tr: '#logical',
				dev: '#logical',
			},
			tests: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
		},
		'overflow-block': {
			links: {
				tr: '#logical',
				dev: '#logical',
			},
			tests: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
		},
		'overflow-clip-margin': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: ['content-box', 'padding-box', 'border-box', '20px'],
		},
		continue: {
			links: {
				tr: '#continue',
				dev: '#continue',
			},
			tests: ['auto', 'discard'],
		},
		'scrollbar-gutter': {
			links: {
				tr: 'scrollbar-gutter-property',
				dev: '#scrollbar-gutter-property',
			},
			tests: ['auto', 'stable', 'both-edges stable', 'stable both-edges'],
		},
	},
};
