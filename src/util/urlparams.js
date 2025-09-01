export default class URLParams extends URLSearchParams {
	constructor(params = location.search) {
		super(params);
	}

	/**
	 * Like getAll() if more than one value, otherwise like get()
	 */
	getAny (key) {
		let values = this.getAll(key);
		return values.length <= 1 ? values[0] : values;
	}

	/**
	 * Get URL params as an object, with arrays for multiple values
	 * @returns {Object}
	 */
	toJSON (options = {}) {
		let properties = options.properties ? new Set(options.properties) : null;
		let ret = {};
		for (let key of this.keys()) {
			if (properties && !properties.has(key)) {
				continue;
			}

			ret[key] = this.getAny(key);
		}
		return ret;
	}

	/**
	 * Set URL params from an object, or set a key to multiple values
	 * @param {Object} params
	 *
	 * @overload
	 * @param {string} key
	 * @param {string | string[] | undefined} value
	 */
	setAll (params, values) {
		if (params instanceof URLParams) {
			// Set from another object
			params = params.toJSON();
		}

		if (typeof params === 'string') {
			if (Array.isArray(values)) {
				this.delete(params);
				for (let value of values) {
					this.append(params, value);
				}
			}
			else if (values === undefined) {
				this.delete(params);
			}
			else {
				this.set(params, values);
			}
		}
		else if (typeof params === 'object') {
			for (let key in params) {
				this.setAll(key, params[key]);
			}
		}
	}
}
