import Specs from '../tests/index.js';
import { $ } from './util.js';
import Score from './classes/Score.js';
import Test, { mainScore } from './classes/Test.js';

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

export function runTests (filter = '') {
	var specs = [];
	var timeBefore = +new Date();

	let timeBefore = performance.now();

	for (var spec in Specs) {
		// Filter list of specifications
		if (filter === 'stable' && Specs[spec].status && Specs[spec].status.stability !== 'stable') {
			continue;
		} else if (filter === 'experimental' && Specs[spec].status && Specs[spec].status.stability === 'stable') {
			continue;
		} else if (filter.match(/^css\d/)) {
			if (!Specs[spec].status || Specs[spec].status['first-snapshot'] === undefined) {
				continue;
			}

			const snapshot = Number(filter.substring(3));
			if (
				Specs[spec].status['first-snapshot'] > snapshot ||
				(Specs[spec].status && Specs[spec].status['last-snapshot'] < snapshot)
			) {
				continue;
			}
		} else if (filter === '' && Specs[spec].status && Specs[spec].status['first-snapshot'] === 2.2) {
			continue;
		} else if (filter === 'csswg' && Specs[spec].links.devtype && !Specs[spec].links.devtype.match(/fxtf/)) {
			continue;
		} else if (filter === 'houdini' && (!('devtype' in Specs[spec].links) || !Specs[spec].links.devtype.match(/houdini/))) {
			continue;
		} else if (filter === 'svgwg' && Specs[spec].links.devtype !== 'svgwg') {
			continue;
		} else if (filter === 'whatwg' && Specs[spec].links.devtype !== 'whatwg') {
			continue;
		} else if (filter === 'others' && (!('devtype' in Specs[spec].links) || Specs[spec].links.devtype.match(/fxtf|houdini|svgwg|whatwg/))) {
			continue;
		}

		specs.push({
			id: spec,
			// Shorten the title by removing parentheticals,
			// subheadings, CSS and Module words
			title: Specs[spec].title.replace(removedWords, '$1').trim(),
			tests: Specs[spec],
		});
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
