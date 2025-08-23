export default {
	title: 'CSS Pseudo-Elements Module Level 4',
	link: 'css-pseudo-4',
	status: {
		stability: 'experimental',
	},
	selectors: {
		'::first-letter::prefix': {
			link: '#first-letter-pseudo',
			tests: ['::first-letter::prefix'],
		},
		'::first-letter::suffix': {
			link: '#first-letter-pseudo',
			tests: ['::first-letter::suffix'],
		},
		'::selection': {
			link: '#selectordef-selection',
			tests: ['::selection'],
		},
		'::search-text': {
			links: {
				dev: '#selectordef-search-text',
			},
			tests: [
				'::search-text',
				'::search-text:current',
			],
		},
		'::target-text': {
			link: '#selectordef-target-text',
			tests: ['::target-text'],
		},
		'::spelling-error': {
			link: '#selectordef-spelling-error',
			tests: ['::spelling-error'],
		},
		'::grammar-error': {
			link: '#selectordef-grammar-error',
			tests: ['::grammar-error'],
		},
		'::marker': {
			link: '#marker-pseudo',
			tests: [
				'::marker',
				// Made ::before::marker and ::after::marker valid: https://github.com/w3c/csswg-drafts/issues/1793
				'::before::marker',
				'::after::marker',
			],
		},
		'::placeholder': {
			link: '#placeholder-pseudo',
			tests: ['::placeholder'],
		},
		// Element-backed Pseudo-Elements
		'::file-selector-button': {
			link: '#file-selector-button-pseudo',
			tests: ['::file-selector-button'],
		},
		'::details-content': {
			links: {
				dev: '#details-content-pseudo',
			},
			tests: [
				'::details-content',
				'::details-content::first-letter',
				'::details-content::first-letter::prefix',
				'::details-content::first-letter::suffix',
				'::details-content::first-line',
				'::details-content::before',
				'::details-content::after',
				'::details-content::before::marker',
				'::details-content::after::marker',
				'::details-content::search-text',
				'::details-content::target-text',
				'::details-content::spelling-error',
				'::details-content::grammar-error',
				'::details-content::selection',
				'::details-content::highlight(example-highlight)',
				'::details-content:hover',
				'::details-content:active',
				'::details-content:visited',
				'::details-content:focus',
				'::details-content:focus-visible',
				'::details-content:focus-within',
			],
		}
	},
	interfaces: {
		Element: {
			link: '#window-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['pseudo'],
			interface: function() {
				return document.body;
			},
		},
		CSSPseudoElement: {
			link: '#CSSPseudoElement-interface',
			links: {
				mdnGroup: 'DOM',
			},
			tests: ['type', 'element', 'parent', 'pseudo'],
			interface: function() {
				return document.body.pseudo('::selection');
			},
		},
	},
};
