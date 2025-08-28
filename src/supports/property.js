import { prefixes, inlineStyle } from './shared.js';

let cached = {};

/**
 * Low level support check, no caching, no prefixes
 * @param {string} property
 * @param {string} [value]
 * @param {CSSStyleDeclaration} [style] - Provide the context to check in. Mainly used for descriptors.
 * @returns {boolean}
 */
export function isSupported (property, style) {
	if (!style && globalThis.CSS && CSS.supports) {
		return CSS.supports(property, 'inherit');
	}

	style ??= inlineStyle;

	// Can't use CSS.supports(), fall back to the DOM
	return property in style || style[property] !== undefined;
}

export default function (name) {
	if (!name || !name.replace) {
		return {success: false, note: 'Invalid property name: ' + name};
	}

	name = name.replace(/\*/g, 'foo');
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

