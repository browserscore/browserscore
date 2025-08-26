export default {
	title: 'Selectors Level 4',
	link: 'selectors-4',
	status: 'experimental',
	selectors: {
		':indeterminate': {
			link: '#indeterminate',
			tests: ':indeterminate',
		},
		':blank': {
			link: '#blank',
			tests: ':blank',
		},
		':placeholder-shown': {
			link: '#placeholder',
			tests: ':placeholder-shown',
		},
		':default': {
			link: '#the-default-pseudo',
			tests: ':default',
		},
		':valid': {
			link: '#validity-pseudos',
			tests: ':valid',
		},
		':invalid': {
			link: '#validity-pseudos',
			tests: ':invalid',
		},
		':in-range': {
			link: '#range-pseudos',
			tests: ':in-range',
		},
		':out-of-range': {
			link: '#range-pseudos',
			tests: ':out-of-range',
		},
		':user-invalid': {
			link: '#user-invalid-pseudo',
			tests: ':user-invalid',
		},
		':required': {
			link: '#opt-pseudos',
			tests: ':required',
		},
		':optional': {
			link: '#opt-pseudos',
			tests: ':optional',
		},
		':user-invalid': {
			link: '#user-pseudos',
			tests: ':user-invalid',
		},
		':user-valid': {
			link: '#user-pseudos',
			tests: ':user-valid',
		},
		':read-only': {
			link: '#rw-pseudos',
			tests: ':read-only',
		},
		':read-write': {
			link: '#rw-pseudos',
			tests: ':read-write',
		},
		':autofill': {
			link: '#autofill',
			tests: ':autofill',
		},
		':focus-visible': {
			link: '#the-focus-visible-pseudo',
			tests: ':focus-visible',
		},
		':focus-within': {
			link: '#the-focus-within-pseudo',
			tests: ':focus-within',
		},
		':current': {
			link: '#the-current-pseudo',
			tests: ':current',
		},
		':current()': {
			link: '#the-current-pseudo',
			tests: ':current(p, li, dt, dd)',
		},
		':past': {
			link: '#the-past-pseudo',
			tests: ':past',
		},
		':future': {
			link: '#the-future-pseudo',
			tests: ':future',
		},
		':playing': {
			link: '#selectordef-playing',
			tests: ':playing',
		},
		':paused': {
			link: '#selectordef-paused',
			tests: ':paused',
		},
		':muted': {
			link: '#selectordef-muted',
			tests: ':muted',
		},
		':volume-locked': {
			link: '#selectordef-volume-locked',
			tests: ':volume-locked',
		},
		':seeking': {
			link: '#selectordef-seeking',
			tests: ':seeking',
		},
		':buffering': {
			link: '#selectordef-buffering',
			tests: ':buffering',
		},
		':stalled': {
			link: '#selectordef-stalled',
			tests: ':stalled',
		},
		':modal': {
			link: '#modal-state',
			tests: ':modal',
		},
		':fullscreen': {
			link: '#fullscreen-state',
			tests: ':fullscreen',
		},
		':picture-in-picture': {
			link: '#pip-state',
			tests: ':picture-in-picture',
		},
		':scope': {
			link: '#the-scope-pseudo',
			tests: ':scope',
		},
		':any-link': {
			link: '#the-any-link-pseudo',
			tests: ':any-link',
		},
		':local-link': {
			link: '#the-local-link-pseudo',
			tests: ':local-link',
		},
		':target-within': {
			link: '#the-target-within-pseudo',
			tests: ':target-within',
		},
		':lang()': {
			link: '#the-lang-pseudo',
			tests: [':lang(zh, "*-hant")'],
		},
		':not()': {
			link: '#negation',
			tests: [':not(em, #foo)'],
		},
		':where()': {
			link: '#zero-matches',
			tests: [':where(em, #foo)', ':where(:not(:hover))'],
		},
		':is()': {
			link: '#matches',
			tests: [':is(em, #foo)', ':is(:not(:hover))'],
		},
		':has()': {
			link: '#relational',
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
			link: '#the-nth-child-pseudo',
			tests: [':nth-child(-n+3 of li.important)', ':nth-child(even of :not([hidden])'],
		},
		':nth-last-child()': {
			link: '#the-nth-last-child-pseudo',
			tests: [':nth-last-child(-n+3 of li.important)', ':nth-last-child(even of :not([hidden])'],
		},
		'||': {
			link: '#the-column-combinator',
			tests: 'foo || bar',
		},
		':nth-col()': {
			link: '#the-nth-col-pseudo',
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
			link: '#the-nth-last-col-pseudo',
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
			link: '#attribute-case',
			mdn: 'Attribute_selectors',
			tests: ['[att^=val i]', '[att^="val" i]', '[att^=val I]', '[att^="val" I]'],
		},
		'[att*=val i]': {
			link: '#attribute-case',
			mdn: 'Attribute_selectors',
			tests: ['[att*=val i]', '[att*="val" i]', '[att*=val I]', '[att*="val" I]'],
		},
		'[att$=val i]': {
			link: '#attribute-case',
			mdn: 'Attribute_selectors',
			tests: ['[att$=val i]', '[att$="val" i]', '[att$=val I]', '[att$="val" I]'],
		},
		'[att^=val s]': {
			link: '#attribute-case',
			mdn: 'Attribute_selectors',
			tests: ['[att^=val s]', '[att^="val" s]', '[att^=val S]', '[att^="val" S]'],
		},
		'[att*=val s]': {
			link: '#attribute-case',
			mdn: 'Attribute_selectors',
			tests: ['[att*=val s]', '[att*="val" s]', '[att*=val S]', '[att*="val" S]'],
		},
		'[att$=val s]': {
			link: '#attribute-case',
			mdn: 'Attribute_selectors',
			tests: ['[att$=val s]', '[att$="val" s]', '[att$=val S]', '[att$="val" S]'],
		},
	},
};
