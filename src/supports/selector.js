import { prefixes } from './shared.js';

let cached = {};

export default function selector (selector) {
	if (cached[selector]) {
		return {
			success: cached[selector],
		};
	}

	for (let i = 0; i < prefixes.length; i++) {
		let prefixed = selector.replace(/^(:+)/, '$1' + prefixes[i]);

		if (CSS.supports('selector(' + prefixed + ')')) {
			cached[selector] = true;
			return {
				success: true,
				prefix: prefixes[i],
			};
		}
	}

	cached[selector] = false;
	return { success: false };
}
