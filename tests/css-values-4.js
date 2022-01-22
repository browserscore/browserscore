export default {
	"title": "CSS Values and Units Module Level 4",
	"links": {
		"tr": "css-values-4",
		"dev": "css-values-4"
	},
	"status": {
		"stability": "experimental"
	},
	"values": {
		"properties": [
			"width",
			"padding"
		],
		"ex": {
			"links": {
				"tr": "#ex",
				"dev": "#ex",
				"mdn": "length"
			},
			"tests": "5ex"
		},
		"rex": {
			"links": {
				"tr": "#rex",
				"dev": "#rex",
				"mdn": "length"
			},
			"tests": "5rex"
		},
		"cap": {
			"links": {
				"tr": "#cap",
				"dev": "#cap",
				"mdn": "length"
			},
			"tests": "5cap"
		},
		"rcap": {
			"links": {
				"tr": "#rcap",
				"dev": "#rcap",
				"mdn": "length"
			},
			"tests": "5rcap"
		},
		"rch": {
			"links": {
				"tr": "#rch",
				"dev": "#rcap",
				"mdn": "length"
			},
			"tests": "5rch"
		},
		"rch": {
			"links": {
				"tr": "#rch",
				"dev": "#rcap",
				"mdn": "length"
			},
			"tests": "5rch"
		},
		"ic": {
			"links": {
				"tr": "#ic",
				"dev": "#ic",
				"mdn": "length"
			},
			"tests": "5ic"
		},
		"ric": {
			"links": {
				"tr": "#ric",
				"dev": "#ric",
				"mdn": "length"
			},
			"tests": "5ric"
		},
		"lh": {
			"links": {
				"tr": "#lh",
				"dev": "#lh",
				"mdn": "length"
			},
			"tests": "5lh"
		},
		"rlh": {
			"links": {
				"tr": "#rlh",
				"dev": "#rlh",
				"mdn": "length"
			},
			"tests": "5rlh"
		},
		"toggle()": {
			"links": {
				"tr": "#toggle-notation",
				"dev": "#toggle-notation"
			},
			"tests": ["toggle(1px, 2px)", "toggle(italic, normal)", "toggle(disc, circle, square, box)"]
		},
		"min()": {
			"links": {
				"tr": "#calc-notation",
				"dev": "#comp-func"
			},
			"tests": ["min(10 * (1vw + 1vh) / 2, 12px)"]
		},
		"max()": {
			"links": {
				"tr": "#calc-notation",
				"dev": "#comp-func"
			},
			"tests": ["max(10 * (1vw + 1vh) / 2, 12px)"]
		},
		"clamp()": {
			"links": {
				"tr": "#calc-notation",
				"dev": "#comp-func"
			},
			"tests": ["clamp(12px, 10 * (1vw + 1vh) / 2, 100px)"]
		},
		"calc()": {
			"links": {
				"tr": "#calc-func",
				"dev": "#calc-func"
			},
			"tests": [
				"calc(1rem * pow(1.5, -1))",
				"calc(pow(e, pi) - pi)",
				"calc(-18px - sign(5px)*round(down, -18px*sign(5px), 5px))",
				"calc(-18px - round(to-zero, -18px, 5px))"
			]
		},
		"round()": {
			"links": {
				"tr": "#round-func",
				"dev": "#round-func"
			},
			"tests": [
				"round(down, 5.5px, 5px)",
				"up(down, 5.5px, 5px)",
				"down(down, 5.5px, 5px)",
				"round(to-zero, 5.5px, 5px)"
			]
		},
		"mod()": {
			"links": {
				"tr": "#round-func",
				"dev": "#round-func"
			},
			"tests": ["mod(18px, 5px)", "mod(-140deg, -90deg)"]
		},
		"rem()": {
			"links": {
				"tr": "#round-func",
				"dev": "#round-func"
			},
			"tests": ["rem(140deg, -90deg)"]
		},
		"sin()": {
			"links": {
				"tr": "#trig-funcs",
				"dev": "#trig-funcs"
			},
			"tests": ["sin(45deg)", "sin(.125turn)", "sin(3.14159 / 4)"]
		},
		"cos()": {
			"links": {
				"tr": "#trig-funcs",
				"dev": "#trig-funcs"
			},
			"tests": ["cos(45deg)", "cos(.125turn)", "cos(3.14159 / 4)"]
		},
		"tan()": {
			"links": {
				"tr": "#trig-funcs",
				"dev": "#trig-funcs"
			},
			"tests": ["tan(1)"]
		},
		"asin()": {
			"links": {
				"tr": "#trig-funcs",
				"dev": "#trig-funcs"
			},
			"tests": ["asin(1)"]
		},
		"acos()": {
			"links": {
				"tr": "#trig-funcs",
				"dev": "#trig-funcs"
			},
			"tests": ["acos(-1)"]
		},
		"atan()": {
			"links": {
				"tr": "#trig-funcs",
				"dev": "#trig-funcs"
			},
			"tests": ["atan(-1)", "atan(tan(90deg))", "tan(atan(infinity))"]
		},
		"atan2()": {
			"links": {
				"tr": "#trig-funcs",
				"dev": "#trig-funcs"
			},
			"tests": ["atan2(15deg, 90deg)"]
		},
		"pow()": {
			"links": {
				"tr": "#exponent-funcs",
				"dev": "#exponent-funcs"
			},
			"tests": ["pow(1.5, -1)"]
		},
		"sqrt()": {
			"links": {
				"tr": "#exponent-funcs",
				"dev": "#exponent-funcs"
			},
			"tests": ["sqrt(2)"]
		},
		"hypot()": {
			"links": {
				"tr": "#exponent-funcs",
				"dev": "#exponent-funcs"
			},
			"tests": ["hypot(2)", "hypot(2, 2)"]
		},
		"log()": {
			"links": {
				"tr": "#exponent-funcs",
				"dev": "#exponent-funcs"
			},
			"tests": ["log(2)"]
		},
		"exp()": {
			"links": {
				"tr": "#exponent-funcs",
				"dev": "#exponent-funcs"
			},
			"tests": ["exp(2)"]
		},
		"abs()": {
			"links": {
				"tr": "#sign-funcs",
				"dev": "#sign-funcs"
			},
			"tests": ["abs(-2)"]
		},
		"sign()": {
			"links": {
				"tr": "#sign-funcs",
				"dev": "#sign-funcs"
			},
			"tests": ["sign(10%)"]
		},
		"e": {
			"links": {
				"tr": "#calc-constants",
				"dev": "#calc-constants"
			},
			"tests": ["calc(e)"]
		},
		"pi": {
			"links": {
				"tr": "#calc-constants",
				"dev": "#calc-constants"
			},
			"tests": ["calc(pi)"]
		},
		"infinity": {
			"links": {
				"tr": "#calc-error-constants",
				"dev": "#ccalc-error-constants"
			},
			"tests": ["calc(infinity)"]
		},
		"-infinity": {
			"links": {
				"tr": "#calc-error-constants",
				"dev": "#ccalc-error-constants"
			},
			"tests": ["calc(-infinity)"]
		},
		"NaN": {
			"links": {
				"tr": "#calc-error-constants",
				"dev": "#ccalc-error-constants"
			},
			"tests": ["calc(NaN)"]
		}
	}
};
