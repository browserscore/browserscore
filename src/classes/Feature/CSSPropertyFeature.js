import Feature from '../Feature.js';
import supportsProperty from '../../supports/property.js';
import supportsValue from '../../supports/value.js';

export class CSSPropertyValueFeature extends Feature {
	static children = null;

	leafTest () {
		return supportsValue(this.id, this.parent.id);
	}
}


export default class CSSPropertyFeature extends Feature {
	static children = {
		tests: {
			type: CSSPropertyValueFeature,
		}
	}
	static gatingTest = true;

	leafTest () {
		// Has no values
		return supportsProperty(this.id);
	}
}

