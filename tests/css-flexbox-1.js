export default {
	title: 'CSS Flexible Box Layout Module Level 1',
	link: 'css-flexbox-1',
	mdn: 'Glossary/Flexbox',
	status: 'stable',
	firstSnapshot: 2018,
	properties: {
		'align-content': {
			link: '#align-content-property',
			tests: ['flex-start', 'flex-end', 'space-between', 'space-around'],
		},
		'align-items': {
			link: '#align-items-property',
			tests: ['flex-start', 'flex-end'],
		},
		'align-self': {
			link: '#align-items-property',
			tests: ['flex-start', 'flex-end'],
		},
		display: {
			link: '#flex-containers',
			tests: ['flex', 'inline-flex'],
		},
		flex: {
			link: '#flex-property',
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
			link: '#flex-basis-property',
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
			link: '#flex-direction-property',
			tests: ['row', 'row-reverse', 'column', 'column-reverse'],
		},
		'flex-flow': {
			link: '#flex-flow-property',
			tests: ['row', 'row-reverse', 'column', 'column-reverse', 'wrap', 'wrap-reverse'],
		},
		'flex-grow': {
			link: '#flex-grow-property',
			tests: ['0', '5'],
		},
		'flex-shrink': {
			link: '#flex-shrink-property',
			tests: ['1', '10'],
		},
		'flex-wrap': {
			link: '#flex-wrap-property',
			tests: ['nowrap', 'wrap', 'wrap-reverse'],
		},
		'justify-content': {
			link: '#justify-content-property',
			tests: ['flex-start', 'flex-end', 'space-between', 'space-around'],
		},
		'min-height': {
			link: '#min-size-auto',
			tests: ['auto'],
		},
		'min-width': {
			link: '#min-size-auto',
			tests: ['auto'],
		},
		order: {
			link: '#order-property',
			tests: ['0', '1'],
		},
	},
};
