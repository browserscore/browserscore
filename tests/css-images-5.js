export default {
	title: 'CSS Images Module Level 5',
	links: {
		dev: 'css-images-5',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'object-view-box': {
			links: {
				dev: '#the-object-view-box',
			},
			tests: [
				'none',
				'inset(10% round 10% 40% 10% 40%)',
				'rect(10% 20px 30% 40px)',
				'xywh(10% 40% 100px 200px round 10% 40% 10% 40%)',
			],
		},
	},
};
