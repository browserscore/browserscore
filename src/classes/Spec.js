import AbstractFeature from './AbstractFeature.js';
import { groups, orgs } from '../data.js';
import Feature from "./Feature.js";
import featureTypes from '../features.js';

const removedWords = / *(?:\([^)]*\)|:.*|\b(?:CSS(?! 2)|Module)\b)( *)/g;

export default class Spec extends AbstractFeature {
	features = {};

	constructor (def, parent) {
		super(def, parent);

		// Shorten the title by removing parentheticals,
		// subheadings, CSS and Module words
		if (this.title) {
			this.title = this.title.replace(removedWords, '$1').trim();
		}
		else {
			this.title = this.id;
		}

		for (let type in featureTypes) {
			if (!(type in this.def)) {
				continue;
			}

			let {properties, required, interface: Interface, ...features} = this.def[type];

			this.features[type] = {};

			for (let id in features) {
				let feature = features[id];
				feature.id = id;
				feature.type = type;

				// Apply aggregate properties if no override
				if (properties) {
					feature.properties ??= properties;
				}
				if (required) {
					feature.required ??= required;
				}
				if (Interface) {
					feature.interface ??= Interface;
				}

				feature = this.features[type][id] = new Feature(feature, this);

				this.children.push(feature);
			}
		}
	}

	get stability () {
		return this.def.status?.stability;
	}

	get firstSnapshot () {
		return this.def.status?.['first-snapshot'];
	}

	get lastSnapshot () {
		return this.def.status?.['last-snapshot'];
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
		if (filter === 'stable') {
			return this.stability === 'stable';
		}
		else if (filter === 'experimental') {
			return this.stability !== 'stable';
		}
		else if (filter.match(/^css\d/)) {
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
