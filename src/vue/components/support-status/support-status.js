import { round, passclass } from '../../../util.js';

let css = fetch(new URL('./support-status.css', import.meta.url)).then(res => res.text());

const template = `
<svg ref="el" v-if="!isNaN(score.value)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="progress" :class="passclass(score)" :style="{ '--progress': round(score.value * 100, 2) }">
	<title>{{ tooltip }}</title>
	<circle v-if="score.value > 0" cx="50" cy="50" r="45" />
	<polyline v-if="score.value >= 1" class="check" points="33,50 46,65 68,36" />
	<use v-else-if="score.value === 0" href="ui/icons/x.svg#x" width="100%" height="100%" class="x" />
	<circle v-else cx="50" cy="50" r="45" class="partial" />
	<text v-if="score.value > 0 && score.value < 1" class="percentage" x="52" y="50" dy=".1em">
		{{ round(score.value * 100) }}
		<tspan class="percent">﹪</tspan>
	</text>
</svg>
<span v-else class="icon" style="--icon: var(--icon-warning)" :title="tooltip"></span>
`;

const pluralize = (n, one, many = one + 's') => n === 1 ? one : many;
const formatRatio = (passed, total) => passed === total ? `all ${round(total)}` : `${round(passed)}/${round(total)}`;

export default {
	props: {
		score: {
			type: Object,
			required: true
		}
	},

	template,

	computed: {
		tooltip () {
			let ret = `Scored ${this.score}`;
			let tests = formatRatio(this.score.passedTests, this.score.totalTests) + " " + pluralize(this.score.totalTests, 'test');

			if (this.score.total !== this.score.totalTests && this.score.total > 1) {
				ret += ` by recognizing ${ formatRatio(this.score.passed, this.score.total) } ${ pluralize(this.score.total, 'feature') } (passed ${ tests })`;
			}
			else {
				ret += ` by passing ${tests}`;
			}

			ret += ` in ${round(this.score.testTime, 2)} ms`;
			return ret;
		}
	},

	methods: {
		round,
		passclass,

		async getSvg() {
			let root = this.$refs.el;
			if (!root) {
				return '';
			}

			let clone = root.cloneNode(true);

			// Hardcode styles applied externally
			let cs = getComputedStyle(root);
			clone.style.setProperty('--color', cs.getPropertyValue('--color'));
			clone.style.setProperty('--stroke-width', cs.getPropertyValue('--_stroke-width'));

			// Workaround to avoid clipping
			// TODO debug why this is needed and why the stroke is not applied properly
			let viewBox = clone.viewBox.baseVal;
			viewBox.x = viewBox.y = -6;
			viewBox.width = viewBox.height = 105;


			clone.insertAdjacentHTML('afterbegin', `<style>${await css}</style>`)

			return clone.outerHTML;
		},

		async getDataUrl() {
			return 'data:image/svg+xml,' + encodeURIComponent(await this.getSvg());
		}
	}
}
