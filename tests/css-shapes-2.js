export default {
	title: 'CSS Shapes Module Level 2',
	links: {
		dev: 'css-shapes-2',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'shape-inside': {
			links: {
				dev: '#shape-inside-property',
			},
			tests: [
				'auto',
				'outside-shape',
				'shape-box',
				'display',
				'inset(10% round 10% 40% 10% 40%)',
				'ellipse(at top 50% left 20%)',
				'circle(at right 5% top)',
				'polygon(100% 0, 100% 100%, 0 100%)',
				"path('M 20 20 H 80 V 30')",
				'url(image.png)',
			],
		},
		'shape-padding': {
			links: {
				dev: '#shape-padding-property',
			},
			tests: ['0', '10px', '50%'],
		},
	},
};
