export default {
	title: 'CSS Containment Module Level 3',
	link: 'css-contain-3',
	status: 'experimental',
	atrules: {
		'@container': {
			link: '#container-rule',
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
			link: '#container-lengths',
			mdn: 'length',
			tests: '5cqw',
		},
		cqh: {
			link: '#container-lengths',
			mdn: 'length',
			tests: '5cqh',
		},
		cqi: {
			link: '#container-lengths',
			mdn: 'length',
			tests: '5cqi',
		},
		cqb: {
			link: '#container-lengths',
			mdn: 'length',
			tests: '5cqb',
		},
		cqmin: {
			link: '#container-lengths',
			mdn: 'length',
			tests: '5cqmin',
		},
		cqmax: {
			link: '#container-lengths',
			mdn: 'length',
			tests: '5cqmax',
		},
	},
	properties: {
		'container-type': {
			link: '#container-type',
			tests: [
				'normal',
				'size',
				'inline-size',
			],
		},
		'container-name': {
			link: '#container-name',
			tests: ['none', 'x', 'x y'],
		},
		container: {
			link: '#container-shorthand',
			tests: [
				'none',
				'x / normal',
				'x / size',
				'x / inline-size',
				'x y / size',
			],
		},
	},
	interfaces: {
		CSSContainerRule: {
			link: '#the-csscontainerrule-interface',
			links: {
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
