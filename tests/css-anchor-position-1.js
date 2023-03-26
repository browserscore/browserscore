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
				'anchor(auto)',
				'anchor(auto-same)',
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
				'anchor(auto, 20px)',
				'anchor(auto-same, 20px)',
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
		'anchor-size()': {
			links: {
				tr: '#anchor-pos',
				dev: '#anchor-pos',
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
				tr: '#determining',
				dev: '#determining',
			},
			tests: ['none', '--anchor'],
		},
		'anchor-scroll': {
			links: {
				tr: '#scroll',
				dev: '#scroll',
			},
			tests: ['none', 'default', '--anchor', 'implicit'],
		},
		'position-fallback': {
			links: {
				tr: '#fallback-property',
				dev: '#fallback-property',
			},
			tests: ['none', '--fallback'],
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
};
