import { domPrefixes } from './shared.js';
import { getPrefixedVariants } from './util.js';

let cached = {};

export default function (name) {
	if (!cached[name]) {
		cached[name] = {};
	} else if (cached[name]) {
		return {
			success: true,
			interface: cached[name].interface,
			prefix: cached[name].prefix,
		};
	}

	for (var i = 0; i < domPrefixes.length; i++) {
		var prefixed = getPrefixedVariants(name, domPrefixes[i]);

		for (var j = 0; j < prefixed.length; j++) {
			if (prefixed[j] in window) {
				cached[name] = {
					interface: prefixed[j],
					prefix: domPrefixes[i],
				};

				return {
					success: true,
					interface: prefixed[j],
					prefix: domPrefixes[i],
				};
			}
		}
	}

	cached[name] = false;
	return {
		success: false,
		interface: name,
	};
}
