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
				'@container (min-width: 150px) { div { margin: 10px } }',
				'@container (max-width: 1000px) { div { margin: 10px } }',
				'@container (width >= 150px) { div { margin: 10px } }',
				'@container (height >= 150px) { div { margin: 10px } }',
				'@container (inline-size >= 150px) { div { margin: 10px } }',
				'@container (block-size >= 150px) { div { margin: 10px } }',
				'@container (aspect-ratio >= 1 / 1) { div { margin: 10px } }',
				'@container (orientation = portrait) { div { margin: 10px } }',
				'@container (width >= 150px) and (orientation = portrait) { div { margin: 10px } }',
				'@container (width >= 150px) or (orientation = portrait) { div { margin: 10px } }',
				'@container not (width < 150px) { div { margin: 10px } }',
				'@container style(pointer) { div { margin: 10px } }',
				'@container style(pointer: fine) { div { margin: 10px } }',
				'@container x (width >= 150px) { div { margin: 10px } }',
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
				'size',
				'inline-size',
				'style size',
				'style inline-size',
			],
		},
		'container-name': {
			links: {
				tr: '#container-name',
				dev: '#container-name',
			},
			tests: ['none', 'x', 'x y'],
		},
		container: {
			links: {
				tr: '#container-shorthand',
				dev: '#container-shorthand',
			},
			tests: ['none', 'style', 'x / size', 'x y / size', 'x / size style'],
		},
	},
	interfaces: {
		CSSContainerRule: {
			links: {
				tr: '#the-csscontainerrule-interface',
				dev: '#the-csscontainerrule-interface',
				mdnGroup: 'DOM',
			},
			tests: ['containerName', 'containerQuery', 'conditionText'],
			required: '@container (min-width: 500px) { }',
			interface: function(style) {
				return style.sheet.cssRules[0];
			}
		},
	},
};
