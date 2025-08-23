import Score from './Score.js';

export default class AbstractFeature {
	#parent;

	constructor (def, parent) {
		this.def = def;
		this.#parent = parent;

		this.id = def.id;

		if (def.title) {
			this.title = def.title;
		}

		this.score = new Score(this.#parent?.score, this.constructor.featureCount);
	}

	get parent () {
		return this.#parent;
	}

	get link() {
		return this.specLink ?? this.draftLink;
	}

	get draftLink () {
		let link = this.def.link ?? this.def.links?.dev ?? '';

		if (link) {
			return (this.parent?.draftLink ?? '') + link;
		}

		return link;
	}

	get specLink () {
		let link = this.def.link ?? this.def.links?.tr ?? '';

		if (link) {
			return (this.parent?.specLink ?? '') + link;
		}

		return link;
	}

	get mdnLink () {
		let ret = this.def.mdn ?? this.def.links?.mdn;
		return ret ? 'https://developer.mozilla.org/en-US/docs/Web/' + ret : '';
	}

	test() {
		this.tests.forEach(test => test());
	}
}
