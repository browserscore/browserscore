export default {
	id: 'css-color-adjust-1',
	title: 'CSS Color Adjustment Module Level 1',
	link: 'css-color-adjust-1',
	status: 'stable',
	properties: {
		'print-color-adjust': {
			link: '#print-color-adjust',
			tests: ['economy', 'exact'],
		},
		'forced-color-adjust': {
			link: '#forced-color-adjust-prop',
			tests: ['auto', 'none', 'preserve-parent-color'],
		},
		'color-scheme': {
			link: '#color-scheme-prop',
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
