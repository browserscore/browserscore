export default {
	title: 'CSS Grid Layout Module Level 2',
	links: {
		tr: 'css-grid-2',
		dev: 'css-grid-2',
		mdn: 'Glossary/Grid',
	},
	status: {
		stability: 'stable',
	},
	properties: {
		'grid-template-columns': {
			links: {
				tr: '#subgrid-per-axis',
				dev: '#subgrid-per-axis',
			},
			tests: [
				'subgrid',
				'subgrid [sub-a]',
				'subgrid [sub-a] [sub-b]',
				'subgrid repeat(1, [sub-a])',
				'subgrid repeat(2, [sub-a] [sub-b]) [sub-c]',
				'subgrid repeat(auto-fill, [sub-a] [sub-b])',
				'subgrid [sub-a] repeat(auto-fill, [sub-b] [sub-c] [sub-d]) [sub-e] repeat(1, [sub-g])',
			],
		},
		'grid-template-rows': {
			links: {
				tr: '#subgrid-per-axis',
				dev: '#subgrid-per-axis',
			},
			tests: [
				'subgrid',
				'subgrid [sub-a]',
				'subgrid [sub-a] [sub-b]',
				'subgrid repeat(1, [sub-a])',
				'subgrid repeat(2, [sub-a] [sub-b]) [sub-c]',
				'subgrid repeat(auto-fill, [sub-a] [sub-b])',
				'subgrid [sub-a] repeat(auto-fill, [sub-b] [sub-c] [sub-d]) [sub-e] repeat(1, [sub-g])',
			],
		},
	},
};
