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
				feature = this.features[type][id] = new Feature(feature, this);

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
		let org = this.group.org ?? 'w3c';
		return orgs[org];
	}

	get specLink () {
		let ret = super.specLink;

		if (ret) {
			let template = this.group.specs ?? this.org.specs;
			return template.replace('{shortname}', ret);
		}

		return '';
	}

	get draftLink () {
		let ret = super.draftLink;

		if (ret) {
			let template = this.group.drafts ?? this.org.drafts;
			return template.replace('{shortname}', ret);
		}

		return '';
	}

	test() {
		let startTime = performance.now();
		for (let type in this.features) {
			let features = this.features[type];
			for (let id in features) {
				features[id].test();
			}
		}

		this.testTime = performance.now() - startTime;
	}
}
