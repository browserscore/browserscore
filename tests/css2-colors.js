export default {
	title: 'CSS 2 Colors and Backgrounds',
	links: {
		tr: 'CSS22/colors.html',
		dev: 'css2/',
	},
	status: {
		stability: 'stable',
		'first-snapshot': 2.2,
		'last-snapshot': 2.2,
	},
	properties: {
		'background-attachment': {
			link: '#propdef-background-attachment',
			tests: ['scroll', 'fixed'],
		},
		'background-color': {
			link: '#propdef-background-color',
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)', 'transparent'],
		},
		'background-image': {
			link: '#propdef-background-image',
			tests: ['none', "url('image.png')", 'url(image.png)'],
		},
		'background-position': {
			link: '#propdef-background-position',
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
			link: '#propdef-background-repeat',
			tests: ['repeat', 'repeat-x', 'repeat-y', 'no-repeat'],
		},
		background: {
			link: '#propdef-background',
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
			link: '#colors',
			tests: ['black', '#00f', '#000000', 'rgb(255, 255, 255)', 'rgb(100%, 50%, 50%)'],
		},
	},
};
