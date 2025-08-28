export default {
	title: 'CSS Font Loading Module Level 3',
	link: 'css-font-loading-3',
	status: 'stable',
	interfaces: {
		FontFace: {
			link: '#fontface-interface',
			mdnGroup: 'DOM',
			tests: [
				'family',
				'style',
				'weight',
				'stretch',
				'unicodeRange',
				'variant',
				'featureSettings',
				'variationSettings',
				'display',
				'ascenderOverride',
				'descenderOverride',
				'lineGapOverride',
				'status',
				'load',
				'loaded',
				'features',
				'variations',
				'palettes',
			],
			interface: function() {
				return new FontFace('test', 'url("test.woff")');
			},
		},
		FontFaceFeatures: {
			links: {
				dev: '#fontfacefeatures',
				mdnGroup: 'DOM',
			},
			tests: ['FontFaceFeatures'],
			interface: function() {
				return new FontFace('test', 'url("test.woff")').features;
			},
		},
		FontFaceVariationAxis: {
			links: {
				dev: '#fontfacevariationaxis',
				mdnGroup: 'DOM',
			},
			tests: ['name', 'axisTag', 'minimumValue', 'maximumValue', 'defaultValue'],
			interface: function() {
				return new FontFace('test', 'url("test.woff")').variations;
			},
		},
		FontFacePalettes: {
			links: {
				dev: '#fontfacepalettes',
				mdnGroup: 'DOM',
			},
			tests: ['length'],
			interface: function() {
				return new FontFace('test', 'url("test.woff")').palettes;
			},
		},
		FontFacePalette: {
			links: {
				dev: '#fontfacepalette',
				mdnGroup: 'DOM',
			},
			tests: ['FontFacePalette'],
		},
		FontFaceSet: {
			link: '#FontFaceSet-interface',
			mdnGroup: 'DOM',
			tests: [
				'add',
				'delete',
				'clear',
				'onloading',
				'onloadingdone',
				'onloadingerror',
				'load',
				'check',
				'ready',
				'status',
			],
			interface: function() {
				return document.fonts;
			}
		},
		FontFaceSetLoadEvent: {
			links: {
				dev: '#fontfacesetloadevent',
				mdnGroup: 'DOM',
			},
			tests: ['fontfaces'],
			interface: function() {
				return new FontFaceSetLoadEvent('loadingdone');
			},
		},
		Document: {
			link: '#font-face-source',
			mdnGroup: 'DOM',
			tests: ['fonts'],
			interface: function() {
				return document;
			},
		}
	},
};
