//  https://www.w3.org/TR/css-values/#component-combinators
export const combinators = {
	'||': {anyOrder: true, min: 0, max: 1},
	'|':  {anyOrder: true, min: 1, max: 1},
	'&&': {anyOrder: false, min: 1, max: 1},
};

// https://www.w3.org/TR/css-values/#component-multipliers
export const multipliers = {
	'?': {min: 0, max: 1},
	'*': {min: 0, max: Infinity},
	'+': {min: 1, max: Infinity},
	'#': {min: 1, max: 1, joiner: ', '},
};

/**
 * Combine multiple string arrays into a single array by recursively joining them.
 * undefined is handled by not joining, allowing you to emulate things like {m,n}
 * @param  {...(string | undefined)[]} arrays - The arrays to combine
 * @param {Object} [options] - The options for the combination
 * @param {string} [options.joiner=' '] - The joiner to use between the arrays
 * @returns {string[]} The combined array
 */
export function combine(...arrays) {
	let options = {};
	if (!Array.isArray(arrays.at(-1))) {
		options = arrays.pop();
	}

	if (options.combinator && combinators[options.combinator]) {
		// Resolve combinator into actual options
		options = {...combinators[options.combinator], ...options};

		delete options.combinator;
	}

	const { separator = " ", joiner, min = 1, anyOrder = false } = options;
	let ret;

	if (anyOrder && arrays.length === 1) {
		// TODO support multiple arrays
		arrays = permutations(arrays[0]);
		ret = arrays.map(array => combine(...array, {...options, anyOrder: false})).flat(1);
	}
	else {
		arrays = arrays.map(arg => Array.isArray(arg) ? arg : [arg]);

		if (min === 0) {
			arrays = arrays.map(array => array.indexOf(undefined) === -1 ? [undefined, ...array] : array);
		}

		ret = arrays[0];

		for (let i = 1; i<arrays.length; i++) {
			ret = ret.flatMap(a => arrays[i].map(b => joiner ? joiner(a, b) : defaultJoiner(a, b, separator)));
		}
	}

	// Drop duplicates
	let set = new Set(ret);
	if (set.has('')) {
		set.delete('');
	}
	ret = Array.from(set);

	return ret;
}

/**
 * Default joiner for combine()
 * @param {*} a
 * @param {*} b
 * @param {*} separator
 * @returns
 */
export function defaultJoiner (a, b, separator) {
	let hasA = a || a === 0;
	let hasB = b || b === 0;

	if (hasA && hasB) {
		return a + separator + b;
	}
	else if (hasA) {
		return a;
	}
	else if (hasB) {
		return b;
	} else {
		return ''; // both undefined
	}
}

/**
 * Repeat a value or array of values a given number of times.
 * @param {any[] | any} values The value or array of values to repeat
 * @param {Object} [options] The options for the repetition
 * @param {number} [options.min=1] The minimum number of times to repeat the value
 * @param {number} [options.max=min] The maximum number of times to repeat the value
 * @param {string} [options.separator=' '] The separator to use between the values
 * @returns {any[]} The repeated values
 */
export function repeat (values, {min, max = min, separator = ' '} = {}) {
	values = Array.isArray(values) ? values : [values];
	let valuesAfterMin = min < max ? [undefined, ...values] : values;

	let args = [
		...Array(min).fill(values),
		...Array(max - min).fill(valuesAfterMin),
	];

	return combine(...args, {separator});
}

/**
 * Generate all permutations of an array of values
 * Uses Heap's algorithm https://en.wikipedia.org/wiki/Heap%27s_algorithm
 * with a tweak to permute the *tail* first.
 * E.g. for [1,2,3] => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * @param {any[]} array The array to permute
 * @param {number} [k=0] Start from index k
 * @param {any[][]} permutations
 */
export function permutations (array, k = 0, ret = []) {
	if (!Array.isArray(array)) {
		return [[]];
	}

	const A = array.slice();

	if (array.length < 2) {
		return [A];
	}

	const n = A.length;

	if (k === n - 1) {
		ret.push(A.slice());
		return;
	}

	for (let i = k; i < n; i++) {
		// Swap A[k] with A[i]
		[A[k], A[i]] = [A[i], A[k]];

		permutations(A, k + 1, ret);

		// Swap A[k] with A[i] back
		[A[k], A[i]] = [A[i], A[k]];
	}

	return ret;
}
