export default {
	id: 'svg2-interact',
	title: 'SVG 2 Scripting and Interactivity',
	link: 'svg2-draft/interact.html',
	specLink: 'svg2/interact.html',
	group: 'svgwg',
	status: 'experimental',
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
