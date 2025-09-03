import Feature from '../Feature.js';
import supportsAtrule from '../../supports/atrule.js';
import supportsDescriptor from '../../supports/descriptor.js';
import supportsDescriptorValue from '../../supports/descriptorvalue.js';

export class CSSAtruleDescriptorFeature extends Feature {
	static children = {
		values: {
			type: CSSAtruleDescriptorFeature,
			single: 'id',
		},
	}

	get atrule () {
		if (this.parent instanceof this.constructor) {
			return this.parent.atrule;
		}

		return this.parent;
	}

	get name () {
		if (this.def.fromParent === 'values') {
			return this.parent.id;
		}

		return this.id ?? this.parent.id;
	}

	get value () {
		if (this.def.fromParent === 'values') {
			return this.id;
		}

		if (!(this.parent instanceof this.constructor)) {
			return undefined;
		}

		return this.parent.value;
	}

	leafTest () {
		let descriptor = this.name;
		let value = this.value;
		let atrule = this.atrule?.getCode();

		if (value) {
			return supportsDescriptorValue(descriptor, value, atrule);
		}

		return supportsDescriptor(descriptor, atrule);
	}
}

export default class CSSAtruleFeature extends Feature {
	static forceTotal = undefined;
	static children = {
		suffixes: {
			type: CSSAtruleFeature,
		},
		preludes: {
			type: CSSAtruleFeature,
			single: 'prelude',
		},
		descriptors: {
			type: CSSAtruleDescriptorFeature,
		},
		/** Child @-rules that are only valid within this @-rule */
		atrules: {
			type: CSSAtruleFeature,
		},
	}

	static gatingTest = true;

	constructor (def, parent, group) {
		super(def, parent, group);

		this.preludeRequired = def.preludeRequired;

		if (def.contentBefore) {
			this.contentBefore = def.contentBefore;
		}
	}

	get gatingTest () {
		// In some @rules (e.g. @property) a missing prelude is a parse error
		// So we can't use the plain @rule as a gating test
		return !this.preludeRequired || Boolean(this.computedPrelude);
	}

	getCode (o = {}) {
		let ret = this.name.replace(/^@?/, '@');

		if (o.suffix !== false) {
			ret += this.computedSuffix;
		}

		if (o.prelude !== false) {
			let prelude = this.computedPrelude;
			if (prelude) {
				ret += ' ' + prelude;
			}
		}

		if (o.contents && this.contents !== false) {
			let contents = typeof o.contents === 'string' ? o.contents : this.contents || '';
			ret += `{ ${contents} }`;
		}
		else if (o.semicolon !== false && this.contents === false) {
			ret += ';';
		}

		return ret;
	}

	get code () {
		return this.getCode({prelude: this.def.fromParent === 'preludes'});
	}

	get name () {
		if (this.def.fromParent === 'preludes' || this.def.fromParent === 'suffixes') {
			return this.parent.name;
		}

		return this.id;
	}

	get computedPrelude () {
		if (this.def.fromParent === 'preludes') {
			return this.id;
		}

		if (this.prelude) {
			return this.prelude;
		}

		if (this.def.fromParent !== 'atrules') {
			return this.parent.computedPrelude;
		}

		return '';
	}

	get computedSuffix () {
		if (this.def.fromParent === 'suffixes') {
			return this.id;
		}

		if (this.def.fromParent !== 'atrules') {
			return this.parent.computedSuffix ?? '';
		}

		return '';
	}

	get contents () {
		if (this.def.contents !== undefined) {
			return this.def.contents;
		}

		if (this.def.fromParent !== 'atrules') {
			return this.parent.contents;
		}

		return '';
	}

	get parentAtRule () {
		if (this.def.fromParent === 'atrules' && this.parent instanceof this.constructor) {
			return this.parent;
		}

		return null;
	}

	leafTest () {
		let parent = this.parentAtRule?.getCode();
		let contentBefore = this.contentBefore;

		let ret = supportsAtrule(this.getCode({contents: true}), {parent, contentBefore});

		return ret;
	}
}
