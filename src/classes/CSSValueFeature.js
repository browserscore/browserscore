/**
 * A feature that tests whether a specific value is supported for a specific property
 * where the focus is the value
 */
import Feature from './Feature.js';
import CSSValuePropertyFeature from './CSSValuePropertyFeature.js';
import supportsValue from '../supports/value.js';

export default class CSSValueFeature extends Feature {
	/**
	 * @type {CSSValuePropertyFeature[]}
	 */
	children = [];

	constructor (def, parent, group) {
		super(def, parent, group);

		if (def.property) {
			this.property = def.property;
		}
		else {
			let properties = def.properties ?? group?.properties ?? parent?.properties;
			properties = Array.isArray(properties) ? properties : [properties];

			if (properties.length === 1) {
				this.property = properties[0];
			}
			else {
				this.properties = properties;
			}
		}

		if (this.tests) {
			if (this.tests.length === 1 && (!this.id || this.id === this.tests[0])) {
				// Testing a single value for a single property, no children to create
				this.id = this.tests[0];
				delete this.tests;
			}
			else {
				this._createChildren();
			}
		}

		if (this.properties && this.children.length === 0) {
			// We have multiple properties and have not yet created children
			for (let property of this.properties) {
				let subFeature = new CSSValuePropertyFeature({id: property}, this);
				this.children.push(subFeature);
			}
		}
	}

	leafTest () {
		let value = this.id;
		let property = this.closestValue(f => f.property);
		if (this.id?.startsWith('currentColor')) console.log('value', value, property);
		return supportsValue(value, property);
	}
}
