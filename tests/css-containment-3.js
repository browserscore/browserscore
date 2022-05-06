export default {
	title: 'CSS Containment Module Level 3',
	links: {
		tr: 'css-contain-3',
		dev: 'css-contain-3',
	},
	status: {
		stability: 'experimental',
	},
	'@rules': {
		'@container': {
			links: {
				tr: '#container-rule',
				dev: '#container-rule',
			},
			tests: [
				'@container size(width >= 150px) { div { margin: 10px } }',
				'@container size(height >= 150px) { div { margin: 10px } }',
				'@container size(inline-size >= 150px) { div { margin: 10px } }',
				'@container size(block-size >= 150px) { div { margin: 10px } }',
				'@container size(aspect-ratio >= 1 / 1) { div { margin: 10px } }',
				'@container size(orientation = portrait) { div { margin: 10px } }',
				'@container style(pointer) { div { margin: 10px } }',
				'@container style(pointer: fine) { div { margin: 10px } }',
				'@container x size(width >= 150px) { div { margin: 10px } }',
				'@container name(x) size(width >= 150px) { div { margin: 10px } }',
				'@container type(inline-size) size(width >= 150px) { div { margin: 10px } }',
				'@container name(x) type(inline-size) size(width >= 150px) { div { margin: 10px } }',
				'@container card (inline-size > 30em) and style(--responsive = true) { div { margin: 10px }  }',
			],
		},
	},
	values: {
		properties: ['width'],
		cqw: {
			links: {
				tr: '#container-lengths',
				dev: '#container-lengths',
				mdn: 'length',
			},
			tests: '5cqw',
		},
		cqh: {
			links: {
				tr: '#container-lengths',
				dev: '#container-lengths',
				mdn: 'length',
			},
			tests: '5cqh',
		},
		cqi: {
			links: {
				tr: '#container-lengths',
				dev: '#container-lengths',
				mdn: 'length',
			},
			tests: '5cqi',
		},
		cqb: {
			links: {
				tr: '#container-lengths',
				dev: '#container-lengths',
				mdn: 'length',
			},
			tests: '5cqb',
		},
		cqmin: {
			links: {
				tr: '#container-lengths',
				dev: '#container-lengths',
				mdn: 'length',
			},
			tests: '5cqmin',
		},
		cqmax: {
			links: {
				tr: '#container-lengths',
				dev: '#container-lengths',
				mdn: 'length',
			},
			tests: '5cqmax',
		},
	},
	properties: {
		'container-type': {
			links: {
				tr: '#container-type',
				dev: '#container-type',
			},
			tests: [
				'none',
				'style',
				'state',
				'size',
				'inline-size',
				'block-size',
				'style state',
				'style state size',
				'style state inline-size',
				'style state block-size',
			],
		},
		'container-name': {
			links: {
				tr: '#container-name',
				dev: '#container-name',
			},
			tests: ['none', 'x', '"x"', 'x y'],
		},
		container: {
			links: {
				tr: '#container-shorthand',
				dev: '#container-shorthand',
			},
			tests: ['none', 'style', 'size / x'],
		},
	},
};
