export default {
	title: 'Compositing and Blending Level 2',
	links: {
		tr: 'compositing-2',
		dev: 'compositing-2',
		devtype: 'fxtf',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'mix-blend-mode': {
			links: {
				tr: '#mix-blend-mode',
				dev: '#mix-blend-mode',
			},
			tests: [
				'plus-darker',
				'plus-lighter'
			],
		},
	},
};
