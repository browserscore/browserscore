export default {
	title: 'CSS 2 Colors and Backgrounds',
	links: {
		tr: 'CSS22/colors.html',
		dev: 'css2/',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 1998,
		'last-snapshot': 1998,
	},
	properties: {
		'background-attachment': {
			links: {
				tr: '#propdef-background-attachment',
				dev: '#propdef-background-attachment',
			},
			tests: ['scroll', 'fixed'],
		},
		'background-color': {
			links: {
				tr: '#propdef-background-color',
				dev: '#propdef-background-color',
			},
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)', 'transparent'],
		},
		'background-image': {
			links: {
				tr: '#propdef-background-image',
				dev: '#propdef-background-image',
			},
			tests: ['none', "url('image.png')", 'url(image.png)'],
		},
		'background-position': {
			links: {
				tr: '#propdef-background-position',
				dev: '#propdef-background-position',
			},
			tests: [
				'10% 100px',
				'100px center',
				'center 10%',
				'left',
				'center',
				'right',
				'top',
				'bottom',
				'left center',
				'center bottom',
			],
		},
		'background-repeat': {
			links: {
				tr: '#propdef-background-repeat',
				dev: '#propdef-background-repeat',
			},
			tests: ['repeat', 'repeat-x', 'repeat-y', 'no-repeat'],
		},
		background: {
			links: {
				tr: '#propdef-background',
				dev: '#propdef-background',
			},
			tests: [
				'none',
				'black',
				"url('image.png')",
				'repeat-x',
				'fixed',
				'10% center',
				"#ffffff url('image.png')",
				'url(image.png) repeat-y',
				'scroll center 100px',
			],
		},
		color: {
			links: {
				tr: '#colors',
				dev: '#colors',
			},
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)'],
		},
	},
};
