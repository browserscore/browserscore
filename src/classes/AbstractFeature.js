/**
 * Base class for all features or feature groups (including specs)
 */

import Score from './Score.js';
import { IS_DEV, symmetricDifference } from '../util.js';

export default class AbstractFeature {
	children = [];
	static _initialized = false;

	constructor (def = {}, parent) {
		this.constructor._init();

		this.def = def;
		this.id = def.id;

		if (Object.hasOwn(this.constructor, 'all')) {
			this.constructor.all.push(this);
		}

		if (Object.hasOwn(this.constructor, 'byId')) {
			this.constructor.byId[this.id] = this;
		}

		this.defineProperties({
			parent,
		});

		if (def.title) {
			this.title = def.title;
		}

		this.score = new Score(this);
	}

	/**
	 * Define instance properties that are non-enumerable by default
	 * Good for computed things or cyclical references
	 * @param {*} props
	 */
	defineProperties (props) {
		let defaults = {
			enumerable: false,
			writable: true,
			configurable: true,
		};

		for (let key in props) {
			let def = props[key];
			let isDescriptor = def && typeof def === 'object' && ('enumerable' in def || 'writable' in def || 'configurable' in def);
			if (def === undefined || !isDescriptor) {
				// property: value
				def = {value: def};
			}

			Object.defineProperty(this, key, {...defaults, ...def});
		}
	}

	/** Stuff that runs when the first instance is created */
	static _init () {
		if (Object.hasOwn(this, '_initialized') && this._initialized) {
			return;
		}

		// For debugging
		if (IS_DEV) {
			// Expose all instances
			if (!Object.hasOwn(this, 'all')) {
				// We don't want classes to share the same array
				// Also, using this as a signal means classes can define their own to have these objects even outside of debug mode
				this.all = [];
			}

			if (!Object.hasOwn(this, 'byId')) {
				this.byId = {};
			}

			// Make class a global
			globalThis[this.name] ??= this;
		}

		this._initialized = true;
	}

	get link() {
		return this.specLink ?? this.draftLink;
	}

	get draftLink () {
		// To be overridden by subclasses
	}

	get specLink () {
		// To be overridden by subclasses
	}

	get mdnLink () {
		let ret = this.def.mdn ?? this.def.links?.mdn;
		return ret ? 'https://developer.mozilla.org/en-US/docs/Web/' + ret : '';
	}

	/**
	 * Get a globally unique id for this feature.
	 */
	get uid () {
		return this.getUid();
	}

	/**
	 * Same as uid, but uses hyphens instead of dots.
	 */
	get htmlId () {
		return this.uid;
	}

	/**
	 * Get a globally unique id for this feature, with a custom separator for different levels
	 */
	getUid (separator = '.') {
		let parentUid = this.parent?.getUid(separator) ?? '';
		if (parentUid) {
			parentUid += separator;
		}

		let id = this.id ?? '';

		return parentUid + id;
	}

	_closest (fn, {maxSteps, stopIf} = {}) {
		if (maxSteps <= 0) {
			return null;
		}

		if (stopIf) {
			if (stopIf(this)) {
				return null;
			}
		}

		let result = fn(this);
		if (result || result === 0 || result === '') {
			return {node: this, value: result};
		}

		if (this.parent) {
			maxSteps = maxSteps >= 0 ? maxSteps - 1 : undefined;
			return this.parent._closest(fn, {maxSteps, stopIf});
		}

		return null;
	}

	closest (fn, options) {
		return this._closest(fn, options)?.node ?? null;
	}

	closestValue (fn, options) {
		return this._closest(fn, options)?.value;
	}

	test () {
		if (this.score.isDone) {
			return;
		}

		if (this.children?.length > 0) {
			for (let child of this.children) {
				child.test();
			}

			this.score.recalc();
		}
	}

	matchesFilter (filter) {
		let allFilters = this.constructor.allFilters;

		for (let key in filter) {
			let filterSpec = allFilters[key];

			if (!filterSpec || !filter[key]) {
				continue;
			}

			if (Array.isArray(filterSpec.default) || Array.isArray(filter[key])) {
				if (symmetricDifference(filterSpec.default, filter[key]).length === 0) {
					continue;
				}
			}

			if (!filterSpec.matches.call(this, filter)) {
				return false;
			}
		}

		return true;
	}

	/** Get base class this extends from */
	static get parent () {
		if (this === AbstractFeature) {
			return null;
		}

		return Object.getPrototypeOf(this);
	}

	/** Get all classes this extends from */
	static get ancestors () {
		let ret = [];
		let current = this;

		// Walk up until we reach AbstractFeature
		do {
			current = current.parent;
			ret.unshift(current); // put subclasses at the end
		} while (current && current !== AbstractFeature);

		return ret;
	}

	static get allFilters () {
		return [...this.ancestors, this].reduce((acc, curr) => {
			if (!Object.hasOwn(curr, 'filters')) {
				return acc;
			}

			Object.assign(acc, curr.filters);
			return acc;
		}, {});
	}
}
