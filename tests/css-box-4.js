export default {
	title: 'CSS Box Model Module Level 4',
	links: {
		tr: 'css-box-4',
		dev: 'css-box-4',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'margin-trim': {
			links: {
				tr: '#margin-trim',
				dev: '#margin-trim',
			},
			tests: [
				'none',
				'block',
				'inline',
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