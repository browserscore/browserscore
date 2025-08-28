
/**
 * Setup dummy elements
 */
import { prefixes, domPrefixes } from './supports/shared.js';
import { IS_DEV } from './util.js';

import property from './supports/property.js';
import value from './supports/value.js';
import descriptorvalue from './supports/descriptorvalue.js';
import selector from './supports/selector.js';
import atrule from './supports/atrule.js';
import mq from './supports/mq.js';
import variable from './supports/variable.js';
import Interface from './supports/interface.js';
import attributeOrMethod from './supports/attributeOrMethod.js';

const Supports = {
	prefixes,
	domPrefixes,
	property,
	value,
	descriptorvalue,
	selector,
	atrule,
	mq,
	variable,
	interface: Interface,
	attributeOrMethod,
};

if (IS_DEV) {
	window.Supports = Supports;
}

export default Supports;
export { property, value, descriptorvalue, selector, atrule, mq, variable, Interface, attributeOrMethod };

