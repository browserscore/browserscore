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
		// Filter list of specifications
		if (filter === 'stable' && spec.stability !== 'stable') {
			continue;
		} else if (filter === 'experimental' && spec.stability === 'stable') {
			continue;
		} else if (filter.match(/^css\d/)) {
			if (!spec.firstSnapshot) {
				continue;
			}

			const snapshot = Number(filter.substring(3));
			if (spec.firstSnapshot > snapshot || spec.lastSnapshot < snapshot) {
				continue;
			}
		} else if (filter === '' && spec.firstSnapshot === 2.2) {
			continue;
		} else if (filter === 'csswg' && spec.group && !spec.group.match(/fxtf/)) {
			continue;
		} else if (filter === 'houdini' && (!('group' in spec) || !spec.group.match(/houdini/))) {
			continue;
		} else if (filter === 'svgwg' && spec.group !== 'svgwg') {
			continue;
		} else if (filter === 'whatwg' && spec.group !== 'whatwg') {
			continue;
		} else if (filter === 'others' && (!('group' in spec) || spec.group.match(/fxtf|houdini|svgwg|whatwg/))) {
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
