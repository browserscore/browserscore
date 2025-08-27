import Feature from './Feature.js';
import supportsInterface from '../supports/interface.js';
import InterfacePropertyFeature from './InterfacePropertyFeature.js';

export default class InterfaceFeature extends Feature {
	/**
	 * @type {InterfacePropertyFeature[]}
	 */
	children = [];

	constructor (def, parent, group) {
		super(def, parent, group);

		this.required = def.required ?? group?.required;
		this.interface = def.interface ?? group?.interface;

		if (this.tests) {
			if (this.tests.length === 1 && (!this.id || this.id === this.tests[0])) {
				// Testing a single value for a single property, no children to create
				this.id = this.tests[0];
				delete this.tests;
			}
			else {
				if (this.tests.length > 0) {
					for (let test of this.tests) {
						let subFeature = new InterfacePropertyFeature({id: test}, this);
						this.children.push(subFeature);
					}
				}
			}
		}
	}

	leafTest () {
		return supportsInterface(this.id);
	}
}
