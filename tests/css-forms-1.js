export default {
	title: 'CSS Form Control Styling Level 1',
	link: 'css-forms-1',
	status: 'experimental',
	values: {
		properties: ['content', 'color', 'line-height'],
		'control-value()': {
			link: '#control-value',
			tests: ['control-value()'],
		},
	},
	properties : {
		'appearance': {
			link: '#appearance',
			tests: ['base'],
		},
		'slider-orientation': {
			link: '#slider-orientation',
			tests: [
				'auto',
				'left-to-right',
				'right-to-left',
				'top-to-bottom',
				'bottom-to-top',
			],
		}
	},
	selectors: {
		'::picker()': {
			link: '#picker-pseudo',
			tests: ['::picker(select)'],
		},
		'::picker-icon': {
			link: '#picker-icon',
			tests: ['::picker-icon'],
		},
		'::checkmark': {
			link: '#checkmark',
			tests: ['::checkmark'],
		},
		'::slider-thumb': {
			link: '#slider-pseudos',
			tests: ['::thumb'],
		},
		'::slider-track': {
			link: '#slider-pseudos',
			tests: ['::track'],
		},
		'::slider-fill': {
			link: '#slider-pseudos',
			tests: ['::fill'],
		},
		'::field-text': {
			link: '#field-pseudos',
			tests: ['::field-text'],
		},
		'::clear-icon': {
			link: '#field-pseudos',
			tests: ['::clear-icon'],
		},
		'::step-control': {
			link: '#number-pseudos',
			tests: ['::step-control'],
		},
		'::step-up': {
			link: '#number-pseudos',
			tests: ['::step-up'],
		},
		'::step-down': {
			link: '#number-pseudos',
			tests: ['::step-down'],
		},
		'::field-component': {
			link: '#date-time-pseudos',
			tests: ['::field-component'],
		},
		'::field-separator': {
			link: '#date-time-pseudos',
			tests: ['::field-separator'],
		},
		'::color-swatch': {
			link: '#color-swatch-pseudo',
			tests: ['::color-swatch'],
		},
		':low-value': {
			link: '#meter-values',
			tests: [':low-value'],
		},
		':high-value': {
			link: '#meter-values',
			tests: [':high-value'],
		},
		':optimal-value': {
			link: '#meter-values',
			tests: [':optimal-value'],
		},
	},
};
