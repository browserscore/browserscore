export default {
	title: 'CSS Fill and Stroke Module Level 3',
	links: {
		tr: 'fill-stroke-3',
		dev: 'fill-stroke-3',
		devtype: 'fxtf',
	},
	status: {
		stability: 'experimental',
	},
	properties: {
		fill: {
			links: {
				tr: '#fill-shorthand',
				dev: '#fill-shorthand',
			},
			tests: [
				'url(foo.png), url(bar.svg)',
				'top left / 50% 60%',
				'border-box',
				'border-box padding-box',
				'url(foo.png) bottom right / cover padding-box content-box',
			],
		},
		'fill-rule': {
			links: {
				tr: '#fill-rule',
				dev: '#fill-rule',
			},
			tests: ['nonzero', 'evenodd'],
		},
		'fill-break': {
			links: {
				tr: '#fill-break',
				dev: '#fill-break',
			},
			tests: ['bounding-box', 'slice', 'clone'],
		},
		'fill-color': {
			links: {
				tr: '#fill-color',
				dev: '#fill-color',
			},
			tests: 'green',
		},
		'fill-image': {
			links: {
				tr: '#fill-image',
				dev: '#fill-image',
			},
			tests: [
				'url(foo.png)',
				"image('sprites.png#xywh=10,30,60,20')",
				"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
				"image('dark.png', black)",
				'image(green)',
				'linear-gradient(to bottom, yellow 0%, blue 100%)',
				'child',
				'child(2)',
			],
		},
		'fill-origin': {
			links: {
				tr: '#fill-origin',
				dev: '#fill-origin',
			},
			tests: ['match-parent', 'fill-box', 'stroke-box', 'content-box', 'padding-box', 'border-box'],
		},
		'fill-position': {
			links: {
				tr: '#fill-position',
				dev: '#fill-position',
			},
			tests: ['center', 'left 50%', 'bottom 10px right 20px', 'bottom 10px right', 'top right 10px'],
		},
		'fill-size': {
			links: {
				tr: '#fill-size',
				dev: '#fill-size',
			},
			tests: ['auto', 'cover', 'contain', '10px', '50%', '10px auto', 'auto 10%', '50em 50%'],
		},
		'fill-repeat': {
			links: {
				tr: '#fill-repeat',
				dev: '#fill-repeat',
			},
			tests: [
				'repeat-x',
				'repeat-y',
				'repeat',
				'space',
				'round',
				'no-repeat',
				'repeat repeat',
				'space repeat',
				'round repeat',
				'no-repeat repeat',
				'repeat space',
				'space space',
				'round space',
				'no-repeat space',
				'repeat round',
				'space round',
				'round round',
				'no-repeat round',
				'repeat no-repeat',
				'space no-repeat',
				'round no-repeat',
				'no-repeat no-repeat',
			],
		},
		'fill-opacity': {
			links: {
				tr: '#fill-opacity',
				dev: '#fill-opacity',
			},
			tests: ['0.5', '45%'],
		},
		stroke: {
			links: {
				tr: '#stroke-shorthand',
				dev: '#stroke-shorthand',
			},
			tests: [
				'url(foo.png), url(bar.svg)',
				'top left / 50% 60%',
				'border-box',
				'border-box padding-box',
				'url(foo.png) bottom right / cover padding-box content-box',
			],
		},
		'stroke-width': {
			links: {
				tr: '#stroke-width',
				dev: '#stroke-width',
			},
			tests: ['0', '1px', '25%'],
		},
		'stroke-align': {
			links: {
				tr: '#stroke-align',
				dev: '#stroke-align',
			},
			tests: ['center', 'inset', 'outset '],
		},
		'stroke-linecap': {
			links: {
				tr: '#stroke-linecap',
				dev: '#stroke-linecap',
			},
			tests: ['butt', 'round', 'square '],
		},
		'stroke-linejoin': {
			links: {
				tr: '#stroke-linejoin',
				dev: '#stroke-linejoin',
			},
			tests: [
				'crop',
				'arcs',
				'miter',
				'bevel',
				'round',
				'fallback',
				'crop bevel',
				'arcs round',
				'miter fallback',
			],
		},
		'stroke-miterlimit': {
			links: {
				tr: '#stroke-miterlimit',
				dev: '#stroke-miterlimit',
			},
			tests: '4',
		},
		'stroke-break': {
			links: {
				tr: '#stroke-break',
				dev: '#stroke-break',
			},
			tests: ['bounding-box', 'slice', 'clone '],
		},
		'stroke-dasharray': {
			links: {
				tr: '#stroke-dasharray',
				dev: '#stroke-dasharray',
			},
			tests: ['none', '0', '4px', '4px 12%', '4px 12% 3em', '4px 12% 3em 5px', '4px 12% 3em 5px 10%'],
		},
		'stroke-dashoffset': {
			links: {
				tr: '#stroke-dashoffset',
				dev: '#stroke-dashoffset',
			},
			tests: ['0', '4px', '12%'],
		},
		'stroke-dash-corner': {
			links: {
				tr: '#corner-control',
				dev: '#corner-control',
			},
			tests: ['none', '15px'],
		},
		'stroke-dash-justify': {
			links: {
				tr: '#corner-control',
				dev: '#corner-control',
			},
			tests: [
				'none',
				'stretch',
				'compress',
				'dashes',
				'gaps',
				'stretch dashes',
				'compress gaps dashes',
				'stretch gaps',
				'compress dashes gaps',
			],
		},
		'stroke-color': {
			links: {
				tr: '#stroke-color',
				dev: '#stroke-color',
			},
			tests: 'green',
		},
		'stroke-image': {
			links: {
				tr: '#stroke-image',
				dev: '#stroke-image',
			},
			tests: [
				'url(foo.png)',
				"image('sprites.png#xywh=10,30,60,20')",
				"image('wavy.svg', 'wavy.png' , 'wavy.gif')",
				"image('dark.png', black)",
				'image(green)',
				'linear-gradient(to bottom, yellow 0%, blue 100%)',
				'child',
				'child(2)',
			],
		},
		'stroke-origin': {
			links: {
				tr: '#stroke-origin',
				dev: '#stroke-origin',
			},
			tests: ['match-parent', 'fill-box', 'stroke-box', 'content-box', 'padding-box', 'border-box'],
		},
		'stroke-position': {
			links: {
				tr: '#stroke-position',
				dev: '#stroke-position',
			},
			tests: ['center', 'left 50%', 'bottom 10px right 20px', 'bottom 10px right', 'top right 10px'],
		},
		'stroke-size': {
			links: {
				tr: '#stroke-size',
				dev: '#stroke-size',
			},
			tests: ['auto', 'cover', 'contain', '10px', '50%', '10px auto', 'auto 10%', '50em 50%'],
		},
		'stroke-repeat': {
			links: {
				tr: '#stroke-repeat',
				dev: '#stroke-repeat',
			},
			tests: [
				'repeat-x',
				'repeat-y',
				'repeat',
				'space',
				'round',
				'no-repeat',
				'repeat repeat',
				'space repeat',
				'round repeat',
				'no-repeat repeat',
				'repeat space',
				'space space',
				'round space',
				'no-repeat space',
				'repeat round',
				'space round',
				'round round',
				'no-repeat round',
				'repeat no-repeat',
				'space no-repeat',
				'round no-repeat',
				'no-repeat no-repeat',
			],
		},
		'stroke-opacity': {
			links: {
				tr: '#stroke-opacity',
				dev: '#stroke-opacity',
			},
			tests: ['0.5', '45%'],
		},
	},
};
