export default {
	title: 'CSS Overflow Module Level 4',
	links: {
		tr: 'css-overflow-4',
		dev: 'css-overflow-4',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'overflow-clip-margin-top': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
		'overflow-clip-margin-right': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
		'overflow-clip-margin-bottom': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
		'overflow-clip-margin-left': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
		'overflow-clip-margin-block-start': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
		'overflow-clip-margin-inline-start': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
		'overflow-clip-margin-block-end': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
		'overflow-clip-margin-inline-end': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
		'overflow-clip-margin-block': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
		'overflow-clip-margin-inline': {
			links: {
				tr: '#overflow-clip-margin',
				dev: '#overflow-clip-margin',
			},
			tests: [
				'content-box',
				'padding-box',
				'border-box',
				'20px',
				'content-box 20px',
				'20px content-box',
			],
		},
	},
	selectors: {
		'::nth-fragment()': {
			links: {
				tr: '#fragment-pseudo-element',
				dev: '#fragment-pseudo-element',
			},
			tests: [
				':nth-fragment(even)',
				':nth-fragment(odd)',
				':nth-fragment(n)',
				':nth-fragment(-n)',
				':nth-fragment(0n)',
				':nth-fragment(1)',
				':nth-fragment(-1)',
				':nth-fragment(0)',
				':nth-fragment(n+1)',
				':nth-fragment(3n+1)',
				':nth-fragment(3n + 1)',
				':nth-fragment(-n+1)',
				':nth-fragment(3n-1)',
			],
		},
	},
};
