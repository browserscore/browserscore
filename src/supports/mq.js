import { prefixes, dummy, inlineStyle } from './shared.js';
import { camelCase, getPrefixedVariants } from './util.js';

export default function mq (mq) {
	return {
		// We check whether the query does not include 'not all' because
		// if it does, that means the query is ignored.
		// See https://drafts.csswg.org/cssom/#parse-a-media-query-list
		success: !matchMedia(mq).media.includes('not all'),
	};
}
