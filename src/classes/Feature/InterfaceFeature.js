import Feature from '../Feature.js';
import testExtends from '../../supports/extends.js';
import supportsInterface from '../../supports/interface.js';
import supportsMember from '../../supports/member.js';

export class MemberFeature extends Feature {
	constructor (def, parent) {
		super(def, parent);

		let fromParent = this.def.fromParent;
		this.memberType = fromParent === 'properties' || fromParent === 'functions' ? 'static' : 'instance';
		this.memberKind = fromParent === 'methods' || fromParent === 'functions' ? 'method' : 'property';
		this.base = this.parent.base;
	}

	get code () {
		if (this.memberKind === 'method') {
			return this.id + '()';
		}

		return this.id;
	}

	testSelf () {
		let {memberType: type, memberKind: kind, base} = this;

		let interfaceName = base.id;
		let interfaceCallback = this.interface ?? base.interface;
		let context = {name: interfaceName, callback: interfaceCallback};

		return supportsMember(this.id, {type, kind, context});
	}
}

export default class InterfaceFeature extends Feature {
	static children = {
		tests: { type: MemberFeature },
		extends: { type: InterfaceFeature },
		members: { type: MemberFeature },
		methods: { type: MemberFeature },
		properties: { type: MemberFeature },
		functions: { type: MemberFeature },
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

		return supportsInterface(this.id);
	}
}
