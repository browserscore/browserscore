export default {
	id: 'css-link-params-1',
	title: 'CSS Linked Parameters',
	links: {
		dev: 'css-link-params-1',
	},
	status: 'experimental',
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
	values: {
		properties: ['background-image'],
		'url() with param()': {
			links: {
				tr: '#setting-url',
				dev: '#setting-url'
			},
			tests: 'url("http://example.com/image.svg" param(--bg-color white))',
		}
	}
};
