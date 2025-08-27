import AbstractFeature from './AbstractFeature.js';
import { groups, orgs } from '../data.js';
import Feature from "./Feature.js";
import CSSValueFeature from './CSSValueFeature.js';
import CSSPropertyFeature from './CSSPropertyFeature.js';
import {types as featureTypes} from '../features.js';
import InterfaceFeature from './InterfaceFeature.js';

// Shorten the title by removing parentheticals,
// subheadings, CSS and Module words
const removedWords = RegExp(` *(?:\\b${['Level', 'Module'].join('|')}\\b)(?=\\s)`, 'g');
const removedOther = / *(?:\([^)]*\)|:.*)( *)/g;

const statuses = new Set(['stable', 'experimental']);

export default class Spec extends AbstractFeature {
	features = {};
	static statuses = statuses;

	constructor (def, parent) {
		super(def, parent);

		if (def.title) {
			this.title = this.title.replace(removedWords, '');
			this.title = this.title.replace(removedOther, '$1');
			this.title = this.title.trim();
		}

		for (let type of featureTypes) {
			if (!(type in this.def)) {
				continue;
			}

			let {properties, required, interface: Interface, ...features} = this.def[type];

			this.features[type] = [];

			for (let id in features) {
				let feature = features[id];
				feature.id = id;
				feature.type = type;

				if (type === 'values') {
					feature = new CSSValueFeature(feature, this, this.def[type]);
				}
				else if (type === 'interfaces') {
					feature = new InterfaceFeature(feature, this, this.def[type]);
				}
				else if (type === 'properties') {
					feature = new CSSPropertyFeature(feature, this, this.def[type]);
				}
				else {
					feature = new Feature(feature, this);
				}

				this.features[type].push(feature);

				this.children.push(feature);
			}
		}
	}

	get status () {
		return this.def.status;
	}

	get firstSnapshot () {
		return this.def.firstSnapshot;
	}

	get lastSnapshot () {
		return this.def.lastSnapshot;
	}

	get group () {
		let group = this.def.group ?? 'csswg';
		return groups[group] ?? orgs[group] ?? groups.csswg;
	}

	get org () {
		let org = this.group.org ?? this.group.id;
		return orgs[org];
	}

	get specLink () {
		let ret = super.specLink;

		if (ret) {
			let template = this.group.specs ?? this.org.specs;
			return template.replace('{shortname}', ret).replace(/(\/|\.html)\/$/, '$1');
		}

		return '';
	}

	get draftLink () {
		let ret = super.draftLink;

		if (ret) {
			let template = this.group.drafts ?? this.org.drafts;
			return template.replace('{shortname}', ret).replace(/(\/|\.html)\/$/, '$1');
		}

		return '';
	}

	matchesFilter (filter) {
		if (!filter) {
			return this.firstSnapshot !== 2.2;
		}

		// Filter list of specifications
		if (statuses.has(filter)) {
			return this.status === filter;
		}

		if (filter.match(/^css\d/)) {
			if (!this.firstSnapshot) {
				return false;
			}

			const snapshot = Number(filter.substring(3));
			if (this.firstSnapshot > snapshot || this.lastSnapshot < snapshot) {
				return false;
			}
		}

		// Group & org filters
		if (filter === 'others') {
			return this.group && this.group.id !== 'csswg';
		}
		else if (filter in groups) {
			return this.group && this.group.id === filter;
		}
		else if (filter in orgs) {
			return this.org && this.org.id === filter;
		}

		return true;
	}
}
