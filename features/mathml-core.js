export default {
	id: 'mathml-core',
	title: 'MathML Core',
	link: 'mathml-core/#css-extensions-for-math-layout',
	group: 'math',
	status: 'experimental',
	properties: {
		display: {
			link: '#new-display-math-value',
			tests: ['math', 'block math', 'inline math'],
		},
		'text-transform': {
			link: '#new-text-transform-values',
			tests: [
				'math-auto',
				'math-bold',
				'math-italic',
				'math-bold-italic',
				'math-double-struck',
				'math-bold-fraktur',
				'math-script',
				'math-bold-script',
				'math-fraktur',
				'math-sans-serif',
				'math-bold-sans-serif',
				'math-sans-serif-italic',
				'math-sans-serif-bold-italic',
				'math-monospace',
				'math-initial',
				'math-tailed',
				'math-looped',
				'math-stretched',
			],
		},
		'font-size': {
			link: '#the-math-script-level-property',
			tests: ['math'],
		},
		'math-style': {
			link: '#the-math-style-property',
			tests: ['normal', 'compact'],
		},
		'math-shift': {
			link: '#the-math-shift',
			tests: ['normal', 'compact'],
		},
		'math-depth': {
			link: '#the-math-script-level-property',
			tests: ['auto-add', 'add(0)', 'add(1)', '0', '1'],
		},
	},
};
