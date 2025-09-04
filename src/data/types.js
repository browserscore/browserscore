import { CSSPropertyFeature, CSSValueFeature, CSSAtruleFeature, GlobalFeature } from '../classes/Feature/index.js';

const meta = {
	properties: {
		class: CSSPropertyFeature,
		title: 'Properties',
	},
	values: {
		class: CSSValueFeature,
		title: 'Property values',
	},
	selectors: {
		supports: 'selector',
		title: 'Selectors',
	},
	atrules: {
		class: CSSAtruleFeature,
		title: '@Rules & Descriptors',
	},
	globals: {
		class: GlobalFeature,
		title: 'Globals',
	},
	mediaqueries: {
		supports: 'mq',
		title: 'Media queries',
	},
};

export default meta;
export const types = new Set(Object.keys(meta));
