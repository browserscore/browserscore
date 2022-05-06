export default {
	title: 'CSS Text Decoration Module Level 4',
	links: {
		tr: 'css-text-decor-4',
		dev: 'css-text-decor-4',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'text-decoration': {
			links: {
				tr: '#text-decoration-property',
				dev: '#text-decoration-property',
			},
			tests: ['underline solid blue 1px'],
		},
		'text-decoration-skip': {
			links: {
				tr: '#text-decoration-skip-property',
				dev: '#text-decoration-skip-property',
			},
			tests: [
				'none',
				'objects',
				'objects spaces',
				'objects leading-spaces',
				'objects trailing-spaces',
				'objects leading-spaces trailing-spaces',
				'objects leading-spaces trailing-spaces edges',
				'objects leading-spaces trailing-spaces edges box-decoration',
				'objects edges',
				'objects box-decoration',
				'spaces',
				'spaces edges',
				'spaces edges box-decoration',
				'spaces box-decoration',
				'leading-spaces',
				'leading-spaces trailing-spaces edges',
				'leading-spaces trailing-spaces edges box-decoration',
				'edges',
				'edges box-decoration',
				'box-decoration',
			],
		},
		'text-decoration-skip-ink': {
			links: {
				tr: '#text-decoration-skip-ink-property',
				dev: '#text-decoration-skip-ink-property',
			},
			tests: ['none', 'auto'],
		},
		'text-underline-offset': {
			links: {
				tr: '#underline-offset',
				dev: '#underline-offset',
			},
			tests: ['auto', '3px', '10%'],
		},
		'text-decoration-thickness': {
			links: {
				tr: '#underline-offset',
				dev: '#text-decoration-width-property',
			},
			tests: ['auto', 'from-font', '3px', '10%'],
		},
		'text-shadow': {
			links: {
				tr: '#text-shadow-property',
				dev: '#text-shadow-property',
			},
			tests: ['1px 2px 3px 4px black'],
		},
	},
};
