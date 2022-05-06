export default {
	title: 'CSS Rhythmic Sizing',
	links: {
		tr: 'css-rhythm-1',
		dev: 'css-rhythm-1',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'line-height-step': {
			links: {
				tr: '#line-height-step',
				dev: '#line-height-step',
			},
			tests: ['none', '30px', '2em'],
		},
		'block-step-size': {
			links: {
				tr: '#block-step-size',
				dev: '#block-step-size',
			},
			tests: ['none', '30px', '2em'],
		},
		'block-step-insert': {
			links: {
				tr: '#block-step-insert',
				dev: '#block-step-insert',
			},
			tests: ['margin', 'padding'],
		},
		'block-step-align': {
			links: {
				tr: '#block-step-align',
				dev: '#block-step-align',
			},
			tests: ['auto', 'center', 'start', 'end'],
		},
		'block-step-round': {
			links: {
				tr: '#block-step-round',
				dev: '#block-step-round',
			},
			tests: ['up', 'down', 'nearest'],
		},
		'block-step': {
			links: {
				tr: '#block-step',
				dev: '#block-step',
			},
			tests: [
				'none',
				'padding',
				'end',
				'down',
				'30px margin',
				'30px padding center',
				'2em padding start nearest',
			],
		},
	},
};
