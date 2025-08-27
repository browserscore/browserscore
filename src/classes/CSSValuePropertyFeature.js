import Feature from './Feature.js';
import supportsValue from '../supports/value.js';

export default class CSSValuePropertyFeature extends Feature {
	constructor (def, parent, group) {
		super(def, parent, group);
	}

	leafTest () {
		let valueFeature = this.closest(f => f.constructor.name === 'CSSValueFeature');
		let value = valueFeature?.id;
		let property = this.id;
		return supportsValue(value, property);
	}

}
