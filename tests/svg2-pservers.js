export default {
	id: 'svg2-pServers',
	title: 'SVG 2 Paint Servers: Gradients and Patterns',
	links: {
		tr: 'svg2/pservers.html',
		dev: 'svg2-draft/pservers.html',
	},
	group: 'svgwg',
	status: 'experimental',
	properties: {
		'stop-color': {
			links: {
				dev: '#StopColorProperty',
				mdnGroup: 'SVG',
			},
			tests: ['green'],
		},
		'stop-opacity': {
			links: {
				dev: '#StopOpacityProperty',
				mdnGroup: 'SVG',
			},
			tests: ['.5', '45%'],
		},
	},
};
