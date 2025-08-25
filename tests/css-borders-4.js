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
	title: 'CSS Borders and Box Decorations Module Level 4',
	link: 'css-borders-4',
	status: 'experimental',
	values: {
		'properties': ['border-top-color', 'border-block-start-color'],
		'stripes()': {
			link: '#border-color',
			tests: [
				'stripes(red, yellow, green, blue)',
				'stripes(red 1px, yellow 2px, green 3px, blue 4px)',
				'stripes(red 10%, yellow 20%, green 30%, blue 40%)',
				'stripes(red 1fr, yellow 2fr, green 3fr, blue 4fr)',
				'stripes(red, yellow 2px, green 30%, blue 4fr)',
			],
		},
		'stripes() in border-color shorthand': {
			link: '#border-color',
			tests: [
				'stripes(red, yellow, green, blue)',
				'stripes(red 1px, yellow 2px, green 3px, blue 4px)',
				'stripes(red 10%, yellow 20%, green 30%, blue 40%)',
				'stripes(red 1fr, yellow 2fr, green 3fr, blue 4fr)',
				'stripes(red, yellow 2px, green 30%, blue 4fr)',
				'stripes(red, yellow) stripes(green, blue)',
				'stripes(red 1px, yellow 2px) stripes(green 3px, blue 4px)',
				'stripes(red 10%, yellow 20%) stripes(green 30%, blue 40%)',
				'stripes(red 1fr, yellow 2fr) stripes(green 3fr, blue 4fr)',
				'stripes(red, yellow) stripes(green, blue) stripes(orange, purple)',
				'stripes(red 1px, yellow 2px) stripes(green 1fr, blue 2fr) stripes(orange 10%, purple 20%)',
				'stripes(red, yellow) stripes(green, blue) stripes(orange, purple) stripes(pink, brown)',
				'stripes(red 1px, yellow 2px) stripes(green 1fr, blue 2fr) stripes(orange 10%, purple 20%) stripes(pink 1fr, brown 2px)',
			],
		},
	},
	properties: {
		'border-top-radius': {
			link: '#corner-sizing-side-shorthands',
			tests: border_radius_tests,
		},
		'border-right-radius': {
			link: '#corner-sizing-side-shorthands',
			tests: border_radius_tests,
		},
		'border-bottom-radius': {
			link: '#corner-sizing-side-shorthands',
			tests: border_radius_tests,
		},
		'border-left-radius': {
			link: '#corner-sizing-side-shorthands',
			tests: border_radius_tests,
		},
		'border-block-start-radius': {
			link: '#corner-sizing-side-shorthands',
			tests: border_radius_tests,
		},
		'border-block-end-radius': {
			link: '#corner-sizing-side-shorthands',
			tests: border_radius_tests,
		},
		'border-inline-start-radius': {
			link: '#corner-sizing-side-shorthands',
			tests: border_radius_tests,
		},
		'border-inline-end-radius': {
			link: '#corner-sizing-side-shorthands',
			tests: border_radius_tests,
		},
		'corner-shape': {
			link: '#corner-shaping',
			tests: [
				...corner_shape_tests,
				'round scoop',
				'round scoop bevel',
				'round scoop bevel notch',
			],
		},
		'corner-top-left-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-top-right-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-bottom-right-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-bottom-left-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-start-start-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-start-end-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-end-end-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-end-start-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-top-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-bottom-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-left-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-right-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-block-start-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-block-end-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-inline-start-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
		},
		'corner-inline-end-shape': {
			link: '#corner-shape-shorthands',
			tests: corner_shape_tests,
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
			tests: border_clip_tests,
		},
		'border-clip-top': {
			link: '#border-clip',
			tests: border_clip_tests,
		},
		'border-clip-right': {
			link: '#border-clip',
			tests: border_clip_tests,
		},
		'border-clip-bottom': {
			link: '#border-clip',
			tests: border_clip_tests,
		},
		'border-clip-left': {
			link: '#border-clip',
			tests: border_clip_tests,
		},
		'box-shadow-color': {
			link: '#box-shadow-color',
			tests: [
				'green',
				'green, blue'
			],
		},
		'box-shadow-offset': {
			link: '#box-shadow-offset',
			tests: [
				'none',
				'0 0',
				'10px 1em',
				'-10px -1em',
				'none, 0 0, 10px 1em',
			],
		},
		'box-shadow-blur': {
			link: '#box-shadow-blur',
			tests: [
				'0',
				'10px',
				'1em',
				'10px, 1em',
			],
		},
		'box-shadow-spread': {
			link: '#box-shadow-spread',
			tests: [
				'0',
				'10px',
				'1em',
				'10px, 1em',
			],
		},
		'box-shadow-position': {
			link: '#box-shadow-position',
			tests: [
				'outset',
				'inset',
				'outset, inset',
			],
		},
		'border-shape': {
			link: '#border-shape',
			tests: [
				'none',
				'inset(10% round 10% 40% 10% 40%)',
				'ellipse(at top 50% left 20%)',
				'circle(at top left)',
				'polygon(100% 0, 100% 100%, 0 100%)',
				"path('M 20 20 H 80 V 30')",
				'rect(10% 20px 30% 40px)',
				'xywh(10% 40% 100px 200px round 10% 40% 10% 40%)',
				'inset(10% round 10% 40% 10% 40%) margin-box',
				'ellipse(at top 50% left 20%) margin-box',
				'circle(at top left) margin-box',
				'polygon(100% 0, 100% 100%, 0 100%) margin-box',
				"path('M 20 20 H 80 V 30') margin-box",
				'rect(10% 20px 30% 40px) margin-box',
				'xywh(10% 40% 100px 200px round 10% 40% 10% 40%) margin-box',
				'shape(from 30% 60px, curve to 180px 180px via 90px 190px, close)',
				'attr(src url)',
				'url(image.png)',
				'margin-box',
				'border-box',
				'padding-box',
				'content-box',
				'fill-box',
				'stroke-box',
				'view-box',
			],
		},
	},
};
