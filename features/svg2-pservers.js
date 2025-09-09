export default {
	id: 'svg2-pServers',
	title: 'SVG 2 Paint Servers: Gradients and Patterns',
	link: 'svg2-draft/pservers.html',
	specLink: 'svg2/pservers.html',
	group: 'svgwg',
	status: 'experimental',
	properties: {
		'stop-color': {
			link: '#StopColorProperty',
			mdnGroup: 'SVG',
			tests: ['green'],
		},
		'stop-opacity': {
			link: '#StopOpacityProperty',
			mdnGroup: 'SVG',
			tests: ['.5', '45%'],
		},
	},
};
