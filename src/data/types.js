import { CSSPropertyFeature, CSSValueFeature, CSSAtruleFeature, InterfaceFeature } from '../classes/Feature/index.js';

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
	interfaces: {
		class: InterfaceFeature,
		title: 'Interfaces',
	},
	mediaqueries: {
		supports: 'mq',
		title: 'Media queries',
	},
};

export default meta;
export const types = new Set(Object.keys(meta));
