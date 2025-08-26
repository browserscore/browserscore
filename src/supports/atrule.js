import { prefixes, styleElement } from './shared.js';

let cached = {};

export default function atrule (atrule) {
	if (cached[atrule]) {
		return {
			success: cached[atrule],
		};
	}

	for (var i = 0; i < prefixes.length; i++) {
		var prefixed = atrule.replace(/^@/, '@' + prefixes[i]);

		styleElement.textContent = prefixed; // Safari 4 has issues with style.innerHTML

		if (styleElement.sheet.cssRules.length > 0) {
			cached[atrule] = true;
			return {
				success: true,
				prefix: prefixes[i],
			};
		}
	}

	cached[atrule] = false;
	return { success: false };
}
