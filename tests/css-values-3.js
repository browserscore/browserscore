export default {
	title: 'CSS Values and Units Module Level 3',
	link: 'css-values-3',
	status: 'stable',
	firstSnapshot: 2015,
	values: {
		properties: ['width', 'padding'],
		rem: {
			link: '#rem',
			mdn: 'length',
			tests: '5rem',
		},
		ch: {
			link: '#ch',
			mdn: 'length',
			tests: '5ch',
		},
		vw: {
			link: '#vw',
			mdn: 'length',
			tests: '5vw',
		},
		vh: {
			link: '#vh',
			mdn: 'length',
			tests: '5vh',
		},
		vmin: {
			link: '#vmin',
			mdn: 'length',
			tests: '5vmin',
		},
		vmax: {
			link: '#vmax',
			mdn: 'length',
			tests: '5vmax',
		},
		Q: {
			link: '#Q',
			mdn: 'length',
			tests: '5Q',
		},
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
		transform: ['rotate(calc(15deg + 30deg))'],
	},
};
