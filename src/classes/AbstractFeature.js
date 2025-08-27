import Score from './Score.js';
import { IS_DEV } from '../util.js';

export default class AbstractFeature {
	children = [];
	tested = false;

	constructor (def = {}, parent) {
		this.def = def;

		// For debugging
		if (IS_DEV) {
			// Expose all instances
			this.constructor.all ??= [];
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
		let link = this.def.link ?? this.def.links?.dev ?? '';

		if (link) {
			return (this.parent?.draftLink ?? '') + link;
		}

		return link;
	}

	get specLink () {
		let link = this.def.link ?? this.def.links?.tr ?? '';

		if (link) {
			return (this.parent?.specLink ?? '') + link;
		}

		return link;
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

	test() {
		if (this.tested) {
			return;
		}

		this.tested = true;

		if (this.children?.length > 0) {
			let startTime = performance.now();
			for (let child of this.children) {
				child.test();
			}

			this.score.testTime = performance.now() - startTime;
			this.score.recalc();
		}
	}
}
