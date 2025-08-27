import Feature from '../Feature.js';
import supportsDescriptor from '../../supports/descriptorvalue.js';

export class CSSDescriptorFeatureValue extends Feature {
	leafTest () {
		let required = this.closestValue(f => f.required);

		if (required) {
			required = required[this.id] ?? required['*'] ?? required;
		}

		let name = this.parent.id;
		let value = this.id;

		return supportsDescriptor(name, value, required);
	}
}

export default class CSSDescriptorFeature extends Feature {
	static children = {
		tests: {
			type: CSSDescriptorFeatureValue,
		}
	}

	constructor (def, parent, group) {
		super(def, parent, group);

		this.required = def.required ?? group?.required;
	}
}


