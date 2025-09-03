/**
 * A feature instance that proxies another feature, optionally with different children
 * Used to filter features
 */

import { isSubsetOf, symmetricDifference } from '../util.js';
import AbstractFeature from './AbstractFeature.js';

export default class FeatureProxy extends AbstractFeature {
	constructor(feature, children) {
		if (!feature) {
			throw new Error('FeatureProxy must be created with a feature');
		}

		if (feature instanceof FeatureProxy) {
			feature = feature.feature;
		}

		super(feature.def ?? feature);

		this.feature = feature;
		this.children = children ?? this.feature.children;

		let totalTests = this.children.length > 0 ? this.children.length + (this.feature.gatingTest ? 1 : 0) : 1;

		this.score.set({totalTests});
	}

	get species () {
		return this.feature.species;
	}

	get titleHtml () {
		return this.feature.titleHtml;
	}

	get titleMd () {
		return this.feature.titleMd;
	}

	get spec () {
		return this.feature.spec;
	}

	get link () {
		return this.feature.link;
	}

	get specLink () {
		return this.feature.specLink;
	}

	get draftLink () {
		return this.feature.draftLink;
	}

	get mdnLink () {
		return this.feature.mdnLink;
	}

	// get children () {
	// 	return this.filteredChildren ?? this.feature.children;
	// }

	// set children (children) {
	// 	Object.defineProperty(this, 'children', {
	// 		value: children,
	// 		enumerable: false,
	// 		configurable: true,
	// 		writable: true,
	// 	});

	// 	this.feature.children = children;
	// }

	// get hasFilter () {
	// 	if (!this.filter) {
	// 		return false;
	// 	}

	// 	for (let key in this.filter) {
	// 		let filterSpec = this.constructor.allFilters[key];

	// 		if (!filterSpec) {
	// 			continue;
	// 		}

	// 		let defaultValue = filterSpec.default || '';

	// 		if (!defaultValue && value) {
	// 			return true;
	// 		}

	// 		if (symmetricDifference(value, defaultValue).length > 0) {
	// 			return true;
	// 		}
	// 	}

	// 	return false;
	// }

	// get filteredChildren () {
	// 	if (!this.filter) {
	// 		return this.feature.children;
	// 	}

	// 	let hasFilterChanged = this._filter === this.filter;

	// 	if (!hasFilterChanged && this._filteredChildren) {
	// 		return this._filteredChildren;
	// 	}

	// 	if (!this.hasFilter) {
	// 		this._filter = this.filter;
	// 		return this.feature.children;
	// 	}

	// 	if (this._filteredChildren && isSubsetOf(this._filter, this.filter)) {
	// 		// We can get away by just filtering the exsiting filtered children
	// 		this._filteredChildren = this._filteredChildren.filter(child => child.matchesFilter(this.filter));
	// 	}
	// 	else {
	// 		this._filteredChildren = this.feature.children.filter(child => child.matchesFilter(this.filter));
	// 	}

	// 	this._filter = this.filter;
	// 	return this._filteredChildren;
	// }

	test () {
		if (this.children === this.feature.children) {
			this.feature.test();
			this.score.set(this.feature.score);
			return;
		}

		for (let child of this.children) {
			child.test();
		}

		this.score.recalc();
	}
}
