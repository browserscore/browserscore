export default {
	id: 'svg2-coords',
	title: 'SVG 2 Coordinate Systems, Transformations and Units',
	link: 'svg2-draft/coords.html',
	specLink: 'svg2/coords.html',
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
