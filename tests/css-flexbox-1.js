export default {
	title: 'CSS Flexible Box Layout Module Level 1',
	links: {
		tr: 'css-flexbox-1',
		dev: 'css-flexbox-1',
		mdn: 'Glossary/Flexbox',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2018,
	},
	properties: {
		'align-content': {
			links: {
				tr: '#align-content-property',
				dev: '#align-content-property',
			},
			tests: ['flex-start', 'flex-end', 'space-between', 'space-around'],
		},
		'align-items': {
			links: {
				tr: '#align-items-property',
				dev: '#align-items-property',
			},
			tests: ['flex-start', 'flex-end'],
		},
		'align-self': {
			links: {
				tr: '#align-items-property',
				dev: '#align-items-property',
			},
			tests: ['flex-start', 'flex-end'],
		},
		display: {
			links: {
				tr: '#flex-containers',
				dev: '#flex-containers',
			},
			tests: ['flex', 'inline-flex'],
		},
		flex: {
			links: {
				tr: '#flex-property',
				dev: '#flex-property',
			},
			tests: [
				// TODO: Add the `contain` keywords defined by css-sizing-4.
				// https://drafts.csswg.org/css-sizing-4/#sizing-values
				'none',
				'auto',
				'content',
				'stretch',
				'min-content',
				'max-content',
				'fit-content',
				'1 fit-content(10%)',
				'1 fit-content(200px)',
				'1 fit-content(0)',
				'1',
				'0', // 0px
				'0%',
				'100%',
				'300px',
				'20em',
				'1 1 0',
				'1 1 0%',
				'0 1 300px',
				'1 1 20em',
				'5 7 10%',
				'1 auto',
				'1 content',
				'1 min-content',
				'1 max-content',
				'1 fit-content',
				'auto 1 0',
				'content 0 1',
			],
		},
		'flex-basis': {
			links: {
				tr: '#flex-basis-property',
				dev: '#flex-basis-property',
			},
			tests: [
				// TODO: Add the `contain` keywords defined by css-sizing-4.
				// https://drafts.csswg.org/css-sizing-4/#sizing-values
				'auto',
				'content',
				'stretch',
				'min-content',
				'max-content',
				'fit-content',
				'fit-content(10%)',
				'fit-content(200px)',
				'fit-content(0)',
				'0', // 0px
				'0%',
				'100%',
				'300px',
				'20em',
				'calc(100% - 1em)',
				'env(safe-area-inset-top)',
				'env(safe-area-inset-top, 12px)',
			],
		},
		'flex-direction': {
			links: {
				tr: '#flex-direction-property',
				dev: '#flex-direction-property',
			},
			tests: ['row', 'row-reverse', 'column', 'column-reverse'],
		},
		'flex-flow': {
			links: {
				tr: '#flex-flow-property',
				dev: '#flex-flow-property',
			},
			tests: ['row', 'row-reverse', 'column', 'column-reverse', 'wrap', 'wrap-reverse'],
		},
		'flex-grow': {
			links: {
				tr: '#flex-grow-property',
				dev: '#flex-grow-property',
			},
			tests: ['0', '5'],
		},
		'flex-shrink': {
			links: {
				tr: '#flex-shrink-property',
				dev: '#flex-shrink-property',
			},
			tests: ['1', '10'],
		},
		'flex-wrap': {
			links: {
				tr: '#flex-wrap-property',
				dev: '#flex-wrap-property',
			},
			tests: ['nowrap', 'wrap', 'wrap-reverse'],
		},
		'justify-content': {
			links: {
				tr: '#justify-content-property',
				dev: '#justify-content-property',
			},
			tests: ['flex-start', 'flex-end', 'space-between', 'space-around'],
		},
		'min-height': {
			links: {
				tr: '#min-size-auto',
				dev: '#min-size-auto',
			},
			tests: ['auto'],
		},
		'min-width': {
			links: {
				tr: '#min-size-auto',
				dev: '#min-size-auto',
			},
			tests: ['auto'],
		},
		order: {
			links: {
				tr: '#order-property',
				dev: '#order-property',
			},
			tests: ['0', '1'],
		},
	},
};
