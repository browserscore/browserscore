export default {
	id: 'scroll-animations-1',
	title: 'Scroll-driven Animations',
	link: 'scroll-animations-1',
	status: 'experimental',
	'values': {
		properties: ['animation-timeline'],
		'scroll()': {
			link: '#scroll-notation',
			tests: [
				'scroll()',
				'scroll(block)',
				'scroll(inline)',
				'scroll(x)',
				'scroll(y)',
				'scroll(nearest)',
				'scroll(root)',
				'scroll(self)',
				'scroll(inline root)',
				'scroll(block self)',
				'scroll(x nearest)',
				'scroll(root inline)',
				'scroll(self block)',
				'scroll(nearest x)',
			],
		},
		'view()': {
			link: '#view-notation',
			tests: [
				'view()',
				'view(block)',
				'view(inline)',
				'view(x)',
				'view(y)',
				'view(auto)',
				'view(100px)',
				'view(5%)',
				'view(100px 200px)',
				'view(5% 10%)',
				'view(inline 100px)',
				'view(block 5% 10%)',
				'view(100px inline)',
				'view(5% 10% block)',
			],
		},
	},
	properties: {
		'animation-range': {
			link: '#animation-range',
			tests: [
				'normal',
				'500px',
				'50%',
				'entry',
				'exit',
				'entry-crossing',
				'exit-crossing',
				'cover',
				'contain',
				'entry 500px',
				'entry 50%',
				'500px, exit 50%',
				'normal 500px',
				'100px 600px',
				'50% 80%',
				'contain 100px cover 500px',
				'contain 10% exit 50%, entry 100px exit 500px',
			],
		},
		'animation-range-start': {
			link: '#animation-range-start',
			tests: [
				'normal',
				'500px',
				'50%',
				'entry',
				'exit',
				'entry-crossing',
				'exit-crossing',
				'cover',
				'contain',
				'entry 500px',
				'entry 50%',
				'500px, entry 50%',
			],
		},
		'animation-range-end': {
			link: '#animation-range-end',
			tests: [
				'normal',
				'500px',
				'50%',
				'entry',
				'exit',
				'entry-crossing',
				'exit-crossing',
				'cover',
				'contain',
				'entry 500px',
				'entry 50%',
				'500px, exit 50%',
			],
		},
		'scroll-timeline': {
			link: '#scroll-timeline',
			tests: [
				'none',
				'--some-timeline-name',
				'--some-timeline-name, none',
				'--some-timeline-name, --other-timeline-name',
				'--some-timeline-name block',
				'--some-timeline-name inline',
				'--some-timeline-name x',
				'--some-timeline-name y',
				'--some-timeline-name block, none',
				'--some-timeline-name, --other-timeline-name inline',
			],
		},
		'scroll-timeline-axis': {
			link: '#scroll-timeline-axis',
			tests: [
				'block',
				'inline',
				'x',
				'y',
				'block, inline',
			],
		},
		'scroll-timeline-name': {
			link: '#scroll-timeline-name',
			tests: [
				'none',
				'--some-timeline-name',
				'--some-timeline-name, none',
				'--some-timeline-name, --other-timeline-name',
			],
		},
		'view-timeline': {
			link: '#view-timeline',
			tests: [
				'none',
				'--some-timeline-name',
				'--some-timeline-name, none',
				'--some-timeline-name, --other-timeline-name',
				'--some-timeline-name block',
				'--some-timeline-name inline',
				'--some-timeline-name x',
				'--some-timeline-name y',
				'--some-timeline-name block, none',
				'--some-timeline-name, --other-timeline-name inline',
			],
		},
		'view-timeline-axis': {
			link: '#view-timeline-axis',
			tests: [
				'block',
				'inline',
				'x',
				'y',
				'block, inline',
			],
		},
		'view-timeline-inset': {
			link: '#view-timeline-inset',
			tests: [
				'auto',
				'100px',
				'5%',
				'100px 200px',
				'5% 10%',
				'auto, 100px',
			],
		},
		'view-timeline-name': {
			link: '#view-timeline-name',
			tests: [
				'none',
				'--some-timeline-name',
				'--some-timeline-name, none',
				'--some-timeline-name, --other-timeline-name',
			],
		},
		'timeline-scope': {
			link: '#timeline-scope',
			tests: [
				'none',
				'--timeline-scope',
				'--some-timeline-scope, --other-timeline-scope',
			],
		}
	},
	interfaces: {
		ScrollTimeline: {
			link: '#scrolltimeline-interface',
			mdnGroup: 'DOM',
			tests: ['source', 'axis', 'currentTime'],
			interface: function() {
				return new ScrollTimeline({
					source: document.scrollingElement,
				});
			}
		},
		ViewTimeline: {
			link: '#viewtimeline-interface',
			mdnGroup: 'DOM',
			tests: ['subject', 'startOffset', 'endOffset', 'currentTime'],
			interface: function() {
				return new ViewTimeline({
					source: document.scrollingElement,
				});
			}
		},
	},
};
