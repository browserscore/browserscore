export default {
	id: 'css-values-4',
	title: 'CSS Values and Units Module Level 4',
	link: 'css-values-4',
	status: 'experimental',
	values: {
		properties: ['width', 'padding'],
		ex: {
			link: '#ex',
			mdn: 'length',
			tests: '5ex',
		},
		rex: {
			link: '#rex',
			mdn: 'length',
			tests: '5rex',
		},
		cap: {
			link: '#cap',
			mdn: 'length',
			tests: '5cap',
		},
		rcap: {
			link: '#rcap',
			mdn: 'length',
			tests: '5rcap',
		},
		rch: {
			links: {
				tr: '#rch',
				dev: '#rcap',
				},
			mdn: 'length',
			tests: '5rch',
		},
		rch: {
			links: {
				tr: '#rch',
				dev: '#rcap',
				},
			mdn: 'length',
			tests: '5rch',
		},
		ic: {
			link: '#ic',
			mdn: 'length',
			tests: '5ic',
		},
		ric: {
			link: '#ric',
			mdn: 'length',
			tests: '5ric',
		},
		lh: {
			link: '#lh',
			mdn: 'length',
			tests: '5lh',
		},
		rlh: {
			link: '#rlh',
			mdn: 'length',
			tests: '5rlh',
		},
		svh: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5svh',
		},
		lvh: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5lvh',
		},
		dvh: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5dvh',
		},
		svw: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5svw',
		},
		lvw: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5lvw',
		},
		dvw: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5dvw',
		},
		dvmin: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5dvmin',
		},
		dvmax: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5dvmax',
		},
		vb: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5vb',
		},
		vi: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5vi',
		},
		svb: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5dvb',
		},
		dvi: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5dvi',
		},
		lvd: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5lvb',
		},
		lvi: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5lvi',
		},
		svb: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5svb',
		},
		svi: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			tests: '5svi',
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
			link: '#calc-func',
			tests: [
				'calc(1rem * pow(1.5, -1))',
				'calc(1rem * (pow(e, pi) - pi))',
				'calc(-18px - sign(5px)*round(down, -18px*sign(5px), 5px))',
				'calc(-18px - round(to-zero, -18px, 5px))',
			],
		},
		'round()': {
			link: '#round-func',
			tests: [
				'round(down, 5.5px, 5px)',
				'round(up, 5.5px, 5px)',
				'round(nearest, 5.5px, 5px)',
				'round(to-zero, 5.5px, 5px)',
			],
		},
		'mod()': {
			link: '#round-func',
			tests: ['mod(18px, 5px)', 'calc(1px * sin(mod(-140deg, -90deg))'],
		},
		'rem()': {
			link: '#round-func',
			tests: ['rem(-18px, 5px)'],
		},
		'sin()': {
			link: '#trig-funcs',
			tests: ['calc(1px * sin(45deg)', 'calc(1px * sin(.125turn))', 'calc(1px * sin(3.14159 / 4))'],
		},
		'cos()': {
			link: '#trig-funcs',
			tests: ['calc(1px * cos(45deg))', 'calc(1px * cos(.125turn))', 'calc(1px * cos(3.14159 / 4))'],
		},
		'tan()': {
			link: '#trig-funcs',
			tests: ['calc(1px * tan(1))'],
		},
		'asin()': {
			link: '#trig-funcs',
			tests: ['calc(1px * sin(asin(1)))'],
		},
		'acos()': {
			link: '#trig-funcs',
			tests: ['calc(1px * sin(acos(-1)))'],
		},
		'atan()': {
			link: '#trig-funcs',
			tests: ['calc(1px * sin(atan(-1)))', 'calc(1px * sin(atan(tan(90deg))))'],
		},
		'atan2()': {
			link: '#trig-funcs',
			tests: ['calc(1px * sin(atan2(15deg, 90deg)))'],
		},
		'pow()': {
			link: '#exponent-funcs',
			tests: ['calc(1px * pow(1.5, -1))'],
		},
		'sqrt()': {
			link: '#exponent-funcs',
			tests: ['calc(1px * sqrt(2))'],
		},
		'hypot()': {
			link: '#exponent-funcs',
			tests: ['calc(1px * hypot(2))', 'calc(1px * hypot(2, 2))'],
		},
		'log()': {
			link: '#exponent-funcs',
			tests: ['calc(1px * log(2))'],
		},
		'exp()': {
			link: '#exponent-funcs',
			tests: ['calc(1px * exp(2))'],
		},
		'abs()': {
			link: '#sign-funcs',
			tests: ['calc(1px * abs(-2))'],
		},
		'sign()': {
			link: '#sign-funcs',
			tests: ['calc(1px * sign(10%))'],
		},
		e: {
			link: '#calc-constants',
			tests: ['calc(1px * calc(e))'],
		},
		pi: {
			link: '#calc-constants',
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
