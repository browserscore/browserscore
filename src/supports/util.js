export function camelCase(str) {
	return str
		.replace(/-([a-z])/g, function ($0, $1) {
			return $1.toUpperCase();
		})
		.replace('-', '');
}

export function getPrefixedVariants(featureName, prefix) {
	return [
		prefix + featureName,
		featureName.replace('CSS', 'CSS' + prefix),
	]
}
