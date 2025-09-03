export default {
	id: 'cssom-1',
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
		},
		StyleSheetList: {
			link: '#the-stylesheetlist-interface',
			mdnGroup: 'DOM',
			tests: ['item', 'length'],
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
		},
		CSSRuleList: {
			link: '#the-cssrulelist-interface',
			mdnGroup: 'DOM',
			tests: ['item', 'length'],
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
		},
		CSSImportRule: {
			link: '#the-cssimportrule-interface',
			mdnGroup: 'DOM',
			tests: ['href', 'media', 'styleSheet'],
		},
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
		},
		CSSPageRule: {
			link: '#the-csspagerule-interface',
			mdnGroup: 'DOM',
			tests: ['selectorText', 'style', 'cssRules', 'insertRule', 'deleteRule'],
		},
		CSSMarginRule: {
			link: '#the-cssmarginrule-interface',
			mdnGroup: 'DOM',
		},
		CSSNamespaceRule: {
			link: '#the-cssnamespacerule-interface',
			mdnGroup: 'DOM',
			tests: ['namespaceURI', 'prefix', 'cssText', 'parentRule', 'parentStyleSheet'],
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
			interface: function() {
				return document.body.style;
			}
		},
	},
};
