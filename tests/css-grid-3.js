export default {
	id: 'css-grid-3',
	title: 'CSS Grid Layout Module Level 3',
	links: {
		dev: 'css-grid-3',
	},
	status: 'experimental',
	properties: {
		grid: {
			links: {
				dev: '#masonry-layout',
			},
			tests: [
				'masonry / masonry',
				'masonry / repeat(4, 2ch)',
				'repeat(4, 2ch) / masonry',
				'masonry / repeat(auto-fit, minmax(25ch, 1fr))',
				'repeat(auto-fit, minmax(25ch, 1fr)) / masonry',
			],
		},
		'grid-template-columns': {
			links: {
				dev: '#masonry-layout',
			},
			tests: ['masonry', 'repeat(auto-fit, minmax(25ch, 1fr))'],
		},
		'grid-template-rows': {
			links: {
				dev: '#masonry-layout',
			},
			tests: ['masonry ', 'repeat(auto-fit, minmax(25ch, 1fr))'],
		},
		'masonry-auto-flow': {
			links: {
				dev: '#masonry-auto-flow',
			},
			tests: [
				'pack',
				'next',
				'definite-first',
				'ordered',
				'pack definite-first',
				'pack ordered',
				'next definite-first',
				'next ordered',
				'ordered pack',
			],
		},
	},
};
