export function $ (selector, root = document) {
	if (typeof selector != "string") {
		return selector;
	}

	return root.querySelector(selector);
}

export function create (o = {}) {
	let ret = document.createElement(o.tag ?? "div");

	for (let property in o) {
		if (property === "contents") {
			let contents = Array.isArray(o.contents) ? o.contents : [o.contents];
			contents = contents.filter(Boolean).map(content => {
				if (content && typeof content === "object" && !(content instanceof Node)) {
					return create(content)
				}
				else {
					return content;
				}
			});

			ret.append(...contents);
		}
		else if (property === "in") {
			o.in.append(ret);
		}
		else if (property === "attributes") {
			for (let attribute in o.attributes) {
				ret.setAttribute(attribute, o.attributes[attribute]);
			}
		}
		else if (property === "properties") {
			for (let property in o.properties) {
				ret[property] = o.properties[property];
			}
		}
		else if (property !== "tag") {
			// Anything not recognized, treat it as a property
			ret[property] = o[property];
		}
	}

	return ret;
}
