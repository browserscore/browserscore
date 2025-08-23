import { groups, orgs } from '../data.js';
import Feature from "./Feature.js";
import featureTypes from '../features.js';
import Score from './Score.js';
const removedWords = / *(?:\([^)]*\)|:.*|\b(?:CSS(?! 2)|Module)\b)( *)/g;

export default class Spec {
	features = {};

	constructor (spec, parent) {
		this.def = spec;
		this.id = spec.id;
		this.parent = parent;
		this.score = new Score(parent?.score);

		// Shorten the title by removing parentheticals,
		// subheadings, CSS and Module words
		if (this.def.title) {
			this.title = this.def.title.replace(removedWords, '$1').trim();
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

	get link () {
		return this.stableLink || this.draftLink;
	}

	get specLink () {
		let links = this.def.links;
		let ret = this.def.link ?? links?.tr;

		if (ret) {
			let template = this.group.specs ?? this.org.specs;
			return template.replace('{shortname}', ret);
		}

		return '';
	}

	get draftLink () {
		let ret = this.def.link ?? this.def.links?.stable ?? this.def.links?.tr;

		if (ret) {
			let template = this.group.drafts ?? this.org.drafts;
			return template.replace('{shortname}', ret);
		}

		return '';
	}

	get mdnLink () {
		let ret = this.def.mdn ?? this.def.links?.mdn;
		return ret ? 'https://developer.mozilla.org/en-US/docs/Web/' + ret : '';
	}

	test() {
		for (let type in this.features) {
			let features = this.features[type];
			for (let id in features) {
				features[id].test();
			}
		}
	}
}
