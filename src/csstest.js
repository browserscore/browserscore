import Specs from '../tests/index.js';
import { $ } from './util.js';
import Score from './classes/Score.js';
import Test from './classes/Test.js';
import Spec from './classes/Spec.js';

let mainScore = new Score();

export function resetOutput () {
	mainScore = new Score();

	// Output current score
	$('#score').textContent = '';
	$('#passedTests').textContent = '';
	$('#totalTests').textContent = '';
	$('#total').textContent = '';
	$('#specsTested').textContent = '';
	$('#all').textContent = '';

	// Display time taken
	$('#timeTaken').textContent = '';
};


let allSpecs = {};
globalThis.allSpecs = allSpecs;

for (let id in Specs) {
	let spec = Specs[id];
	spec.id = id;
	spec = new Spec(spec, { score: mainScore });
	allSpecs[id] = spec;
}

export function runTests (filter = '') {
	var specs = [];
	let timeBefore = performance.now();

	for (let spec of Object.values(allSpecs)) {
		if (!spec.matchesFilter(filter)) {
			continue;
		}

		specs.push(spec);
	}

	specs.sort(function (a, b) {
		return a.title.localeCompare(b.title);
	});

	// Run tests
	specs.forEach(spec => new Test(spec));

	// Output score
	$('#score').textContent = mainScore + '';
	$('#passedTests').textContent = ~~mainScore.passedTests;
	$('#totalTests').textContent = mainScore.totalTests;
	$('#total').textContent = mainScore.total;

	// Display time taken
	$('#timeTaken').textContent = Math.round(performance.now() - timeBefore) + 'ms';
};

onload = function () {
	const filter = new URLSearchParams(window.location.search).get('filter') ?? localStorage.getItem('filter') ?? '';
	$('#filter').value = filter;
	runTests(filter);
};
