/**
 * A syntax feature (i.e. not a spec)
 * May or may not have children
 */

import featureTypes from '../features.js';
import AbstractFeature from './AbstractFeature.js';

export default class Feature extends AbstractFeature {
	static forceTotal = 1;
	constructor (def, parent, group) {
		super(def, parent);

		if (def.code) {
			this.id ??= def.code;
		}

		this.group = group;
		this.type = def.type ?? parent?.type;

		if (def.tests) {
			this.def = def;
			this.tests = def.tests;
		}
		else if (Array.isArray(def) && typeof def[0] === 'string') {
			// feature: [test1, test2, ...]
			this.tests = def;
		}

		if (this.tests && !Array.isArray(this.tests)) {
			this.tests = [this.tests];
		}

		if (this.constructor === Feature && this.tests) {
			// Subclasses need to call this on their own
			this._createChildren();
		}
	}

	_createChildren () {
		if (this.tests.length > 0) {
			for (let test of this.tests) {
				let subFeature = new this.constructor({id: test}, this);
				this.children.push(subFeature);
			}
		}
	}

	get spec () {
		return this.closest(f => f.constructor.name === 'Spec');
	}

	get code () {
		return this.def.code ?? this.id;
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

	leafTest () {
		let testCallback = featureTypes[this.type];

		if (!testCallback) {
			return null;
		}

		let test = this.tests?.[0] ?? this.id;
		test = test?.id ?? test; // test must be a string
		return testCallback(test, this.id, this) ?? {};
	}

	test () {
		if (this.children.length > 0) {
			return super.test();
		}

		if (this.tested) {
			return;
		}

		this.tested = true;

		let startTime = performance.now();

		// TODO run leafTest for parents that support it to save work on testing the children
		this.result = this.leafTest();

		this.score.set({
			passedTests: this.result.success,
			totalTests: 1,
			testTime: performance.now() - startTime,
		});

		this.score.recalc();
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
