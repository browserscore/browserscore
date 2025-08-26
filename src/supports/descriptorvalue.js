import { styleElement } from './shared.js';
import { camelCase } from './util.js';

export default function descriptorValue (descriptor, value, required) {
	/* doesn't handle prefixes for descriptor or value */
	var add = '',
		pos = 0;
	if (descriptor.match(/@.*\//)) {
		var part = descriptor.split('/');
		var rule = part[0];
		descriptor = part[1];

		if (required) {
			if (required.rule) {
				rule = required.rule + ' ' + rule;
				pos = 1;
			}
			if (required.descriptor) {
				add = required.descriptor + '; ';
			}
		}
	} else {
		var rule = '@font-face';
	}

	styleElement.textContent = rule + ' {' + add + descriptor + ':' + value + '}';
	try {
		if (styleElement.sheet.cssRules.length) {
			return {
				success:
					(styleElement.sheet.cssRules[pos].style && styleElement.sheet.cssRules[pos].style.length >= 1) ||
					styleElement.sheet.cssRules[pos][camelCase(descriptor)] !== undefined,
			};
		} else {
			return { success: false };
		}
	} catch (e) {
		return { success: false };
	}
}
