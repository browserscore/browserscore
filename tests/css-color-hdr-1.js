export default {
	title: 'CSS Color HDR Module Level 1',
	links: {
		tr: 'css-color-hdr-1',
		dev: 'css-color-hdr-1',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
		'rec2100-pq color space': {
			links: {
				tr: '#valdef-color-rec2100-pq',
				dev: '#valdef-color-rec2100-pq',
			},
			tests: [
				'color(rec2100-pq 1.0 1.0 1.0)',
			],
		},
		'rec2100-hlg color space': {
			links: {
				tr: '#valdef-color-rec2100-hlg',
				dev: '#valdef-color-rec2100-hlg',
			},
			tests: [
				'color(rec2100-hlg 0.75 0.75 0.75)',
			],
		},
		'rec2100-linear color space': {
			links: {
				tr: '#valdef-color-rec2100-linear',
				dev: '#valdef-color-rec2100-linear',
			},
			tests: [
				'color(rec2100-linear 9.852 9.852 9.852)',
			],
		},
		'Jzazbz color space': {
			links: {
				tr: '#Jzazbz',
				dev: '#Jzazbz',
			},
			tests: [
				'color(jzazbz 0.75 0.75 0.75)',
			],
		},
		'JzCzHz color space': {
			links: {
				tr: '#JzCzHz',
				dev: '#JzCzHz',
			},
			tests: [
				'color(jzczhz 0.75 0.75 0.75)',
			],
		},
		'ICtCp color space': {
			links: {
				tr: '#ICtCp',
				dev: '#ICtCp',
			},
			tests: [
				'color(ictcp 0.5393 -0.2643 -0.0625)',
			],
		},
	},
};
