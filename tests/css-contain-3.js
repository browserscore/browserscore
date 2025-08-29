export default {
	id: 'css-contain-3',
	title: 'CSS Containment Module Level 3',
	link: 'css-contain-3',
	status: 'experimental',
	atrules: {
		'@container': {
			link: '#container-rule',
			preludeRequired: true,
			preludes: [
				'(min-width: 0px)',
				'(max-width: 0px)',
				'(width >= 0px)',
				'(height >= 0px)',
				'(inline-size >= 0px)',
				'(block-size >= 0px)',
				'(aspect-ratio >= 1 / 1)',
				'(orientation = portrait)',
				'(width >= 0px) and (orientation = portrait)',
				'(width >= 0px) or (orientation: portrait)',
				'not (width < 0px)',
				'foo (width >= 0px)',
				'foo (inline-size > 0px) and style(--responsive = true)',
			],
		},
		'`@container style()`': {
			id: '@container',
			link: '#container-rule',
			preludeRequired: true,
			preludes: [
				'style(--foo: bar)',
				'style(background-color: red)',
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
			mdnGroup: 'DOM',
			tests: ['containerName', 'containerQuery', 'conditionText'],
		},
	},
};
