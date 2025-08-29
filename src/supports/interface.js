import { domPrefixes as prefixes, prefixCamelCase as prefixName } from './shared.js';

let cached = {};

/**
 * Low-level, no caching, no prefixes
 * @param {string} name
 */
export function isSupported (name) {
	return name in window;
}

export default function (name) {
	let cachedResult = cached[name];
	let success, prefix, resolvedName;

	if (cachedResult === undefined) {
		prefix = prefixes.find(prefix => isSupported(prefixName(prefix, name)));

		if (prefix === undefined && name.indexOf('CSS') === 0) {
			// Last ditch effort to find a prefix: try CSS[Prefix]Name
			let nameWithoutCSS = name.slice(3);
			prefix = prefixes.find(prefix => isSupported('CSS' + prefixName(prefix, nameWithoutCSS)));

			if (prefix !== undefined) {
				resolvedName = 'CSS' + prefixName(prefix, nameWithoutCSS);
			}
		}

		resolvedName ??= prefixName(prefix, name)
		cached[name] = success = prefix !== undefined;

		if (success && prefix) {
			cached[name] = resolvedName;
		}
	}
	else {
		success = Boolean(cachedResult);
		resolvedName = cachedResult === true ? name : (cachedResult || undefined);
	}

	return {
		success,
		name: resolvedName,
	};
}
