export default class Score {
	parent = null;
	passed = 0;
	total = 0;
	passedTests = 0;
	totalTests = 0;
	testTime = 0;

	/**
	 * @param {*} node - Score of parent object
	 * @param {*} forceTotal - By default, all tests count as individual features. Set this to 1 to count them as 1 feature.
	 */
	constructor(node, forceTotal) {
		this.forceTotal = forceTotal;
		if (node) {
			this.node = node;
		}
	}

	get parent () {
		return this.node?.parent?.score ?? null;
	}

	get children () {
		return this.node?.children?.map(child => child.score) ?? [];
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

	set (score) {
		if (!score.totalTests) {
			return;
		}

		this.passedTests = score.passedTests;
		this.totalTests = score.totalTests;

		this.total = this.forceTotal ?? this.totalTests;
		this.passed = this.passedTests * this.total / this.totalTests;

		if (score.testTime) {
			this.testTime = score.testTime;
		}

		this.parent?.recalc();
	}

	// TODO optimize this
	recalc() {
		this.passed = 0;
		this.total = 0;
		this.passedTests = 0;
		this.totalTests = 0;
		this.testTime = 0;

		let children = this.children;
		for (let child of children) {
			this.passed += child.passed;
			this.total += child.total;
			this.passedTests += child.passedTests;
			this.totalTests += child.totalTests;
			this.testTime += child.testTime;
		}

		this.parent?.recalc(this);
	}

	toString () {
		return +this.value.toFixed(2) + '%';
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
