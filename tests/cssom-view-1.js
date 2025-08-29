export default {
	id: 'cssom-view-1',
	title: 'CSSOM View Module',
	link: 'cssom-view-1',
	status: 'experimental',
	properties: {
		'scroll-behavior': {
			link: '#smooth-scrolling',
			tests: ['auto', 'smooth '],
		},
	},
	interfaces: {
		Window: {
			link: '#extensions-to-the-window-interface',
			mdnGroup: 'DOM',
			tests: [
				'matchMedia',
				'screen',
				'visualViewport',
				'moveTo',
				'moveBy',
				'resizeTo',
				'resizeBy',
				'innerWidth',
				'innerHeight',
				'scrollX',
				'pageXOffset',
				'scrollY',
				'pageYOffset',
				'scroll',
				'scrollTo',
				'scrollBy',
				'screenX',
				'screenLeft',
				'screenY',
				'screenTop',
				'outerWidth',
				'outerHeight',
				'devicePixelRatio',
			],
			interface: function() {
				return window;
			},
		},
		MediaQueryList: {
			link: '#the-mediaquerylist-interface',
			mdnGroup: 'DOM',
			tests: ['media', 'matches', 'addListener', 'removeListener', 'onchange'],
			interface: function() {
				return window.matchMedia('');
			},
		},
		MediaQueryListEvent: {
			link: '#mediaquerylistevent',
			mdnGroup: 'DOM',
			tests: ['matches'],
			interface: function() {
				return new MediaQueryListEvent('change', {matches: true});
			},
		},
		Screen: {
			link: '#the-screen-interface',
			mdnGroup: 'DOM',
			tests: [
				'availWidth',
				'availHeight',
				'width',
				'height',
				'colorDepth',
				'pixelDepth',
			],
			interface: function() {
				return window.screen;
			},
		},
		Document: {
			link: '#extensions-to-the-document-interface',
			mdnGroup: 'DOM',
			tests: [
				'elementFromPoint',
				'elementsFromPoint',
				'caretPositionFromPoint',
				'scrollingElement',
				'getBoxQuads',
				'convertQuadFromNode',
				'convertRectFromNode',
				'convertPointFromNode',
			],
			interface: function() {
				return document;
			},
		},
		CaretPosition: {
			link: '#caretposition',
			mdnGroup: 'DOM',
			tests: ['offsetNode', 'offset', 'getClientRect'],
			interface: function() {
				return document.caretPositionFromPoint(0, 0);
			},
		},
		Element: {
			link: '#extension-to-the-element-interface',
			mdnGroup: 'DOM',
			tests: [
				'getClientRects',
				'getBoundingClientRect',
				'checkVisibility',
				'scrollIntoView',
				'scroll',
				'scrollTo',
				'scrollBy',
				'scrollTop',
				'scrollLeft',
				'scrollWidth',
				'scrollHeight',
				'clientTop',
				'clientLeft',
				'clientWidth',
				'clientHeight',
				'getBoxQuads',
				'convertQuadFromNode',
				'convertRectFromNode',
				'convertPointFromNode',
			],
			interface: function() {
				return document.createElement('div');
			},
		},
		HTMLElement: {
			link: '#extensions-to-the-htmlelement-interface',
			mdnGroup: 'DOM',
			tests: [
				'offsetParent',
				'offsetTop',
				'offsetLeft',
				'offsetWidth',
				'offsetHeight',
			],
			interface: function() {
				return document.createElement('div');
			},
		},
		HTMLImageElement: {
			link: '#extensions-to-the-htmlimageelement-interface',
			mdnGroup: 'DOM',
			tests: ['x', 'y'],
			interface: function() {
				return document.createElement('img');
			},
		},
		Range: {
			link: '#extensions-to-the-range-interface',
			mdnGroup: 'DOM',
			tests: ['getClientRects', 'getBoundingClientRect'],
			interface: function() {
				return document.createRange();
			},
		},
		MouseEvent: {
			link: '#extensions-to-the-mouseevent-interface',
			mdnGroup: 'DOM',
			tests: [
				'screenX',
				'screenY',
				'pageX',
				'pageY',
				'clientX',
				'clientY',
				'x',
				'y',
				'offsetX',
				'offsetY',
			],
			interface: function() {
				return new MouseEvent('click', {screenX: 0, screenY: 0, clientX: 0, clientY: 0});
			},
		},
		Text: {
			link: '#geometryutils',
			mdnGroup: 'DOM',
			tests: [
				'getBoxQuads',
				'convertQuadFromNode',
				'convertRectFromNode',
				'convertPointFromNode',
			],
			interface: function() {
				return document.createTextNode('');
			},
		},
		CSSPseudoElement: {
			link: '#geometryutils',
			mdnGroup: 'DOM',
			tests: [
				'getBoxQuads',
				'convertQuadFromNode',
				'convertRectFromNode',
				'convertPointFromNode',
			],
			interface: function() {
				return document.createTextNode('');
			},
		},
		VisualViewport: {
			links: {
				dev: '#the-visualviewport-interface',
				mdnGroup: 'DOM',
			},
			tests: [
				'offsetLeft',
				'offsetTop',
				'pageLeft',
				'pageTop',
				'width',
				'height',
				'scale',
				'onresize',
				'onscroll',
				'onscrollend',
				'addEventListener',
				'removeEventListener',
				'dispatchEvent',
			],
			interface: function() {
				return window.visualViewport;
			},
		},
	},
};
