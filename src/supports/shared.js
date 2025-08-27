export const prefixes = ['', '-moz-', '-webkit-', '-ms-', 'ms-', '-o-', '-khtml-'];
export const domPrefixes = ['', 'Webkit', 'WebKit', 'webkit', 'Moz', 'moz', 'ms', 'Ms'];

const dummy = document.createElement('_');
const inlineStyle = dummy.style;
const styleElement = document.createElement('style');

document.documentElement.appendChild(styleElement);
dummy.setAttribute('data-foo', 'bar');
dummy.setAttribute('data-px', '1px');
document.documentElement.appendChild(dummy);

export {dummy, inlineStyle, styleElement}

export function prefixCamelCase (prefix, name) {
	if (!prefix) {
		return name;
	}

	let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
	return prefix + capitalizedName;
}
