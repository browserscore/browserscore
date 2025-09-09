export default {
	id: 'css-scoping-1',
	title: 'CSS Scoping Module Level 1',
	link: 'css-scoping-1',
	status: 'experimental',
	selectors: {
		':host': {
			link: '#host-selector',
			tests: ':host',
		},
		':host()': {
			link: '#host-selector',
			mdn: ':host()',
			tests: [':host(*)', ':host(.foo)'],
		},
		':host-context()': {
			link: '#host-selector',
			mdn: ':host-context()',
			tests: [':host-context(*)', ':host-context(.foo)'],
		},
		'::slotted()': {
			link: '#slotted-pseudo',
			tests: ['::slotted(*)', '::slotted(.foo)'],
		},
		':has-slotted': {
			link: '#the-has-slotted-pseudo',
			tests: ':has-slotted',
		},
	},
};
