export default {
	title: 'CSS Typed OM Level 1',
	links: {
		dev: 'css-typed-om-1',
	},
	group: 'houdini',
	status: {
		stability: 'experimental',
	},
	interfaces: {
		Element: {
			links: {
				dev: '#computed-stylepropertymapreadonly-objects',
				mdnGroup: 'DOM',
			},
			tests: ['computedStyleMap'],
			interface: function() {
				return document.body;
			},
		},
		StylePropertyMapReadOnly: {
			links: {
				dev: '#the-stylepropertymap',
				mdnGroup: 'DOM',
			},
			tests: [
				'get',
				'getAll',
				'has',
				'size',
			],
			interface: function() {
				return document.body.computedStyleMap();
			},
		},
		StylePropertyMap: {
			links: {
				dev: '#the-stylepropertymap',
				mdnGroup: 'DOM',
			},
			tests: [
				'get',
				'getAll',
				'has',
				'size',
				'set',
				'append',
				'delete',
				'clear',
			],
			interface: function() {
				return document.body.attributeStyleMap;
			},
		},
		CSSStyleValue: {
			links: {
				dev: '#stylevalue-objects',
				mdnGroup: 'DOM',
			},
			tests: ['parse', 'parseAll'],
			interface: function() {
				return CSSStyleValue
			},
		},
		CSSUnparsedValue: {
			links: {
				dev: '#unparsedvalue-objects',
				mdnGroup: 'DOM',
			},
			tests: [
				'length',
				'entries',
				'keys',
				'values',
				'forEach',
			],
			required: ':root { --foo: 1px; }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('--foo');
			},
		},
		CSSVariableReferenceValue: {
			links: {
				dev: '#unparsedvalue-objects',
				mdnGroup: 'DOM',
			},
			tests: ['variable', 'fallback'],
			required: ':root { --foo: 1px; margin-top: var(--foo, 2px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('margin-top')[0];
			},
		},
		CSSKeywordValue: {
			links: {
				dev: '#keywordvalue-objects',
				mdnGroup: 'DOM',
			},
			tests: ['value'],
			required: ':root { display: grid; }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('display');
			},
		},
		CSSNumericValue: {
			links: {
				dev: '#numeric-value',
				mdnGroup: 'DOM',
			},
			tests: [
				'add',
				'sub',
				'mul',
				'div',
				'min',
				'max',
				'equals',
				'to',
				'toSum',
				'type',
			],
			required: ':root { opacity: 1; }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('opacity');
			},
		},
		CSSUnitValue: {
			links: {
				dev: '#simple-numeric',
				mdnGroup: 'DOM',
			},
			tests: [
				'value',
				'unit',
				'add',
				'sub',
				'mul',
				'div',
				'min',
				'max',
				'equals',
				'to',
				'toSum',
				'type',
			],
			required: ':root { margin-top: 1px; }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('margin-top');
			},
		},
		CSSMathValue: {
			links: {
				dev: '#complex-numeric',
				mdnGroup: 'DOM',
			},
			tests: [
				'operator',
				'add',
				'sub',
				'mul',
				'div',
				'min',
				'max',
				'equals',
				'to',
				'toSum',
				'type',
			],
			required: ':root { margin-top: calc(1vh + 10px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('margin-top');
			},
		},
		CSSMathSum: {
			links: {
				dev: '#cssmathsum',
				mdnGroup: 'DOM',
			},
			tests: [
				'values',
				'operator',
				'add',
				'sub',
				'mul',
				'div',
				'min',
				'max',
				'equals',
				'to',
				'toSum',
				'type',
			],
			required: ':root { margin-top: calc(1vh + 10px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('margin-top');
			},
		},
		CSSMathProduct: {
			links: {
				dev: '#cssmathproduct',
				mdnGroup: 'DOM',
			},
			tests: [
				'values',
				'operator',
				'add',
				'sub',
				'mul',
				'div',
				'min',
				'max',
				'equals',
				'to',
				'toSum',
				'type',
			],
			interface: function(style) {
				return new CSSMathProduct(2, 3);
			},
		},
		CSSMathNegate: {
			links: {
				dev: '#cssmathnegate',
				mdnGroup: 'DOM',
			},
			tests: [
				'value',
				'operator',
				'add',
				'sub',
				'mul',
				'div',
				'min',
				'max',
				'equals',
				'to',
				'toSum',
				'type',
			],
			interface: function(style) {
				return new CSSMathNegate(3);
			},
		},
		CSSMathInvert: {
			links: {
				dev: '#cssmathinvert',
				mdnGroup: 'DOM',
			},
			tests: [
				'value',
				'operator',
				'add',
				'sub',
				'mul',
				'div',
				'min',
				'max',
				'equals',
				'to',
				'toSum',
				'type',
			],
			interface: function(style) {
				return new CSSMathInvert(3);
			},
		},
		CSSMathMin: {
			links: {
				dev: '#cssmathmin',
				mdnGroup: 'DOM',
			},
			tests: [
				'values',
				'operator',
				'add',
				'sub',
				'mul',
				'div',
				'min',
				'max',
				'equals',
				'to',
				'toSum',
				'type',
			],
			required: ':root { margin-top: min(20vh, 100px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('margin-top');
			},
		},
		CSSMathMax: {
			links: {
				dev: '#cssmathmax',
				mdnGroup: 'DOM',
			},
			tests: [
				'values',
				'operator',
				'add',
				'sub',
				'mul',
				'div',
				'min',
				'max',
				'equals',
				'to',
				'toSum',
				'type',
			],
			required: ':root { margin-top: max(20vh, 400px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('margin-top');
			},
		},
		CSSMathClamp: {
			links: {
				dev: '#cssmathclamp',
				mdnGroup: 'DOM',
			},
			tests: [
				'lower',
				'value',
				'upper',
				'operator',
				'add',
				'sub',
				'mul',
				'div',
				'min',
				'max',
				'equals',
				'to',
				'toSum',
				'type',
			],
			required: ':root { margin-top: clamp(100px, 20vh, 400px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('margin-top');
			},
		},
		CSSNumericArray: {
			links: {
				dev: '##cssnumericarray',
				mdnGroup: 'DOM',
			},
			tests: ['length'],
			required: ':root { margin-top: calc(1% + 10px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('margin-top').values;
			},
		},
		CSS: {
			links: {
				dev: '#numeric-factory',
				mdnGroup: 'DOM',
			},
			tests: [
				'number',
				'percent',
				'em',
				'ex',
				'ch',
				'ic',
				'rem',
				'lh',
				'rlh',
				'vw',
				'vh',
				'vi',
				'vb',
				'vmin',
				'vmax',
				'svw',
				'svh',
				'svi',
				'svb',
				'svmin',
				'svmax',
				'lvw',
				'lvh',
				'lvi',
				'lvb',
				'lvmin',
				'lvmax',
				'dvw',
				'dvh',
				'dvi',
				'dvb',
				'dvmin',
				'dvmax',
				'cqw',
				'cqh',
				'cqi',
				'cqb',
				'cqmin',
				'cqmax',
				'cm',
				'mm',
				'Q',
				'in',
				'pt',
				'pc',
				'px',
				'deg',
				'grad',
				'rad',
				'turn',
				's',
				'ms',
				'Hz',
				'kHz',
				'dpi',
				'dpcm',
				'dppx',
				'fr',
			],
			interface: function() {
				return CSS;
			},
		},
		CSSTransformValue: {
			links: {
				dev: '#transformvalue-objects',
				mdnGroup: 'DOM',
			},
			tests: [
				'length',
				'is2D',
				'toMatrix',
				'entries',
				'forEach',
				'keys',
				'values',
			],
			required: ':root { transform: translate(10px, 20px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('transform');
			},
		},
		CSSTransformComponent: {
			links: {
				dev: '#csstransformcomponent',
				mdnGroup: 'DOM',
			},
			tests: ['is2D', 'toMatrix'],
			required: ':root { transform: translate(10px, 20px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('transform')[0];
			},
		},
		CSSTranslate: {
			links: {
				dev: '#csstranslate',
				mdnGroup: 'DOM',
			},
			tests: ['x', 'y', 'z'],
			required: ':root { transform: translate(10px, 20px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('transform')[0];
			},
		},
		CSSRotate: {
			links: {
				dev: '#cssrotate',
				mdnGroup: 'DOM',
			},
			tests: ['x', 'y', 'z', 'angle'],
			required: ':root { transform: rotate(10deg); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('transform')[0];
			},
		},
		CSSScale: {
			links: {
				dev: '#cssscale',
				mdnGroup: 'DOM',
			},
			tests: ['x', 'y', 'z'],
			required: ':root { transform: scale(2); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('transform')[0];
			},
		},
		CSSSkew: {
			links: {
				dev: '#cssskew',
				mdnGroup: 'DOM',
			},
			tests: ['ax', 'ay'],
			required: ':root { transform: skew(10deg, 20deg); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('transform')[0];
			},
		},
		CSSSkewX: {
			links: {
				dev: '#cssskewx',
				mdnGroup: 'DOM',
			},
			tests: ['ax'],
			required: ':root { transform: skewX(10deg); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('transform')[0];
			},
		},
		CSSSkewY: {
			links: {
				dev: '#cssskewy',
				mdnGroup: 'DOM',
			},
			tests: ['ay'],
			required: ':root { transform: skewY(10deg); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('transform')[0];
			},
		},
		CSSPerspective: {
			links: {
				dev: '#cssperspective',
				mdnGroup: 'DOM',
			},
			tests: ['length'],
			required: ':root { transform: perspective(10px); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('transform')[0];
			},
		},
		CSSMatrixComponent: {
			links: {
				dev: '#cssmatrixcomponent',
				mdnGroup: 'DOM',
			},
			tests: ['matrix'],
			required: ':root { transform: matrix(1, 0, 0, 1, 0, 0); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('transform')[0];
			},
		},
		CSSImageValue: {
			links: {
				dev: '#imagevalue-objects',
				mdnGroup: 'DOM',
			},
			tests: ['CSSImageValue'],
		},
		CSSColorValue: {
			links: {
				dev: '#colorvalue-objects',
				mdnGroup: 'DOM',
			},
		 	tests: ['CSSColorValue'],
		},
		CSSRGB: {
			links: {
				dev: '#cssrgb',
				mdnGroup: 'DOM',
			},
		 	tests: ['r', 'g', 'b', 'alpha'],
			required: ':root { color: rgb(255, 0, 0); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('color');
			},
		},
		CSSHSL: {
			links: {
				dev: '#csshsl',
				mdnGroup: 'DOM',
			},
		 	tests: ['h', 's', 'l', 'alpha'],
			required: ':root { color: hsl(0, 100%, 50%); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('color');
			},
		},
		CSSHWB: {
			links: {
				dev: '#csshwb',
				mdnGroup: 'DOM',
			},
		 	tests: ['h', 'w', 'b', 'alpha'],
			required: ':root { color: hwb(0, 0%, 0%); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('color');
			},
		},
		CSSLab: {
			links: {
				dev: '#csslab',
				mdnGroup: 'DOM',
			},
		 	tests: ['l', 'a', 'b', 'alpha'],
			required: ':root { color: lab(0%, 0%, 0%); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('color');
			},
		},
		CSSLCH: {
			links: {
				dev: '#csslch',
				mdnGroup: 'DOM',
			},
		 	tests: ['l', 'c', 'h', 'alpha'],
			required: ':root { color: lch(0%, 0%, 0deg); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('color');
			},
		},
		CSSOKLab: {
			links: {
				dev: '#cssoklab',
				mdnGroup: 'DOM',
			},
		 	tests: ['l', 'a', 'b', 'alpha'],
			required: ':root { color: oklab(0%, 0%, 0%); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('color');
			},
		},
		CSSOKLCH: {
			links: {
				dev: '#cssoklch',
				mdnGroup: 'DOM',
			},
		 	tests: ['l', 'c', 'h', 'alpha'],
			required: ':root { color: oklch(0%, 0%, 0deg); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('color');
			},
		},
		CSSColor: {
			links: {
				dev: '#csscolor',
				mdnGroup: 'DOM',
			},
			tests: ['colorSpace', 'channels', 'alpha'],
			required: ':root { color: color(display-p3 1 0 0); }',
			interface: function(style) {
				return style.sheet.cssRules[0].styleMap.get('color');
			},
		},
	},
};
