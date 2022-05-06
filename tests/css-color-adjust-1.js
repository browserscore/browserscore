export default {
	title: 'CSS Color Adjustment Module Level 1',
	links: {
		tr: 'css-color-adjust-1',
		dev: 'css-color-adjust-1',
	},
	status: {
		stability: 'stable',
	},
	properties: {
		'print-color-adjust': {
			links: {
				tr: '#perf',
				dev: '#perf',
			},
			tests: ['economy', 'exact'],
		},
		'forced-color-adjust': {
			links: {
				tr: '#forced',
				dev: '#forced',
			},
			tests: ['auto', 'none', 'preserve-parent-color'],
		},
		'color-scheme': {
			links: {
				tr: '#color-scheme-prop',
				dev: '#color-scheme-prop',
			},
			tests: [
				'normal',
				'light',
				'dark',
				'light dark',
				'dark light',
				'only light',
				'light only',
				'light light',
				'dark dark',
				'light purple',
				'purple dark interesting',
				'none',
				'light none',
			],
		},
	},
};
