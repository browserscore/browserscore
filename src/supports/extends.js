export default function classExtends (Class, SuperClass) {
	let args = [Class, SuperClass];
	if (typeof Class === 'string') {
		Class = globalThis[Class];
	}

	if (typeof SuperClass === 'string') {
		SuperClass = globalThis[SuperClass];
	}

	if (!SuperClass) {
		return {success: false, note: 'Parent class not found: ' + SuperClass ?? args[1]};
	}

	if (!Class) {
		return {success: false, note: 'Class not found: ' + Class ?? args[0]};
	}

	let testedClass = Class;

	do {
		testedClass = Object.getPrototypeOf(testedClass);
		if (testedClass === SuperClass) {
			return {success: true};
		}
	} while (testedClass);

	return {success: false};
}
