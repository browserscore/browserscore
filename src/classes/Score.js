import { pick } from '../util.js';

const stats = ['passedTests', 'failedTests', 'totalTests', 'skipped', 'total', 'passed', 'testTime'];
const statsSet = new Set(stats);

export default class Score {
	static stats = stats;

	passedTests = 0;
	failedTests = 0;
	totalTests = 0;
	skipped = 0;
	passed = 0;
	total = 0;
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

	get isDone () {
		return this.passedTests + this.failedTests >= this.totalTests;
	}

	/**
	 * Percentage of passed features
	 */
	valueOf () {
		return this.passed / this.total;
	}

	equals (other) {
		return stats.every(stat => this[stat] === other[stat]);
	}

	set (partial) {
		let oldValues = this.toJSON();

		for (let key in partial) {
			if (!statsSet.has(key)) {
				continue;
			}

			this[key] = partial[key];
		}

		if (!this.equals(oldValues)) {
			if ('totalTests' in partial || 'passedTests' in partial) {
				this.update();
			}

			this.recalcAncestors();
		}
	}

	/**
	 * Add a partial score to this score. No recalc is done.
	 * @param {Object} partial - Partial score to add
	 */
	add (partial) {
		let oldValues = this.toJSON();

		for (let key in partial) {
			if (!statsSet.has(key)) {
				continue;
			}

			this[key] += partial[key];
		}

		if (!this.equals(oldValues)) {
			if ('totalTests' in partial || 'passedTests' in partial) {
				this.update();
			}

			this.recalcAncestors();
		}
	}

	/** Fail all pending tests */
	fail () {
		this.set({failedTests: this.totalTests - this.passedTests});

		for (let child of this.children) {
			child.fail();
		}
	}

	update () {
		if (this.children?.length) {
			return;
		}

		this.total = this.forceTotal ?? this.totalTests;
		this.passed = this.passedTests * this.total / this.totalTests;
	}

	/**
	 * Recalculate this and ancestor scores from children
	 * @returns
	 */
	recalc ({ancestors = true, descendants = 0, self = true} = {}) {
		if (!this.children?.length) {
			// Nothing to do here
			return;
		}

		if (descendants) {
			this.recalcDescendants(descendants === true ? Infinity : descendants);
		}

		if (self) {
			this.recalcSelf();
		}

		if (ancestors) {
			this.recalcAncestors(ancestors === true ? Infinity : ancestors);
		}
	}

	recalcSelf () {
		this.node.recalcs ??= 0;
		this.node.recalcs++;

		for (let stat of stats) {
			this[stat] = 0;
		}

		let children = this.children;

		for (let child of children) {
			if (stats.some(stat => stat in child && isNaN(child[stat]))) {
				this.skipped++;
				continue;
			}

			for (let stat of stats) {
				if (stat in child) {
					this[stat] += child[stat];
				}
			}
		}
	}

	recalcAncestors (limit = Infinity) {
		if (!this.parent || limit <= 0) {
			return;
		}

		this.parent.recalcSelf();
		this.parent.recalcAncestors(limit - 1);
	}

	recalcDescendants (limit = Infinity) {
		if (!this.children || limit <= 0) {
			return;
		}

		for (let child of this.children) {
			child.recalcSelf();
			child.recalcDescendants(limit - 1);
		}
	}

	toString () {
		return +(this.value * 100).toFixed(2) + '%';
	}

	/**
	 * Convert to JSON
	 * @returns {Object}
	 */
	toJSON () {
		return pick(this, stats);
	}
}
