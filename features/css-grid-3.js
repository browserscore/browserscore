export default {
	id: 'css-grid-3',
	title: 'CSS Grid Layout Module Level 3',
	link: 'css-grid-3',
	status: 'experimental',
	properties: {
		grid: {
			link: '#masonry-layout',
			tests: [
				'masonry / masonry',
				'masonry / repeat(4, 2ch)',
				'repeat(4, 2ch) / masonry',
				'masonry / repeat(auto-fit, minmax(25ch, 1fr))',
				'repeat(auto-fit, minmax(25ch, 1fr)) / masonry',
			],
		},
		'grid-template-columns': {
			link: '#masonry-layout',
			tests: ['masonry', 'repeat(auto-fit, minmax(25ch, 1fr))'],
		},
		'grid-template-rows': {
			link: '#masonry-layout',
			tests: ['masonry ', 'repeat(auto-fit, minmax(25ch, 1fr))'],
		},
		'masonry-auto-flow': {
			link: '#masonry-auto-flow',
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
