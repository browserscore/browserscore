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
	}
	static gatingTest = true;

	constructor (def, parent, group) {
		super(def, parent, group);

		this.required = def.required ?? group?.required;
		this.interface = def.interface ?? group?.interface;
	}

	leafTest () {
		return supportsInterface(this.id);
	}
}
