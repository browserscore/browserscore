import Supports from '../supports.js';
import Score from './Score.js';
import { create, $ } from '../util.js';

export const mainScore = new Score();

export default class Test {
	constructor(spec) {
		this.tests = spec.tests;
		this.id = spec.id;
		this.title = spec.title;

		this.score = new Score(mainScore);

		var contents = [this.title];

		if (spec.tests.links) {
			var linksContainer = create({
				tag: 'div',
				properties: {
					className: 'spec-links',
				},
			});

			if (spec.tests.links.tr) {
				linksContainer.append(
					create({
						tag: 'a',
						properties: {
							href: 'https://www.w3.org/TR/' + spec.tests.links.tr,
							target: '_blank',
							textContent: 'TR',
							className: 'spec-link w3c-link',
						},
					}),
				);
			}

			if (spec.tests.links.dev) {
				linksContainer.append(
					create({
						tag: 'a',
						properties: {
							href: devLinkFormat(spec.tests.links),
							target: '_blank',
							textContent: 'DEV',
							className: 'spec-link ' + devLinkLogo(spec.tests.links) + '-link',
						},
					}),
				);
			}

			if (spec.tests.links.mdn) {
				linksContainer.append(
					create({
						tag: 'a',
						properties: {
							href: 'https://developer.mozilla.org/en-US/docs/' + spec.tests.links.mdn,
							target: '_blank',
							textContent: 'MDN',
							className: 'spec-link mdn-link',
						},
					}),
				);
			}

			contents.push(linksContainer);
		}

		var h1 = create({
			tag: 'h1',
			contents: contents,
		});

		// Wrapper section
		this.section = create({
			tag: 'section',
			id: this.id,
			className: 'tests',
			contents: [h1],
		});

		// Perform tests
		for (var id in Test.groups) {
			this.group(id, Test.groups[id]);
		}

		// Display score for this spec
		create({
			tag: 'span',
			contents: this.score + '',
			className: 'score',
			in: h1,
		});

		$('#all').appendChild(this.section);

		// Add to list of tested specs
		create({
			tag: 'li',
			className: passclass({
				passed: this.score.passed,
				total: this.score.total,
			}),
			title: this.score + ' passed',
			contents: [
				{
					tag: 'a',
					href: '#' + spec.id,
					contents: this.title,
				},
			],
			in: $('#specsTested'),
		});
	}

	group (what, testCallback) {
		var thisSection,
			theseTests = this.tests[what];

		for (var feature in theseTests) {
			if (feature === 'properties') {
				continue;
			}

			thisSection =
				thisSection ||
				create({
					tag: 'section',
					className: 'tests ' + what,
					contents: {
						tag: 'h1',
						contents: what,
					},
					in: this.section,
				});

			var summaryContents = [
				document.createTextNode(feature),
				null, // for prefix
			];

			var links = theseTests[feature].links;
			if (links) {
				if (links.tr) {
					summaryContents.push(
						create({
							tag: 'a',
							properties: {
								href: 'https://www.w3.org/TR/' + this.tests.links.tr + links.tr,
								target: '_blank',
								textContent: 'TR',
								className: 'spec-link w3c-link',
							},
						}),
					);
				}

				if (links.dev) {
					summaryContents.push(
						create({
							tag: 'a',
							properties: {
								href: devLinkFormat(this.tests.links).replace(/#.*/, '') + links.dev,
								target: '_blank',
								textContent: 'DEV',
								className: 'spec-link ' + devLinkLogo(this.tests.links) + '-link',
							},
						}),
					);
				}

				var mdnLink = 'https://developer.mozilla.org/en-US/docs/Web/';
				switch (links.mdnGroup) {
					case 'SVG':
						mdnLink += 'SVG/Attribute/';
						break;
					case 'DOM':
						mdnLink += 'API/';
						break;
					default:
						mdnLink += 'CSS/';
						// add exception for Media Queries if no link define
						if (what === 'Media queries' && !links.mdn) {
							mdnLink += '@media/';
						}
						break;
				}
				mdnLink += links.mdn
					? links.mdn
					: feature.replace('()', '').replace(/(@[^ \/]+)[^\/]*(\/.*)/, '$1$2');

				summaryContents.push(
					create({
						tag: 'a',
						properties: {
							href: mdnLink,
							target: '_blank',
							textContent: 'MDN',
							className: 'spec-link mdn-link',
						},
					}),
				);
			}

			var passed = 0,
				tests = theseTests[feature].tests || theseTests[feature],
				propertyPrefix = null,
				testsResults = [];

			tests = tests instanceof Array ? tests : [tests];

			for (var i = 0, test; (test = tests[i++]); ) {
				var results = testCallback(test, feature, theseTests),
					success,
					prefix,
					propertyPrefix,
					note;

				if (typeof results === 'object') {
					success = results.success;
					propertyPrefix = propertyPrefix || results.propertyPrefix;
					prefix = results.prefix;
					note = results.note;
				}

				passed += +success;

				testsResults.push(
					create({
						tag: 'li',
						innerHTML:
							test.replace(/</g, '&lt;').replace(/>/g, '&gt;') +
							(prefix ? '<span class="prefix">' + prefix + '</span>' : '') +
							(note ? '<small>' + note + '</small>' : ''),
						className: passclass({
							passed: Math.round(success * 10000),
							total: 10000,
						}),
					}),
				);
			}

			if (propertyPrefix) {
				summaryContents[1] = create({
					tag: 'span',
					className: 'prefix',
					textContent: propertyPrefix,
				});
			}

			var detailsContents = [
				create({
					tag: 'summary',
					properties: {
						className: passclass({
							passed: passed,
							total: tests.length,
						}),
						style: '--progress: ' + (passed / tests.length) * 100,
					},
					contents: summaryContents,
				}),
				create({
					tag: 'ul',
					contents: testsResults,
				}),
			];

			var details = create({
				tag: 'details',
				contents: detailsContents,
			});

			thisSection.appendChild(details);

			this.score.update({ passed: passed, total: tests.length });
		}
	}
};

Test.groups = {
	values: function (test, name, tests) {
		var properties = tests[name].properties || tests.properties,
			failed = [];

		for (var j = 0, property; (property = properties[j++]); ) {
			if (!Supports.property(property).success) {
				properties.splice(--j, 1);
				continue;
			}

			if (!Supports.value(property, test).success) {
				failed.push(property);
			}
		}

		var success = properties.length > 0 ? 1 - failed.length / properties.length : 0;

		return {
			success: success,
			note: success > 0 && success < 1 ? 'Failed in: ' + failed.join(', ') : '',
		};
	},

	properties: function (value, property) {
		return Supports.value(property, value);
	},

	descriptors: function (value, descriptor, tests) {
		var required = undefined;
		if (tests[descriptor].required) {
			if (tests[descriptor].required[value]) {
				required = tests[descriptor].required[value];
			} else if (tests[descriptor].required['*']) {
				required = tests[descriptor].required['*'];
			}
		}
		return Supports.descriptorvalue(descriptor, value, required);
	},

	selectors: function (test) {
		return Supports.selector(test);
	},

	declaration: function (test) {
		return Supports.declaration(test);
	},

	'@rules': function (test) {
		return Supports.atrule(test);
	},

	interfaces: function (value, name, tests) {
		return Supports.attributeOrMethod(name, value, tests[name].required, tests[name].interface);
	},

	'Media queries': function (test) {
		return Supports.mq(test);
	},
};

var devLinkFormat = function (params) {
	switch (params.devtype) {
		case 'fxtf':
			// FX Task Force Editor Drafts
			return 'https://drafts.fxtf.org/' + params.dev;
		case 'houdini':
			// CSS-TAG Houdini Editor Drafts
			return 'https://drafts.css-houdini.org/' + params.dev;
		case 'github':
			return 'https://w3c.github.io/' + params.dev;
		case 'iwwg':
			// The Immersive Web Working Group
			return 'https://immersive-web.github.io/' + params.dev;
		case 'svgwg':
			// SVG Working Group Editor Drafts
			return 'https://svgwg.org/' + params.dev;
		case 'whatwg':
			// WHATWG
			return 'https://' + params.dev + '.spec.whatwg.org/';
		case 'math':
			// The MathML Refresh Community Group
			return 'https://mathml-refresh.github.io/' + params.dev;
		default:
			// CSS Working Group Editor Drafts
			return 'https://drafts.csswg.org/' + params.dev;
	}
};

var devLinkLogo = function (params) {
	switch (params.devtype) {
		case 'whatwg':
			return params.devtype;
		case 'svgwg':
		case 'houdini':
		case 'fxtf':
		case 'github':
		case 'math':
		default:
			return 'w3c';
	}
};

function passclass(info) {
	var success;

	if ('passed' in info) {
		success = info.passed / info.total;
	} else if ('failed' in info) {
		success = 1 - info.failed / info.total;
	}

	var classes = ['epic-fail', 'fail', 'very-buggy', 'buggy', 'slightly-buggy', 'almost-pass', 'pass'];

	var index = Math.round(success * (classes.length - 1));

	return classes[index];
}
