export default {
	id: 'css-content-3',
	title: 'CSS Generated Content Module Level 3',
	link: 'css-content-3',
	status: 'experimental',
	properties: {
		quotes: {
			link: '#quotes',
			tests: ['auto'],
		},
		content: {
			link: '#alt',
			tests: ['url(./img/star.png) / "New!"', '"\\25BA" / ""'],
		},
	},
};
