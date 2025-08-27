import { prefixes, styleElement } from './shared.js';

let cached = {};

/**
 * Low-level function to check if an at-rule is supported
 * @param {string} atrule - The at-rule to check as a string (e.g. "@supports (display: flex)")
 * @returns {boolean}
 */
export function isSupported (atrule) {
	styleElement.textContent = atrule; // Safari 4 has issues with style.innerHTML
	return styleElement.sheet.cssRules.length > 0;
}

export default function (atrule) {
	let cachedResult = cached[atrule];
	let success, prefix;

	if (cachedResult === undefined) {
		prefix = prefixes.find(prefix => isSupported(atrule.replace(/^@/, '@' + prefix)));
		success = prefix !== undefined;
		cached[atrule] = prefix === '' ? true : (prefix ?? false);
	}
	else {
		success = Boolean(cachedResult);
		prefix = typeof cachedResult === "boolean" ? '' : cachedResult;
	}

	return {success, prefix};
}
