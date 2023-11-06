export default {
	title: 'CSS Basic User Interface Module Level 4',
	links: {
		tr: 'css-ui-4',
		dev: 'css-ui-4',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'accent-color': {
			links: {
				tr: '#widget-accent',
				dev: '#widget-accent',
			},
			tests: ['auto', 'red'],
		},
		appearance: {
			links: {
				tr: '#appearance-switching',
				dev: '#appearance-switching',
			},
			tests: [
				'auto',
				'none',
				'textfield',
				'menulist-button',
				'searchfield',
				'textarea',
				'push-button',
				'slider-horizontal',
				'checkbox',
				'radio',
				'square-button',
				'menulist',
				'listbox',
				'meter',
				'progress-bar',
				'button',
			],
		},
		'input-security': {
			links: {
				tr: '#input-security',
				dev: '#input-security',
			},
			tests: ['auto', 'none'],
		},
		caret: {
			links: {
				tr: '#caret',
				dev: '#caret',
			},
			tests: ['auto', 'green', 'bar', 'green bar'],
		},
		'caret-shape': {
			links: {
				tr: '#caret-shape',
				dev: '#caret-shape',
			},
			tests: ['auto', 'bar', 'block', 'underscore'],
		},
		cursor: {
			links: {
				tr: '#cursor',
				dev: '#cursor',
			},
			tests: [
				'image-set(url("foo.png") 1x, url("foo-2x.png") 2x) 2 2, auto',
				'image-set(url("foo.png") 96dpi, url("foo-2x.png") 192dpi) 2 2, auto',
			],
		},
		'field-sizing': {
			links: {
				tr: '#field-sizing',
				dev: '#field-sizing',
			},
			tests: ['fixed', 'content'],
		},
		resize: {
			links: {
				tr: '#resize',
				dev: '#resize',
			},
			tests: ['block', 'inline'],
		},
		'text-overflow': {
			links: {
				tr: '#text-overflow',
				dev: '#text-overflow',
			},
			tests: [
				'fade',
				'fade(10px)',
				'fade(10%)',
				"'foo'",
				'clip clip',
				'ellipsis clip',
				'fade clip',
				'fade(10px) clip',
				'fade(10%) clip',
				"'foo' clip",
				'clip ellipsis',
				'ellipsis ellipsis',
				'fade ellipsis',
				'fade(10px) ellipsis',
				'fade(10%) ellipsis',
				"'foo' ellipsis",
				'clip fade',
				'ellipsis fade',
				'fade fade',
				'fade(10px) fade',
				'fade(10%) fade',
				"'foo' fade",
				'clip fade(10px)',
				'ellipsis fade(10px)',
				'fade fade(10px)',
				'fade(10px) fade(10px)',
				'fade(10%) fade(10px)',
				"'foo' fade(10px)",
				'clip fade(10%)',
				'ellipsis fade(10%)',
				'fade fade(10%)',
				'fade(10px) fade(10%)',
				'fade(10%) fade(10%)',
				"'foo' fade(10%)",
				"clip 'foo'",
				"ellipsis 'foo'",
				"fade 'foo'",
				"fade(10px) 'foo'",
				"fade(10%) 'foo'",
				"'foo' 'foo'",
			],
		},
		'user-select': {
			links: {
				tr: '#content-selection',
				dev: '#content-selection',
			},
			tests: ['auto', 'text', 'none', 'contain', 'all'],
		},
		'nav-up': {
			links: {
				tr: '#nav-dir',
				dev: '#nav-dir',
			},
			tests: [
				'auto',
				'#foo',
				'#foo current',
				'#foo root',
				'#foo "bar"',
				"#foo 'bar'",
			],
		},
		'nav-right': {
			links: {
				tr: '#nav-dir',
				dev: '#nav-dir',
			},
			tests: [
				'auto',
				'#foo',
				'#foo current',
				'#foo root',
				'#foo "bar"',
				"#foo 'bar'",
			],
		},
		'nav-down': {
			links: {
				tr: '#nav-dir',
				dev: '#nav-dir',
			},
			tests: [
				'auto',
				'#foo',
				'#foo current',
				'#foo root',
				'#foo "bar"',
				"#foo 'bar'",
			],
		},
		'nav-left': {
			links: {
				tr: '#nav-dir',
				dev: '#nav-dir',
			},
			tests: [
				'auto',
				'#foo',
				'#foo current',
				'#foo root',
				'#foo "bar"',
				"#foo 'bar'",
			],
		},
		'outline-color': {
			links: {
				tr: '#outline-color',
				dev: '#outline-color',
			},
			tests: ['stripes(red, yellow, green, blue)']
		},
		'pointer-events': {
			links: {
				tr: '#pointer-events-control',
				dev: '#pointer-events-control',
			},
			tests: ['auto', 'none']
		},
	},
};
