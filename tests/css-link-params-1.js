export default {
	title: 'CSS Linked Parameters',
	links: {
		dev: 'css-link-params-1',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'link-parameters': {
			links: {
				dev: '#link-param-prop',
			},
			tests: [
				'none',
				'param(--foo)',
				'param(--foo 10px)',
				'param(--foo, --bar)',
				'param(--foo 10px, --bar)',
			],
		},
	},
};
