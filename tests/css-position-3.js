export default {
	title: 'CSS Positioned Layout Module Level 3',
	link: 'css-position-3',
	status: 'stable',
	properties: {
		position: {
			link: '#position-property',
			tests: ['sticky'],
		},
		inset: {
			link: '#inset-shorthands',
			tests: ['auto', '10px', '50%', '10px 5%', '10px 5% 20px', '10px 5% 20px 10%'],
		},
		'inset-block': {
			link: '#inset-shorthands',
			tests: ['auto', '10px', '50%', '10px 5%'],
		},
		'inset-inline': {
			link: '#inset-shorthands',
			tests: ['auto', '10px', '50%', '10px 5%'],
		},
		'inset-block-start': {
			link: '#insets',
			tests: ['auto', '10px', '50%'],
		},
		'inset-block-end': {
			link: '#insets',
			tests: ['auto', '10px', '50%'],
		},
		'inset-inline-start': {
			link: '#insets',
			tests: ['auto', '10px', '50%'],
		},
		'inset-inline-end': {
			link: '#insets',
			tests: ['auto', '10px', '50%'],
		},
	},
};
