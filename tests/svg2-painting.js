export default {
	"title": "SVG 2 Painting: Filling, Stroking and Marker Symbols",
	"links": {
		"tr": "svg2/painting.html",
		"dev": "svg2-draft/painting.html",
		"devtype": "svgwg"
	},
	"status": {
		"stability": "experimental"
	},
	"properties": {
		"color-interpolation": {
			"links": {
				"tr": "#ColorInterpolation",
				"dev": "#ColorInterpolation",
				"mdnGroup": "SVG"
			},
			"tests": ["auto", "sRGB", "linearRGB"]
		},
		"color-rendering": {
			"links": {
				"tr": "#ColorRendering"
			},
			"tests": ["auto", "optimizeSpeed", "optimizeQuality"]
		},
		"marker": {
			"links": {
				"tr": "#MarkerShorthand",
				"dev": "#MarkerShorthand"
			},
			"tests": ["none", "url(#marker)"]
		},
		"marker-end": {
			"links": {
				"tr": "#VertexMarkerProperties",
				"dev": "#VertexMarkerProperties",
				"mdnGroup": "SVG"
			},
			"tests": ["none", "url(#marker)"]
		},
		"marker-mid": {
			"links": {
				"tr": "#VertexMarkerProperties",
				"dev": "#VertexMarkerProperties",
				"mdnGroup": "SVG"
			},
			"tests": ["none", "url(#marker)"]
		},
		"marker-start": {
			"links": {
				"tr": "#VertexMarkerProperties",
				"dev": "#VertexMarkerProperties",
				"mdnGroup": "SVG"
			},
			"tests": ["none", "url(#marker)"]
		},
		"paint-order": {
			"links": {
				"tr": "#PaintOrder",
				"dev": "#PaintOrder"
			},
			"tests": ["normal", "fill", "stroke", "markers", "fill stroke markers"]
		},
		"shape-rendering": {
			"links": {
				"tr": "#ShapeRendering",
				"dev": "#ShapeRendering",
				"mdnGroup": "SVG"
			},
			"tests": ["auto", "optimizeSpeed", "crispEdges", "geometricPrecision"]
		},
		"text-rendering": {
			"links": {
				"tr": "#TextRendering",
				"dev": "#TextRendering"
			},
			"tests": ["auto", "optimizeSpeed", "optimizeLegibility", "geometricPrecision"]
		}
	}
};
