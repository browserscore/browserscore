export default {
	title: 'CSS Scroll Snap Module Level 2',
	links: {
		dev: 'css-scroll-snap-2',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		'scroll-start': {
			links: {
				dev: '#scroll-start',
			},
			tests: [
				'auto',
				'start',
				'end',
				'center',
				'left',
				'right',
				'top',
				'bottom',
				'100px',
				'10%',
				'100px 10%',
			],
		},
		'scroll-start-target': {
			links: {
				dev: '#scroll-start-target',
			},
			tests: [
				'none',
				'auto',
			],
		},
		'scroll-start-x': {
			links: {
				dev: '#scroll-start-longhands-physical',
			},
			tests: [
				'auto',
				'start',
				'end',
				'center',
				'100px',
				'10%',
			],
		},
		'scroll-start-y': {
			links: {
				dev: '#scroll-start-longhands-physical',
			},
			tests: [
				'auto',
				'start',
				'end',
				'center',
				'100px',
				'10%',
			],
		},
		'scroll-start-inline': {
			links: {
				dev: '#scroll-start-longhands-logical',
			},
			tests: [
				'auto',
				'start',
				'end',
				'center',
				'100px',
				'10%',
			],
		},
		'scroll-start-block': {
			links: {
				dev: '#scroll-start-longhands-logical',
			},
			tests: [
				'auto',
				'start',
				'end',
				'center',
				'100px',
				'10%',
			],
		},
	},
	selectors: {
		':snapped': {
			links: {
				dev: '#snapped',
			},
			tests: ':snapped',
		},
		':snapped-x': {
			links: {
				dev: '#selectordef-snapped-x',
			},
			tests: ':snapped-x',
		},
		':snapped-y': {
			links: {
				dev: '#selectordef-snapped-y',
			},
			tests: ':snapped-y',
		},
		':snapped-inline': {
			links: {
				dev: '#selectordef-snapped-inline',
			},
			tests: ':snapped-inline',
		},
		':snapped-block': {
			links: {
				dev: '#selectordef-snapped-block',
			},
			tests: ':snapped-block',
		},
	},
};
