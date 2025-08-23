export default {
	title: 'CSS Box Sizing Module Level 3',
	link: 'css-sizing-3',
	status: {
		stability: 'stable',
	},
	properties: {
		width: {
			link: '#preferred-size-properties',
			tests: [
				'max-content',
				'min-content',
				'fit-content(200px)',
				'fit-content(10%)',
			],
		},
		'min-width': {
			link: '#min-size-properties',
			tests: [
				'max-content',
				'min-content',
				'fit-content(200px)',
				'fit-content(10%)',
			],
		},
		'max-width': {
			link: '#max-size-properties',
			tests: [
				'max-content',
				'min-content',
				'fit-content(200px)',
				'fit-content(10%)',
			],
		},
		height: {
			link: '#preferred-size-properties',
			tests: [
				'max-content',
				'min-content',
				'fit-content(200px)',
				'fit-content(10%)',
			],
		},
		'min-height': {
			link: '#min-size-properties',
			tests: [
				'max-content',
				'min-content',
				'fit-content(200px)',
				'fit-content(10%)',
			],
		},
		'max-height': {
			link: '#max-size-properties',
			tests: [
				'max-content',
				'min-content',
				'fit-content(200px)',
				'fit-content(10%)',
			],
		},
		'column-width': {
			link: '#column-sizing',
			tests: [
				'max-content',
				'min-content',
				'fit-content(200px)',
				'fit-content(10%)',
			],
		},
	},
};
