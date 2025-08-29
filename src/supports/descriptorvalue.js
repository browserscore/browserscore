import { styleElement } from './shared.js';
import { camelCase } from './util.js';

import isDescriptorSupported from './descriptor.js';
import {isSupported as isValueSupported} from './value.js';

/**
 * Low-level function to check if an at-rule is supported
 * @param {string} name - The descriptor to check as a string (e.g. "display")
 * @param {string} value - The value to check as a string (defaults to "inherit")
 * @param {string} atrule - The at-rule to check as a string (e.g. "@supports (display: flex)"). Must have @ already.
 * @returns {boolean}
 */
export function isSupported (name, value, atrule) {
	styleElement.textContent = `${atrule.resolved} { ${name}: ${value} ; }`;

	let instance = styleElement.sheet.cssRules[0];
	let style = instance.style ?? instance;

	if (!style) {
		return false;
	}
	let emptyValue = atrule.instance ? getValue(name, atrule.instance ?? atrule.instance.style) : '';
	let serialized = getValue(name, style);

	return serialized !== emptyValue;
}

function getValue (name, rule) {
	if (rule.getPropertyValue) {
		return rule.getPropertyValue(name);
	}

	return rule[camelCase(name)] || '';
}

/**
 * No caching, no prefixes. Fails early if the descriptor or @rule are not supported at all.
 * @param {string} name
 * @param {string} value
 * @param {string} atrule
 * @returns
 */
export default function (name, value, atrule) {
	let descriptor = isDescriptorSupported(name, atrule);

	if (!descriptor.success) {
		return {success: false, note: `Descriptor ${name} is not supported at all in ${descriptor.atrule.resolved}`};
	}

	let success = isSupported(name, value, descriptor.atrule);
	return {success, descriptor};
}
