export default {
	title: 'CSS Values and Units Module Level 4',
	links: {
		tr: 'css-values-4',
		dev: 'css-values-4',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['width', 'padding'],
		ex: {
			links: {
				tr: '#ex',
				dev: '#ex',
				mdn: 'length',
			},
			tests: '5ex',
		},
		rex: {
			links: {
				tr: '#rex',
				dev: '#rex',
				mdn: 'length',
			},
			tests: '5rex',
		},
		cap: {
			links: {
				tr: '#cap',
				dev: '#cap',
				mdn: 'length',
			},
			tests: '5cap',
		},
		rcap: {
			links: {
				tr: '#rcap',
				dev: '#rcap',
				mdn: 'length',
			},
			tests: '5rcap',
		},
		rch: {
			links: {
				tr: '#rch',
				dev: '#rcap',
				mdn: 'length',
			},
			tests: '5rch',
		},
		rch: {
			links: {
				tr: '#rch',
				dev: '#rcap',
				mdn: 'length',
			},
			tests: '5rch',
		},
		ic: {
			links: {
				tr: '#ic',
				dev: '#ic',
				mdn: 'length',
			},
			tests: '5ic',
		},
		ric: {
			links: {
				tr: '#ric',
				dev: '#ric',
				mdn: 'length',
			},
			tests: '5ric',
		},
		lh: {
			links: {
				tr: '#lh',
				dev: '#lh',
				mdn: 'length',
			},
			tests: '5lh',
		},
		rlh: {
			links: {
				tr: '#rlh',
				dev: '#rlh',
				mdn: 'length',
			},
			tests: '5rlh',
		},
		svh: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5svh',
		},
		lvh: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5lvh',
		},
		dvh: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5dvh',
		},
		svw: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5svw',
		},
		lvw: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5lvw',
		},
		dvw: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5dvw',
		},
		dvmin: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5dvmin',
		},
		dvmax: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5dvmax',
		},
		vb: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5vb',
		},
		vi: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5vi',
		},
		svb: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5dvb',
		},
		dvi: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5dvi',
		},
		lvd: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5lvb',
		},
		lvi: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5lvi',
		},
		svb: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5svb',
		},
		svi: {
			links: {
				tr: '#viewport-relative-lengths',
				dev: '#viewport-relative-lengths',
				mdn: 'length',
			},
			tests: '5svi',
		},
		'toggle()': {
			links: {
				tr: '#toggle-notation',
				dev: '#toggle-notation',
			},
			tests: ['toggle(1px, 2px)', 'toggle(italic, normal)', 'toggle(disc, circle, square, box)'],
		},
		'min()': {
			links: {
				tr: '#calc-notation',
				dev: '#comp-func',
			},
			tests: ['min(10 * (1vw + 1vh) / 2, 12px)'],
		},
		'max()': {
			links: {
				tr: '#calc-notation',
				dev: '#comp-func',
			},
			tests: ['max(10 * (1vw + 1vh) / 2, 12px)'],
		},
		'clamp()': {
			links: {
				tr: '#calc-notation',
				dev: '#comp-func',
			},
			tests: ['clamp(12px, 10 * (1vw + 1vh) / 2, 100px)'],
		},
		'calc()': {
			links: {
				tr: '#calc-func',
				dev: '#calc-func',
			},
			tests: [
				'calc(1rem * pow(1.5, -1))',
				'calc(1rem * (pow(e, pi) - pi))',
				'calc(-18px - sign(5px)*round(down, -18px*sign(5px), 5px))',
				'calc(-18px - round(to-zero, -18px, 5px))',
			],
		},
		'round()': {
			links: {
				tr: '#round-func',
				dev: '#round-func',
			},
			tests: [
				'round(down, 5.5px, 5px)',
				'round(up, 5.5px, 5px)',
				'round(nearest, 5.5px, 5px)',
				'round(to-zero, 5.5px, 5px)',
			],
		},
		'mod()': {
			links: {
				tr: '#round-func',
				dev: '#round-func',
			},
			tests: ['mod(18px, 5px)', 'calc(1px * sin(mod(-140deg, -90deg))'],
		},
		'rem()': {
			links: {
				tr: '#round-func',
				dev: '#round-func',
			},
			tests: ['rem(-18px, 5px)'],
		},
		'sin()': {
			links: {
				tr: '#trig-funcs',
				dev: '#trig-funcs',
			},
			tests: ['calc(1px * sin(45deg)', 'calc(1px * sin(.125turn))', 'calc(1px * sin(3.14159 / 4))'],
		},
		'cos()': {
			links: {
				tr: '#trig-funcs',
				dev: '#trig-funcs',
			},
			tests: ['calc(1px * cos(45deg))', 'calc(1px * cos(.125turn))', 'calc(1px * cos(3.14159 / 4))'],
		},
		'tan()': {
			links: {
				tr: '#trig-funcs',
				dev: '#trig-funcs',
			},
			tests: ['calc(1px * tan(1))'],
		},
		'asin()': {
			links: {
				tr: '#trig-funcs',
				dev: '#trig-funcs',
			},
			tests: ['calc(1px * sin(asin(1)))'],
		},
		'acos()': {
			links: {
				tr: '#trig-funcs',
				dev: '#trig-funcs',
			},
			tests: ['calc(1px * sin(acos(-1)))'],
		},
		'atan()': {
			links: {
				tr: '#trig-funcs',
				dev: '#trig-funcs',
			},
			tests: ['calc(1px * sin(atan(-1)))', 'calc(1px * sin(atan(tan(90deg))))'],
		},
		'atan2()': {
			links: {
				tr: '#trig-funcs',
				dev: '#trig-funcs',
			},
			tests: ['calc(1px * sin(atan2(15deg, 90deg)))'],
		},
		'pow()': {
			links: {
				tr: '#exponent-funcs',
				dev: '#exponent-funcs',
			},
			tests: ['calc(1px * pow(1.5, -1))'],
		},
		'sqrt()': {
			links: {
				tr: '#exponent-funcs',
				dev: '#exponent-funcs',
			},
			tests: ['calc(1px * sqrt(2))'],
		},
		'hypot()': {
			links: {
				tr: '#exponent-funcs',
				dev: '#exponent-funcs',
			},
			tests: ['calc(1px * hypot(2))', 'calc(1px * hypot(2, 2))'],
		},
		'log()': {
			links: {
				tr: '#exponent-funcs',
				dev: '#exponent-funcs',
			},
			tests: ['calc(1px * log(2))'],
		},
		'exp()': {
			links: {
				tr: '#exponent-funcs',
				dev: '#exponent-funcs',
			},
			tests: ['calc(1px * exp(2))'],
		},
		'abs()': {
			links: {
				tr: '#sign-funcs',
				dev: '#sign-funcs',
			},
			tests: ['calc(1px * abs(-2))'],
		},
		'sign()': {
			links: {
				tr: '#sign-funcs',
				dev: '#sign-funcs',
			},
			tests: ['calc(1px * sign(10%))'],
		},
		e: {
			links: {
				tr: '#calc-constants',
				dev: '#calc-constants',
			},
			tests: ['calc(1px * calc(e))'],
		},
		pi: {
			links: {
				tr: '#calc-constants',
				dev: '#calc-constants',
			},
			tests: ['calc(1px * calc(pi))'],
		},
		infinity: {
			links: {
				tr: '#calc-error-constants',
				dev: '#ccalc-error-constants',
			},
			tests: ['calc(1px * sin(tan(atan(infinity))))'],
		},
		'-infinity': {
			links: {
				tr: '#calc-error-constants',
				dev: '#ccalc-error-constants',
			},
			tests: ['calc(1px * sin(tan(atan(-infinity))))'],
		},
		NaN: {
			links: {
				tr: '#calc-error-constants',
				dev: '#ccalc-error-constants',
			},
			tests: ['calc(1px * sin(tan(atan(NaN))))'],
		},
	},
};
