
/**
 * Setup dummy elements
 */
import { prefixes, domPrefixes } from './supports/shared.js';
import { IS_DEV } from './util.js';

import property from './supports/property.js';
import value from './supports/value.js';
import descriptor from './supports/descriptor.js';
import descriptorvalue from './supports/descriptorvalue.js';
import selector from './supports/selector.js';
import atrule from './supports/atrule.js';
import mq from './supports/mq.js';
import variable from './supports/variable.js';
import Global from './supports/global.js';
import member from './supports/member.js';
import testExtends from './supports/extends.js';

const Supports = {
	prefixes,
	domPrefixes,
	property,
	value,
	descriptorvalue,
	descriptor,
	selector,
	atrule,
	mq,
	variable,
	global: Global,
	member,
	extends: testExtends,
};

if (IS_DEV) {
	window.Supports = Supports;
}

export default Supports;
export { property, value, descriptor, descriptorvalue, selector, atrule, mq, variable, Global, member, testExtends };

