import { prefixes, inlineStyle } from './shared.js';
import { camelCase } from './util.js';

let cached = {};

export default function property (property) {
	if (property.charAt(0) === '-') {
		return {
			success: camelCase(property) in inlineStyle ? true : false,
			property: property,
		};
	}

	if (cached[property]) {
		return {
			success: true,
			property: cached[property].property,
			prefix: cached[property].prefix,
		};
	}

	for (var i = 0; i < prefixes.length; i++) {
		var prefixed = prefixes[i] + property;

		if (camelCase(prefixed) in inlineStyle) {
			cached[property] = {
				property: prefixed,
				prefix: prefixes[i],
			};
			return {
				success: true,
				property: prefixed,
				prefix: prefixes[i],
			};
		}
	}

	cached[property] = false;
	return {
		success: false,
		property,
	};
}

