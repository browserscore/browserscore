export default {
	title: 'CSS Pseudo-Elements Module Level 4',
	links: {
		tr: 'css-pseudo-4',
		dev: 'css-pseudo-4',
	},
	status: {
		stability: 'experimental',
	},
	selectors: {
		'::first-letter::prefix': {
			links: {
				tr: '#first-letter-pseudo',
				dev: '#first-letter-pseudo',
			},
			tests: ['::first-letter::prefix'],
		},
		'::first-letter::postfix': {
			links: {
				tr: '#first-letter-pseudo',
				dev: '#first-letter-pseudo',
			},
			tests: ['::first-letter::postfix'],
		},
		'::selection': {
			links: {
				tr: '#selectordef-selection',
				dev: '#selectordef-selection',
			},
			tests: ['::selection'],
		},
		'::target-text': {
			links: {
				tr: '#selectordef-target-text',
				dev: '#selectordef-target-text',
			},
			tests: ['::target-text'],
		},
		'::spelling-error': {
			links: {
				tr: '#selectordef-spelling-error',
				dev: '#selectordef-spelling-error',
			},
			tests: ['::spelling-error'],
		},
		'::grammar-error': {
			links: {
				tr: '#selectordef-grammar-error',
				dev: '#selectordef-grammar-error',
			},
			tests: ['::grammar-error'],
		},
		'::file-selector-button': {
			links: {
				tr: '#marker-pseudo',
				dev: '#marker-pseudo',
			},
			tests: ['::file-selector-button'],
		},
		'::marker': {
			links: {
				tr: '#marker-pseudo',
				dev: '#marker-pseudo',
			},
			tests: ['::marker'],
		},
		'::placeholder': {
			links: {
				tr: '#placeholder-pseudo',
				dev: '#placeholder-pseudo',
			},
			tests: ['::placeholder'],
		},
	},
	interfaces: {
		Element: {
			links: {
				tr: '#window-interface',
				dev: '#window-interface',
				mdnGroup: 'DOM',
			},
			tests: ['pseudo'],
			interface: function() {
				return document.body;
			},
		},
		CSSPseudoElement: {
			links: {
				tr: '#CSSPseudoElement-interface',
				dev: '#CSSPseudoElement-interface',
				mdnGroup: 'DOM',
			},
			tests: ['type', 'element', 'parent', 'pseudo'],
			interface: function() {
				return document.body.pseudo('::selection');
			},
		},
	},
};
