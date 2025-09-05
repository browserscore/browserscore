export default {
	id: 'css-rhythmic-1',
	title: 'CSS Rhythmic Sizing',
	link: 'css-rhythm-1',
	status: 'experimental',
	properties: {
		'line-height-step': {
			link: '#line-height-step',
			tests: ['none', '30px', '2em'],
		},
		'block-step-size': {
			link: '#block-step-size',
			tests: ['none', '30px', '2em'],
		},
		'block-step-insert': {
			link: '#block-step-insert',
			tests: ['margin', 'padding'],
		},
		'block-step-align': {
			link: '#block-step-align',
			tests: ['auto', 'center', 'start', 'end'],
		},
		'block-step-round': {
			link: '#block-step-round',
			tests: ['up', 'down', 'nearest'],
		},
		'block-step': {
			link: '#block-step',
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
