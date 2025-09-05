export default {
	id: 'css-color-hdr-1',
	title: 'CSS Color HDR Module Level 1',
	link: 'css-color-hdr-1',
	status: 'experimental',
	properties: {
		'dynamic-range-limit': {
			link: '#perf',
			tests: [
				'standard',
				'no-limit',
				'constrained-high',
				'dynamic-range-limit-mix( standard 60%, no-limit 40% )',
				'dynamic-range-limit-mix( standard 60%, no-limit 10%, constrained-high 30% )',
			],
		},
	},
	values: {
		properties: ['color', 'background-color', 'border-color', 'text-decoration-color', 'column-rule-color'],
		'ictcp()': {
			link: '#funcdef-ictcp',
			tests: [
				'ictcp(10% 50% 100%)',
				'ictcp(0.1 0.5 1)',
				'ictcp(none none none)',
				'ictcp(10% 0.5 none)',
				'ictcp(10% 50% 100% / 0.5)',
				'ictcp(10% 50% 100% / 50%)',
				'ictcp(10% 50% 100% / none)',
				'ictcp(from red 10% 50% 100%)',
				'ictcp(from red 10% 50% 100% / 0.5)',
			],
		},
		'jzazbz()': {
			link: '#funcdef-jzazbz',
			tests: [
				'jzazbz(10% 50% 100%)',
				'jzazbz(0.1 0.5 1)',
				'jzazbz(none none none)',
				'jzazbz(10% 0.5 none)',
				'jzazbz(10% 50% 100% / 0.5)',
				'jzazbz(10% 50% 100% / 50%)',
				'jzazbz(10% 50% 100% / none)',
				'jzazbz(from red 10% 50% 100%)',
				'jzazbz(from red 10% 50% 100% / 0.5)',
			],
		},
		'jzczhz()': {
			link: '#funcdef-jzczhz',
			tests: [
				'jzczhz(10% 50% 0.8)',
				'jzczhz(10% 50% 60deg)',
				'jzczhz(0.1 0.5 1)',
				'jzczhz(none none none)',
				'jzczhz(10% 0.5 60deg)',
				'jzczhz(10% 50% 0.8 / 0.5)',
				'jzczhz(10% 50% 0.8 / 50%)',
				'jzczhz(10% 50% 0.8 / none)',
				'jzczhz(from red 10% 50% 0.8)',
				'jzczhz(from red 10% 50% 0.8 / 0.5)',
			],
		},
		'color-hdr()': {
			link: '#funcdef-color-hdr',
			tests: [
				'color-hdr(\n  color(rec2100-linear 0.9 1.0 0.8) 0,\n  color(rec2100-linear 1.8 2.0 1.5) 2),\n)',
			],
		},
		'rec2100-pq color space': {
			link: '#valdef-color-rec2100-pq',
			tests: [
				'color(rec2100-pq 1.0 1.0 1.0)',
			],
		},
		'rec2100-hlg color space': {
			link: '#valdef-color-rec2100-hlg',
			tests: [
				'color(rec2100-hlg 0.75 0.75 0.75)',
			],
		},
		'rec2100-linear color space': {
			link: '#valdef-color-rec2100-linear',
			tests: [
				'color(rec2100-linear 9.852 9.852 9.852)',
			],
		},
		'Jzazbz color space': {
			link: '#Jzazbz',
			tests: [
				'color(jzazbz 0.75 0.75 0.75)',
			],
		},
		'JzCzHz color space': {
			link: '#JzCzHz',
			tests: [
				'color(jzczhz 0.75 0.75 0.75)',
			],
		},
		'ICtCp color space': {
			link: '#ICtCp',
			tests: [
				'color(ictcp 0.5393 -0.2643 -0.0625)',
			],
		},
	},
};
