import Supports from './supports.js';

export default {
	values: function (test, name, tests) {
		var properties = tests[name].properties || tests.properties,
			failed = [];

		for (var j = 0, property; (property = properties[j++]); ) {
			if (!Supports.property(property).success) {
				properties.splice(--j, 1);
				continue;
			}

			if (!Supports.value(property, test).success) {
				failed.push(property);
			}
		}

		var success = properties.length > 0 ? 1 - failed.length / properties.length : 0;

		return {
			success: success,
			note: success > 0 && success < 1 ? 'Failed in: ' + failed.join(', ') : '',
		};
	},

	properties: function (value, property) {
		return Supports.value(property, value);
	},

	descriptors: function (value, descriptor, tests) {
		var required = undefined;
		if (tests[descriptor].required) {
			if (tests[descriptor].required[value]) {
				required = tests[descriptor].required[value];
			} else if (tests[descriptor].required['*']) {
				required = tests[descriptor].required['*'];
			}
		}
		return Supports.descriptorvalue(descriptor, value, required);
	},

	selectors: function (test) {
		return Supports.selector(test);
	},

	declaration: function (test) {
		return Supports.declaration(test);
	},

	'@rules': function (test) {
		return Supports.atrule(test);
	},

	interfaces: function (value, name, tests) {
		return Supports.attributeOrMethod(name, value, tests[name].required, tests[name].interface);
	},

	'Media queries': function (test) {
		return Supports.mq(test);
	},
};
