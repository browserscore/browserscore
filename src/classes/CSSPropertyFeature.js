import Feature from './Feature.js';
import CSSPropertyValueFeature from './CSSPropertyValueFeature.js';
import supportsProperty from '../supports/property.js';


export default class CSSPropertyFeature extends Feature {
	/**
	 * @type {CSSPropertyValueFeature[]}
	 */
	children = [];

	constructor (def, parent, group) {
		super(def, parent, group);

		if (this.tests?.length > 0) {
			// Not a leaf node
			for (let test of this.tests) {
				let subFeature = new CSSPropertyValueFeature({id: test}, this);
				this.children.push(subFeature);
			}
		}
	}

	get property () {
		return this.id;
	}

	get code () {
		return this.id;
	}

	leafTest () {
		// Has no values
		return supportsProperty(this.id);
	}
}
