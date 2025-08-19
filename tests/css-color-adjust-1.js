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
				tr: '#print-color-adjust',
				dev: '#print-color-adjust',
			},
			tests: ['economy', 'exact'],
		},
		'forced-color-adjust': {
			links: {
				tr: '#forced-color-adjust-prop',
				dev: '#forced-color-adjust-prop',
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
				'light purple only',
				'purple dark interesting',
				'none',
				'light none',
			],
		},
	},
};
