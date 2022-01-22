export default {
	"title": "CSS Overscroll Behavior Module Level 1",
	"links": {
		"tr": "css-overscroll-1",
		"dev": "css-overscroll-1"
	},
	"status": {
		"stability": "experimental"
	},
	"properties": {
		"overscroll-behavior": {
			"links": {
				"dev": "#overscroll-behavior-properties"
			},
			"tests": [
				"contain", "none", "auto", "contain contain", "none contain",
				"auto contain", "contain none", "none none", "auto none",
				"contain auto", "none auto", "auto auto"
			]
		},
		"overscroll-behavior-x": {
			"links": {
				"dev": "#overscroll-behavior-longhands-physical"
			},
			"tests": ["contain", "none", "auto"]
		},
		"overscroll-behavior-y": {
			"links": {
				"dev": "#overscroll-behavior-longhands-physical"
			},
			"tests": ["contain", "none", "auto"]
		},
		"overscroll-behavior-inline": {
			"links": {
				"dev": "#overscroll-behavior-longhands-logical"
			},
			"tests": ["contain", "none", "auto"]
		},
		"overscroll-behavior-block": {
			"links": {
				"dev": "#overscroll-behavior-longhands-logical"
			},
			"tests": ["contain", "none", "auto"]
		}
	}
};
