import supportsValue from './value.js';
import supportsVariable from './variable.js';

export default function declaration (intruction) {
	var val = intruction.match(/\s*([^:]+)\s*:\s*(.+)\s*/);
	return {
		success: !val[1].match(/--.*/)
			? supportsValue(val[1], val[2]).success
			: supportsVariable(val[1], val[2]).success,
	};
}
