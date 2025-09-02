/**
 * A feature that tests whether a specific value is supported for a specific property
 * where the focus is the value
 */
import Feature from '../Feature.js';
import supportsProperty from '../../supports/property.js';
import supportsValue from '../../supports/value.js';

export class CSSValuePropertyFeature extends Feature {
	static children = null;

	_createChildren () {
		// Subset properties to remove unsupported ones before any children are created
		let ownProperties = this.def.properties;

		if (!ownProperties) {
			return;
		}

		for (let i = 0; i < ownProperties.length; i++) {
			let property = ownProperties[i];
			if (!supportsProperty(property)) {
				ownProperties.splice(i--, 1);
			}
		}

		super._createChildren();
	}

	leafTest () {
		let valueFeature = this.closest(f => f.constructor.name === 'CSSValueFeature');
		let value = valueFeature?.id;
		let property = this.id;
		return supportsValue(property, value);
	}
}

export default class CSSValueFeature extends Feature {
	static children = {
		tests: {
			type: CSSValueFeature,
			single: 'id'
		},
		properties: {
			type: CSSValuePropertyFeature,
			single: 'property',
			nest: true,
		}
	}

	leafTest () {
		let value = this.id;
		let property = this.closestValue(f => f.property);
		return supportsValue(property, value);
	}
}
