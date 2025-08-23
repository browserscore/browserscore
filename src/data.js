export const orgs = {
	w3c: {
		title: 'W3C',
		specs: 'https://www.w3.org/TR/{shortname}/',
		drafts: 'https://w3c.github.io/{shortname}/',
	},
	whatwg: {
		title: 'WHATWG',
		specs: 'https://{shortname}.spec.whatwg.org/',
		drafts: 'https://{shortname}.spec.whatwg.org/',
	},
	ecma: {
		title: 'ECMA',
		specs: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-{shortname}/',
	},
};

export const groups = {
	csswg: {
		title: 'CSS Working Group',
		drafts: 'https://drafts.csswg.org/{shortname}/',
	},
	fxtf: {
		title: 'FX Task Force',
		drafts: 'https://drafts.fxtf.org/{shortname}/',
	},
	houdini: {
		title: 'CSS-TAG Houdini',
		drafts: 'https://drafts.css-houdini.org/{shortname}/',
	},
	iwwg: {
		title: 'Immersive Web Working Group',
		drafts: 'https://immersive-web.github.io/{shortname}/',
	},
	svgwg: {
		title: 'SVG Working Group Editor Drafts',
		drafts: 'https://svgwg.org/{shortname}/',
	},
	math: {
		title: 'The MathML Refresh Community Group',
		drafts: 'https://mathml-refresh.github.io/{shortname}/',
	},
	tc39: {
		title: 'TC39',
		org: 'ecma',
		drafts: 'https://tc39.es/proposal-{shortname}',
	},
};
