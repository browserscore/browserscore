export default {
	title: 'CSS Shapes Module Level 1',
	link: 'css-shapes-1',
	status: {
		stability: 'stable',
	},
	properties: {
		'shape-outside': {
			link: '#shape-outside-property',
			tests: [
				'none',
				'inset(10% round 10% 40% 10% 40%)',
				'ellipse(at top 50% left 20%)',
				'circle(at top left)',
				'polygon(100% 0, 100% 100%, 0 100%)',
				"path('M 20 20 H 80 V 30')",
				'rect(10% 20px 30% 40px)',
				'xywh(10% 40% 100px 200px round 10% 40% 10% 40%)',
				'margin-box',
				'border-box',
				'padding-box',
				'content-box',
				'inset(10% round 10% 40% 10% 40%) margin-box',
				'ellipse(at top 50% left 20%) margin-box',
				'circle(at top left) margin-box',
				'polygon(100% 0, 100% 100%, 0 100%) margin-box',
				"path('M 20 20 H 80 V 30') margin-box",
				'rect(10% 20px 30% 40px) margin-box',
				'xywh(10% 40% 100px 200px round 10% 40% 10% 40%) margin-box',
				'attr(src url)',
				'url(image.png)',
			],
		},
		'shape-image-threshold': {
			link: '#shape-image-threshold-property',
			tests: ['0', '1', '0.0', '0.1'],
		},
		'shape-margin': {
			link: '#shape-margin-property',
			tests: ['0', '10px', '50%'],
		},
	},
};
