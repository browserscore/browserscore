import featureTypes from '../features.js';
import AbstractFeature from './AbstractFeature.js';

export default class Feature extends AbstractFeature {
	static forceTotal = 1;
	constructor (def, parent) {
		super(def, parent);
		this.type = def.type;

		this.properties = def.properties;
		this.required = def.required;
		this.interface = def.interface;

		this.title ??= this.id;

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

	get mdnLink () {
		let link = this.def.mdn ?? this.def.links?.mdn;
		if (link) {
			return getMdnLink(link, this.id, this.def.mdnGroup)
		}
		return '';
	}

	get uid () {
		let parentUid = this.parent ? this.parent.uid + '.' : '';
		let typeUid = this.type ? this.type + '.' : '';
		return parentUid + typeUid + this.id;
	}

	test () {
		if (this.tested) {
			return;
		}

		this.tested = true;

		let startTime = performance.now();
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

		this.score.testTime = performance.now() - startTime;
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
