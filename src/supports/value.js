import { prefixes, inlineStyle } from './shared.js';
import { camelCase } from './util.js';

import supportsProperty from './property.js';

export default function value (property, value) {
	property = supportsProperty(property);

	if (!property.success) {
		return property;
	}
	const propertyPrefix = property.prefix;
	property = camelCase(property.property);

	inlineStyle.cssText = '';
	inlineStyle[property] = '';

	for (var i = 0; i < prefixes.length; i++) {
		var prefixed = prefixes[i] + value;

		try {
			inlineStyle[property] = prefixed;
		} catch (e) {}

		if (inlineStyle.length > 0) {
			return {
				success: true,
				prefix: prefixes[i],
				propertyPrefix,
			};
		}
	}

	return {
		success: false,
	};
}
