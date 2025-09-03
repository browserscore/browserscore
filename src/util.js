import { toArray } from "./supports/util.js";
export { toArray };

export const IS_DEV = (location.hostname === 'localhost' || location.search.includes('env=dev')) && !location.search.includes('env=prod');
const classes = ['epic-fail', 'fail', 'very-buggy', 'buggy', 'slightly-buggy', 'almost-pass', 'pass'];

export function passclass(info) {
	if (info === undefined || info === null) {
		return '';
	}

	let success;

	if (typeof info === 'boolean') {
		success = +info;
	}
	else if (typeof info === 'number') {
		success = info;
	}
	else if (typeof info === 'object' && 'passed' in info) {
		success = info.passed / info.total;
	}

	if (success >= 1) {
		return classes.at(-1);
	}

	let index = Math.round(success * (classes.length - 2));
	return classes[index];
}

export function round(value, maxDecimals = 0) {
	return Math.round(value * 10 ** maxDecimals) / 10 ** maxDecimals;
}

export function percent(value, maxDecimals = 0) {
	value = +value;
	return value.toLocaleString("en-US", {
		style: "percent",
		minimumFractionDigits: 0,
		maximumFractionDigits: maxDecimals,
	});
}

export function capitalize (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function symmetricDifference (a, b) {
	a = toArray(a);
	b = toArray(b);

	let setA = new Set(a);
	let setB = new Set(b);

	return [
		...a.filter(value => !setB.has(value)),
		...b.filter(value => !setA.has(value)),
	];
}

export function log (...args) {
	console.log(...args);
	return args[0];
}

export function mapObject (obj, mapValues, mapKeys) {
	let ret = {};
	for (let key in obj) {
		let newKey = mapKeys ? mapKeys(key) ?? key : key;
		ret[newKey] = mapValues ? mapValues(obj[key]) : obj[key];
	}
	return ret;
}

/**
 * Pick a subset of keys from an object
 * @param {Object} obj - Object to pick from
 * @param {Iterable<string | Symbol | number>} keys - Keys to pick
 * @returns {Object}
 */
export function pick (obj, keys) {
	let ret = {};
	for (let key of keys) {
		if (key in obj) {
			ret[key] = obj[key];
		}
	}
	return ret;
}

export function groupBy (arr, fn) {
	let grouped = {};
	let isString = typeof fn === 'string';

	for (let item of arr) {
		let key = isString ? item[fn] : fn(item);
		grouped[key] = grouped[key] || [];
		grouped[key].push(item);
	}


	return grouped;
}

