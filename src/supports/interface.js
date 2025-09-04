import { domPrefixes as prefixes, prefixCamelCase as prefixName } from './shared.js';

let cached = {};

export default function (name, options = {}) {
	let cachedResult = cached[name];
	let success, prefix, resolvedName;

	if (cachedResult === undefined) {
		prefix = prefixes.find(prefix => prefixName(prefix, name) in globalThis);

		if (prefix === undefined && name.indexOf('CSS') === 0) {
			// Last ditch effort to find a prefix: try CSS[Prefix]Name
			let nameWithoutCSS = name.slice(3);
			prefix = prefixes.find(prefix => 'CSS' + prefixName(prefix, nameWithoutCSS) in globalThis);

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

	let object = globalThis[resolvedName];

	if (options.instanceof) {
		let SuperClass = typeof options.instanceof === 'string' ? globalThis[options.instanceof] : options.instanceof;

		if (!SuperClass) {
			return {success: false, object, note: `Class "${options.instanceof}" not found`};
		}

		if (!(object instanceof SuperClass)) {
			return {success: false, object, note: `Not an instance of ${SuperClass.name}`};
		}
	}

	return {
		success,
		name: resolvedName,
		object,
	};
}
