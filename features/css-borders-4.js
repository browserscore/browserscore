const border_radius_tests = [
	'0',
	'50%',
	'250px 100px',
	'10px 20px',
	'50% 10%',
	'250px / 50px',
	'50% / 10%',
	'250px 100px / 50px',
	'250px / 50px 10px',
	'250px 100px / 50px 10px',
];
const corner_shape_tests = [
	'round',
	'scoop',
	'bevel',
	'notch',
	'square',
	'squircle',
	'superellipse(4)',
	'superellipse(infinity)',
];
const border_clip_tests = [
	'normal',
	'10px',
	'10%',
	'1fr',
	'10px 20px',
	'10% 20%',
	'1fr 2fr',
	'10px 20% 1fr',
];

export default {
	id: 'css-borders-4',
	title: 'CSS Borders and Box Decorations Module Level 4',
	link: 'css-borders-4',
	status: 'experimental',
	values: {
		'stripes()': {
			link: '#border-color',
			property: 'border-color',
			args: [
				'red, yellow, green, blue',
				'red 1px, yellow 2px',
				'red 10%, yellow 20%',
				'red 1fr, yellow 2fr',
			],
		},
	},
	properties: {
		'border-<side>-radius': {
			link: '#corner-sizing-side-shorthands',
			values: border_radius_tests,
			children: [
				'border-top-radius', 'border-right-radius', 'border-bottom-radius', 'border-left-radius',
				'border-block-start-radius', 'border-block-end-radius', 'border-inline-start-radius', 'border-inline-end-radius',
			],
		},
		'corner-shape': {
			isGroup: true,
			link: '#corner-shaping',
			values: corner_shape_tests,
			children: {
				'corner-shape': {
					values: [
						...corner_shape_tests,
						'round scoop',
						'round scoop bevel',
						'round scoop bevel notch',
					]
				},
				'corner-<side>-shape': {
					link: '#corner-shape-shorthands',
					values: corner_shape_tests,
					children: [
						'corner-top-shape', 'corner-right-shape', 'corner-bottom-shape', 'corner-left-shape',
						'corner-block-start-shape', 'corner-block-end-shape', 'corner-inline-start-shape', 'corner-inline-end-shape',
					],
				},
				'corner-<corner>-shape': {
					values: corner_shape_tests,
					children: [
						'corner-top-left-shape', 'corner-top-right-shape', 'corner-bottom-right-shape', 'corner-bottom-left-shape',
						'corner-start-start-shape', 'corner-start-end-shape', 'corner-end-end-shape', 'corner-end-start-shape',
					],
				},
			},
		},
		'border-limit': {
			link: '#border-limit',
			tests: [
				'all',
				'sides',
				'corners',
				'sides 10px',
				'corners 10px',
				'sides 5%',
				'corners 5%',
				'top 10px',
				'right 10px',
				'bottom 10px',
				'left 10px',
				'top 5%',
				'right 5%',
				'bottom 5%',
				'left 5%',
			],
		},
		'border-clip': {
			link: '#border-clip',
			values: border_clip_tests,
			children: [
				'border-clip',
				'border-clip-top', 'border-clip-right', 'border-clip-bottom', 'border-clip-left',
				'border-clip-block-start', 'border-clip-block-end', 'border-clip-inline-start', 'border-clip-inline-end',
			],
		},
		'box-shadow-*': {
			isGroup: true,
			titleMd: '`box-shadow` longhands',
			children: {
				'box-shadow-color': {
					link: '#box-shadow-color',
				},
				'box-shadow-offset': {
					link: '#box-shadow-offset',
				},
				'box-shadow-blur': {
					link: '#box-shadow-blur',
				},
				'box-shadow-spread': {
					link: '#box-shadow-spread',
				},
				'box-shadow-position': {
					link: '#box-shadow-position',
				},
			},
		},

		'border-shape': {
			link: '#border-shape',
			values: [
				'none',
				'inset(10% round 10% 40% 10% 40%)',
				'ellipse(at top 50% left 20%)',
				'circle(at top left)',
				'polygon(100% 0, 100% 100%, 0 100%)',
				"path('M 0 0')",
				'rect(10% 20px 30% 40px)',
				'xywh(10% 40% 100px 200px round 10% 40% 10% 40%)',
				'url(image.png)',
				'margin-box',
				'border-box',
				'padding-box',
				'content-box',
				'fill-box',
				'stroke-box',
				'view-box',
				{
					id: '<shape> margin-box',
					isGroup: false,
					children: [
						'inset(10% round 10% 40% 10% 40%) margin-box',
						'ellipse(at top 50% left 20%) margin-box',
						'circle(at top left) margin-box',
						'polygon(100% 0, 100% 100%, 0 100%) margin-box',
						"path('M 0 0') margin-box",
						'rect(10% 20px 30% 40px) margin-box',
						'xywh(10% 40% 100px 200px round 10% 40% 10% 40%) margin-box',
					]
				},
			],
		},
	},
};
