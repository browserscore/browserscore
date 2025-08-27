import { prefixes } from './shared.js';

import supportsProperty, { isSupported } from './property.js';

export default function value (property, value) {
	// First, check if the *property* is supported
	property = supportsProperty(property);

	if (!property.success) {
		return property;
	}

	const propertyPrefix = property.prefix;
	const prefixedProperty = propertyPrefix + property.property;

	const prefix = prefixes.find(prefix => isSupported(prefixedProperty, prefix + value));
	const success = prefix !== undefined;

	return {
		success,
		prefix,
		propertyPrefix,
	};
}
