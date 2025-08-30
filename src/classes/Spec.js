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
	/** All specs as array
	 * @type {Spec[]}
	 */
	static all = [];

	/** All created specs as a dictionary of id → spec
	 * @type {Record<string, Spec>}
	 */
	static byId = {};

	/** All spec statuses
	 * @type {Set<string>}
	 */
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

				this.children.push(feature);
			}
		}
	}

	get status () {
		return this.def.status;
	}

	get version () {
		if (this.def.version) {
			return this.def.version;
		}

		if (/\d$/.test(this.id)) {
			return Number(this.id.match(/\d+$/)?.[0]);
		}
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
		if (statuses.has(filter.status) && this.status !== filter.status) {
			return false;
		}

		// Loose == intentional
		if (filter.status === '' && this.version == 2.2 && this.id.startsWith('css')) {
			// Currently the only legacy spec is CSS 2.2
			return false;
		}

		// Loose != intentional
		if (filter.version && this.version != filter.version) {
			return false;
		}

		for (let key of ['group', 'org']) {
			if (filter[key] && this[key]?.id !== filter[key]) {
				return false;
			}
		}

		if (filter.snapshot) {
			if (!this.firstSnapshot || this.firstSnapshot > filter.snapshot) {
				return false;
			}

			if (this.lastSnapshot && this.lastSnapshot < filter.snapshot) {
				return false;
			}
		}

		return true;
	}
}
