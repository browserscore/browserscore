import { round, passclass } from '../../../util.js';

const template = `
	<svg viewBox="0 0 100 100" class="progress" :class="passclass(score)" :style="{ '--progress': round(score.value * 100, 2) }">
		<title>Passed {{ round(score.passed) }} / {{ round(score.total) }} tests in {{ round(score.testTime, 2) }} ms</title>
		<circle v-if="score.value > 0" cx="50" cy="50" r="45" />
		<polyline v-if="score.value >= 1" class="check" points="33,50 46,65 68,36" />
		<use v-else-if="score.value === 0" href="ui/icons/x.svg#x" width="100%" height="100%" class="x" />
		<circle v-else cx="50" cy="50" r="45" class="partial" />
	</svg>`;

export default {
	props: {
		score: {
			type: Object,
			required: true
		}
	},

	template,

	methods: {
		round,
		passclass
	}
}
