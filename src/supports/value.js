import { prefixes, inlineStyle } from './shared.js';

import supportsProperty from './property.js';

let cached = {};

export function isSupported (property, value, style) {
	if (!value || !property) {
		throw new Error('Value and property are required');
	}

	if (!style && globalThis.CSS && CSS.supports) {
		return CSS.supports(property, value);
	}

	style ??= inlineStyle;

	// Set and check if it takes
	value ??= 'inherit'; // default to a value supported everywhere

	style.setProperty(property, ''); // first, clear out any existing value
	style.setProperty(property, value);
	// We're not checking if it's === value because browsers often process it, but it shouldn't be blank
	let result = style.getPropertyValue(property);
	style.setProperty(property, ''); // finally, clear out the value
	return Boolean(result);
}

export default function value (property, value) {
	// First, check if the *property* is supported
	let propertySupported = supportsProperty(property);

	if (!propertySupported.success) {
		return propertySupported;
	}

	cached[property] ??= {};
	let cachedResult = cached[property][value];
	let success, prefix;

	if (cachedResult === undefined) {
		const prefixedProperty = propertySupported.prefix + propertySupported.property;
		prefix = prefixes.find(prefix => isSupported(prefixedProperty, prefix + value));
		success = prefix !== undefined;
		cached[property][value] = prefix === '' ? true : (prefix ?? false);
	}
	else {
		success = Boolean(cachedResult);
		prefix = typeof cachedResult === "boolean" ? '' : cachedResult;
	}

	return {
		success,
		prefix,
		property: propertySupported,
	};
}
