export const orgs = {
	w3c: {
		title: 'W3C',
		stable: shortname => `https://www.w3.org/TR/${shortname}`,
		draft: 'https://w3c.github.io/{shortname}',
	},
	whatwg: {
		title: 'WHATWG',
		stable: 'https://{shortname}.spec.whatwg.org/',
		draft: 'https://{shortname}.spec.whatwg.org/',
	},
	ecma: {
		title: 'ECMA',
		stable: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-{shortname}/',
	},
};

export const groups = {
	csswg: {
		title: 'CSS Working Group',
		draft: 'https://drafts.csswg.org/{shortname}/',
	},
	fxtf: {
		title: 'FX Task Force',
		draft: 'https://drafts.fxtf.org/{shortname}/',
	},
	houdini: {
		title: 'CSS-TAG Houdini',
		draft: 'https://drafts.css-houdini.org/{shortname}/',
	},
	iwwg: {
		title: 'Immersive Web Working Group',
		draft: 'https://immersive-web.github.io/{shortname}/',
	},
	svgwg: {
		title: 'SVG Working Group Editor Drafts',
		draft: 'https://svgwg.org/{shortname}/',
	},
	math: {
		title: 'The MathML Refresh Community Group',
		draft: 'https://mathml-refresh.github.io/{shortname}/',
	},
	tc39: {
		title: 'TC39',
		org: 'ecma',
		draft: 'https://tc39.es/proposal-{shortname}',
	},
};
