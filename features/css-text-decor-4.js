export default {
	id: 'css-text-decor-4',
	title: 'CSS Text Decoration Module Level 4',
	link: 'css-text-decor-4',
	status: 'experimental',
	properties: {
		'text-decoration': {
			link: '#text-decoration-property',
			tests: ['underline solid blue 1px'],
		},
		'text-decoration-skip': {
			link: '#text-decoration-skip-property',
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
		'text-decoration-skip-box': {
			link: '#text-decoration-skip-box-property',
			tests: ['none', 'all'],
		},
		'text-decoration-skip-ink': {
			link: '#text-decoration-skip-ink-property',
			tests: ['none', 'auto'],
		},
		'text-decoration-skip-self': {
			link: '#text-decoration-skip-self-property',
			tests: [
				'auto',
				'skip-all',
				'skip-underline',
				'skip-overline',
				'skip-line-through',
				'skip-underline skip-overline',
				'skip-underline skip-line-through',
				'skip-underline skip-overline skip-line-through',
				'no-skip',
			],
		},
		'text-decoration-skip-spaces': {
			link: '#text-decoration-skip-spaces-property',
			tests: [
				'none',
				'all',
				'start',
				'end',
				'start end',
			],
		},
		'text-decoration-trim': {
			link: '#text-decoration-skip-inset-property',
			tests: [
				'auto',
				'10px',
				'5px 10px',
			],
		},
		'text-underline-offset': {
			link: '#underline-offset',
			tests: ['auto', '3px', '10%'],
		},
		'text-underline-position': {
			link: '#text-underline-position-property',
			tests: [
				'from-font',
				'from-font left',
				'from-font right',
				'right from-font',
			],
		},
		'text-decoration-thickness': {
			link: '#text-decoration-thickness-property',
			tests: ['auto', 'from-font', '3px', '10%'],
		},
		'text-shadow': {
			link: '#text-shadow-property',
			tests: ['1px 2px 3px 4px black'],
		},
	},
};
