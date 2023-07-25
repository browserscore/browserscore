export default {
	title: 'CSS Object Model (CSSOM)',
	links: {
		tr: 'cssom-1',
		dev: 'cssom-1',
	},
	status: {
		stability: 'experimental',
	},
	interfaces: {
		CSS: {
			links: {
				tr: '#namespacedef-css',
				dev: '#namespacedef-css',
				mdnGroup: 'DOM',
			},
			tests: ['escape'],
			interface: function() {
				return CSS;
			}
		},
		StyleSheet: {
			links: {
				tr: '#the-stylesheet-interface',
				dev: '#the-stylesheet-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#the-cssstylesheet-interface',
				dev: '#the-cssstylesheet-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#the-stylesheetlist-interface',
				dev: '#the-stylesheetlist-interface',
				mdnGroup: 'DOM',
			},
			tests: ['item', 'length'],
			interface: function() {
				return document.styleSheets;
			}
		},
		Document: {
			links: {
				tr: '#extensions-to-the-document-or-shadow-root-interface',
				dev: '#extensions-to-the-document-or-shadow-root-interface',
				mdnGroup: 'DOM',
			},
			tests: ['styleSheets', 'adoptedStyleSheets'],
			interface: function() {
				return document;
			},
		},
		Element: {
			links: {
				tr: '#the-linkstyle-interface',
				dev: '#the-linkstyle-interface',
				mdnGroup: 'DOM',
			},
			tests: ['sheet', 'style'],
			interface: function(style) {
				return style;
			},
		},
		Window: {
			links: {
				tr: '#extensions-to-the-window-interface',
				dev: '#extensions-to-the-window-interface',
				mdnGroup: 'DOM',
			},
			tests: ['getComputedStyle'],
			interface: function() {
				return window;
			},
		},
		MediaList: {
			links: {
				tr: '#the-medialist-interface',
				dev: '#the-medialist-interface',
				mdnGroup: 'DOM',
			},
			tests: ['mediaText', 'length', 'item', 'appendMedium', 'deleteMedium'],
			interface: function(style) {
				return style.sheet.media;
			}
		},
		CSSRuleList: {
			links: {
				tr: '#the-cssrulelist-interface',
				dev: '#the-cssrulelist-interface',
				mdnGroup: 'DOM',
			},
			tests: ['item', 'length'],
			interface: function(style) {
				return style.sheet.cssRules;
			}
		},
		CSSRule: {
			links: {
				tr: '#the-cssrule-interface',
				dev: '#the-cssrule-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#the-cssstylerule-interface',
				dev: '#the-cssstylerule-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#the-cssimportrule-interface',
				dev: '#the-cssimportrule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['href', 'media', 'styleSheet'],
			required: '@import url("foo.css");',
		},
		*/
		CSSGroupingRule: {
			links: {
				tr: '#the-cssgroupingrule-interface',
				dev: '#the-cssgroupingrule-interface',
				mdnGroup: 'DOM',
			},
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
			links: {
				tr: '#the-csspagerule-interface',
				dev: '#the-csspagerule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['selectorText', 'style', 'cssRules', 'insertRule', 'deleteRule'],
			required: '@page { }',
		},
		CSSMarginRule: {
			links: {
				tr: '#the-cssmarginrule-interface',
				dev: '#the-cssmarginrule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['selectorText', 'style', 'cssText', 'parentRule', 'parentStyleSheet'],
			required: '@page { @top-left { content: "foo"; } }',
		},
		CSSNamespaceRule: {
			links: {
				tr: '#the-cssnamespacerule-interface',
				dev: '#the-cssnamespacerule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['namespaceURI', 'prefix', 'cssText', 'parentRule', 'parentStyleSheet'],
			required: '@namespace svg url("http://www.w3.org/2000/svg");',
		},
		CSSStyleDeclaration: {
			links: {
				tr: '#the-cssstyledeclaration-interface',
				dev: '#the-cssstyledeclaration-interface',
				mdnGroup: 'DOM',
			},
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
