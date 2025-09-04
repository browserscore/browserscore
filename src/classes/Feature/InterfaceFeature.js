import Feature from '../Feature.js';
import testExtends from '../../supports/extends.js';
import supportsInterface from '../../supports/interface.js';
import supportsMember from '../../supports/member.js';

export class MemberFeature extends Feature {
	static children = {
		/** The member needs to be an instance of this class */
		instanceof: { type: MemberFeature },
	}

	static gatingTest = true;

	get base () {
		return this.closest(f => f instanceof InterfaceFeature)?.base;
	}

	get memberType () {
		return this.def.fromParent === 'instanceof' ? this.parent.def.fromParent : this.def.fromParent;
	}

	get code () {
		if (this.def.fromParent === 'functions' || this.def.fromParent === 'methods') {
			return this.id + '()';
		}

		if (this.def.fromParent === 'instanceof') {
			return 'instanceof ' + this.id;
		}

		return this.id;
	}

	testSelf () {
		let options = {};

		let isInstanceOf = this.def.fromParent === 'instanceof';
		let memberType = this.memberType;

		options.path = memberType === 'properties' || memberType === 'functions' ? '' : 'prototype';
		options.typeof = memberType === 'methods' || memberType === 'functions' ? 'function' : '';
		options.instanceof = isInstanceOf ? this.id : '';
		let member = isInstanceOf ? this.parent.id : this.id;
		let base = this.base;
		options.context = {name: base.id, callback: base.interface};

		return supportsMember(member, options);
	}
}

export default class InterfaceFeature extends Feature {
	static children = {
		/** @deprecated Alias of members */
		tests: { type: MemberFeature },

		/** The object needs to be an instance of this class */
		instanceof: { type: InterfaceFeature },

		/** The object should be a subclass of this class */
		extends: { type: InterfaceFeature },

		/** Properties that should exist on this object */
		properties: { type: MemberFeature },

		/** Properties that should exist on this object and should be functions */
		functions: { type: MemberFeature },

		/** Properties that should exist on this object's prototype */
		members: { type: MemberFeature },

		/** Properties that should exist on this object's prototype and should be functions */
		methods: { type: MemberFeature },
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

		if (this.def.fromParent === 'instanceof') {
			return 'instanceof ' + this.id;
		}

		return this.id;
	}

	/**
	 * Get the InterfaceFeature that contains the actual interface these are testing stuff in
	 */
	get base () {
		if (this.def.fromParent === 'extends') {
			return this.parent;
		}

		return this;
	}

	testSelf () {
		if (this.def.fromParent === 'extends') {
			let SuperClass = this.id;
			let Class = this.parent.id;

			return testExtends(Class, SuperClass);
		}

		if (this.def.fromParent === 'instanceof') {
			let Class = this.id;
			let name = this.parent.id;

			return supportsInterface(name, {instanceof: Class});
		}

		return supportsInterface(this.id);
	}
}
