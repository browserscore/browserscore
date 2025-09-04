import { domPrefixes as prefixes, prefixCamelCase as prefixName } from './shared.js';

import supportsGlobal from './global.js';

/**
 * Check for the presence of a member or static property
 * @param {*} name
 * @param {*} options
 * @param {string} options.context - The context to check in
 * @param {string} [options.context.name] - The name of the context object
 * @param {Object} [options.context.object] - The instance to check
 * @param {Function} [options.context.callback] - A callback to get an object to check
 * @returns
 */
export default function member (name, options) {
	if (!options) {
		throw new Error('No context info provided');
	}

	if (typeof options === 'string') {
		options = {context: {name: options}};
	}
	else if (!options.context) {
		options = {context: options};
	}

	let {name: contextName, object: contextObject, callback} = options.context;

	let object = contextObject ?? callback?.() ?? globalThis[contextName];

	if (!object) {
		let contextSupported = supportsGlobal(contextName);

		if (!contextSupported.success) {
			return {success: false};
		}

		contextName = contextSupported.name;
		object = globalThis[contextName];
	}

	if (options.path) {
		object = object[options.path];
	}

	if (!object) {
		return {success: false, note: 'No base object'};
	}

	let prefix = prefixes.find(prefix => prefixName(prefix, name) in object);

	if (prefix === undefined) {
		// Not supported
		return {success: false, object};
	}

	let resolvedName = prefixName(prefix, name);
	let memberValue;

	if (options.typeof || options.instanceof) {
		try {
			memberValue = object[resolvedName];
		}
		catch (error) {
			return {success: undefined, object, note: `Failed to get member value ${resolvedName}: ${error.message}`};
		}
	}

	if (options.typeof === "function") {
		let actualType = typeof object[resolvedName];

		if (actualType !== "function") {
			return {success: false, type: actualType, object, memberValue};
		}
	}

	if (options.instanceof) {
		let Class = typeof options.instanceof === 'string' ? globalThis[options.instanceof] : options.instanceof;

		if (!Class) {
			return {success: false, object, note: `Class "${options.instanceof}" not found`};
		}

		if (!(memberValue instanceof Class)) {
			return {success: false, object, note: `Object is not an instance of ${Class.name}`};
		}
	}

	return {
		success: true,
		prefix,
		resolved: resolvedName,
		object,
		memberValue,
	};
}
