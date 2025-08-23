export default {
	title: 'CSS Fonts Module Level 5',
	link: 'css-fonts-5',
	status: {
		stability: 'experimental',
	},
	properties: {
		'font-size-adjust': {
			link: '#font-size-adjust-prop',
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
			link: '#descdef-font-face-ascent-override',
			tests: ['normal 125%', '125% normal'],
		},
		'@font-face/descent-override': {
			link: '#descdef-font-face-descent-override',
			tests: ['normal 125%', '125% normal'],
		},
		'@font-face/font-size': {
			link: '#font-size-desc',
			tests: ['auto', '0.7', '0.7 0.9'],
		},
		'@font-face/line-gap-override': {
			link: '#descdef-font-face-line-gap-override',
			tests: ['normal 125%', '125% normal'],
		},
		'@font-face/size-adjust': {
			link: '#size-adjust-desc',
			tests: ['125%'],
		},
		'@font-face/subscript-position-override': {
			link: '#descdef-font-face-subscript-position-override',
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
			link: '#descdef-font-face-subscript-size-override',
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
			link: '#descdef-font-face-superscript-size-override',
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
			link: '#descdef-font-face-superscript-position-override',
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
