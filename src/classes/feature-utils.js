import { pick } from '../util.js';
import Feature from "./Feature.js";
import meta, { types } from '../data/types.js';

export function createFeatures (all, {spec} = {}) {
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
			feature = new Class(feature, spec);

			ret.push(feature);
		}
	}

	return ret;
}
