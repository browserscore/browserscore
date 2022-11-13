export default {
	title: 'CSS Values and Units Module Level 3',
	links: {
		tr: 'css-values-3',
		dev: 'css-values-3',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
	},
	values: {
		properties: ['width', 'padding'],
		rem: {
			links: {
				tr: '#rem',
				dev: '#rem',
				mdn: 'length',
			},
			tests: '5rem',
		},
		ch: {
			links: {
				tr: '#ch',
				dev: '#ch',
				mdn: 'length',
			},
			tests: '5ch',
		},
		vw: {
			links: {
				tr: '#vw',
				dev: '#vw',
				mdn: 'length',
			},
			tests: '5vw',
		},
		vh: {
			links: {
				tr: '#vh',
				dev: '#vh',
				mdn: 'length',
			},
			tests: '5vh',
		},
		vmin: {
			links: {
				tr: '#vmin',
				dev: '#vmin',
				mdn: 'length',
			},
			tests: '5vmin',
		},
		vmax: {
			links: {
				tr: '#vmax',
				dev: '#vmax',
				mdn: 'length',
			},
			tests: '5vmax',
		},
		Q: {
			links: {
				tr: '#Q',
				dev: '#Q',
				mdn: 'length',
			},
			tests: '5Q',
		},
		'calc()': {
			links: {
				tr: '#calc-notation',
				dev: '#calc-notation',
			},
			tests: [
				'calc(1px + 2px)',
				'calc(5px*2)',
				'calc(5px/2)',
				'calc(100%/3 - 2*1em - 2*1px)',
				'calc(attr(data-px)*2)',
				'calc(5px - 10px)',
				'calc(1vw - 1px)',
				'calc(calc(100%))',
			],
		},
	},
	properties: {
		transform: ['rotate(calc(15deg + 30deg))'],
	},
};
