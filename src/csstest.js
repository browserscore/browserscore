import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';
import AbstractFeature from './classes/AbstractFeature.js';
import Score from './classes/Score.js';
import Specs from './tests.js';
import Spec from './classes/Spec.js';
import content from './vue/directives/content.js';
import CarbonAds from './vue/components/carbon-ads.js';

const classes = ['epic-fail', 'fail', 'very-buggy', 'buggy', 'slightly-buggy', 'almost-pass', 'pass'];

let allSpecs = {};

let root = new AbstractFeature();

for (let id in Specs) {
	let spec = Specs[id];
	spec.id = id;
	spec = new Spec(spec, root);
	allSpecs[id] = spec;
}

let components = {
	"carbon-ads": CarbonAds,
}

let appSpec = {
	data() {
		return {
			root,

			/**
			 * All specs as dictionary
			 * @type {Record<string, Spec>}
			 */
			allSpecs,
			filter: new URLSearchParams(window.location.search).get('filter') ?? '',
			// TODO move this to Score
			testTime: 0,
		};
	},

	computed: {
		/** Sorted and filtered specs
		 * @type {Spec[]}
		 */
		specs () {
			return this.allSpecsList.filter(spec => spec.matchesFilter(this.filter)).sort((a, b) => a.title.localeCompare(b.title));
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
			return this.root.score;
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

		round(value, maxDecimals = 0) {
			return Math.round(value * 10 ** maxDecimals) / 10 ** maxDecimals;
		},

		percent(value, maxDecimals = 0) {
			value = +value;
			return value.toLocaleString("en-US", {
				style: "percent",
				minimumFractionDigits: 0,
				maximumFractionDigits: maxDecimals,
			});
		},
	},

	watch: {
		specs: {
			handler() {
				this.root.children = this.specs;

				for (let spec of this.specs) {
					spec.test();
				}

				this.root.score.recalc();
			},
			immediate: true,
		},
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
