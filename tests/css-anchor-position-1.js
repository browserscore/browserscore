export default {
	title: 'CSS Anchor Positioning',
	links: {
		tr: 'css-anchor-position-1',
		dev: 'css-anchor-position-1',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		'anchor()': {
			links: {
				tr: '#anchor-pos',
				dev: '#anchor-pos',
			},
			properties: [
				'top',
				'right',
				'bottom',
				'left',
				'inset-block-start',
				'inset-block-end',
				'inset-inline-start',
				'inset-inline-end',
				'inset-block',
				'inset-inline',
				'inset',
			],
			tests: [
				'anchor(inside)',
				'anchor(outside)',
				'anchor(top)',
				'anchor(left)',
				'anchor(right)',
				'anchor(bottom)',
				'anchor(start)',
				'anchor(end)',
				'anchor(self-start)',
				'anchor(self-end)',
				'anchor(center)',
				'anchor(30%)',
				'anchor(inside, 20px)',
				'anchor(outside, 20px)',
				'anchor(top, 20px)',
				'anchor(start, 20px)',
				'anchor(30%, 20px)',
				'anchor(--anchor top)',
				'anchor(--anchor top, 20px)',
				'anchor(--anchor top, 5%)',
				'anchor(implicit top)',
				'anchor(implicit top, 20px)',
				'anchor(implicit top, 5%)',
			],
		},
		'anchor-center': {
			links: {
				dev: '#anchor-center',
			},
			properties: [
				'justify-self',
				'align-self',
				'justify-items',
				'align-items',
			],
			tests: [
				'anchor-center',
			],
		},
		'anchor-size()': {
			links: {
				tr: '#anchor-size-fn',
				dev: '#anchor-size-fn',
			},
			properties: [
				'width',
				'height',
				'min-width',
				'min-height',
				'max-width',
				'max-height',
			],
			tests: [
				'anchor-size(width)',
				'anchor-size(height)',
				'anchor-size(block)',
				'anchor-size(inline)',
				'anchor-size(self-block)',
				'anchor-size(self-inline)',
				'anchor-size(--anchor width)',
				'anchor-size(--anchor width, 20px)',
				'anchor-size(--anchor width, 5%)',
				'anchor-size(implicit width)',
				'anchor-size(implicit width, 20px)',
				'anchor-size(implicit width, 5%)',
			],
		},
	},
	properties: {
		'anchor-default': {
			links: {
				tr: '#anchor-default',
				dev: '#anchor-default',
			},
			tests: ['--anchor', 'implicit'],
		},
		'anchor-name': {
			links: {
				tr: '#name',
				dev: '#name',
			},
			tests: ['none', '--anchor'],
		},
		'inset-area': {
			links: {
				dev: '#inset-area',
			},
			tests: [
				'none',
				'start',
				'end',
				'center',
				'self-start',
				'self-end',
				'top',
				'bottom',
				'left',
				'right',
				'x-start',
				'x-end',
				'y-start',
				'y-end',
				'x-self-start',
				'x-self-end',
				'y-self-start',
				'y-self-end',
				'all',
				'start end',
				'start center end',
				'self-start self-end',
				'self-start center self-end',
				'top bottom',
				'top center bottom',
				'left right',
				'left center right',
				'x-start x-end',
				'x-start center x-end',
				'y-start y-end',
				'y-start center y-end',
				'x-self-start x-self-end',
				'x-self-start center x-self-end',
				'y-self-start y-self-end',
				'y-self-start center y-self-end',
				'left / bottom',
				'x-start / y-end',
			],
		},
		'position-fallback': {
			links: {
				tr: '#fallback-property',
				dev: '#fallback-property',
			},
			tests: ['none', '--fallback'],
		},
		'position-fallback-bounds': {
			links: {
				tr: '#fallback-bounds',
				dev: '#fallback-bounds',
			},
			tests: ['normal', '--fallback'],
		},
	},
	'@rules': {
		'@position-fallback': {
			links: {
				tr: '#fallback-rule',
				dev: '#fallback-rule',
			},
			tests: "@position-fallback --button-popover {\n  @try {\n    top: anchor(--button bottom);\n    left: anchor(--button left);\n  }\n\n  @try {\n    bottom: anchor(--button top);\n    right: anchor(--button right);\n  }\n}",
		},
	},
	interfaces: {
		CSSPositionFallbackRule: {
			links: {
				dev: '#position-fallback-rule',
				mdnGroup: 'DOM',
			},
			tests: ['name', 'cssRules', 'insertRule', 'deleteRule'],
			required: '@position-fallback --button-popover { @try { top: anchor(--button bottom); left: anchor(--button left); } }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
		CSSTryRule: {
			links: {
				dev: '#position-try-rule',
				mdnGroup: 'DOM',
			},
			tests: ['style', 'cssText', 'parentRule', 'parentStyleSheet'],
			required: '@position-fallback --button-popover { @try { top: anchor(--button bottom); left: anchor(--button left); } }',
			interface: function(style) {
				return style.sheet.cssRules[0].cssRules[0];
			}
		},
	},
};
