import { dummy, inlineStyle } from './shared.js';

export default function variable (name, value) {
	inlineStyle.setProperty(name, value);
	inlineStyle.setProperty('margin-right', 'var(' + name + ')');
	let styles = window.getComputedStyle(dummy);

	return {
		success: styles.marginRight === value,
	};
}
