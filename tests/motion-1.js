export default {
	title: 'Motion Path Module Level 1',
	links: {
		dev: 'motion-1',
		tr: 'motion-1',
	},
	group: 'fxtf',
	status: {
		stability: 'experimental',
	},
	properties: {
		'offset-anchor': {
			links: {
				dev: '#offset-anchor-property',
				tr: '#offset-anchor-property',
			},
			tests: ['auto', 'center', 'top left', '10px 20px', '30% 40%'],
		},
		'offset-distance': {
			links: {
				dev: '#offset-distance-property',
				tr: '#offset-distance-property',
			},
			tests: ['20px', '30%'],
		},
		'offset-path': {
			links: {
				dev: '#offset-path-property',
				tr: '#offset-path-property',
			},
			tests: [
				'none',
				'ray(45deg closest-side)',
				'ray(45deg closest-corner)',
				'ray(45deg farthest-side)',
				'ray(45deg farthest-corner)',
				'ray(45deg sides)',
				'ray(45deg closest-side contain)',
				'path("M 100 100 L 300 100 L 200 300 z")',
				'url(shape.svg)',
				'circle(200px)',
				'circle(200px at top left)',
				'ellipse(200px 100px)',
				'inset(30px)',
				'polygon(0 0, 100% 100%, 0 100%)',
				'circle(200px)',
				'circle(200px) content-box',
				'circle(200px) padding-box',
				'circle(200px) border-box',
				'circle(200px) fill-box',
				'circle(200px) stroke-box',
				'circle(200px) view-box',
			],
		},
		'offset-position': {
			links: {
				dev: '#offset-position-property',
				tr: '#offset-position-property',
			},
			tests: ['auto', 'center', 'top left', '10px 20px', '30% 40%'],
		},
		'offset-rotate': {
			links: {
				dev: '#offset-rotate-property',
				tr: '#offset-rotate-property',
			},
			tests: ['auto', 'reverse', '90deg', 'auto 90deg', 'reverse 90deg'],
		},
		offset: {
			links: {
				dev: '#offset-shorthand',
				tr: '#offset-shorthand',
			},
			tests: [
				'none',
				'ray(45deg closest-side)',
				'path("M 100 100 L 300 100 L 200 300 z")',
				'url(shape.svg)',
				'circle(200px)',
				'center',
				'top left circle(200px)',
				'circle(200px) 20px',
				'circle(200px) 10deg',
				'top left circle(200px) 20px',
				'top left circle(200px) 20px 10deg',
				'circle(200px) / top left',
			],
		},
	},
};
