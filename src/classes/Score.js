export default class Score {
	constructor(parent) {
		this.passed = this.total = this.passedTests = this.totalTests = 0;
		this.parent = parent || null;
	}

	update(data) {
		if (!data.total) {
			return;
		}

		this.passedTests += data.passed;
		this.totalTests += data.total;

		this.total++;
		this.passed += data.passed / data.total;

		if (this.parent) {
			this.parent.update(data);
		}
	}

	toString () {
		return this.percent() + '%';
	}

	percent () {
		return Math.round((100 * this.passed) / this.total);
	}
}
