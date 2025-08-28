export default class Score {
	parent = null;
	passed = 0;
	total = 0;
	passedTests = 0;
	failedTests = 0;
	skipped = 0;
	totalTests = 0;
	testTime = 0;

	/**
	 * @param {*} node - Score of parent object
	 * @param {*} forceTotal - By default, all tests count as individual features. Set this to 1 to count them as 1 feature.
	 */
	constructor(node) {
		if (node) {
			this.node = node;
		}

		if (this.forceTotal) {
			this.total = this.forceTotal;
		}
	}

	get forceTotal () {
		return this.node?.forceTotal;
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

	set (partial) {
		if (!partial || (!partial.totalTests && !this.totalTests)) {
			return;
		}

		for (let key in partial) {
			if (key in this) {
				this[key] = partial[key];
			}
		}

		if ('totalTests' in partial) {
			this.total = this.forceTotal ?? this.totalTests;
		}

		if ('passedTests' in partial) {
			this.failedTests = partial.failedTests ?? (this.totalTests - this.passedTests);
			this.passed = this.passedTests * this.total / this.totalTests;
		}

		this.parent?.recalc();
	}

	/**
	 * Add a partial score to this score. No recalc is done.
	 * @param {Object} partial - Partial score to add
	 */
	add (partial) {
		for (let key in partial) {
			if (key in this) {
				this[key] += partial[key];
			}
		}

		if ('totalTests' in partial) {
			this.total = this.forceTotal ?? this.totalTests;
		}

		if ('passedTests' in partial) {
			if ('totalTests' in partial && !('failedTests' in partial)) {
				this.failedTests += partial.totalTests - partial.passedTests;
			}

			this.passed = this.passedTests * this.total / this.totalTests;
		}
	}

	/**
	 * Recalculate this and ancestor scores from children
	 * @returns
	 */
	recalc() {
		if (!this.children?.length) {
			// Nothing to do here
			return;
		}

		this.passed = 0;
		this.total = 0;
		this.skipped = 0;
		this.passedTests = 0;
		this.failedTests = 0;
		this.totalTests = 0;
		this.testTime = 0;

		let children = this.children;

		if (children.length === 1) {
			this.set(children[0]);
		}
		else {
			for (let child of children) {
				if (isNaN(child.total) || isNaN(child.passed)) {
					this.skipped++;
					continue;
				}

				this.passed += child.passed;
				this.total += child.total;
				this.passedTests += child.passedTests;
				this.failedTests += child.failedTests;
				this.totalTests += child.totalTests;
				this.testTime += child.testTime;
			}
		}

		if (this.forceTotal) {
			let actualTotal = this.total;
			this.total = this.forceTotal;
			let previousPassed = this.passed;
			this.passed = previousPassed * this.forceTotal / actualTotal;
		}

		this.parent?.recalc();
	}

	toString () {
		return +(this.value * 100).toFixed(2) + '%';
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
