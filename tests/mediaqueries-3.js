export default {
	title: 'Media Queries Level 3',
	links: {
		tr: 'css3-mediaqueries',
		dev: 'mediaqueries-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2010,
	},
	'Media queries': {
		Syntax: {
			links: {
				tr: '#syntax',
				dev: '#syntax',
			},
			tests: [
				'not print',
				'only screen',
				'(width)',
				'screen and (width)',
				'not print and (width)',
				'only screen and (width)',
				'(width) and (height)',
			],
		},
		width: {
			links: {
				tr: '#width',
				dev: '#width',
				mdn: 'Media_Queries/Using_media_queries',
			},
			tests: ['(width)', '(width:1280px)', '(min-width:1px)', '(max-width:1000000px)'],
		},
		height: {
			links: {
				tr: '#height',
				dev: '#height',
				mdn: 'Media_Queries/Using_media_queries',
			},
			tests: ['(height)', '(height:720px)', '(min-height:1px)', '(max-height:1000000px)'],
		},
		'device-width': {
			links: {
				tr: '#device-width',
				dev: '#device-width',
			},
			tests: [
				'(device-width)',
				'(device-width:1280px)',
				'(min-device-width:1px)',
				'(max-device-width:1000000px)',
			],
		},
		'device-height': {
			links: {
				tr: '#device-height',
				dev: '#device-height',
			},
			tests: [
				'(device-height)',
				'(device-height:720px)',
				'(min-device-height:1px)',
				'(max-device-height:1000000px)',
			],
		},
		orientation: {
			links: {
				tr: '#orientation',
				dev: '#orientation',
			},
			tests: ['(orientation)', '(orientation:portrait)', '(orientation:landscape)'],
		},
		'aspect-ratio': {
			links: {
				tr: '#aspect-ratio',
				dev: '#aspect-ratio',
			},
			tests: [
				'(aspect-ratio)',
				'(aspect-ratio:16/9)',
				'(aspect-ratio:16 / 9)',
				'(min-aspect-ratio:1/1000000)',
				'(max-aspect-ratio:1000000/1)',
			],
		},
		'device-aspect-ratio': {
			links: {
				tr: '#device-aspect-ratio',
				dev: '#device-aspect-ratio',
			},
			tests: [
				'(device-aspect-ratio)',
				'(device-aspect-ratio:16/9)',
				'(device-aspect-ratio:16 / 9)',
				'(min-device-aspect-ratio:1/1000000)',
				'(max-device-aspect-ratio:1000000/1)',
			],
		},
		color: {
			links: {
				tr: '#color',
				dev: '#color',
			},
			tests: ['(color)', '(color: 8)', '(min-color: 0)', '(max-color: 1000000)'],
		},
		'color-index': {
			links: {
				tr: '#color-index',
				dev: '#color-index',
			},
			tests: ['(color-index)', '(color-index: 256)', '(min-color-index: 0)', '(max-color-index: 1000000)'],
		},
		monochrome: {
			links: {
				tr: '#monochrome',
				dev: '#monochrome',
			},
			tests: ['(monochrome)', '(monochrome: 8)', '(min-monochrome: 0)', '(max-monochrome: 1000000)'],
		},
		resolution: {
			links: {
				tr: '#resolution',
				dev: '#resolution',
			},
			tests: [
				'(resolution)',
				'(resolution:96dpi)',
				'(resolution:10dpcm)',
				'(min-resolution: 1dpi)',
				'(max-resolution: 1000000dpi)',
			],
		},
		scan: {
			links: {
				tr: '#scan',
				dev: '#scan',
			},
			tests: ['(scan)', '(scan: progressive)', '(scan: interlace)'],
		},
		grid: {
			links: {
				tr: '#grid',
				dev: '#grid',
			},
			tests: ['(grid)', '(grid: 0)', '(grid: 1)'],
		},
	},
};
