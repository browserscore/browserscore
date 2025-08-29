import { isSupported as isPropertySupported } from './property.js';
import supportsAtrule from './atrule.js';

let cached = {};

/**
 * Test whether the browser recognizes a descriptor.
 * Note that for many @rules, the browser just uses regular CSSStyleDeclaration objects
 * which means many descriptors that are not actually supported in a given rule may return true.
 * Result is cached.
 * Prefixes are not checked (are there any cases of prefixed descriptors?)
 * @param {string} name - The descriptor to check as a string
 * @param {string} [value] - The value to check as a string (defaults to "inherit")
 * @param {string} atrule - The at-rule to check as a string (e.g. "@supports (display: flex)")
 *
 * @returns
 */
export default function (name, atrule) {
	if (!atrule) {
		throw new Error(`At-rule is required for descriptor ${name}`);
	}

	let atruleSupported = supportsAtrule(atrule);

	if (!atruleSupported.instance) {
		return {success: false, atrule: atruleSupported};
	}

	atrule = atruleSupported.resolved; // Normalized name

	cached[atrule] ??= {};

	let success = cached[atrule][name];
	if (success === undefined) {
		let style = atruleSupported.instance.style ?? atruleSupported.instance;
		success = isPropertySupported(name, style);

		cached[atrule][name] = success;
	}

	return {success, atrule: atruleSupported};
}
