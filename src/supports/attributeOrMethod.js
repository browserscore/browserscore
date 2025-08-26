import { domPrefixes, styleElement } from './shared.js';

import supportsInterface from './interface.js';

function getInterfaceFromRules(rules, interfaceName) {
	for (var i = 0; i < rules.length; i++) {
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

export default function attributeOrMethod (interfaceName, attributeOrMethod, required, interfaceCallback) {
	interfaceName = supportsInterface(interfaceName);

	if (!interfaceName.success) {
		return interfaceName;
	}

	// If no CSS rules are defined to test against and no interface is defined explicitly,
	// only return the interface info
	if (!required && !interfaceCallback) {
		return interfaceName;
	}

	styleElement.textContent = required;

	let cssInterface = null;
	try {
		if (interfaceCallback) {
				cssInterface = interfaceCallback(styleElement);
		} else {
			cssInterface = getInterfaceFromRules(styleElement.sheet.cssRules, interfaceName.interface);
		}
	} catch (e) {
		return interfaceName;
	}

	if (cssInterface) {
		for (var i = 0; i < domPrefixes.length; i++) {
			var prefixed = domPrefixes[i] + attributeOrMethod;

			if (prefixed in cssInterface) {
				return {
					success: true,
					prefix: domPrefixes[i],
					interfacePrefix: interfaceName.prefix,
				};
			}
		}
	}

	return {
		success: false,
	};
}
