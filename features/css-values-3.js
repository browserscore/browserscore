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
		properties: ['width', 'padding'],
		'calc()': {
			link: '#calc-notation',
			tests: [
				'calc(1px + 2px)',
				'calc(5px*2)',
				'calc(5px/2)',
				'calc(100%/3 - 2*1em - 2*1px)',
				'calc(5px - 10px)',
				'calc(1vw - 1px)',
				'calc(calc(100%))',
			],
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
