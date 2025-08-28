export default {
	title: 'SVG 2 Coordinate Systems, Transformations and Units',
	links: {
		tr: 'svg2/coords.html',
		dev: 'svg2-draft/coords.html',
	},
	group: 'svgwg',
	status: 'experimental',
	properties: {
		'vector-effect': {
			link: '#VectorEffects',
			mdnGroup: 'SVG',
			tests: [
				'none',
				'non-scaling-stroke',
				'non-scaling-size',
				'non-rotation',
				'fixed-position',
				'non-scaling-stroke non-scaling-stroke',
				'non-scaling-stroke viewport',
				'non-scaling-stroke screen',
			],
		},
	},
};
