import Feature from '../Feature.js';
import classExtends from '../../supports/extends.js';
import supportsInterface from '../../supports/interface.js';
import supportsAttributeOrMethod from '../../supports/member.js';

export class InterfacePropertyFeature extends Feature {
	testSelf () {
		let interfaceObject = this.interface ?? this.parent.interface;
		let interfaceName = this.parent.id;

		return supportsAttributeOrMethod(interfaceName, this.id, interfaceObject);
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

	constructor (def, parent) {
		super(def, parent);

		this.interface = def.interface ?? parent?.interface;
	}

	get code () {
		if (this.def.fromParent === 'extends') {
			return 'extends ' + this.id;
		}

		return this.id;
	}

	testSelf () {
		if (this.def.fromParent === 'extends') {
			let SuperClass = this.id;
			let Class = this.parent.id;

			return classExtends(Class, SuperClass);
		}

		return supportsInterface(this.id);
	}
}
