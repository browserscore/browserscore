export default class Score {
	parent = null;
	passed = 0;
	total = 0;
	passedTests = 0;
	totalTests = 0;
	children = [];

	/**
	 * @param {*} parent - Score of parent object
	 * @param {*} forceTotal - By default, all tests count as individual features. Set this to 1 to count them as 1 feature.
	 */
	constructor(parent, forceTotal) {
		this.forceTotal = forceTotal;
		if (parent) {
			this.parent = parent;
			parent.children.push(this);
		}
	}

	/**
	 * Percentage of passed tests
	 */
	get success () {
		return this.passedTests / this.totalTests;
	}

	get value () {
		return this.valueOf();
	}

	/**
	 * Percentage of passed features
	 */
	valueOf () {
		return this.passed / this.total;
	}

	update(data) {
		if (!data.total) {
			return;
		}

		this.passed = this.passedTests = data.passed;
		this.total = this.totalTests = data.total;

		if (this.forceTotal) {
			this.total = this.forceTotal;
			this.passed *= this.total / this.totalTests;
		}

		this.parent?.recalc();
	}

	// TODO optimize this
	recalc() {
		this.passed = 0;
		this.total = 0;
		this.passedTests = 0;
		this.totalTests = 0;

		for (let child of this.children) {
			this.passed += child.passed;
			this.total += child.total;
			this.passedTests += child.passedTests;
			this.totalTests += child.totalTests;
		}

		this.parent?.recalc(this);
	}

	toString () {
		return this.percent() + '%';
	}

	/**
	 * Convert to JSON
	 * @returns {Object}
	 */
	toJSON () {
		return {
			passed: this.passed,
			total: this.total,
			passedTests: this.passedTests,
			failedTests: this.failedTests,
			totalTests: this.totalTests,
			testTime: this.testTime,
		};
	}
}
