/**
 * A syntax feature (i.e. not a spec)
 * May or may not have children
 */

import {supportsNames} from '../features.js';
import Supports from '../supports.js';
import AbstractFeature from './AbstractFeature.js';
import { toArray } from '../supports/util.js';

/**
 * @typedef {Object} ChildSchema
 * @property {string} [single] - Related property name for when there is only one value.
 *          Can be specified explicitly, or auto-filled when the parent has only one value.
 *          If not specified, the property will *always* create children.
 * @property {typeof Feature} type - Class to use for children. Defaults to the parent class.
 */

export default class Feature extends AbstractFeature {
	static forceTotal = 1;

	/**
	 * Child schema
	 * @type {Record<string, {single?: string, type: typeof Feature}>}
	 */
	static children = {tests: {single: 'id'}};

	static filters = {
		type: {
			matches (filter) {
				return filter.type === this.type;
			},
		},
	}

	constructor (def, parent, group) {
		super(def, parent);
		this.type = def.type ?? group?.type ?? parent?.type;
		this.group = group;

		if (Array.isArray(def) && typeof def[0] === 'string') {
			// feature: [test1, test2, ...]
			def = {tests: def};
		}

		// Non-enumerable
		this.defineProperties({
			titleMd: undefined,
			titleHtml: undefined,
		});

		this.def = def;

		if (def.tests) {
			this.tests = toArray(def.tests);
		}

		this.beforeChildren();
		this._createChildren();

		let totalTests = this.children.length > 0 ? this.children.length + (this.gatingTest ? 1 : 0) : 1;
		this.score.set({totalTests});

		if (this.title && this.title.indexOf('`') !== this.title.lastIndexOf('`')) {
			// Inline code
			this.titleMd = this.title;
			this.titleHtml = this.title.replace(/`([^`]+?)`/g, '<code>$1</code>');
			this.title = this.title.replace(/`/g, '');
		}
	}

	get forceTotal () {
		let forceTotal = this.def.forceTotal
		               ?? this.group?.forceTotal
		               ?? (this.def.isGroup || this.def.children ? false : undefined)
		               ?? this.constructor.forceTotal;
		// false → undefined
		return forceTotal || undefined;
	}

	beforeChildren () {
		// Override in child classes to run before children are created
	}

	/**
	 * Creates children based on the schema defined in {@link Feature.children}
	 * @private
	 * @returns {void}
	 */
	_createChildren () {
		if (this.def.children) {
			// Explicitly defined children. This overrides the schema
			let {children, title, code, link, links, ...def} = this.def;

			if (Array.isArray(this.def.children)) {
				children = children.map(child => typeof child === 'string' ? {id: child} : child);
			}
			else {
				// id -> child def
				children = Object.entries(children).map(([id, child]) => ({...child, id}));
			}

			for (let child of children) {
				// Because the class is not necessarily built to handle children, we copy the parent def over
				let childDef = {...def, ...child};
				childDef.id = child.id ?? def.id;

				if (!child.id) {
					// We want to avoid copying over the title when the child has its own id
					childDef.title = child.title ?? title;
					childDef.code = child.code ?? code;
				}

				Object.assign(childDef, child);
				childDef.fromParent = 'children';
				let subFeature = new this.constructor(childDef, this);
				this.children.push(subFeature);
			}
		}

		let treeSchema = this.constructor.children;

		if (treeSchema === null) {
			// This class has no children
			return;
		}

		let childProperties = Object.keys(treeSchema);
		let maxNestingLevel = childProperties.length;

		for (let nestingLevel = 1; nestingLevel <= maxNestingLevel; nestingLevel++) {
			let property = childProperties[nestingLevel - 1];
			let schema = treeSchema[property];

			let {single: singleProp, type: ChildType = this.constructor} = schema;

			if (singleProp && this.def[singleProp]) {
				// Singular property explicitly defined
				this[singleProp] = this.def[singleProp];
			}

			let multiple;

			// This is often a nested child property, so we may need to go up to find its value
			// Just make sure you're not reading the same property on ancestors that got us here
			multiple = this.closestValue(f => f.def[property] ?? f.group?.[property], {
				maxSteps: this.def.fromParent === property ? 1 : nestingLevel,
				stopIf: f => f.constructor.name === 'Spec'
			});

			// Is an object of ids to child defs like {id1: test1, id2: [test1, test2, ...], id3: {foo: bar, baz: qux}}
			// Convert it to an array
			if (multiple && typeof multiple === 'object' && !Array.isArray(multiple)) {
				// Property to "unroll" child values into
				let nextProperty = childProperties[nestingLevel];

				if (!nextProperty && ChildType.children) {
					nextProperty = Object.keys(schema.type.children)[0];
				}
				let arr = [];

				for (let id in multiple) {
					let def = multiple[id];
					let childDef = {id};

					if (nextProperty && (Array.isArray(def) || typeof def === 'string')) {
						childDef[nextProperty] = def;
					}
					else if (def && typeof def === 'object') {
						Object.assign(childDef, def);
					}

					arr.push(childDef);
				}

				multiple = arr;
			}

			multiple = toArray(multiple);

			if (singleProp && multiple.length === 1 && this[singleProp] === undefined) {
				// We use a single property if there's only one
				this[singleProp] = multiple[0];
			}
			else if (multiple.length > 0) {
				if (this.children.length === 0) {
					// Create children
					for (let child of multiple) {
						if (child === null || child === undefined) {
							continue;
						}
						let childDef = typeof child === 'string' ? {id: child} : child;
						childDef.fromParent = property;
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

	get gatingTest () {
		// Can be overridden in child classes for when it depends on test meta
		// E.g. see CSSAtruleFeature for an example
		return this.constructor.gatingTest;
	}

	_doLeafTest () {
		let startTime = performance.now();

		this.result = this.leafTest();

		this.score.add({
			passedTests: Number(this.result.success),
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

		if (this.gatingTest) {
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
