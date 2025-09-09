export default {
	id: 'css-values-4',
	title: 'CSS Values and Units Module Level 4',
	link: 'css-values-4',
	status: 'experimental',
	units: {
		ex: {
			link: '#ex',
			mdn: 'length',
			dataType: 'length',
		},
		rex: {
			link: '#rex',
			mdn: 'length',
			dataType: 'length',
		},
		cap: {
			link: '#cap',
			mdn: 'length',
			dataType: 'length',
		},
		rcap: {
			link: '#rcap',
			mdn: 'length',
			dataType: 'length',
		},
		rch: {
			link: '#rch',
			mdn: 'length',
			dataType: 'length',
		},
		ic: {
			link: '#ic',
			mdn: 'length',
			dataType: 'length',
		},
		ric: {
			link: '#ric',
			mdn: 'length',
			dataType: 'length',
		},
		lh: {
			link: '#lh',
			mdn: 'length',
			dataType: 'length',
		},
		rlh: {
			link: '#rlh',
			mdn: 'length',
			dataType: 'length',
		},
		vw: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		svw: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		lvw: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		dvw: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		vh: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		svh: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		lvh: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		dvh: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		vi: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		svi: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		lvi: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		dvi: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		vb: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		svb: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		lvb: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		dvb: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		vmin: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		svmin: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		lvmin: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		dvmin: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		vmax: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		svmax: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		lvmax: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
		dvmax: {
			link: '#viewport-relative-lengths',
			mdn: 'length',
			dataType: 'length',
		},
	},
	values: {
		properties: ['width', 'padding'],
		'min()': {
			link: '#comp-func',
			args: ['10 * (1vw + 1vh) / 2, 12px'],
		},
		'max()': {
			link: '#comp-func',
			args: ['10 * (1vw + 1vh) / 2, 12px'],
		},
		'clamp()': {
			link: '#comp-func',
			args: ['12px, 10 * (1vw + 1vh) / 2, 100px'],
		},
		'calc()': {
			link: '#calc-func',
			args: [
				'1rem * pow(1.5, -1)',
				'1rem * (pow(e, pi) - pi)',
				'-18px - sign(5px)*round(down, -18px*sign(5px), 5px)',
				'-18px - round(to-zero, -18px, 5px)',
			],
		},
		'round()': {
			link: '#round-func',
			args: [
				'down, 5.5px, 5px',
				'up, 5.5px, 5px',
				'nearest, 5.5px, 5px',
				'to-zero, 5.5px, 5px',
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
			link: '#calc-error-constants',
			tests: ['calc(1px * sin(tan(atan(infinity))))'],
		},
		'-infinity': {
			link: '#calc-error-constants',
			tests: ['calc(1px * sin(tan(atan(-infinity))))'],
		},
		NaN: {
			link: '#calc-error-constants',
			tests: ['calc(1px * sin(tan(atan(NaN))))'],
		},
	},
};
