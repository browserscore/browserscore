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
		this.type = def.type ?? group?.type ?? parent?.type;
		this.group = group;

		// Type-specific properties
		if (this.type === 'values') {
			this.properties = def.properties ?? group?.properties;
		}

		if (this.type === 'descriptors' || this.type === 'interfaces') {
			this.required = def.required ?? group?.required;

			if (this.type === 'interfaces') {
				this.interface = def.interface ?? group?.interface;
			}
		}

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

		if (this.children.length === 0 && this.tests.length > 0) {
			// Stub to pave the way for children
			Object.defineProperty(this, 'children', {
				get () {
					return this.tests.map((test, index) => {
						let result = this.results?.[index] ?? {};
						return {
							id: test,
							result,
							score: result?.success,
							spec: this.spec,
						}
					});
				},
				enumerable: true,
				configurable: true,
			});
		}
	}

	get spec () {
		return this.closest(f => f.constructor.name === 'Spec');
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

		let passedTests = 0;
		let totalTests = this.tests.length;
		this.propertyPrefix = null;
		this.results = [];

		for (let test of this.tests) {
			let result = testCallback(test, this.id, this) ?? {};
			this.propertyPrefix ??= result.propertyPrefix;
			passedTests += +result.success;
			this.results.push(result);
		}

		this.score.set({
			passedTests: passedTests,
			totalTests: totalTests,
			testTime: performance.now() - startTime,
		});
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
