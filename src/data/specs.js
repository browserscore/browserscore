import * as specDefs from '../spec-defs.js';
import AbstractFeature from '../classes/AbstractFeature.js';
import Spec from '../classes/Spec.js';

export const specRoot = new AbstractFeature();
let specs = Object.values(specDefs).sort((a, b) => a.title.localeCompare(b.title)).map(spec => new Spec(spec, specRoot));
specRoot.children = specs;
export default specs;
