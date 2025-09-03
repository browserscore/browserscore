import { domPrefixes as prefixes, prefixCamelCase as prefixName } from './shared.js';

import supportsInterface from './interface.js';

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
		options = {context: options};
	}
	else if (!options.context) {
		options = {context: options};
	}

	let {name: contextName, object: contextObject, callback} = options.context;

	let object = contextObject ?? callback?.() ?? globalThis[contextName];

	if (!object) {
		let contextSupported = supportsInterface(contextName);

		if (!contextSupported.success) {
			return {success: false};
		}

		contextName = contextSupported.name;
		object = globalThis[contextName];
	}

	if (options.type !== 'static' && !(contextObject || callback)) {
		// Non-static member, and the object was not provided
		object = object.prototype;
	}

	if (!object) {
		return {success: false, note: 'No base object'};
	}

	let prefix = prefixes.find(prefix => prefixName(prefix, name) in object);

	if (prefix === undefined) {
		return {success: false};
	}

	let resolvedName = prefixName(prefix, name);

	if (options.type === "function") {
		let actualType = typeof object[resolvedName];

		if (actualType !== "function") {
			return {success: false, type: actualType};
		}
	}

	return {
		success: true,
		prefix,
		resolved: resolvedName,
	};
}
