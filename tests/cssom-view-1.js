export default {
	title: 'CSSOM View Module',
	links: {
		tr: 'cssom-view-1',
		dev: 'cssom-view-1',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'scroll-behavior': {
			links: {
				tr: '#smooth-scrolling',
				dev: '#smooth-scrolling',
			},
			tests: ['auto', 'smooth '],
		},
	},
	interfaces: {
		Window: {
			links: {
				tr: '#extensions-to-the-window-interface',
				dev: '#extensions-to-the-window-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#the-mediaquerylist-interface',
				dev: '#the-mediaquerylist-interface',
				mdnGroup: 'DOM',
			},
			tests: ['media', 'matches', 'addListener', 'removeListener', 'onchange'],
			interface: function() {
				return window.matchMedia('');
			},
		},
		MediaQueryListEvent: {
			links: {
				tr: '#mediaquerylistevent',
				dev: '#mediaquerylistevent',
				mdnGroup: 'DOM',
			},
			tests: ['matches'],
			interface: function() {
				return new MediaQueryListEvent('change', {matches: true});
			},
		},
		Screen: {
			links: {
				tr: '#the-screen-interface',
				dev: '#the-screen-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#extensions-to-the-document-interface',
				dev: '#extensions-to-the-document-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#caretposition',
				dev: '#caretposition',
				mdnGroup: 'DOM',
			},
			tests: ['offsetNode', 'offset', 'getClientRect'],
			interface: function() {
				return document.caretPositionFromPoint(0, 0);
			},
		},
		Element: {
			links: {
				tr: '#extension-to-the-element-interface',
				dev: '#extension-to-the-element-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#extensions-to-the-htmlelement-interface',
				dev: '#extensions-to-the-htmlelement-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#extensions-to-the-htmlimageelement-interface',
				dev: '#extensions-to-the-htmlimageelement-interface',
				mdnGroup: 'DOM',
			},
			tests: ['x', 'y'],
			interface: function() {
				return document.createElement('img');
			},
		},
		Range: {
			links: {
				tr: '#extensions-to-the-range-interface',
				dev: '#extensions-to-the-range-interface',
				mdnGroup: 'DOM',
			},
			tests: ['getClientRects', 'getBoundingClientRect'],
			interface: function() {
				return document.createRange();
			},
		},
		MouseEvent: {
			links: {
				tr: '#extensions-to-the-mouseevent-interface',
				dev: '#extensions-to-the-mouseevent-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#geometryutils',
				dev: '#geometryutils',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#geometryutils',
				dev: '#geometryutils',
				mdnGroup: 'DOM',
			},
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
