export default {
	id: 'cssom-1',
	title: 'CSS Object Model (CSSOM)',
	link: 'cssom-1',
	status: 'experimental',
	globals: {
		CSS: {
			link: '#namespacedef-css',
			mdnGroup: 'DOM',
			functions: ['escape'],
		},
		StyleSheet: {
			link: '#the-stylesheet-interface',
			mdnGroup: 'DOM',
			members: [
				'type',
				'href',
				'ownerNode',
				'parentStyleSheet',
				'title',
				'media',
				'disabled',
			],
		},
		CSSStyleSheet: {
			link: '#the-cssstylesheet-interface',
			mdnGroup: 'DOM',
			members: [
				'ownerRule',
				'cssRules',
			],
			methods: [
				'insertRule',
				'deleteRule',
				'replace',
				'replaceSync',
			],
			extends: 'StyleSheet',
			children: {
				CSSStyleSheet: {
					title: 'Deprecated `CSSStyleSheet` members',
					// FIXME this inherits the extends from above, but it shouldn't
					members: ['rules'],
					methods: ['addRule', 'removeRule'],
				}
			}
		},
		StyleSheetList: {
			link: '#the-stylesheetlist-interface',
			mdnGroup: 'DOM',
			members: ['length'],
			methods: ['item'],
		},
		document: {
			link: '#extensions-to-the-document-or-shadow-root-interface',
			mdnGroup: 'DOM',
			properties: ['styleSheets', 'adoptedStyleSheets'],
		},
		HTMLLinkElement: {
			link: '#the-linkstyle-interface',
			title: 'The `LinkStyle` interface',
			mdnGroup: 'DOM',
			members: ['sheet', 'style'],
		},
		window: {
			link: '#extensions-to-the-window-interface',
			mdnGroup: 'DOM',
			functions: ['getComputedStyle'],
		},
		MediaList: {
			link: '#the-medialist-interface',
			mdnGroup: 'DOM',
			tests: ['mediaText', 'length'],
			methods: ['item', 'appendMedium', 'deleteMedium'],
		},
		CSSRuleList: {
			link: '#the-cssrulelist-interface',
			mdnGroup: 'DOM',
			members: ['length'],
			methods: ['item'],
		},
		CSSRule: {
			link: '#the-cssrule-interface',
			mdnGroup: 'DOM',
			members: [
				'cssText',
				'parentRule',
				'parentStyleSheet',
				{id: 'type', title: 'Deprecated `type` attribute'},
			],
			properties: [
				'STYLE_RULE',
				'CHARSET_RULE',
				'IMPORT_RULE',
				'MEDIA_RULE',
				'FONT_FACE_RULE',
				'PAGE_RULE',
				'MARGIN_RULE',
				'NAMESPACE_RULE',
			]
		},
		CSSStyleRule: {
			link: '#the-cssstylerule-interface',
			mdnGroup: 'DOM',
			members: [
				'selectorText',
				'style',
			],
			extends: 'CSSGroupingRule',
		},
		CSSImportRule: {
			link: '#the-cssimportrule-interface',
			mdnGroup: 'DOM',
			members: [
				'href',
				'media',
				'styleSheet',
				'layerName',
				'supportsText',
			],
		},
		CSSGroupingRule: {
			link: '#the-cssgroupingrule-interface',
			mdnGroup: 'DOM',
			members: [
				'cssRules',
			],
			methods: ['insertRule', 'deleteRule'],
			extends: 'CSSRule',
		},
		CSSPageDescriptors: {
			link: '#the-csspagerule-interface',
			extends: 'CSSStyleDeclaration',
			members: [
				'margin',
				'marginTop',
				'marginRight',
				'marginBottom',
				'marginLeft',
				'margin-top',
				'margin-right',
				'margin-bottom',
				'margin-left',
				'size',
				'pageOrientation',
				'page-orientation',
				'marks',
				'bleed',
			],
		},
		CSSPageRule: {
			link: '#the-csspagerule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSGroupingRule',
			members: ['selectorText', 'style'],
		},
		CSSMarginRule: {
			link: '#the-cssmarginrule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSRule',
			members: ['name', 'style'],
		},
		CSSNamespaceRule: {
			link: '#the-cssnamespacerule-interface',
			mdnGroup: 'DOM',
			extends: 'CSSRule',
			members: ['namespaceURI', 'prefix'],
		},
		CSSStyleDeclaration: {
			link: '#the-cssstyledeclaration-interface',
			mdnGroup: 'DOM',
			tests: [
				'cssText',
				'length',
				'parentRule',
			],
			methods: [
				'item',
				'getPropertyValue',
				'getPropertyPriority',
				'setProperty',
				'removeProperty',
			]
		},
		CSSStyleProperties: {
			link: '#the-cssstyledeclaration-interface',
			extends: 'CSSStyleDeclaration',
			members: ['cssFloat'],
		}
	},
};
