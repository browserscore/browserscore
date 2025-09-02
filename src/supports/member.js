import { domPrefixes as prefixes, styleElement, prefixCamelCase as prefixName } from './shared.js';

import supportsInterface from './interface.js';

function getInterfaceFromRules(rules, interfaceName) {
	for (let i = 0; i < rules.length; i++) {
		if (rules[i].constructor.name === interfaceName) {
			return rules[i];
		}

		if (rules[i].cssRules) {
			let ret = getInterfaceFromRules(rules[i].cssRules, interfaceName);
			if (ret) {
				return ret;
			}
		}
	}

	return null;
}

let instances = {};

export function isSupported (object, name) {
	if (name in object) {
		return true;
	}

	// Check parent classes
	let parent = Object.getPrototypeOf(object);
	if (!parent || parent === Object.prototype) {
		return false;
	}
	return isSupported(parent, name);
}

export function getInstance (name, fn) {
	let instance = instances[name];

	if (instance !== undefined) {
		return instance;
	}

	try {
		if (fn) {
			instance = fn(styleElement);
		}
	}
	catch (e) {
		return null;
	}

	if (instance) {
		instances[name] = instance;
		return instance;
	}
}

export default function member (interfaceName, name, interfaceCallback) {
	let interfaceSupported = supportsInterface(interfaceName);

	if (!interfaceSupported.success) {
		return {success: false};
	}

	let resolvedInterfaceName = interfaceSupported.name;
	let object = window[resolvedInterfaceName]?.prototype ?? window[resolvedInterfaceName];

	let prefix = prefixes.find(prefix => isSupported(object, prefixName(prefix, name)));

	if (prefix !== undefined) {
		return {success: true, prefix};
	}

	// Not found in prototype, try to get an instance (slow)
	let instance = getInstance(resolvedInterfaceName, interfaceCallback);

	if (!instance) {
		return {success: false};
	}

	prefix = prefixes.find(prefix => isSupported(instance, prefixName(prefix, name)));
	let success = prefix !== undefined;
	return {
		success,
		prefix,
	};
}
