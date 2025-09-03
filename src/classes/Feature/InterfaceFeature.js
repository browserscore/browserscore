import Feature from '../Feature.js';
import testExtends from '../../supports/extends.js';
import supportsInterface from '../../supports/interface.js';
import supportsMember from '../../supports/member.js';

export class MemberFeature extends Feature {
	testSelf () {
		let interfaceObject = this.interface ?? this.parent.interface;
		let interfaceName = this.parent.id;

		return supportsMember(interfaceName, this.id, interfaceObject);
	}
}

export default class InterfaceFeature extends Feature {
	static children = {
		tests: { type: MemberFeature },
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

			return testExtends(Class, SuperClass);
		}

		return supportsInterface(this.id);
	}
}
