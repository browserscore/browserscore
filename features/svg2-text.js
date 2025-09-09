export default {
	id: 'svg2-text',
	title: 'SVG 2 Text',
	link: 'svg2-draft/text.html',
	specLink: 'svg2/text.html',
	group: 'svgwg',
	status: 'experimental',
	properties: {
		'shape-subtract': {
			link: '#TextShapeSubtract',
			tests: [
				'none',
				"url('#shape')",
				'inset(50%)',
				'circle()',
				'ellipse()',
				'polygon(0 10px, 30px 0)',
				"path('M 20 20 H 80 V 30')",
				"url('#clip') circle()",
			],
		},
		'text-anchor': {
			link: '#TextAnchoringProperties',
			mdnGroup: 'SVG',
			tests: ['start', 'middle', 'end'],
		},
		'text-decoration-fill': {
			link: '#TextDecorationFillStroke',
			tests: [
				'none',
				'green',
				'url(#pattern)',
				'url(#pattern) none',
				'url(#pattern) green',
				'context-fill',
				'context-stroke',
			],
		},
		'text-decoration-stroke': {
			link: '#TextDecorationFillStroke',
			tests: [
				'none',
				'green',
				'url(#pattern)',
				'url(#pattern) none',
				'url(#pattern) green',
				'context-fill',
				'context-stroke',
			],
		},
	},
};
