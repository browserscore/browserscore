
/**
 * Setup dummy elements
 */
var dummy = document.createElement('_'),
	inline = dummy.style,
	style = document.createElement('style');

document.documentElement.appendChild(style);
dummy.setAttribute('data-foo', 'bar');
dummy.setAttribute('data-px', '1px');
document.documentElement.appendChild(dummy);

const Supports = {
	prefixes: ['', '-moz-', '-webkit-', '-o-', '-ms-', 'ms-', '-khtml-'],
	domPrefixes: ['', 'Moz', 'Webkit', 'WebKit'],

	property: function (property) {
		if (property.charAt(0) === '-') {
			return {
				success: camelCase(property) in inline ? true : false,
				property: property,
			};
		}

		if (!this.property.cached) {
			this.property.cached = {};
		} else if (this.property.cached[property]) {
			return {
				success: true,
				property: this.property.cached[property].property,
				prefix: this.property.cached[property].prefix,
			};
		}

		for (var i = 0; i < this.prefixes.length; i++) {
			var prefixed = this.prefixes[i] + property;

			if (camelCase(prefixed) in inline) {
				this.property.cached[property] = {
					property: prefixed,
					prefix: this.prefixes[i],
				};
				return {
					success: true,
					property: prefixed,
					prefix: this.prefixes[i],
				};
			}
		}

		this.property.cached[property] = false;
		return {
			success: false,
			property,
		};
	},

	value: function (property, value) {
		property = this.property(property);

		if (!property.success) {
			return property;
		}
		const propertyPrefix = property.prefix;
		property = camelCase(property.property);

		inline.cssText = '';
		inline[property] = '';

		for (var i = 0; i < this.prefixes.length; i++) {
			var prefixed = this.prefixes[i] + value;

			try {
				inline[property] = prefixed;
			} catch (e) {}

			if (inline.length > 0) {
				return {
					success: true,
					prefix: this.prefixes[i],
					propertyPrefix,
				};
			}
		}

		return {
			success: false,
		};
	},

	descriptorvalue: function (descriptor, value, required) {
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

		style.textContent = rule + ' {' + add + descriptor + ':' + value + '}';
		try {
			if (style.sheet.cssRules.length) {
				return {
					success:
						(style.sheet.cssRules[pos].style && style.sheet.cssRules[pos].style.length >= 1) ||
						style.sheet.cssRules[pos][camelCase(descriptor)] !== undefined,
				};
			} else {
				return { success: false };
			}
		} catch (e) {
			return { success: false };
		}
	},

	selector: function (selector) {
		if (!this.selector.cached) {
			this.selector.cached = {};
		} else if (this.selector.cached[selector]) {
			return {
				success: this.selector.cached[selector],
			};
		}

		for (var i = 0; i < this.prefixes.length; i++) {
			var prefixed = selector.replace(/^(:+)/, '$1' + this.prefixes[i]);

			if (CSS.supports('selector(' + prefixed + ')')) {
				this.selector.cached[selector] = true;
				return {
					success: true,
					prefix: this.prefixes[i],
				};
			}
		}

		this.selector.cached[selector] = false;
		return { success: false };
	},

	atrule: function (atrule) {
		if (!this.atrule.cached) {
			this.atrule.cached = {};
		} else if (this.atrule.cached[atrule]) {
			return {
				success: this.atrule.cached[atrule],
			};
		}

		for (var i = 0; i < this.prefixes.length; i++) {
			var prefixed = atrule.replace(/^@/, '@' + this.prefixes[i]);

			style.textContent = prefixed; // Safari 4 has issues with style.innerHTML

			if (style.sheet.cssRules.length > 0) {
				this.atrule.cached[atrule] = true;
				return {
					success: true,
					prefix: this.prefixes[i],
				};
			}
		}

		this.atrule.cached[atrule] = false;
		return { success: false };
	},

	mq: function (mq) {
		return {
			// We check whether the query does not include 'not all' because
			// if it does, that means the query is ignored.
			// See https://drafts.csswg.org/cssom/#parse-a-media-query-list
			success: !matchMedia(mq).media.includes('not all'),
		};
	},

	variable: function (name, value) {
		inline.setProperty(name, value);
		inline.setProperty('margin-right', 'var(' + name + ')');
		var styles = window.getComputedStyle(dummy);
		return {
			success: styles.marginRight === value,
		};
	},

	declaration: function (intruction) {
		var val = intruction.match(/\s*([^:]+)\s*:\s*(.+)\s*/);
		return {
			success: !val[1].match(/--.*/)
				? Supports.value(val[1], val[2]).success
				: Supports.variable(val[1], val[2]).success,
		};
	},

	interface: function (name) {
		if (!this.interface.cached) {
			this.interface.cached = {};
		} else if (this.interface.cached[name]) {
			return {
				success: true,
				interface: this.interface.cached[name].interface,
				prefix: this.interface.cached[name].prefix,
			};
		}

		for (var i = 0; i < this.domPrefixes.length; i++) {
			var prefixed = getPrefixedVariants(name, this.domPrefixes[i]);

			for (var j = 0; j < prefixed.length; j++) {
				if (prefixed[j] in window) {
					this.interface.cached[name] = {
						interface: prefixed[j],
						prefix: this.domPrefixes[i],
					};

					return {
						success: true,
						interface: prefixed[j],
						prefix: this.domPrefixes[i],
					};
				}
			}
		}

		this.interface.cached[name] = false;
		return {
			success: false,
			interface: name,
		};
	},

	attributeOrMethod: function (interfaceName, attributeOrMethod, required, interfaceCallback) {
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

		interfaceName = this.interface(interfaceName);

		if (!interfaceName.success) {
			return interfaceName;
		}

		// If no CSS rules are defined to test against and no interface is defined explicitly,
		// only return the interface info
		if (!required && !interfaceCallback) {
			return interfaceName;
		}

		style.textContent = required;

		var cssInterface = null;
		try {
			if (interfaceCallback) {
					cssInterface = interfaceCallback(style);
			} else {
				cssInterface = getInterfaceFromRules(style.sheet.cssRules, interfaceName.interface);
			}
		} catch (e) {
			return interfaceName;
		}

		if (cssInterface) {
			for (var i = 0; i < this.domPrefixes.length; i++) {
				var prefixed = this.domPrefixes[i] + attributeOrMethod;

				if (prefixed in cssInterface) {
					return {
						success: true,
						prefix: this.domPrefixes[i],
						interfacePrefix: interfaceName.prefix,
					};
				}
			}
		}

		return {
			success: false,
		};
	},
};

export default Supports;
export { Supports };

/**
 * Private
 */
function camelCase(str) {
	return str
		.replace(/-([a-z])/g, function ($0, $1) {
			return $1.toUpperCase();
		})
		.replace('-', '');
}

function getPrefixedVariants(featureName, prefix) {
	return [
		prefix + featureName,
		featureName.replace('CSS', 'CSS' + prefix),
	]
}
