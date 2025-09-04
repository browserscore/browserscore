/**
 * Utility functions that are not used anywhere, to have handy when needed
 */

/** Copy methods from one class onto another */
export function extend (Class, Mixin) {
	let members = Object.getOwnPropertyDescriptors(Mixin.prototype);

	for (let key in members) {
		if (key in Class.prototype) {
			continue;
		}

		Object.defineProperty(Class.prototype, key, members[key]);
	}

	let statics = Object.getOwnPropertyDescriptors(Mixin);

	for (let key in statics) {
		if (key in Class) {
			continue;
		}

		Object.defineProperty(Class, key, statics[key]);
	}
}

export const sort = {
	alphanumeric: (a, b) => a.localeCompare(b),
	alphanumericDesc: (a, b) => b.localeCompare(a),
	numeric: (a, b) => a - b,
	numericDesc: (a, b) => b - a,
	count: (a, b) => a.length - a.length,
	countDesc: (a, b) => b.length - a.length,
};

export function groupBy (arr, fn) {
	let grouped = new Map();
	let isFunction = typeof fn === 'function';

	for (let item of arr) {
		let key = isFunction ? fn(item) : item[fn];
		let items = grouped.get(key);

		if (!items) {
			items = [];
			grouped.set(key, items);
		}

		items.push(item);
	}

	// if (sortValues) {
	// 	grouped = sortObjectValues(grouped, sortValues);
	// }
	// else if (sortKeys) {
	// 	grouped = sortObjectKeys(grouped, sortKeys);
	// }

	return grouped;
}

export function sortObjectKeys (obj, fn = sort.alphanumeric) {
	let sortedKeys = Object.keys(obj).sort(fn);
	let sortedObj = {};

	for (let key of sortedKeys) {
		sortedObj[key] = obj[key];
	}

	return sortedObj;
}

export function sortObjectValues (obj, fn = sort.countDesc) {
	let sortedEntries = Object.entries(obj).sort((a, b) => fn(a[1], b[1]));
	let sortedObj = {};

	for (let [key, value] of sortedEntries) {
		sortedObj[key] = value;
	}

	return sortedObj;
}
