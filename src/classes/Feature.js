/**
 * A syntax feature (i.e. not a spec)
 * May or may not have children
 */

import {supportsNames} from '../features.js';
import Supports from '../supports.js';
import AbstractFeature from './AbstractFeature.js';
import { toArray } from '../supports/util.js';

export default class Feature extends AbstractFeature {
	static forceTotal = 1;
	static children = {tests: {single: 'id'}};

	constructor (def, parent, group) {
		super(def, parent);
		this.type = def.type ?? group?.type ?? parent?.type;
		this.group = group;
		this.spec = this.closest(f => f.constructor.name === 'Spec');

		if (Array.isArray(def) && typeof def[0] === 'string') {
			// feature: [test1, test2, ...]
			def = {tests: def};
		}

		this.def = def;

		if (def.tests) {
			this.tests = toArray(def.tests);
		}

		this.beforeChildren();
		this._createChildren();

		if (this.children.length > 0) {
			this.score.totalTests = this.children.length + (this.constructor.gatingTest ? 1 : 0);
		}
		else {
			this.score.totalTests = 1;
		}
	}

	beforeChildren () {
		// Override in child classes to run before children are created
	}

	_createChildren () {
		let treeSchema = this.constructor.children;

		if (treeSchema === null) {
			// This class has no children
			return;
		}

		let nestingLevel = 0;
		for (let property in treeSchema) {
			nestingLevel++;

			let schema = treeSchema[property];
			let {single: singleProp, type: ChildType = this.constructor} = schema;

			if (singleProp && this.def[singleProp]) {
				// Singular property explicitly defined
				this[singleProp] = this.def[singleProp];
			}

			let multiple;

			// This is a nested child property, so we may need to go up to find its value
			multiple = this.closestValue(f => f.def[property] ?? f.group?.[property], {
				maxSteps: nestingLevel,
				stopIf: f => f.constructor.name === 'Spec'
			});

			multiple = toArray(multiple);

			if (singleProp && multiple.length === 1) {
				// We use a single property if there's only one
				this[singleProp] = multiple[0];
			}
			else if (multiple.length > 0) {
				if (this.children.length === 0) {
					// Create children
					for (let child of multiple) {
						let childDef = typeof child === 'string' ? {id: child} : child;
						let subFeature = new ChildType(childDef, this);
						this.children.push(subFeature);
					}
				}
				else {
					// Just set plural property, the children will take care of it
					this[property] = multiple;
				}

			}
		}
	}

	get code () {
		return this.def.code ?? this.id;
	}

	get draftLink () {
		let specLink = this.spec?.draftLink;

		if (!specLink) {
			return '';
		}

		let link = this.def.links?.dev ?? this.def.link;

		return link ? specLink + link : '';
	}

	get specLink () {
		let specLink = this.spec?.specLink;

		if (!specLink) {
			return '';
		}

		let link = this.def.links?.tr ?? this.def.link;

		if (link) {
			return specLink + link;
		}

		return link;
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

	/**
	 * Default test method for features
	 * @returns {{success: number, note?: string, prefix?: string, name?: string}}
	 */
	leafTest () {
		let supportsName = supportsNames[this.type] ?? this.type;
		let testCallback = Supports[supportsName];

		if (!testCallback) {
			return null;
		}

		let test = this.tests?.[0] ?? this.id;
		test = test?.id ?? test; // test must be a string
		return testCallback(test, this.id, this) ?? {};
	}

	_doLeafTest () {
		let startTime = performance.now();

		this.result = this.leafTest();

		this.score.add({
			passedTests: this.result.success,
			failedTests: 1 - this.result.success,
			testTime: performance.now() - startTime,
		});
	}

	get tested () {
		return this.score.passedTests + this.score.failedTests >= this.score.totalTests;
	}

	test () {
		if (this.tested) {
			return;
		}

		if (this.constructor.gatingTest) {
			// console.log('gating test', this.score.totalTests, this.score.isDone);
			this._doLeafTest();

			if (!this.result.success && this.children.length > 0) {
				// No point in testing the children
				// just mark them all as failed
				this.score.add({
					passedTests: 0,
					failedTests: this.children.length,
				});

				this.score.recalc();
				return;
			}
		}

		if (this.tested) {
			return;
		}

		if (this.children.length > 0) {
			return super.test();
		}

		this._doLeafTest();

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
			// if (what === mediaqueries: && !links.mdn) {
			// 	mdnLink += '@media/';
			// }
	}

	mdnLink += mdn ?? feature.replace('()', '').replace(/(@[^ \/]+)[^\/]*(\/.*)/, '$1$2');
	return mdnLink;
}
