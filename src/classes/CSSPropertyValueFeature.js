/**
 * A feature that tests whether a specific value is supported for a specific property
 * where the focus is the property
 */
import Feature from './Feature.js';
import supportsValue from '../supports/value.js';

export default class CSSPropertyValueFeature extends Feature {
	constructor (def, parent, group) {
		super(def, parent, group);
	}

	leafTest () {
		return supportsValue(this.id, this.parent.id);
	}
}
