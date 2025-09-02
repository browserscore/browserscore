import Feature from '../Feature.js';
import supportsInterface from '../../supports/interface.js';
import supportsAttributeOrMethod from '../../supports/member.js';

export class InterfacePropertyFeature extends Feature {
	leafTest () {
		let required = this.required ?? this.parent.required;
		let interfaceObject = this.interface ?? this.parent.interface;
		let interfaceName = this.parent.id;

		return supportsAttributeOrMethod(interfaceName, this.id, required, interfaceObject);
	}
}

export default class InterfaceFeature extends Feature {
	static children = {
		tests: { type: InterfacePropertyFeature },
		// members: { type: InterfacePropertyFeature },
		// static: { type: InterfacePropertyFeature },
		extends: { type: InterfaceFeature },
	}
	static gatingTest = true;

	constructor (def, parent, group) {
		super(def, parent, group);

		this.required = def.required ?? group?.required;
		this.interface = def.interface ?? group?.interface;
	}

	get code () {
		if (this.fromParent === 'extends') {
			return 'extends ' + this.id;
		}

		return this.id;
	}

	leafTest () {
		if (this.fromParent === 'extends') {
			let superClass = window[this.id];
			let thisClass = window[this.parent.id];

			if (!superClass) {
				return {success: false, note: 'Parent class not found: ' + this.id};
			}

			do {
				thisClass = Object.getPrototypeOf(superClass);
				if (thisClass === superClass) {
					return {success: true};
				}
			} while (thisClass);

			return {success: false};
		}

		return supportsInterface(this.id);
	}
}
