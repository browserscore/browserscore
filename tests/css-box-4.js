export default {
	id: 'css-box-4',
	title: 'CSS Box Model Module Level 4',
	link: 'css-box-4',
	status: 'experimental',
	properties: {
		'margin-trim': {
			link: '#margin-trim',
			tests: [
				'none',
				'block',
				'inline',
				'block inline',
				'block-start',
				'inline-start',
				'block-end',
				'inline-end',
				'block-start inline-start',
				'block-end inline-start',
				'block-end inline-start',
				'block-end inline-end',
				'block-start inline-start inline-end',
				'block-start block-end inline-start inline-end',
			],
		},
	},
};
// none | block | inline | [ block-start || inline-start || block-end || inline-end ]
