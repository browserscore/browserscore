export default {
	title: 'Selectors Level 4',
	links: {
		tr: 'selectors-4',
		dev: 'selectors-4',
	},
	status: {
		stability: 'experimental',
	},
	selectors: {
		':indeterminate': {
			links: {
				tr: '#indeterminate',
				dev: '#indeterminate',
			},
			tests: ':indeterminate',
		},
		':blank': {
			links: {
				tr: '#blank',
				dev: '#blank',
			},
			tests: ':blank',
		},
		':placeholder-shown': {
			links: {
				tr: '#placeholder',
				dev: '#placeholder',
			},
			tests: ':placeholder-shown',
		},
		':default': {
			links: {
				tr: '#the-default-pseudo',
				dev: '#the-default-pseudo',
			},
			tests: ':default',
		},
		':valid': {
			links: {
				tr: '#validity-pseudos',
				dev: '#validity-pseudos',
			},
			tests: ':valid',
		},
		':invalid': {
			links: {
				tr: '#validity-pseudos',
				dev: '#validity-pseudos',
			},
			tests: ':invalid',
		},
		':in-range': {
			links: {
				tr: '#range-pseudos',
				dev: '#range-pseudos',
			},
			tests: ':in-range',
		},
		':out-of-range': {
			links: {
				tr: '#range-pseudos',
				dev: '#range-pseudos',
			},
			tests: ':out-of-range',
		},
		':user-invalid': {
			links: {
				tr: '#user-invalid-pseudo',
				dev: '#user-invalid-pseudo',
			},
			tests: ':user-invalid',
		},
		':required': {
			links: {
				tr: '#opt-pseudos',
				dev: '#opt-pseudos',
			},
			tests: ':required',
		},
		':optional': {
			links: {
				tr: '#opt-pseudos',
				dev: '#opt-pseudos',
			},
			tests: ':optional',
		},
		':user-invalid': {
			links: {
				tr: '#user-pseudos',
				dev: '#user-pseudos',
			},
			tests: ':user-invalid',
		},
		':user-valid': {
			links: {
				tr: '#user-pseudos',
				dev: '#user-pseudos',
			},
			tests: ':user-valid',
		},
		':read-only': {
			links: {
				tr: '#rw-pseudos',
				dev: '#rw-pseudos',
			},
			tests: ':read-only',
		},
		':read-write': {
			links: {
				tr: '#rw-pseudos',
				dev: '#rw-pseudos',
			},
			tests: ':read-write',
		},
		':autofill': {
			links: {
				tr: '#autofill',
				dev: '#autofill',
			},
			tests: ':autofill',
		},
		':focus-visible': {
			links: {
				tr: '#the-focus-visible-pseudo',
				dev: '#the-focus-visible-pseudo',
			},
			tests: ':focus-visible',
		},
		':focus-within': {
			links: {
				tr: '#the-focus-within-pseudo',
				dev: '#the-focus-within-pseudo',
			},
			tests: ':focus-within',
		},
		':current': {
			links: {
				tr: '#the-current-pseudo',
				dev: '#the-current-pseudo',
			},
			tests: ':current',
		},
		':current()': {
			links: {
				tr: '#the-current-pseudo',
				dev: '#the-current-pseudo',
			},
			tests: ':current(p, li, dt, dd)',
		},
		':past': {
			links: {
				tr: '#the-past-pseudo',
				dev: '#the-past-pseudo',
			},
			tests: ':past',
		},
		':future': {
			links: {
				tr: '#the-future-pseudo',
				dev: '#the-future-pseudo',
			},
			tests: ':future',
		},
		':playing': {
			links: {
				tr: '#selectordef-playing',
				dev: '#selectordef-playing',
			},
			tests: ':playing',
		},
		':paused': {
			links: {
				tr: '#selectordef-paused',
				dev: '#selectordef-paused',
			},
			tests: ':paused',
		},
		':muted': {
			links: {
				tr: '#selectordef-muted',
				dev: '#selectordef-muted',
			},
			tests: ':muted',
		},
		':volume-locked': {
			links: {
				tr: '#selectordef-volume-locked',
				dev: '#selectordef-volume-locked',
			},
			tests: ':volume-locked',
		},
		':seeking': {
			links: {
				tr: '#selectordef-seeking',
				dev: '#selectordef-seeking',
			},
			tests: ':seeking',
		},
		':buffering': {
			links: {
				tr: '#selectordef-buffering',
				dev: '#selectordef-buffering',
			},
			tests: ':buffering',
		},
		':stalled': {
			links: {
				tr: '#selectordef-stalled',
				dev: '#selectordef-stalled',
			},
			tests: ':stalled',
		},
		':modal': {
			links: {
				tr: '#modal-state',
				dev: '#modal-state',
			},
			tests: ':modal',
		},
		':fullscreen': {
			links: {
				tr: '#fullscreen-state',
				dev: '#fullscreen-state',
			},
			tests: ':fullscreen',
		},
		':picture-in-picture': {
			links: {
				tr: '#pip-state',
				dev: '#pip-state',
			},
			tests: ':picture-in-picture',
		},
		':scope': {
			links: {
				tr: '#the-scope-pseudo',
				dev: '#the-scope-pseudo',
			},
			tests: ':scope',
		},
		':any-link': {
			links: {
				tr: '#the-any-link-pseudo',
				dev: '#the-any-link-pseudo',
			},
			tests: ':any-link',
		},
		':local-link': {
			links: {
				tr: '#the-local-link-pseudo',
				dev: '#the-local-link-pseudo',
			},
			tests: ':local-link',
		},
		':target-within': {
			links: {
				tr: '#the-target-within-pseudo',
				dev: '#the-target-within-pseudo',
			},
			tests: ':target-within',
		},
		':lang()': {
			links: {
				tr: '#the-lang-pseudo',
				dev: '#the-lang-pseudo',
			},
			tests: [':lang(zh, "*-hant")'],
		},
		':not()': {
			links: {
				tr: '#negation',
				dev: '#negation',
			},
			tests: [':not(em, #foo)'],
		},
		':where()': {
			links: {
				tr: '#zero-matches',
				dev: '#zero-matches',
			},
			tests: [':where(em, #foo)', ':where(:not(:hover))'],
		},
		':is()': {
			links: {
				tr: '#matches',
				dev: '#matches',
			},
			tests: [':is(em, #foo)', ':is(:not(:hover))'],
		},
		':has()': {
			links: {
				tr: '#relational',
				dev: '#relational',
			},
			tests: [
				'a:has(> img)',
				'dt:has(+ dt)',
				'section:not(:has(h1, h2, h3, h4, h5, h6))',
				'section:has(:not(h1, h2, h3, h4, h5, h6))',
			],
		},
		':defined': {
			links: {
				tr: '#the-defined-pseudo',
				dev: 'the-defined-pseudo',
			},
			tests: [':defined'],
		},
		':nth-child()': {
			links: {
				tr: '#the-nth-child-pseudo',
				dev: '#the-nth-child-pseudo',
			},
			tests: [':nth-child(-n+3 of li.important)', ':nth-child(even of :not([hidden])'],
		},
		':nth-last-child()': {
			links: {
				tr: '#the-nth-last-child-pseudo',
				dev: '#the-nth-last-child-pseudo',
			},
			tests: [':nth-last-child(-n+3 of li.important)', ':nth-last-child(even of :not([hidden])'],
		},
		'||': {
			links: {
				tr: '#the-column-combinator',
				dev: '#the-column-combinator',
			},
			tests: 'foo || bar',
		},
		':nth-col()': {
			links: {
				tr: '#the-nth-col-pseudo',
				dev: '#the-nth-col-pseudo',
			},
			tests: [
				':nth-col(even)',
				':nth-col(odd)',
				':nth-col(n)',
				':nth-col(-n)',
				':nth-col(0n)',
				':nth-col(1)',
				':nth-col(-1)',
				':nth-col(0)',
				':nth-col(n+1)',
				':nth-col(3n+1)',
				':nth-col(3n + 1)',
				':nth-col(-n+1)',
				':nth-col(3n-1)',
			],
		},
		':nth-last-col()': {
			links: {
				tr: '#the-nth-last-col-pseudo',
				dev: '#the-nth-last-col-pseudo',
			},
			tests: [
				':nth-last-col(even)',
				':nth-last-col(odd)',
				':nth-last-col(n)',
				':nth-last-col(-n)',
				':nth-last-col(0n)',
				':nth-last-col(1)',
				':nth-last-col(-1)',
				':nth-last-col(0)',
				':nth-last-col(n+1)',
				':nth-last-col(3n+1)',
				':nth-last-col(3n + 1)',
				':nth-last-col(-n+1)',
				':nth-last-col(3n-1)',
			],
		},
		'[att^=val i]': {
			links: {
				tr: '#attribute-case',
				dev: '#attribute-case',
				mdn: 'Attribute_selectors',
			},
			tests: ['[att^=val i]', '[att^="val" i]', '[att^=val I]', '[att^="val" I]'],
		},
		'[att*=val i]': {
			links: {
				tr: '#attribute-case',
				dev: '#attribute-case',
				mdn: 'Attribute_selectors',
			},
			tests: ['[att*=val i]', '[att*="val" i]', '[att*=val I]', '[att*="val" I]'],
		},
		'[att$=val i]': {
			links: {
				tr: '#attribute-case',
				dev: '#attribute-case',
				mdn: 'Attribute_selectors',
			},
			tests: ['[att$=val i]', '[att$="val" i]', '[att$=val I]', '[att$="val" I]'],
		},
		'[att^=val s]': {
			links: {
				tr: '#attribute-case',
				dev: '#attribute-case',
				mdn: 'Attribute_selectors',
			},
			tests: ['[att^=val s]', '[att^="val" s]', '[att^=val S]', '[att^="val" S]'],
		},
		'[att*=val s]': {
			links: {
				tr: '#attribute-case',
				dev: '#attribute-case',
				mdn: 'Attribute_selectors',
			},
			tests: ['[att*=val s]', '[att*="val" s]', '[att*=val S]', '[att*="val" S]'],
		},
		'[att$=val s]': {
			links: {
				tr: '#attribute-case',
				dev: '#attribute-case',
				mdn: 'Attribute_selectors',
			},
			tests: ['[att$=val s]', '[att$="val" s]', '[att$=val S]', '[att$="val" S]'],
		},
	},
};
