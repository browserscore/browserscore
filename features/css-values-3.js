export default {
	id: 'css-values-3',
	title: 'CSS Values and Units Module Level 3',
	link: 'css-values-3',
	status: 'stable',
	firstSnapshot: 2015,
	units: {
		rem: {
			link: '#rem',
			mdn: 'length',
			dataType: 'length',
		},
		ch: {
			link: '#ch',
			mdn: 'length',
			dataType: 'length',
		},
		vw: {
			link: '#vw',
			mdn: 'length',
			dataType: 'length',
		},
		vh: {
			link: '#vh',
			mdn: 'length',
			dataType: 'length',
		},
		vmin: {
			link: '#vmin',
			mdn: 'length',
			dataType: 'length',
		},
		vmax: {
			link: '#vmax',
			mdn: 'length',
			dataType: 'length',
		},
		Q: {
			link: '#Q',
			mdn: 'length',
			dataType: 'length',
		},
	},
	values: {
		'calc()': {
			link: '#calc-notation',
			dataTypes: {
				length: {
					args: ['1em - 1px', '2 * 1px', '1px + calc(1px)'],
				},
				'length-percentage': {
					args: ['1em - 1%', '100%/3'],
				},
				percentage: {
					args: ['2% - 1%', '2 * 1%'],
				},
				number: {
					args: ['1.5 - 1', '3 / 2'],
				},
				time: {
					args: ['1s - 1ms'],
				},
			},
		},
		'calc() in other functions': {
			link: '#calc-notation',
			properties: ['transform'],
			tests: ['translateX(calc(1px + 2px))'],
		}
	},
	properties: {
		transform: {
			tests: ['rotate(calc(15deg + 30deg))'],
		},
	},
};
