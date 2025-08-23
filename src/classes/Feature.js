import featureTypes from '../features.js';
import Score from './Score.js';

export default class Feature {
	#parent;
	constructor (def, parent) {
		this.def = def;
		this.id = def.id;
		this.type = def.type;
		this.#parent = parent;
		this.score = new Score(this.#parent.score, 1);
		this.properties = def.properties;
		this.required = def.required;
		this.interface = def.interface;

		if (def.tests) {
			this.def = def;
			this.tests = def.tests;
		}
		else {
			// feature: [test1, test2, ...]
			this.tests = def;
		}

		if (this.tests && !Array.isArray(this.tests)) {
			this.tests = [this.tests];
		}
	}

	get parent () {
		return this.#parent;
	}

	get link() {
		return this.specLink ?? this.draftLink;
	}

	get draftLink () {
		let link = this.def.link ?? this.def.links?.dev;
		if (link) {
			return this.parent.draftLink + link;
		}

		return '';
	}

	get specLink () {
		let link = this.def.link ?? this.def.links?.tr;
		if (link) {
			return this.parent.specLink + link;
		}

		return '';
	}

	get mdnLink () {
		let link = this.def.mdn ?? this.def.links?.mdn;
		if (link) {
			return getMdnLink(link, this.id, this.def.mdnGroup)
		}
		return '';
	}

	test () {
		if (this.results) {
			// Already tested
			return;
		}

		let testCallback = featureTypes[this.type];

		this.passed = 0;
		this.propertyPrefix = null;
		this.results = [];

		for (let test of this.tests) {
			let result = testCallback(test, this.id, this) ?? {};
			this.propertyPrefix ??= result.propertyPrefix;
			this.passed += +result.success;
			this.results.push(result);
		}

		this.score.update({ passed: this.passed, total: this.tests.length });
	}
}

function getMdnLink (mdn, feature, mdnGroup) {
	let mdnLink = 'https://developer.mozilla.org/en-US/docs/Web/';

	switch (mdnGroup) {
		case 'SVG':
			mdnLink += 'SVG/Attribute/';
			break;
		case 'DOM':
			mdnLink += 'API/';
			break;
		default:
			mdnLink += 'CSS/';
			// add exception for Media Queries if no link define
			// if (what === 'Media queries' && !links.mdn) {
			// 	mdnLink += '@media/';
			// }
	}

	mdnLink += mdn ?? feature.replace('()', '').replace(/(@[^ \/]+)[^\/]*(\/.*)/, '$1$2');
	return mdnLink;
}
