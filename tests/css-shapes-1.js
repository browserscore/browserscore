export default {
	title: 'CSS Shapes Module Level 1',
	links: {
		tr: 'css-shapes-1',
		dev: 'css-shapes-1',
	},
	status: {
		stability: 'stable',
	},
	properties: {
		'shape-outside': {
			links: {
				tr: '#shape-outside-property',
				dev: '#shape-outside-property',
			},
			tests: [
				'none',
				'inset(10% round 10% 40% 10% 40%)',
				'ellipse(at top 50% left 20%)',
				'circle(at right 5% top)',
				'polygon(100% 0, 100% 100%, 0 100%)',
				"path('M 20 20 H 80 V 30')",
				'margin-box',
				'border-box',
				'padding-box',
				'content-box',
				'inset(10% round 10% 40% 10% 40%) margin-box',
				'ellipse(at top 50% left 20%) margin-box',
				'circle(at right 5% top) margin-box',
				'polygon(100% 0, 100% 100%, 0 100%) margin-box',
				"path('M 20 20 H 80 V 30') margin-box",
				'attr(src url)',
				'url(image.png)',
			],
		},
		'shape-image-threshold': {
			links: {
				tr: '#shape-image-threshold-property',
				dev: '#shape-image-threshold-property',
			},
			tests: ['0', '1', '0.0', '0.1'],
		},
		'shape-margin': {
			links: {
				tr: '#shape-margin-property',
				dev: '#shape-margin-property',
			},
			tests: ['0', '10px', '50%'],
		},
	},
};
