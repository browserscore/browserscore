export default {
	id: 'mediaqueries-3',
	title: 'Media Queries Level 3',
	link: 'mediaqueries-3',
	status: 'stable',
	firstSnapshot: 2010,
	mediaqueries: {
		Syntax: {
			link: '#syntax',
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
			link: '#width',
			mdn: 'Media_Queries/Using_media_queries',
			tests: ['(width)', '(width:1280px)', '(min-width:1px)', '(max-width: 1px)'],
		},
		height: {
			link: '#height',
			mdn: 'Media_Queries/Using_media_queries',
			tests: ['(height)', '(height:720px)', '(min-height:1px)', '(max-height: 1px)'],
		},
		'device-width': {
			link: '#device-width',
			tests: [
				'(device-width)',
				'(device-width:1280px)',
				'(min-device-width:1px)',
				'(max-device-width:1000000px)',
			],
		},
		'device-height': {
			link: '#device-height',
			tests: [
				'(device-height)',
				'(device-height:720px)',
				'(min-device-height:1px)',
				'(max-device-height:1000000px)',
			],
		},
		orientation: {
			link: '#orientation',
			tests: ['(orientation)', '(orientation:portrait)', '(orientation:landscape)'],
		},
		'aspect-ratio': {
			link: '#aspect-ratio',
			tests: [
				'(aspect-ratio)',
				'(aspect-ratio:16/9)',
				'(aspect-ratio:16 / 9)',
				'(min-aspect-ratio:1/1000000)',
				'(max-aspect-ratio:1000000/1)',
			],
		},
		'device-aspect-ratio': {
			link: '#device-aspect-ratio',
			tests: [
				'(device-aspect-ratio)',
				'(device-aspect-ratio:16/9)',
				'(device-aspect-ratio:16 / 9)',
				'(min-device-aspect-ratio:1/1000000)',
				'(max-device-aspect-ratio:1000000/1)',
			],
		},
		color: {
			link: '#color',
			tests: ['(color)', '(color: 8)', '(min-color: 0)', '(max-color: 1000000)'],
		},
		'color-index': {
			link: '#color-index',
			tests: ['(color-index)', '(color-index: 256)', '(min-color-index: 0)', '(max-color-index: 1000000)'],
		},
		monochrome: {
			link: '#monochrome',
			tests: ['(monochrome)', '(monochrome: 8)', '(min-monochrome: 0)', '(max-monochrome: 1000000)'],
		},
		resolution: {
			link: '#resolution',
			tests: [
				'(resolution)',
				'(resolution:96dpi)',
				'(resolution:10dpcm)',
				'(min-resolution: 1dpi)',
				'(max-resolution: 1000000dpi)',
			],
		},
		scan: {
			link: '#scan',
			tests: ['(scan)', '(scan: progressive)', '(scan: interlace)'],
		},
		grid: {
			link: '#grid',
			tests: ['(grid)', '(grid: 0)', '(grid: 1)'],
		},
	},
};
