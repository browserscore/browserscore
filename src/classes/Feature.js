/**
 * A syntax feature (i.e. not a spec)
 * May or may not have children
 */

import featureTypes from '../data/types.js';
import Supports from '../supports.js';
import AbstractFeature from './AbstractFeature.js';
import { toArray, mapObject } from '../util.js';
import Spec from './Spec.js';
import Score from './Score.js';

/**
 * @typedef {Object} ChildSchema
 * @property {string} [single] - Related property name for when there is only one value.
 *          Can be specified explicitly, or auto-filled when the parent has only one value.
 *          If not specified, the property will *always* create children.
 * @property {typeof Feature} type - Class to use for children. Defaults to the parent class.
 */

export default class Feature extends AbstractFeature {
	forceTotal = (
		this.def.forceTotal
		?? (this.def.isGroup || this.def.children ? false : undefined)
		?? this.constructor.forceTotal
	) || undefined; // false → undefined
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
		supported: {
			matches (filter) {
				let supported = 'partial';

				if (this.score.passedTests > 0 && this.score.failedTests === 0) {
					supported = 'pass';
				}
				else if (this.score.failedTests > 0 && this.score.passedTests === 0) {
					supported = 'fail';
				}

				return filter.supported.includes(supported);
			},
			type: 'multiple',
			options: ['pass', 'partial', 'fail'],
			default: ['pass', 'partial', 'fail'],
		},

		...mapObject(Spec.filters, filterSpec => ({
			...filterSpec,
			matches (filter) {
				return filterSpec.matches.call(this.spec, filter);
			},
		})),
	}

	constructor (def, parent) {
		super(def, parent);
		this.type = this.def.type ?? parent?.type;
		this.spec = this.def.spec;

		if (this.def.tests) {
			this.tests = toArray(this.def.tests);
		}

		this._createChildren();

		let childTests = this.children.length > 0 ? this.children.flatMap(c => c.score.totalTests || 0).reduce((a, b) => a + b, 0) : 0;
		let ownTests = this.gatingTest || !childTests ? 1 : 0;
		let totalTests = childTests + ownTests;
		this.score.set({totalTests});

		if (this.gatingTest && this.children.length > 0) {
			this.ownScore = new Score(this);
			Object.defineProperty(this.ownScore, 'children', { value: [] });
			this.ownScore.totalTests = 1;
		}

		// Inline code
		if (this.title && this.title.indexOf('`') !== this.title.lastIndexOf('`')) {
			// Non-enumerable
			this.defineProperties({
				titleMd: this.title,
				titleHtml: this.title.replace(/`([^`]+?)`/g, '<code>$1</code>'),
			});

			this.title = this.title.replace(/`/g, '');
		}
	}

	get species () {
		return 'Feature';
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
			multiple = this.closestValue(f => f.def[property], {
				maxSteps: !schema.nest || this.def.fromParent === property ? 1 : nestingLevel,
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

			if (multiple.length > 0) {
				if (this.children.length > 0 && schema.nest) {
					// Just set plural property, the children will take care of it
					this[property] = multiple;
				}
				else {
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
			}
		}
	}

	get code () {
		return this.def.code ?? this.id;
	}

	get draftLink () {
		let link = this.def.links?.dev ?? this.def.link;

		if (!link) {
			return '';
		}

		let isAbsolute = link?.startsWith('https://');

		if (isAbsolute) {
			return link;
		}

		let specLink = this.spec?.draftLink;

		if (!specLink) {
			return '';
		}

		return new URL(link, specLink).href;
	}

	get specLink () {
		let link = this.def.links?.tr ?? this.def.link;

		if (!link) {
			return '';
		}

		let isAbsolute = link?.startsWith('https://');

		if (isAbsolute) {
			return link;
		}

		let specLink = this.spec?.specLink;

		if (!specLink) {
			return '';
		}

		return new URL(link, specLink).href;
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
	testSelf () {
		let supportsName = featureTypes[this.type]?.supports ?? this.type;
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

	_doTestSelf () {
		let startTime = performance.now();

		this.result = this.testSelf();

		let score = this.ownScore ?? this.score;
		score.add({
			passedTests: Number(this.result.success),
			failedTests: 1 - this.result.success,
			testTime: performance.now() - startTime,
		});
	}

	test () {
		if (this.score.isDone) {
			return;
		}

		if (this.gatingTest) {
			// console.log('gating test', this.score.totalTests, this.score.isDone);
			this._doTestSelf();

			if (!this.result.success && this.children.length > 0) {
				// No point in testing the children
				// just mark them all as failed
				this.score.fail();

				this.score.recalc();
				return;
			}
		}

		if (this.score.isDone) {
			return;
		}

		if (this.children.length > 0) {
			return super.test();
		}

		this._doTestSelf();

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
