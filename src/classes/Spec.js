import AbstractFeature from './AbstractFeature.js';
import { groups, orgs } from '../data.js';
import Feature from "./Feature.js";
import {supportsNames} from '../features.js';
import featureMap from './Feature/index.js';

let featureTypes = {...featureMap, ...supportsNames};

// Shorten the title by removing parentheticals, subheadings, and superfluous words
const removedOther = / *(?:\([^)]*\)|:.*)( *)/g;

const statuses = new Set(['stable', 'experimental']);

export default class Spec extends AbstractFeature {
	features = {};
	static all = [];
	static byId = {};
	static statuses = statuses;

	constructor (def, parent) {
		super(def, parent);

		if (def.title) {
			let removedWords = [
				...(this.group.removedWords ?? []),
				...(this.org.removedWords ?? []),
			];

			if (removedWords.length > 0) {
				let removedWordsRegex = RegExp(` (?:${removedWords.join('|')})\\b`, 'g');

				this.title = this.title.replace(removedWordsRegex, '');
			}

			this.title = this.title.replace(removedOther, '$1');
			this.title = this.title.trim();
		}

		for (let type in featureTypes) {
			let meta = featureTypes[type];

			if (!(type in this.def)) {
				continue;
			}

			let group = this.def[type];

			let {properties, required, interface: Interface, ...features} = group;
			group.type = type;

			this.features[type] = [];

			let Class = typeof meta === 'function' ? meta : Feature;

			for (let id in features) {
				let feature = features[id];
				if (feature.id) {
					if (feature.title) {
						feature.code = id;
					}
					else {
						feature.title = id;
					}
				}
				else {
					feature.id = id;
				}

				feature = new Class(feature, this, group);

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
		let ret = this.def.links?.tr ?? this.def.link;
		let template = this.group?.specs ?? this.org?.specs;

		if (ret && template) {
			return template.replace('{shortname}', ret).replace(/(\/|\.html)\/$/, '$1');
		}

		return '';
	}

	get draftLink () {
		let ret = this.def.links?.dev ?? this.def.link;
		let template = this.group?.drafts ?? this.org?.drafts;

		if (ret && template) {
			return template.replace('{shortname}', ret).replace(/(\/|\.html)\/$/, '$1');
		}

		return '';
	}

	matchesFilter (filter) {
		if (!filter) {
			return this.firstSnapshot !== 2.2;
		}

		if (filter === 'all') {
			return true;
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
