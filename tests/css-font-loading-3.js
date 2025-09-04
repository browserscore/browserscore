export default {
	id: 'css-font-loading-3',
	title: 'CSS Font Loading Module Level 3',
	link: 'css-font-loading-3',
	status: 'stable',
	interfaces: {
		FontFace: {
			link: '#fontface-interface',
			mdnGroup: 'DOM',
			members: [
				'family',
				'style',
				'weight',
				'stretch',
				'unicodeRange',
				'variant',
				'featureSettings',
				'variationSettings',
				'display',
				'ascentOverride',
				'descentOverride',
				'lineGapOverride',
				'status',
				'loaded',
				'features',
				'variations',
				'palettes',
			],
			methods: ['load'],
		},
		FontFaceFeatures: {
			links: {
				dev: '#fontfacefeatures',
				mdnGroup: 'DOM',
			},
		},
		FontFaceVariationAxis: {
			links: {
				dev: '#fontfacevariationaxis',
				mdnGroup: 'DOM',
			},
			members: ['name', 'axisTag', 'minimumValue', 'maximumValue', 'defaultValue'],
		},
		FontFacePalettes: {
			links: {
				dev: '#fontfacepalettes',
				mdnGroup: 'DOM',
			},
			members: ['length'],
		},
		FontFacePalette: {
			links: {
				dev: '#fontfacepalette',
				mdnGroup: 'DOM',
			},
			members: ['length', 'usableWithLightBackground', 'usableWithDarkBackground'],
		},
		FontFaceSet: {
			link: '#FontFaceSet-interface',
			mdnGroup: 'DOM',
			members: ['onloading', 'onloadingdone', 'onloadingerror', 'ready', 'status'],
			methods: ['add', 'delete', 'clear', 'load', 'check'],
		},
		FontFaceSetLoadEvent: {
			links: {
				dev: '#fontfacesetloadevent',
				mdnGroup: 'DOM',
			},
			members: ['fontfaces'],
		},
		document: {
			link: '#font-face-source',
			mdnGroup: 'DOM',
			properties: ['fonts'],
		},
	},
};
