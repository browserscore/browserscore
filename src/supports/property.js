import { prefixes, inlineStyle } from './shared.js';
import { camelCase } from './util.js';

let cached = {};

/**
 * Low level support check, no caching, no prefixes
 * @param {*} property
 * @returns
 */
export function isSupported (property, value) {
	if (globalThis.CSS && CSS.supports) {
		return CSS.supports(property, value ?? 'initial');
	}

	// No CSS, fall back to the DOM
	if (value === undefined || value === '') {
		// No value, check if the property is present
		return inlineStyle[property] !== undefined;
	}

	// Set and check if it takes
	inlineStyle.setProperty(property, '');
	inlineStyle.setProperty(property, value);
	let result = inlineStyle.getPropertyValue(property) !== value;
	inlineStyle.setProperty(property, '');
	return result;
}

export default function (name) {
	let cachedResult = cached[name];
	let success, prefix;

	if (cachedResult === undefined) {
		prefix = prefixes.find(prefix => isSupported(prefix + name));
		success = prefix !== undefined;
		cached[name] = prefix === '' ? true : (prefix ?? false);
	}
	else {
		success = Boolean(cachedResult);
		prefix = typeof cachedResult === "boolean" ? '' : cachedResult;
	}

	return {
		success,
		property: prefix + name,
		prefix,
	};
}

