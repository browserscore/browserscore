import { pick, toArray, groupBy } from '../util.js';
import Feature from "./Feature.js";
import meta, { types } from '../data/types.js';
import * as data from '../data/index.js';
import FeatureProxy from './FeatureProxy.js';
import AbstractFeature from './AbstractFeature.js';

export function createFeatures (all, props = {}) {
	all = pick(all, types);
	let ret = [];

	for (let type in all) {
		let group = all[type];
		let {properties, ...features} = group;
		let groupProps = {...props, type, properties: group.properties};

		for (let id in features) {
			let feature = features[id];

			for (let key in groupProps) {
				if (feature[key] || !groupProps[key]) {
					continue;
				}

				feature[key] = groupProps[key];
			}

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

			let Class = meta[type]?.class ?? Feature;
			feature = new Class(feature);

			ret.push(feature);
		}
	}

	return ret;
}

export function groupFeatures (features, keys) {
	keys = [...toArray(keys)];
	let key = keys.shift();

	if (!key || !features ||features.length === 0) {
		return features;
	}

	let meta = data[key + 's'];

	let groups = groupBy(features, key);

	if (groups.size === 0) {
		return [];
	}

	let ret = [];

	for (let [group, children] of groups.entries()) {

		if (meta && typeof group === 'string') {
			group = meta[group];
		}

		let groupFeature;

		// Make a new feature for this group
		if (group instanceof AbstractFeature) {
			groupFeature = new FeatureProxy(group, children);
		}
		else {
			let def = typeof group === 'string' ? {id: group} : {...group};
			def.children = children;

			groupFeature = new AbstractFeature(def);
			groupFeature.children = children;
		}

		if (keys.length > 0) {
			groupFeature.children = groupFeatures(children, keys);
		}

		ret.push(groupFeature);
	}

	return ret;
}
