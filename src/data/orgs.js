export const orgs = {
	w3c: {
		title: 'W3C',
		longTitle: 'World Wide Web Consortium',
		specs: 'https://www.w3.org/TR/{shortname}/',
		drafts: 'https://w3c.github.io/{shortname}/',
		groups: {
			csswg: {
				title: 'CSS Working Group',
				drafts: 'https://drafts.csswg.org/{shortname}/',
				removedWords: ['Level', 'Module'],
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
				title: 'SVG Working Group',
				drafts: 'https://svgwg.org/{shortname}/',
			},
			math: {
				title: 'The MathML Refresh Community Group',
				drafts: 'https://mathml-refresh.github.io/{shortname}/',
			},
		},
	},
	whatwg: {
		title: 'WHATWG',
		longTitle: 'Web Hypertext Application Technology Working Group',
		specs: 'https://{shortname}.spec.whatwg.org/',
		removedWords: ['Living Standard'],
	},
	ecma: {
		title: 'ECMA',
		longTitle: 'European Computer Manufacturers Association',
		specs: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-{shortname}/',
		groups: {
			tc39: {
				title: 'TC39',
				drafts: 'https://tc39.es/proposal-{shortname}',
			},
		},
	},
};

export const groups = {};

for (let id in orgs) {
	let org = orgs[id];
	org.id = id;

	if (org.groups) {
		for (let groupId in org.groups) {
			let group = org.groups[groupId];
			group.id = groupId;
			group.org = id;
			groups[groupId] = group;
		}
	}
}
