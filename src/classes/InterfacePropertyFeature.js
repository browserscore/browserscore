import Feature from './Feature.js';
import supportsAttributeOrMethod from '../supports/attributeOrMethod.js';

export default class InterfacePropertyFeature extends Feature {
	leafTest () {
		let required = this.required ?? this.parent.required;
		let interfaceObject = this.interface ?? this.parent.interface;
		let interfaceName = this.parent.id;

		return supportsAttributeOrMethod(interfaceName, this.id, required, interfaceObject);
	}
}
