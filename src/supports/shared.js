export const prefixes = ['', '-moz-', '-webkit-', '-o-', '-ms-', 'ms-', '-khtml-'];
export const domPrefixes = ['', 'Moz', 'Webkit', 'WebKit'];

const dummy = document.createElement('_');
const inlineStyle = dummy.style;
const styleElement = document.createElement('style');

document.documentElement.appendChild(styleElement);
dummy.setAttribute('data-foo', 'bar');
dummy.setAttribute('data-px', '1px');
document.documentElement.appendChild(dummy);

export {dummy, inlineStyle, styleElement}
