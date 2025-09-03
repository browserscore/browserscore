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
		tests: {
			type: CSSPropertyValueFeature,
		}
	}
	static gatingTest = true;

	testSelf () {
		// Has no values
		let property = this.id;
		return supportsProperty(property);
	}
}
