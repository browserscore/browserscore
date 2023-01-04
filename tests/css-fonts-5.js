export default {
	title: 'CSS Fonts Module Level 5',
	links: {
		tr: 'css-fonts-5',
		dev: 'css-fonts-5',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'font-size-adjust': {
			links: {
				tr: '#font-size-adjust-prop',
				dev: '#font-size-adjust-prop',
			},
			tests: [
				'ex-height 0.545',
				'ex-height from-font',
				'cap-height 0.545',
				'cap-height from-font',
				'ch-width 0.545',
				'ch-width from-font',
				'ic-width 0.545',
				'ic-width from-font',
				'ic-height 0.545',
				'ic-height from-font',
				'from-font',
			],
		},
	},
	descriptors: {
		'@font-face/ascent-override': {
			links: {
				tr: '#descdef-font-face-ascent-override',
				dev: '#descdef-font-face-ascent-override',
			},
			tests: ['normal 125%', '125% normal'],
		},
		'@font-face/descent-override': {
			links: {
				tr: '#descdef-font-face-descent-override',
				dev: '#descdef-font-face-descent-override',
			},
			tests: ['normal 125%', '125% normal'],
		},
		'@font-face/font-size': {
			links: {
				tr: '#font-size-desc',
				dev: '#font-size-desc',
			},
			tests: ['auto', '0.7', '0.7 0.9'],
		},
		'@font-face/line-gap-override': {
			links: {
				tr: '#descdef-font-face-line-gap-override',
				dev: '#descdef-font-face-line-gap-override',
			},
			tests: ['normal 125%', '125% normal'],
		},
		'@font-face/size-adjust': {
			links: {
				tr: '#size-adjust-desc',
				dev: '#size-adjust-desc',
			},
			tests: ['125%'],
		},
		'@font-face/subscript-position-override': {
			links: {
				tr: '#descdef-font-face-subscript-position-override',
				dev: '#descdef-font-face-subscript-position-override',
			},
			tests: [
				'normal',
				'from-font',
				'125%',
				'normal normal',
				'normal 125%',
				'normal from-font',
				'125% normal',
				'from-font normal',
			],
		},
		'@font-face/subscript-size-override': {
			links: {
				tr: '#descdef-font-face-subscript-size-override',
				dev: '#descdef-font-face-subscript-size-override',
			},
			tests: [
				'normal',
				'from-font',
				'125%',
				'normal normal',
				'normal 125%',
				'normal from-font',
				'125% normal',
				'from-font normal',
			],
		},
		'@font-face/superscript-size-override': {
			links: {
				tr: '#descdef-font-face-superscript-size-override',
				dev: '#descdef-font-face-superscript-size-override',
			},
			tests: [
				'normal',
				'from-font',
				'125%',
				'normal normal',
				'normal 125%',
				'normal from-font',
				'125% normal',
				'from-font normal',
			],
		},
		'@font-face/superscript-position-override': {
			links: {
				tr: '#descdef-font-face-superscript-position-override',
				dev: '#descdef-font-face-superscript-position-override',
			},
			tests: [
				'normal',
				'from-font',
				'125%',
				'normal normal',
				'normal 125%',
				'normal from-font',
				'125% normal',
				'from-font normal',
			],
		},
	},
};
