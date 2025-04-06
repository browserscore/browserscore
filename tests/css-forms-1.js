export default {
	title: 'CSS Form Control Styling Level 1',
	links: {
		tr: 'css-forms-1',
		dev: 'css-forms-1',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['content', 'color', 'line-height'],
		'control-value()': {
			links: {
				tr: '#control-value',
				dev: '#control-value',
			},
			tests: ['control-value()'],
		},
	},
	properties : {
		'appearance': {
			links: {
				tr: '#appearance',
				dev: '#appearance',
			},
			tests: ['base'],
		},
		'slider-orientation': {
			links: {
				tr: '#slider-orientation',
				dev: '#slider-orientation',
			},
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
			links: {
				tr: '#picker-pseudo',
				dev: '#picker-pseudo',
			},
			tests: ['::picker(select)'],
		},
		'::picker-icon': {
			links: {
				tr: '#picker-icon',
				dev: '#picker-icon',
			},
			tests: ['::picker-icon'],
		},
		'::checkmark': {
			links: {
				tr: '#checkmark',
				dev: '#checkmark',
			},
			tests: ['::checkmark'],
		},
		'::thumb': {
			links: {
				tr: '#slider-pseudos',
				dev: '#slider-pseudos',
			},
			tests: ['::thumb'],
		},
		'::track': {
			links: {
				tr: '#slider-pseudos',
				dev: '#slider-pseudos',
			},
			tests: ['::track'],
		},
		'::fill': {
			links: {
				tr: '#slider-pseudos',
				dev: '#slider-pseudos',
			},
			tests: ['::fill'],
		},
		'::field-text': {
			links: {
				tr: '#field-pseudos',
				dev: '#field-pseudos',
			},
			tests: ['::field-text'],
		},
		'::clear-icon': {
			links: {
				tr: '#field-pseudos',
				dev: '#field-pseudos',
			},
			tests: ['::clear-icon'],
		},
		'::step-control': {
			links: {
				tr: '#number-pseudos',
				dev: '#number-pseudos',
			},
			tests: ['::step-control'],
		},
		'::step-up': {
			links: {
				tr: '#number-pseudos',
				dev: '#number-pseudos',
			},
			tests: ['::step-up'],
		},
		'::step-down': {
			links: {
				tr: '#number-pseudos',
				dev: '#number-pseudos',
			},
			tests: ['::step-down'],
		},
		'::field-component': {
			links: {
				tr: '#date-time-pseudos',
				dev: '#date-time-pseudos',
			},
			tests: ['::field-component'],
		},
		'::field-separator': {
			links: {
				tr: '#date-time-pseudos',
				dev: '#date-time-pseudos',
			},
			tests: ['::field-separator'],
		},
		'::color-swatch': {
			links: {
				tr: '#color-swatch-pseudo',
				dev: '#color-swatch-pseudo',
			},
			tests: ['::color-swatch'],
		},
		':low-value': {
			links: {
				tr: '#meter-values',
				dev: '#meter-values',
			},
			tests: [':low-value'],
		},
		':high-value': {
			links: {
				tr: '#meter-values',
				dev: '#meter-values',
			},
			tests: [':high-value'],
		},
		':optimal-value': {
			links: {
				tr: '#meter-values',
				dev: '#meter-values',
			},
			tests: [':optimal-value'],
		},
	},
};
