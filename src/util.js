export const IS_DEV = location.hostname === 'localhost' && !location.search.includes('prod');
const classes = ['epic-fail', 'fail', 'very-buggy', 'buggy', 'slightly-buggy', 'almost-pass', 'pass'];

export function passclass(info) {
	if (info === undefined || info === null) {
		return '';
	}

	let success;

	if (typeof info === 'boolean') {
		success = +info;
	}
	else if (typeof info === 'number') {
		success = info;
	}
	else if (typeof info === 'object' && 'passed' in info) {
		success = info.passed / info.total;
	}

	if (success >= 1) {
		return classes.at(-1);
	}

	let index = Math.round(success * (classes.length - 2));
	return classes[index];
}

export function round(value, maxDecimals = 0) {
	return Math.round(value * 10 ** maxDecimals) / 10 ** maxDecimals;
}

export function percent(value, maxDecimals = 0) {
	value = +value;
	return value.toLocaleString("en-US", {
		style: "percent",
		minimumFractionDigits: 0,
		maximumFractionDigits: maxDecimals,
	});
}
