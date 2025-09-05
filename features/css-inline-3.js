export default {
	id: 'css-inline-3',
	title: 'CSS Inline Layout Module Level 3',
	links: {
		dev: 'css-inline-3',
		tr: 'css-inline-3',
	},
	status: 'experimental',
	properties: {
		'alignment-baseline': {
			links: {
				dev: '#alignment-baseline-property',
				tr: '#alignment-baseline-property',
			},
			tests: [
				'baseline',
				'text-bottom',
				'alphabetic',
				'ideographic',
				'middle',
				'central',
				'mathematical',
				'text-top',
			],
		},
		'baseline-shift': {
			links: {
				dev: '#baseline-shift-property',
				tr: '#baseline-shift-property',
			},
			tests: [
				'5px',
				'10%',
				'sub',
				'super',
				'top',
				'center',
				'bottom',
			],
		},
		'baseline-source': {
			links: {
				dev: '#baseline-source',
				tr: '#baseline-source',
			},
			tests: [
				'auto',
				'first',
				'last',
			],
		},
		'dominant-baseline': {
			links: {
				dev: '#dominant-baseline-property',
				tr: '#dominant-baseline-property',
			},
			tests: [
				'auto',
				'text-bottom',
				'alphabetic',
				'ideographic',
				'middle',
				'central',
				'mathematical',
				'hanging',
				'text-top',
			],
		},
		'initial-letter': {
			links: {
				dev: '#sizing-drop-initials',
				tr: '#sizing-drop-initials',
			},
			tests: [
				'normal',
				'1.4 3',
				'1.4',
				'1.4 drop',
				'1.4 raise',
			],
		},
		'initial-letter-align': {
			links: {
				dev: '#aligning-initial-letter',
				tr: '#aligning-initial-letter',
			},
			tests: [
				'border-box',
				'alphabetic',
				'ideographic',
				'hanging',
				'leading',
				'border-box alphabetic'
			],
		},
		'initial-letter-wrap': {
			links: {
				dev: '#initial-letter-wrapping',
				tr: '#initial-letter-wrapping',
			},
			tests: [
				'none',
				'first',
				'all',
				'grid',
				'30px',
				'10%',
			],
		},
		'inline-sizing': {
			links: {
				dev: '#line-fill',
				tr: '#line-fill',
			},
			tests: [
				'normal',
				'stretch',
			],
		},
		'line-fit-edge': {
			links: {
				dev: '#text-edges',
				tr: '#text-edges',
			},
			tests: [
				'leading',
				'text',
				'cap',
				'ex',
				'ideographic',
				'ideographic-ink',
				'text text',
				'text alphabetic',
				'cap ideographic',
				'ideographic ideographic-ink',
			],
		},
		'text-box': {
			links: {
				dev: '#text-box-shorthand',
				tr: '#text-box-shorthand',
			},
			tests: [
				'normal',
				'none',
				'trim-start',
				'trim-end',
				'trim-both',
				'auto',
				'text',
				'cap',
				'ex',
				'ideographic',
				'ideographic-ink',
				'text text',
				'text alphabetic',
				'cap ideographic',
				'ideographic ideographic-ink',
				'trim-start text',
				'trim-end cap',
				'trim-both ex',
			],
		},
		'text-box-edge': {
			links: {
				dev: '#text-box-edge',
				tr: '#text-box-edge',
			},
			tests: [
				'auto',
				'text',
				'cap',
				'ex',
				'ideographic',
				'ideographic-ink',
				'text text',
				'text alphabetic',
				'cap ideographic',
				'ideographic ideographic-ink',
			],
		},
		'text-box-trim': {
			links: {
				dev: '#text-box-trim',
				tr: '#text-box-trim',
			},
			tests: ['none', 'trim-start', 'trim-end', 'trim-both'],
		},
		'vertical-align': {
			links: {
				dev: '#transverse-alignment',
				tr: '#transverse-alignment',
			},
			tests: [
				'first',
				'last',
				'alphabetic',
				'ideographic',
				'central',
				'mathematical',
				'center',
				'first text-bottom',
				'last sub',
				'super text-bottom first'
			],
		},
	},
};
