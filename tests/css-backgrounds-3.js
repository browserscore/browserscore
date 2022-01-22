export default {
	"title": "CSS Backgrounds and Borders Module Level 3",
	"links": {
		"tr": "css-backgrounds-3",
		"dev": "css-backgrounds-3"
	},
	"status": {
		"stability": "stable",
		"first-snapshot": 2015
	},
	"properties": {
		"background-repeat": {
			"links": {
				"tr": "#the-background-repeat",
				"dev": "#background-repeat"
			},
			"tests": [
				"space", "round", "repeat repeat", "space repeat", "round repeat",
				"no-repeat repeat", "repeat space", "space space", "round space",
				"no-repeat space", "repeat round", "space round", "round round",
				"no-repeat round", "repeat no-repeat", "space no-repeat", "round no-repeat",
				"no-repeat no-repeat"
			]
		},
		"background-attachment": {
			"links": {
				"tr": "#the-background-attachment",
				"dev": "#background-attachment"
			},
			"tests": "local"
		},
		"background-position": {
			"links": {
				"tr": "#the-background-position",
				"dev": "#background-position"
			},
			"tests": ["bottom 10px right 20px", "bottom 10px right", "top right 10px"]
		},
		"background-clip": {
			"links": {
				"tr": "#the-background-clip",
				"dev": "#background-clip"
			},
			"tests": ["border-box", "padding-box", "content-box"]
		},
		"background-origin": {
			"links": {
				"tr": "#the-background-origin",
				"dev": "#background-origin"
			},
			"tests": ["border-box", "padding-box", "content-box"]
		},
		"background-size": {
			"links": {
				"tr": "#the-background-size",
				"dev": "#background-size"
			},
			"tests": ["auto", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"]
		},
		"background": {
			"links": {
				"tr": "#the-background",
				"dev": "#background"
			},
			"tests": [
				"url(foo.png), url(bar.svg)",
				"top left / 50% 60%",
				"border-box",
				"border-box padding-box",
				"url(foo.png) bottom right / cover padding-box content-box"
			]
		},
		"border-top-left-radius": {
			"links": {
				"tr": "#the-border-radius",
				"dev": "#border-radius"
			},
			"tests": ["0", "50%", "250px 100px"]
		},
		"border-top-right-radius": {
			"links": {
				"tr": "#the-border-radius",
				"dev": "#border-radius"
			},
			"tests": ["0", "50%", "250px 100px"]
		},
		"border-bottom-right-radius": {
			"links": {
				"tr": "#the-border-radius",
				"dev": "#border-radius"
			},
			"tests": ["0", "50%", "250px 100px"]
		},
		"border-bottom-left-radius": {
			"links": {
				"tr": "#the-border-radius",
				"dev": "#border-radius"
			},
			"tests": ["0", "50%", "250px 100px"]
		},
		"border-radius": {
			"links": {
				"tr": "#the-border-radius",
				"dev": "#border-radius"
			},
			"tests": ["10px", "50%", "10px / 20px", "2px 4px 8px 16px", "2px 4px 8px 16px / 2px 4px 8px 16px"]
		},
		"border-image-source": {
			"links": {
				"tr": "#the-border-image-source",
				"dev": "#border-image-source"
			},
			"tests": ["none", "url(foo.png)"]
		},
		"border-image-slice": {
			"links": {
				"tr": "#the-border-image-slice",
				"dev": "#border-image-slice"
			},
			"tests": [
				"10", "30%", "10 10", "30% 10", "10 30%", "30% 30%", "10 10 10", "30% 10 10",
				"10 30% 10", "30% 30% 10", "10 10 30%", "30% 10 30%", "10 30% 30%",
				"30% 30% 30%", "10 10 10 10", "30% 10 10 10", "10 30% 10 10", "30% 30% 10 10",
				"10 10 30% 10", "30% 10 30% 10", "10 30% 30% 10", "30% 30% 30% 10",
				"10 10 10 30%", "30% 10 10 30%", "10 30% 10 30%", "30% 30% 10 30%",
				"10 10 30% 30%", "30% 10 30% 30%", "10 30% 30% 30%", "30% 30% 30% 30%",
				"fill 30%", "fill 10", "fill 2 4 8% 16%", "30% fill", "10 fill", "2 4 8% 16% fill"
			]
		},
		"border-image-width": {
			"links": {
				"tr": "#the-border-image-width",
				"dev": "#border-image-width"
			},
			"tests": ["10px", "5%", "28", "auto", "10px 10px", "5% 10px", "28 10px", "auto 10px", "10px 5%", "5% 5%", "28 5%", "auto 5%", "10px 28", "5% 28", "28 28", "auto 28", "10px auto", "5% auto", "28 auto", "auto auto", "10px 10% 10", "5% 10px 20 auto"]
		},
		"border-image-outset": {
			"links": {
				"tr": "#the-border-image-outset",
				"dev": "#border-image-outset"
			},
			"tests": ["10px", "20", "10px 20", "10px 20px", "20 30", "2px 3px 4", "1 2px 3px 4"]
		},
		"border-image-repeat": {
			"links": {
				"tr": "#the-border-image-repeat",
				"dev": "#border-image-repeat"
			},
			"tests": [
				"stretch", "repeat", "round", "space", "stretch stretch", "repeat stretch",
				"round stretch", "space stretch", "stretch repeat", "repeat repeat",
				"round repeat", "space repeat", "stretch round", "repeat round", "round round",
				"space round", "stretch space", "repeat space", "round space", "space space"
			]
		},
		"border-image": {
			"links": {
				"tr": "#the-border-image",
				"dev": "#border-image"
			},
			"tests": [
				"url(foo.png) 10", "url(foo.png) 10%", "url(foo.png) 10% fill",
				"url(foo.png) 10 round", "url(foo.png) 10 stretch repeat",
				"url(foo.png) 10 / 10px", "url(foo.png) 10 / 10% / 10px",
				"url(foo.png) fill 10 / 10% / 10px", "url(foo.png) fill 10 / 10% / 10px space"
			]
		},
		"box-shadow": {
			"links": {
				"tr": "#the-box-shadow",
				"dev": "#box-shadow"
			},
			"tests": [
				"1px 1px", "0 0 black", "1px 2px 3px black", "1px 2px 3px 4px black",
				"inset 1px 1px", "1px 2px 3px 4px black inset"
			]
		}
	}
};
