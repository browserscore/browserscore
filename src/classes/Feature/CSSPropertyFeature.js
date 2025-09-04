import Feature from '../Feature.js';
import supportsProperty from '../../supports/property.js';
import supportsValue from '../../supports/value.js';

export class CSSPropertyValueFeature extends Feature {
	static children = null;

	testSelf () {
		let property = this.parent.id;
		let value = this.id;
		return supportsValue(property, value);
	}
}


export default class CSSPropertyFeature extends Feature {
	static children = {
		/** @deprecated */
		tests: {
			type: CSSPropertyValueFeature,
		},

		values: {
			type: CSSPropertyValueFeature,
			single: 'value',
		},
	}
	static gatingTest = true;

	testSelf () {
		// Has no values
		let property = this.id;
		return supportsProperty(property);
	}
}
