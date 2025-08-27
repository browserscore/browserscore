export function camelCase(str) {
	return str
		.replace(/-([a-z])/g, function ($0, $1) {
			return $1.toUpperCase();
		})
		.replace('-', '');
}
