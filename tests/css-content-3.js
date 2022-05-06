export default {
	title: 'CSS Generated Content Module Level 3',
	links: {
		tr: 'css-content-3',
		dev: 'css-content-3',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		quotes: {
			links: {
				tr: '#quotes',
				dev: '#quotes',
			},
			tests: ['auto'],
		},
		content: {
			links: {
				tr: '#alt',
				dev: '#alt',
			},
			tests: ['url(./img/star.png) / "New!"', '"\\25BA" / ""'],
		},
	},
};
