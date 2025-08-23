export default {
	title: 'CSS Transitions',
	link: 'css-transitions-1',
	status: {
		stability: 'stable',
	},
	properties: {
		'transition-property': {
			link: '#transition-property-property',
			tests: ['none', 'all', 'width', 'width, height'],
		},
		'transition-duration': {
			link: '#transition-duration-property',
			tests: ['0s', '1s', '100ms'],
		},
		'transition-timing-function': {
			link: '#transition-timing-function-property',
			tests: [
				'ease',
				'linear',
				'ease-in',
				'ease-out',
				'ease-in-out',
				'cubic-bezier(.5, .5, .5, .5)',
				'cubic-bezier(.5, 1.5, .5, -2.5)',
				'step-start',
				'step-end',
				'steps(3, start)',
				'steps(5, end)',
			],
		},
		'transition-delay': {
			link: '#transition-delay-property',
			tests: ['1s', '-1s'],
		},
		transition: {
			link: '#transition-shorthand-property',
			tests: '1s 2s width linear',
		},
	},
	interfaces: {
		TransitionEvent: {
			link: '#interface-transitionevent',
			mdnGroup: 'DOM',
			tests: ['propertyName', 'elapsedTime', 'pseudoElement'],
			interface: function() {
				return new TransitionEvent('transitionend');
			},
		},
		Element: {
			link: '#interface-dom',
			mdnGroup: 'DOM',
			tests: ['ontransitionstart', 'ontransitionrun', 'ontransitionend', 'ontransitioncancel'],
			interface: function() {
				return document.body;
			},
		},
	},
};
