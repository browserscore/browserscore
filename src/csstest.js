import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';
import AbstractFeature from './classes/AbstractFeature.js';
import Specs from '../tests/index.js';
import Score from './classes/Score.js';
import Spec from './classes/Spec.js';
import content from './vue/directives/content.js';
import CarbonAds from './vue/components/carbon-ads.js';

let mainScore = new Score();
const classes = ['epic-fail', 'fail', 'very-buggy', 'buggy', 'slightly-buggy', 'almost-pass', 'pass'];

let allSpecs = {};

let rootFeature = new AbstractFeature();
rootFeature.score = mainScore;

for (let id in Specs) {
	let spec = Specs[id];
	spec.id = id;
	spec = new Spec(spec, rootFeature);
	allSpecs[id] = spec;
}

let components = {
	"carbon-ads": CarbonAds,
}

let appSpec = {
	data() {
		return {
			/**
			 * Score for all specs
			 * @type {Score}
			 */
			mainScore,

			/**
			 * All specs as dictionary
			 * @type {Record<string, Spec>}
			 */
			allSpecs,
			rootFeature,
			filter: new URLSearchParams(window.location.search).get('filter') ?? '',
			// TODO move this to Score
			testTime: 0,
			filterScores: {},
		};
	},

	mounted() {
		this.runTests(this.filter);
	},

	computed: {
		/** Sorted and filtered specs
		 * @type {Spec[]}
		 */
		specs () {
			let specs = Object.values(this.allSpecs).filter(spec => spec.matchesFilter(this.filter)).sort((a, b) => a.title.localeCompare(b.title));

			for (let spec of specs) {
				spec.test();
			}

			return specs;
		},

		/** All specs as array
		 * @type {Spec[]}
		 */
		allSpecsList () {
			return Object.values(this.allSpecs);
		},

		/** Score for filtered specs
		 * @type {Score}
		 */
		score () {
			if (this.specs.length === this.allSpecsList.length) {
				// All specs shown
				return this.mainScore;
			}

			let score = this.filterScores[this.filter];

			if (!score) {
				score = new Score();
				score.children = this.specs.map(spec => spec.score);

				score.recalc();

				this.filterScores[this.filter] = score;
			}

			return score;
		},
	},

	methods: {
		passclass (info) {
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

			let index = Math.round(success * (classes.length - 1));
			return classes[index];
		},

		runTests() {
			let startTime = performance.now();

			for (let spec of this.specs) {
				spec.test();
			}

			this.testTime = performance.now() - startTime;
		},

		round(value, maxDecimals = 0) {
			return Math.round(value * 10 ** maxDecimals) / 10 ** maxDecimals;
		},
	},

	watch: {
		filter: {
			handler() {
				// Update address bar
				let searchParams = new URLSearchParams(location.search);
				if (this.filter) {
					searchParams.set('filter', this.filter);
				}
				else {
					searchParams.delete('filter');
				}

				let newUrl = location.pathname + '?' + searchParams + location.hash;

				history.replaceState({}, '', newUrl);
			},
		},
	},

	directives: {
		content,
	},

	components,

	compilerOptions: {
		isCustomElement: tag => !Object.keys(components).includes(tag),
	},
};

let app = createApp(appSpec).mount("#content");

// Global exports
Object.assign(globalThis, {
	app,
	appSpec,
	allSpecs,
});
