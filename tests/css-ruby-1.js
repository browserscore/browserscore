export default {
	title: 'CSS Ruby Layout Module Level 1',
	links: {
		tr: 'css-ruby-1',
		dev: 'css-ruby-1',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		display: {
			links: {
				tr: '#ruby-display',
				dev: '#ruby-display',
			},
			tests: ['ruby', 'ruby-base', 'ruby-text', 'ruby-base-container', 'ruby-text-container'],
		},
		'ruby-position': {
			links: {
				tr: '#rubypos',
				dev: '#rubypos',
			},
			tests: ['alternate', 'over', 'under', 'alternate over', 'alternate under', 'inter-character'],
		},
		'ruby-merge': {
			links: {
				tr: '#collapsed-ruby',
				dev: '#collapsed-ruby',
			},
			tests: ['separate', 'collapse', 'auto'],
		},
		'ruby-align': {
			links: {
				tr: '#ruby-align-property',
				dev: '#ruby-align-property',
			},
			tests: ['start', 'center', 'space-between', 'space-around'],
		},
	},
};
