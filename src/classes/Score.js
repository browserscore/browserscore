export default class Score {
	parent = null;
	passed = 0;
	total = 0;
	passedTests = 0;
	totalTests = 0;

	/**
	 * @param {*} parent - Score of parent object
	 * @param {*} featureCount - By default, all tests count as individual features. Set this to 1 to count them as 1 feature.
	 */
	constructor(parent, featureCount) {
		this.featureCount = featureCount;
		if (parent) {
			this.parent = parent;
			parent.children ??= [];
			parent.children.push(this);
		}
	}

	update(data) {
		if (!data.total) {
			return;
		}

		this.passed = this.passedTests = data.passed;
		this.total = this.totalTests = data.total;

		if (this.featureCount) {
			this.total = this.featureCount;
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

	percent () {
		return Math.round((100 * this.passed) / this.total);
	}
}
