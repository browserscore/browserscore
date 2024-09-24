const calc_size_auto_tests = [
	'calc-size(auto, size)',
	'calc-size(auto, size + 16px)',
	'calc-size(auto, size - 10rem)',
	'calc-size(auto, size * 0.9)',
	'calc-size(auto, size / 2)',
]

const calc_size_default_tests = [
	'calc-size(stretch, size)', // -webkit-fill-available
	'calc-size(stretch, size - 1em)',
	'calc-size(0px, 0px)',
	'calc-size(300px, size)',
	'calc-size(50%, size)',
	'calc-size(min-content, size)',
	'calc-size(max-content, size)',
	'calc-size(fit-content, size)',
	'calc-size(min-content, size * 2)',
	'calc-size(max-content, size / 2)',
	'calc-size(fit-content, 30px + size / 2)',
	'calc-size(fit-content, 50% + size / 2)',
	'calc-size(fit-content, 260px + size * -0.3)',
	'calc-size(fit-content, -100px + size)',
	'calc-size(any, 0px)',
	'calc-size(any, 25em)',
	'calc-size(any, 40%)',
	'calc-size(any, 50px + 30%)',
	'calc-size(any, 30% + 2.6rem)',
	'calc-size(30px, 25em)',
	'calc-size(10px, sign(size) * size)',
	// Nested calc-size()
	'calc-size(calc-size(any, 30px), size)',
	'calc-size(calc-size(any, 30px), 25em)',
	'calc-size(calc-size(2in, 30px), 25em)',
	'calc-size(calc-size(50%, 30px), 25em)',
	'calc-size(calc-size(max-content, size), size)',
	'calc-size(calc-size(max-content, size), size)',
]

export default {
	title: 'CSS Values and Units Module Level 5',
	links: {
		tr: 'css-values-5',
		dev: 'css-values-5',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'interpolate-size': {
			links: {
				tr: '#interpolate-size',
				dev: '#interpolate-size',
			},
			tests: [
				'numeric-only',
				'allow-keywords',
			],
		},
	},
	values: {
		properties: ['width', 'padding'],
		'calc-size()': {
			links: {
				tr: '#calc-size',
				dev: '#calc-size',
			},
			properties: [ 'width', 'min-width', 'height', 'min-height', 'block-size', 'min-block-size', 'inline-size', 'min-inline-size', ],
			// Note: The none keyword is not usable within calc-size().
			tests: [
				...calc_size_auto_tests,
				...calc_size_default_tests,
			],
		},
		'calc-size() in max-width or max-height': {
			links: {
				tr: '#calc-size',
				dev: '#calc-size',
			},
			properties: [ 'max-width', 'max-height', 'max-block-size', 'max-inline-size', ],
			// Note: The none keyword is not usable within calc-size().
			tests: calc_size_default_tests,
		},
		'calc-size() in flex-basis': {
			links: {
				tr: '#calc-size',
				dev: '#calc-size',
			},
			properties: [ 'flex-basis', ],
			// Note: The none keyword is not usable within calc-size().
			tests: [
				'calc-size(content, size)',
				'calc-size(content, size + 1vw)',
				'calc-size(content, size - 1em)',
				'calc-size(content, size * 7)',
				'calc-size(content, size / 0.9)',
				'calc-size(content, size * 1.6 + 23px)',
				...calc_size_auto_tests,
				...calc_size_default_tests,
			],
		},
		'attr()': {
			links: {
				tr: '#attr-notation',
				dev: '#attr-notation',
			},
			properties: ['content', 'width', 'padding'],
			tests: [
				'attr(data-px)',
				'attr(data-px, "12px")',
				'attr(data-px px)',
				'attr(data-px px, initial)',
				'attr(data-string string)',
				'attr(data-url url)',
				'attr(data-ident ident)',
				'attr(data-color color)',
				'attr(data-number number)',
				'attr(data-percentage percentage)',
				'attr(data-length length)',
				'attr(data-angle angle)',
				'attr(data-time time)',
				'attr(data-frequency frequency)',
				'attr(data-flex flex)',
			],
		},
		'first-valid()': {
			links: {
				tr: '#first-valid',
				dev: '#first-valid',
			},
			tests: [
				'first-valid(10px)',
				'first-valid(foo)',
				'first-valid(foo; 10px)',
			],
		},
		'attr()': {
			links: {
				tr: '#attr-notation',
				dev: '#attr-notation',
			},
			properties: ['content', 'width', 'padding'],
			tests: [
				'attr(data-px)',
				'attr(data-px, "12px")',
				'attr(data-px px)',
				'attr(data-px px, initial)',
				'attr(data-string string)',
				'attr(data-url url)',
				'attr(data-ident ident)',
				'attr(data-color color)',
				'attr(data-number number)',
				'attr(data-percentage percentage)',
				'attr(data-length length)',
				'attr(data-angle angle)',
				'attr(data-time time)',
				'attr(data-frequency frequency)',
				'attr(data-flex flex)',
			],
		},
		'random()': {
			links: {
				tr: '#random',
				dev: '#random',
			},
			tests: [
				'random(0px, 100px)',
				'random(50%, 100%)',
				'random(180deg, 360deg)',
				'random(1s, 10s)',
				'random(40Hz, 100Hz)',
				'random(10, 20)',
				'random(10px, 10em)',
				'random(-infinity, infinity)',
				'random(--random-value, 0px, 100px)',
				'random(per-element, 0px, 100px)',
				'random(50px, 100%, by 1em)'
			],
		},
		'random-item() with lengths': {
			links: {
				tr: '#random-item',
				dev: '#random-item',
			},
			tests: [
				'random-item(--random-item; 100px)',
				'random-item(--random-item; 0px; 50px; 100px)',
				'random-item(per-element; 0px; 50px; 100px)',
				'random-item(--random-item; 50%; 100%)',
				'random-item(--random-item; 100px; 10em; 50%; 100%)',
			],
		},
		'random-item() with keywords': {
			links: {
				tr: '#random-item',
				dev: '#random-item',
			},
			properties: ['color'],
			tests: [
				'random-item(--random-item; red; yellow; green; blue)',
			],
		},
		'random-item() with keywords': {
			links: {
				tr: '#random-item',
				dev: '#random-item',
			},
			properties: ['color'],
			tests: [
				'random-item(--random-item; red; yellow; green; blue)',
			],
		},
		'random-item() with functions': {
			links: {
				tr: '#random-item',
				dev: '#random-item',
			},
			properties: ['background-image'],
			tests: [
				'random-item(--random-item; linear-gradient(red, yellow); linear-gradient(green, blue))',
			],
		},
		'sibling-count()': {
			links: {
				tr: '#tree-counting',
				dev: '#tree-counting',
			},
			tests: [
				'calc(sibling-count() * 10px)',
			],
		},
		'sibling-index()': {
			links: {
				tr: '#tree-counting',
				dev: '#tree-counting',
			},
			tests: [
				'calc(sibling-index() * 10px)',
			],
		},
		'toggle() with lengths': {
			links: {
				tr: '#toggle-notation',
				dev: '#toggle-notation',
			},
			tests: ['toggle(1px, 2px)'],
		},
		'toggle() with keywords': {
			links: {
				tr: '#toggle-notation',
				dev: '#toggle-notation',
			},
			properties: ['font-style'],
			tests: ['toggle(italic, normal)'],
		},
		'toggle() with mixed keywords and lengths': {
			links: {
				tr: '#toggle-notation',
				dev: '#toggle-notation',
			},
			properties: ['background-position'],
			tests: ['toggle(top left, 100% 50%)'],
		},
		'Request URL modifiers': {
			links: {
				tr: '#request-url-modifiers',
				dev: '#request-url-modifiers',
			},
			tests: [
				'url("image.png" crossorigin(anonymous))',
				'url("image.png" crossorigin(use-credentials))',
				'url("image.png" integrity("8f6846e1bad406933f9122b201c6de07"))',
				'url("image.png" referrerpolicy(no-referrer))',
				'url("image.png" referrerpolicy(no-referrer-when-downgrade))',
				'url("image.png" referrerpolicy(same-origin))',
				'url("image.png" referrerpolicy(origin))',
				'url("image.png" referrerpolicy(strict-origin))',
				'url("image.png" referrerpolicy(origin-when-cross-origin))',
				'url("image.png" referrerpolicy(strict-origin-when-cross-origin))',
				'url("image.png" referrerpolicy(unsafe-url))',
				'url("image.png" crossorigin(anonymous) referrerpolicy(no-referrer))',
				'url("image.png" crossorigin(anonymous) integrity("8f6846e1bad406933f9122b201c6de07") referrerpolicy(no-referrer))',
			],
		},
	},
};
