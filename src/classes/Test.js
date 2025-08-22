import featureTypes from '../features.js';
import { groups, orgs } from '../data.js';
import Score from './Score.js';
import { create, $ } from '../util.js';

export const mainScore = new Score();

const icons = new Set('w3c', 'mdn', 'whatwg', 'ecma', 'tc39');

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
					createSpecLink('tr', 'https://www.w3.org/TR/' + spec.tests.links.tr),
				);
			}

			if (spec.tests.links.dev) {
				linksContainer.append(
					createSpecLink('dev', devLinkFormat(spec.tests.links), devLinkLogo(spec.tests.links.devtype)),
				);
			}

			if (spec.tests.links.mdn) {
				linksContainer.append(
					createSpecLink('mdn', 'https://developer.mozilla.org/en-US/docs/' + spec.tests.links.mdn),
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
		for (var id in featureTypes) {
			this.group(id, featureTypes[id]);
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
						createSpecLink('tr', 'https://www.w3.org/TR/' + this.tests.links.tr + links.tr),
					);
				}

				if (links.dev) {
					summaryContents.push(
						createSpecLink('dev', devLinkFormat(this.tests.links).replace(/#.*/, '') + links.dev, devLinkLogo(this.tests.links)),
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
					createSpecLink('mdn', mdnLink),
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

function devLinkFormat (params) {
	let shortname = params.dev ?? params.dev;
	let group = params.devtype ?? 'csswg';
	let groupMeta = groups[group] ?? orgs[group] ?? groups.csswg;
	return groupMeta.draft.replace('{shortname}', shortname);
};

function devLinkLogo (type) {
	return icons.has(type) ? type : 'w3c';
}

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

function createSpecLink (type, url, org = 'w3c') {
	return create({
		tag: 'a',
		properties: {
			href: url,
			target: '_blank',
			textContent: type.toUpperCase(),
			className: `spec-link ${org}-link`,
		},
	});
}
