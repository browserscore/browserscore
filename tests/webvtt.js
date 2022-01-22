export default {
	"title": "WebVTT: The Web Video Text Tracks Format",
	"links": {
		"tr": "webvtt1",
		"dev": "webvtt",
		"devtype": "github"
	},
	"status": {
		"stability": "experimental"
	},
	"selectors": {
		"::cue": {
			"links": {
				"tr": "#the-cue-pseudo-element",
				"dev": "#the-cue-pseudo-element"
			},
			"tests": ["::cue"]
		},
		"::cue()": {
			"links": {
				"tr": "#the-cue-pseudo-element",
				"dev": "#the-cue-pseudo-element"
			},
			"tests": ["::cue(span)"]
		},
		"::cue-region": {
			"links": {
				"tr": "#the-cue-region-pseudo-element",
				"dev": "#the-cue-region-pseudo-element"
			},
			"tests": ["::cue-region"]
		},
		"::cue-region()": {
			"links": {
				"tr": "#the-cue-region-pseudo-element",
				"dev": "#the-cue-region-pseudo-element"
			},
			"tests": ['::cue-region(span)']
		}
	}
};
