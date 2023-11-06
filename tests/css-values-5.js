export default {
	title: 'CSS Values and Units Module Level 5',
	links: {
		dev: 'css-values-5',
	},
	status: {
		stability: 'experimental',
	},
	values: {
		properties: ['width', 'padding'],
		'attr()': {
			links: {
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
				dev: '#random-item',
			},
			properties: ['color'],
			tests: [
				'random-item(--random-item; red; yellow; green; blue)',
			],
		},
		'random-item() with keywords': {
			links: {
				dev: '#random-item',
			},
			properties: ['color'],
			tests: [
				'random-item(--random-item; red; yellow; green; blue)',
			],
		},
		'random-item() with functions': {
			links: {
				dev: '#random-item',
			},
			properties: ['background-image'],
			tests: [
				'random-item(--random-item; linear-gradient(red, yellow); linear-gradient(green, blue))',
			],
		},
		'sibling-count()': {
			links: {
				dev: '#tree-counting',
			},
			tests: [
				'calc(sibling-count() * 10px)',
			],
		},
		'sibling-index()': {
			links: {
				dev: '#tree-counting',
			},
			tests: [
				'calc(sibling-index() * 10px)',
			],
		},
		'toggle() with lengths': {
			links: {
				dev: '#toggle-notation',
			},
			tests: ['toggle(1px, 2px)'],
		},
		'toggle() with keywords': {
			links: {
				dev: '#toggle-notation',
			},
			properties: ['font-style'],
			tests: ['toggle(italic, normal)'],
		},
		'toggle() with mixed keywords and lengths': {
			links: {
				dev: '#toggle-notation',
			},
			properties: ['background-position'],
			tests: ['toggle(top left, 100% 50%)'],
		},
		'Request URL modifiers': {
			links: {
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
