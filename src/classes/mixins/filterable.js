/**
 * Mixin for filtering features
 * Expects:
 * - a static property `filters` on the class
 * - a `children` property on the class
 */
import { isSubsetOf, symmetricDifference } from '../../util.js';

export default class Filterable {
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


}
