export default {
	title: 'SVG 2 Painting: Filling, Stroking and Marker Symbols',
	links: {
		tr: 'svg2/painting.html',
		dev: 'svg2-draft/painting.html',
	},
	group: 'svgwg',
	status: {
		stability: 'experimental',
	},
	properties: {
		'color-interpolation': {
			link: '#ColorInterpolation',
			links: {
				mdnGroup: 'SVG',
			},
			tests: ['auto', 'sRGB', 'linearRGB'],
		},
		'color-rendering': {
			links: {
				tr: '#ColorRendering',
			},
			tests: ['auto', 'optimizeSpeed', 'optimizeQuality'],
		},
		marker: {
			link: '#MarkerShorthand',
			tests: ['none', 'url(#marker)'],
		},
		'marker-end': {
			link: '#VertexMarkerProperties',
			links: {
				mdnGroup: 'SVG',
			},
			tests: ['none', 'url(#marker)'],
		},
		'marker-mid': {
			link: '#VertexMarkerProperties',
			links: {
				mdnGroup: 'SVG',
			},
			tests: ['none', 'url(#marker)'],
		},
		'marker-start': {
			link: '#VertexMarkerProperties',
			links: {
				mdnGroup: 'SVG',
			},
			tests: ['none', 'url(#marker)'],
		},
		'paint-order': {
			link: '#PaintOrder',
			tests: ['normal', 'fill', 'stroke', 'markers', 'fill stroke markers'],
		},
		'shape-rendering': {
			link: '#ShapeRendering',
			links: {
				mdnGroup: 'SVG',
			},
			tests: ['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision'],
		},
		'text-rendering': {
			link: '#TextRendering',
			tests: ['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision'],
		},
	},
};
