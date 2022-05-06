export default {
	title: 'CSS Grid Layout Module Level 3',
	links: {
		dev: 'css-grid-3',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'grid-template-columns': {
			links: {
				dev: '#masonry-layout',
			},
			tests: ['masonry'],
		},
		'grid-template-rows': {
			links: {
				dev: '#masonry-layout',
			},
			tests: ['masonry '],
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
		'align-tracks': {
			links: {
				dev: '#tracks-alignment',
			},
			tests: [
				'normal',
				'baseline',
				'first baseline',
				'last baseline',
				'space-between',
				'space-around',
				'space-evenly',
				'stretch',
				'center',
				'start',
				'end',
				'flex-start',
				'flex-end',
				'unsafe center',
				'safe start',
			],
		},
		'justify-tracks': {
			links: {
				dev: '#tracks-alignment',
			},
			tests: [
				'normal',
				'space-between',
				'space-around',
				'space-evenly',
				'stretch',
				'center',
				'start',
				'end',
				'flex-start',
				'flex-end',
				'left',
				'right',
				'unsafe center',
				'safe start',
			],
		},
	},
};
