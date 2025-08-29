import { prefixes, styleElement } from './shared.js';

let cached = {};
let instances = {};

/**
 * Low-level function to check if an at-rule is supported. No cache, no input fixup, no prefixing.
 * @param {string} name - The at-rule to check as a string (e.g. "@supports (display: flex)"). Needs the @.
 * @param {CSSRule | CSSStyleSheet} [parentRule] - Optionally a parent rule to insert the at-rule into.
 * @returns {boolean}
 */
export function isSupported (atrule, { parent, contentBefore = '' } = {}) {
	let code = atrule;

	if (!atrule.endsWith(';') && !atrule.endsWith('}')) {
		code += `{ }`;
	}

	if (contentBefore) {
		code = contentBefore + code;
	}

	if (parent) {
		// Rules that are only valid inside other rules, e.g. @stylistic
		let parentRule = parent.instance;

		if (parentRule && parentRule.cssRules && (parentRule.insertRule || parentRule.appendRule)) {
			if (parentRule.insertRule) {
				// Most rules
				parentRule.insertRule(code, 0);
			}
			else if (parentRule.appendRule) {
				// E.g. CSSKeyframeRule
				parentRule.appendRule(code);
			}

			return parentRule.cssRules[0];
		}
		else {
			// Not an object we can use, fall back to using code :(
			code = `${parent.resolved} { ${code} }`;
		}
	}

	if (parent || contentBefore) {
		let codeWithout = parent ? `${parent.resolved} { ${contentBefore} }` : contentBefore;

		styleElement.textContent = codeWithout;
		let obj = parent ? styleElement.sheet.cssRules[0] : styleElement.sheet.cssRules[0];
		let cssTextWithout = obj.cssText;

		styleElement.textContent = code;
		let cssText = obj.cssText;

		return cssText !== cssTextWithout;
	}
	else {
		styleElement.textContent = code;
		return styleElement.sheet.cssRules[0];
	}

}

/**
 * Cached.
 * @param {string} atrule An @-rule string including any prelude like e.g. "@supports (display: flex)", with or without the @
 * @returns
 */
export default function supportsAtrule (atrule, {parent: parentRule, contentBefore} = {}) {
	let parent;

	if (parentRule) {
		// Fail early if parent not supported
		parent = supportsAtrule(parentRule);
		if (!parent.success) {
			return {success: false, parent: parent};
		}
	}

	if (!atrule.startsWith('@')) {
		atrule = "@" + atrule;
	}
	atrule = atrule.trim();

	let cachedResult = cached[atrule];
	let success, prefix, resolved;

	if (cachedResult === undefined) {
		for (let p of prefixes) {
			resolved = prefixAtrule(atrule, p);
			success = isSupported(resolved, {parent, contentBefore});

			if (success) {
				if (typeof success === 'object') {
					instances[atrule] = success;
				}

				prefix = p;
				success = true;
				break;
			}
		}

		cached[atrule] = prefix === '' ? true : (prefix ?? false);
	}
	else {
		success = Boolean(cachedResult);
		prefix = typeof cachedResult === "boolean" ? '' : cachedResult;
		resolved = prefixAtrule(atrule, prefix);
	}

	success ??= false;

	return {success, prefix, instance: instances[atrule], resolved};
}

function prefixAtrule (atrule, prefix = '') {
	return atrule.replace(/^@?/, '@' + prefix);
}
