/**
 * A feature that tests whether a specific value is supported for a specific property
 * where the focus is the value
 */
import Feature from '../Feature.js';
import supportsProperty from '../../supports/property.js';
import supportsValue from '../../supports/value.js';

export class CSSValuePropertyFeature extends Feature {
	static children = null;

	constructor (def, parent) {
		super(def, parent);

		if (def.properties && !def.properties.processed) {
			// Subset properties to remove unsupported ones before any children are created
			for (let i = 0; i < def.properties.length; i++) {
				let property = def.properties[i];
				if (!supportsProperty(property)) {
					def.properties.splice(i--, 1);
				}
			}
			def.properties.processed = true;
		}

		this.properties = def.properties;
	}

	testSelf () {
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

	testSelf () {
		let value = this.id;
		let property = this.closestValue(f => f.property);
		return supportsValue(property, value);
	}
}
