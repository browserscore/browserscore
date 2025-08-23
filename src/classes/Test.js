import { create, $ } from '../util.js';

export default class Test {
	constructor(spec) {
		this.spec = spec;

		this.tests = spec.tests;
		this.id = spec.id;
		this.title = spec.title;

		var contents = [this.spec.title];
		let links = createLinks(this.spec);

		if (links.length) {
			var linksContainer = create({
				tag: 'div',
				properties: {
					className: 'spec-links',
				},
				contents: links
			});

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
		this.spec.test();
		for (let type in this.spec.features) {
			this.group(type);
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
					contents: this.spec.title,
				},
			],
			in: $('#specsTested'),
		});
	}

	get score () {
		return this.spec.score;
	}

	group (type) {
		let thisSection;
		let features = this.spec.features[type];

		for (let id in features) {
			if (id === 'properties') {
				continue;
			}

			let feature = features[id];

			thisSection ??= create({
					tag: 'section',
					className: 'tests ' + type,
					contents: {
						tag: 'h1',
						contents: type,
					},
					in: this.section,
				});

			var summaryContents = [
				document.createTextNode(id),
				null, // for prefix
			];

			var links = createLinks(feature, this.spec);
			if (links.length) {
				summaryContents.push(...links);
			}

			let {passed, propertyPrefix} = feature;
			let results = [];

			for (let i=0; i<feature.tests.length; i++) {
				let test = feature.tests[i];
				let result = feature.results[i];

				let className = passclass({
					passed: Math.round(result.success * 10000),
					total: 10000,
				});

				let title = test.replace(/</g, '&lt;').replace(/>/g, '&gt;');
				let prefix = result.prefix ? `<span class="prefix">${result.prefix}</span>` : '';
				let note = result.note ? `<small>${result.note}</small>` : '';

				results.push(
					create({
						tag: 'li',
						innerHTML: title + prefix + note,
						className,
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
							total: feature.tests.length,
						}),
						style: '--progress: ' + (passed / feature.tests.length) * 100,
					},
					contents: summaryContents,
				}),
				create({
					tag: 'ul',
					contents: results,
				}),
			];

			var details = create({
				tag: 'details',
				contents: detailsContents,
			});

			thisSection.appendChild(details);
		}
	}
};

const classes = ['epic-fail', 'fail', 'very-buggy', 'buggy', 'slightly-buggy', 'almost-pass', 'pass'];

function passclass(info) {
	var success;

	if ('passed' in info) {
		success = info.passed / info.total;
	} else if ('failed' in info) {
		success = 1 - info.failed / info.total;
	}

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

function createLinks(feature, spec) {
	if (!spec) {
		spec = feature;
	}

	let {specLink, draftLink, mdnLink} = feature ?? spec;

	let ret = [];

	if (specLink) {
		ret.push(
			createSpecLink('tr', specLink, spec.org.id),
		);
	}

	if (draftLink && draftLink !== specLink) {
		ret.push(
			createSpecLink('dev', draftLink, spec.org.id),
		);
	}

	if (mdnLink) {
		ret.push(
			createSpecLink('mdn', mdnLink, 'mdn'),
		);
	}

	return ret;
}
