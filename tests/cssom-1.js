export default {
	title: 'CSS Object Model (CSSOM)',
	link: 'cssom-1',
	status: 'experimental',
	interfaces: {
		CSS: {
			link: '#namespacedef-css',
			mdnGroup: 'DOM',
			tests: ['escape'],
			interface: function() {
				return CSS;
			}
		},
		StyleSheet: {
			link: '#the-stylesheet-interface',
			mdnGroup: 'DOM',
			tests: [
				'type',
				'href',
				'ownerNode',
				'parentStyleSheet',
				'title',
				'media',
				'disabled',
			],
			interface: function(style) {
				return style.sheet;
			}
		},
		CSSStyleSheet: {
			link: '#the-cssstylesheet-interface',
			mdnGroup: 'DOM',
			tests: [
				'type',
				'href',
				'title',
				'media',
				'ownerNode',
				'parentStyleSheet',
				'title',
				'media',
				'disabled',
				'ownerRule',
				'cssRules',
				'insertRule',
				'deleteRule',
				'rules',
				'addRule',
				'removeRule',
				'replace',
				'replaceSync',
			],
			interface: function(style) {
				return style.sheet;
			}
		},
		StyleSheetList: {
			link: '#the-stylesheetlist-interface',
			mdnGroup: 'DOM',
			tests: ['item', 'length'],
			interface: function() {
				return document.styleSheets;
			}
		},
		Document: {
			link: '#extensions-to-the-document-or-shadow-root-interface',
			mdnGroup: 'DOM',
			tests: ['styleSheets', 'adoptedStyleSheets'],
			interface: function() {
				return document;
			},
		},
		Element: {
			link: '#the-linkstyle-interface',
			mdnGroup: 'DOM',
			tests: ['sheet', 'style'],
			interface: function(style) {
				return style;
			},
		},
		Window: {
			link: '#extensions-to-the-window-interface',
			mdnGroup: 'DOM',
			tests: ['getComputedStyle'],
			interface: function() {
				return window;
			},
		},
		MediaList: {
			link: '#the-medialist-interface',
			mdnGroup: 'DOM',
			tests: ['mediaText', 'length', 'item', 'appendMedium', 'deleteMedium'],
			interface: function(style) {
				return style.sheet.media;
			}
		},
		CSSRuleList: {
			link: '#the-cssrulelist-interface',
			mdnGroup: 'DOM',
			tests: ['item', 'length'],
			interface: function(style) {
				return style.sheet.cssRules;
			}
		},
		CSSRule: {
			link: '#the-cssrule-interface',
			mdnGroup: 'DOM',
			tests: [
				'cssText',
				'parentRule',
				'parentStyleSheet',
				'type',
				'STYLE_RULE',
				'CHARSET_RULE',
				'IMPORT_RULE',
				'MEDIA_RULE',
				'FONT_FACE_RULE',
				'PAGE_RULE',
				'MARGIN_RULE',
				'NAMESPACE_RULE',
			],
			required: 'div { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSStyleRule: {
			link: '#the-cssstylerule-interface',
			mdnGroup: 'DOM',
			tests: [
				'selectorText',
				'style',
				'cssRules',
				'insertRule',
				'deleteRule',
				'cssText',
				'parentRule',
				'parentStyleSheet',
			],
			required: 'div { }',
		},
		/* Doesn't currently work because style sheet is only available once imported
		CSSImportRule: {
			link: '#the-cssimportrule-interface',
			mdnGroup: 'DOM',
			tests: ['href', 'media', 'styleSheet'],
			required: '@import url("foo.css");',
		},
		*/
		CSSGroupingRule: {
			link: '#the-cssgroupingrule-interface',
			mdnGroup: 'DOM',
			tests: [
				'cssRules',
				'insertRule',
				'deleteRule',
				'cssText',
				'parentRule',
				'parentStyleSheet',
			],
			required: '@media { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			},
		},
		CSSPageRule: {
			link: '#the-csspagerule-interface',
			mdnGroup: 'DOM',
			tests: ['selectorText', 'style', 'cssRules', 'insertRule', 'deleteRule'],
			required: '@page { }',
		},
		CSSMarginRule: {
			link: '#the-cssmarginrule-interface',
			mdnGroup: 'DOM',
			tests: ['selectorText', 'style', 'cssText', 'parentRule', 'parentStyleSheet'],
			required: '@page { @top-left { content: "foo"; } }',
		},
		CSSNamespaceRule: {
			link: '#the-cssnamespacerule-interface',
			mdnGroup: 'DOM',
			tests: ['namespaceURI', 'prefix', 'cssText', 'parentRule', 'parentStyleSheet'],
			required: '@namespace svg url("http://www.w3.org/2000/svg");',
		},
		CSSStyleDeclaration: {
			link: '#the-cssstyledeclaration-interface',
			mdnGroup: 'DOM',
			tests: [
				'cssText',
				'length',
				'item',
				'getPropertyValue',
				'getPropertyPriority',
				'setProperty',
				'removeProperty',
				'parentRule',
				'cssFloat'
			],
			required: 'div { color: red; }',
			interface: function(style) {
				return style.sheet.cssRules[0].style;
			}
		},
	},
};
