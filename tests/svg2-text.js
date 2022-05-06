export default {
	title: 'SVG 2 Text',
	links: {
		tr: 'svg2/text.html',
		dev: 'svg2-draft/text.html',
		devtype: 'svgwg',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'shape-subtract': {
			links: {
				tr: '#TextShapeSubtract',
				dev: '#TextShapeSubtract',
			},
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
			links: {
				tr: '#TextAnchoringProperties',
				dev: '#TextAnchoringProperties',
				mdnGroup: 'SVG',
			},
			tests: ['start', 'middle', 'end'],
		},
		'text-decoration-fill': {
			links: {
				tr: '#TextDecorationFillStroke',
			},
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
			links: {
				tr: '#TextDecorationFillStroke',
			},
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
