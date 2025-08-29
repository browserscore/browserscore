export default {
	id: 'css-fonts-5',
	title: 'CSS Fonts Module Level 5',
	link: 'css-fonts-5',
	status: 'experimental',
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
	atrules: {
		'`@font-face` descriptors': {
			id: '@font-face',
			link: '#at-font-face-rule',
			isGroup: true,
			descriptors: {
				'ascent-override': {
					link: '#descdef-font-face-ascent-override',
					values: ['normal 125%', '125% normal'],
				},
				'descent-override': {
					link: '#descdef-font-face-descent-override',
					values: ['normal 125%', '125% normal'],
				},
				'font-size': {
					link: '#font-size-desc',
					values: ['auto', '0.7', '0.7 0.9'],
				},
				'line-gap-override': {
					link: '#descdef-font-face-line-gap-override',
					values: ['normal 125%', '125% normal'],
				},
				'size-adjust': {
					link: '#size-adjust-desc',
					values: ['125%'],
				},
				'subscript-position-override': {
					link: '#descdef-font-face-subscript-position-override',
					values: [
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
				'subscript-size-override': {
					link: '#descdef-font-face-subscript-size-override',
					values: [
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
				'superscript-size-override': {
					link: '#descdef-font-face-superscript-size-override',
					values: [
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
				'superscript-position-override': {
					link: '#descdef-font-face-superscript-position-override',
					values: [
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

			}
		},
	},
};
