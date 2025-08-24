import Supports from './supports.js';

export default {
	values: function (test, name, feature) {
		let properties = feature[feature.type]?.properties || feature.properties;

		if (!properties) {
			return {
				success: 0,
				note: 'No properties to test',
			};
		}

		let failed = [];

		for (var j = 0, property; (property = properties[j++]); ) {
			if (!Supports.property(property).success) {
				// Property not supported, no point in using it to test values
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

	descriptors: function (value, name, feature) {
		var required = undefined;
		if (feature.required) {
			if (feature.required[value]) {
				required = feature.required[value];
			} else if (feature.required['*']) {
				required = feature.required['*'];
			}
		}
		return Supports.descriptorvalue(name, value, required);
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

	interfaces: function (value, name, feature) {
		return Supports.attributeOrMethod(name, value, feature.required, feature.interface);
	},

	'Media queries': function (test) {
		return Supports.mq(test);
	},
};
