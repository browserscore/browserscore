export default {
	id: 'svg2-painting',
	title: 'SVG 2 Painting: Filling, Stroking and Marker Symbols',
	link: 'svg2-draft/painting.html',
	specLink: 'svg2/painting.html',
	group: 'svgwg',
	status: 'experimental',
	properties: {
		'color-interpolation': {
			link: '#ColorInterpolation',
			mdnGroup: 'SVG',
			tests: ['auto', 'sRGB', 'linearRGB'],
		},
		'color-rendering': {
			link: '#ColorRendering',
			tests: ['auto', 'optimizeSpeed', 'optimizeQuality'],
		},
		marker: {
			link: '#MarkerShorthand',
			tests: ['none', 'url(#marker)'],
		},
		'marker-end': {
			link: '#VertexMarkerProperties',
			mdnGroup: 'SVG',
			tests: ['none', 'url(#marker)'],
		},
		'marker-mid': {
			link: '#VertexMarkerProperties',
			mdnGroup: 'SVG',
			tests: ['none', 'url(#marker)'],
		},
		'marker-start': {
			link: '#VertexMarkerProperties',
			mdnGroup: 'SVG',
			tests: ['none', 'url(#marker)'],
		},
		'paint-order': {
			link: '#PaintOrder',
			tests: ['normal', 'fill', 'stroke', 'markers', 'fill stroke markers'],
		},
		'shape-rendering': {
			link: '#ShapeRendering',
			mdnGroup: 'SVG',
			tests: ['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision'],
		},
		'text-rendering': {
			link: '#TextRendering',
			tests: ['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision'],
		},
	},
};
