export default {
	id: 'css-ruby-1',
	title: 'CSS Ruby Layout Module Level 1',
	link: 'css-ruby-1',
	status: 'experimental',
	properties: {
		display: {
			link: '#ruby-display',
			tests: ['ruby', 'ruby-base', 'ruby-text', 'ruby-base-container', 'ruby-text-container'],
		},
		'ruby-position': {
			link: '#rubypos',
			tests: ['alternate', 'over', 'under', 'alternate over', 'alternate under', 'inter-character'],
		},
		'ruby-merge': {
			link: '#collapsed-ruby',
			tests: ['separate', 'collapse', 'auto'],
		},
		'ruby-align': {
			link: '#ruby-align-property',
			tests: ['start', 'center', 'space-between', 'space-around'],
		},
		'ruby-overhang': {
			link: '#ruby-overhang',
			tests: ['auto', 'none'],
		},
	},
};
