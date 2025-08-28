/**
 * Base class for all features or feature groups (including specs)
 */

import Score from './Score.js';
import { IS_DEV } from '../util.js';

export default class AbstractFeature {
	children = [];

	constructor (def = {}, parent) {
		this.def = def;

		// For debugging
		if (IS_DEV) {
			// Expose all instances
			if (!Object.hasOwn(this.constructor, 'all')) {
				// We don't want classes to share the same array
				this.constructor.all = [];
			}

			this.constructor.all.push(this);

			// Make class a global
			globalThis[this.constructor.name] ??= this.constructor;
		}

		if (parent) {
			Object.defineProperty(this, 'parent', {
				value: parent,
				enumerable: false,
				writable: true,
				configurable: true,
			});
		}

		this.id = def.id;

		if (def.title) {
			this.title = def.title;
		}

		this.score = new Score(this, this.constructor.forceTotal);
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
		return this.getUid('--');
	}

	/**
	 * Get a globally unique id for this feature, with a custom separator for different levels
	 */
	getUid (separator = '.', pathSuffix = '') {
		let parentUid = this.parent?.getUid(separator) ?? '';
		if (parentUid) {
			parentUid += separator;
		}

		pathSuffix = pathSuffix ? separator + pathSuffix : '';
		let id = this.id ?? '';

		return parentUid + id + pathSuffix;
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
		if (this.tested) {
			return;
		}

		if (this.children?.length > 0) {
			for (let child of this.children) {
				child.test();
			}

			this.score.recalc();
		}
	}
}
