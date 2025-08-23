export default {
	title: 'CSS Basic User Interface Module Level 3 (CSS3 UI)',
	link: 'css-ui-3',
	status: {
		stability: 'stable',
		'first-snapshot': 2015,
	},
	properties: {
		'box-sizing': {
			link: '#box-sizing',
			tests: ['border-box', 'content-box'],
		},
		'outline-style': {
			link: '#outline-style',
			tests: ['auto'],
		},
		'outline-offset': {
			link: '#outline-offset',
			tests: ['-5px', '0', '5px'],
		},
		resize: {
			link: '#resize',
			tests: ['none', 'both', 'horizontal', 'vertical'],
		},
		'text-overflow': {
			link: '#text-overflow',
			tests: ['clip', 'ellipsis'],
		},
		cursor: {
			link: '#cursor',
			tests: [
				'url(foo.png) 2 2, auto',
				'none',
				'context-menu',
				'cell',
				'vertical-text',
				'alias',
				'copy',
				'no-drop',
				'not-allowed',
				'grab',
				'grabbing',
				'ew-resize',
				'ns-resize',
				'nesw-resize',
				'nwse-resize',
				'col-resize',
				'row-resize',
				'all-scroll',
				'zoom-in',
				'zoom-out',
			],
		},
		'caret-color': {
			link: '#caret-color',
			tests: ['auto', 'green'],
		},
	},
};
