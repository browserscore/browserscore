export default {
	title: 'SVG 2 Scripting and Interactivity',
	links: {
		tr: 'svg2/interact.html',
		dev: 'svg2-draft/interact.html',
	},
	group: 'svgwg',
	status: {
		stability: 'experimental',
	},
	properties: {
		'pointer-events': {
			link: '#PointerEventsProp',
			tests: [
				'auto',
				'bounding-box',
				'visiblePainted',
				'visibleFill',
				'visibleStroke',
				'visible',
				'painted',
				'fill',
				'stroke',
				'all',
				'none',
			],
		},
	},
};
