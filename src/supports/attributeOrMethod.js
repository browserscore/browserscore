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

export function isSupported (interfaceNameOrProto, name) {
	let prototype = typeof interfaceNameOrProto === 'string' ? window[interfaceNameOrProto]?.prototype : interfaceNameOrProto;

	if (!prototype) {
		return false;
	}

	if (name in prototype) {
		return true;
	}

	return isSupported(Object.getPrototypeOf(prototype), name);
}

export function getInstance (name, testCss, fn) {
	let instance = instances[name];

	if (instance !== undefined) {
		return instance;
	}

	if (testCss) {
		styleElement.textContent = testCss;
	}

	try {
		if (fn) {
			instance = fn(styleElement);
		}
		else if (testCss) {
			instance = getInterfaceFromRules(styleElement.sheet.cssRules, name);
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

export default function attributeOrMethod (interfaceName, name, testCss, interfaceCallback) {
	let interfaceSupported = supportsInterface(interfaceName);

	if (!interfaceSupported.success) {
		return {success: false};
	}

	let resolvedInterfaceName = interfaceSupported.name;
	let prefix = prefixes.find(prefix => isSupported(resolvedInterfaceName, prefixName(prefix, name)));

	if (prefix !== undefined) {
		return {success: true, prefix};
	}

	// Not found in prototype, try to get an instance (slow)
	let instance = getInstance(resolvedInterfaceName, testCss, interfaceCallback);

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
