export default {
	"title": "CSS Speech Module Level 1",
	"links": {
		"tr": "css-speech-1",
		"dev": "css-speech-1"
	},
	"status": {
		"stability": "stable"
	},
	"properties": {
		"cue": {
			"links": {
				"tr": "#cue-props-cue",
				"dev": "#cue-props-cue"
			},
			"tests": [
				"none", "url(beforeafter.wav)", "url(beforeafter.wav) +3dB", "url(beforeafter.wav) -3dB",
				"url(before.wav) url(after.wav)", "url(before.wav) +3dB url(after.wav) -3dB"
			]
		},
		"cue-before": {
			"links": {
				"tr": "#cue-props-cue-before-after",
				"dev": "#cue-props-cue-before-after"
			},
			"tests": ["none", "url(after.wav)", "url(after.wav) +3dB", "url(after.wav) -3dB"]
		},
		"cue-after": {
			"links": {
				"tr": "#cue-props-cue-before-after",
				"dev": "#cue-props-cue-before-after"
			},
			"tests": ["none", "url(after.wav)", "url(after.wav) +3dB", "url(after.wav) -3dB"]
		},
		"pause": {
			"links": {
				"tr": "#pause-props-pause",
				"dev": "#pause-props-pause"
			},
			"tests": [
				"1s", "none", "x-weak", "weak", "medium", "strong", "x-strong",
				"1s weak", "none 200ms"
			]
		},
		"pause-before": {
			"links": {
				"tr": "#pause-props-pause-before-after",
				"dev": "#pause-props-pause-before-after"
			},
			"tests": ["1s", "none", "x-weak", "weak", "medium", "strong", "x-strong"]
		},
		"pause-after": {
			"links": {
				"tr": "#pause-props-pause-before-after",
				"dev": "#pause-props-pause-before-after"
			},
			"tests": ["1s", "none", "x-weak", "weak", "medium", "strong", "x-strong"]
		},
		"rest": {
			"links": {
				"tr": "#rest-props-rest",
				"dev": "#rest-props-rest"
			},
			"tests": [
				"1s", "none", "x-weak", "weak", "medium", "strong", "x-strong",
				"1s weak", "none 200ms"
			]
		},
		"rest-before": {
			"links": {
				"tr": "#rest-props-rest-before-after",
				"dev": "#rest-props-rest-before-after"
			},
			"tests": ["1s", "none", "x-weak", "weak", "medium", "strong", "x-strong"]
		},
		"rest-after": {
			"links": {
				"tr": "#rest-props-rest-before-after",
				"dev": "#rest-props-rest-before-after"
			},
			"tests": ["1s", "none", "x-weak", "weak", "medium", "strong", "x-strong"]
		},
		"speak": {
			"links": {
				"tr": "#speaking-props-speak",
				"dev": "#speaking-props-speak"
			},
			"tests": ["auto", "never", "always"]
		},
		"speak-as": {
			"links": {
				"tr": "#speaking-props-speak-as",
				"dev": "#speaking-props-speak-as"
			},
			"tests": [
				"normal", "spell-out", "digits", "literal-punctuation", "no-punctuation",
				"spell-out digits", "spell-out literal-punctuation", "digits no-punctuation"
			]
		},
		"voice-balance": {
			"links": {
				"tr": "#mixing-props-voice-balance",
				"dev": "#mixing-props-voice-balance"
			},
			"tests": ["20.4", "left", "center", "right", "leftwards", "rightwards"]
		},
		"voice-duration": {
			"links": {
				"tr": "#mixing-props-voice-duration",
				"dev": "#mixing-props-voice-duration"
			},
			"tests": ["auto", "1s"]
		},
		"voice-family": {
			"links": {
				"tr": "#voice-props-voice-family",
				"dev": "#voice-props-voice-family"
			},
			"tests": [
				"voice-family", "male", "female", "neutral", "preserve", "child male", "young female",
				"old neutral", "female 2", "young male 1", "voice-family1, voice-family2, male"
			]
		},
		"voice-pitch": {
			"links": {
				"tr": "#voice-props-voice-pitch",
				"dev": "#voice-props-voice-pitch"
			},
			"tests": [
				"250Hz", "+30Hz", "-20Hz absolute", "x-low", "low", "medium", "high", "x-high",
				"1.059st", "25%", "+25%", "-25%", "low +20Hz", "high -25%", "medium -1.02st"
			]
		},
		"voice-range": {
			"links": {
				"tr": "#voice-props-voice-range",
				"dev": "#voice-props-voice-range"
			},
			"tests": [
				"250Hz", "+30Hz", "-20Hz absolute", "x-low", "low", "medium", "high", "x-high",
				"1.059st", "25%", "+25%", "-25%", "low +20Hz", "high -25%", "medium -1.02st"
			]
		},
		"voice-rate": {
			"links": {
				"tr": "#voice-props-voice-rate",
				"dev": "#voice-props-voice-rate"
			},
			"tests": ["normal", "x-slow", "slow", "fast", "x-fast", "20%", "slow 80%"]
		},
		"voice-stress": {
			"links": {
				"tr": "#voice-props-voice-stress",
				"dev": "#voice-props-voice-stress"
			},
			"tests": ["normal", "strong", "moderate", "none", "reduced"]
		},
		"voice-volume": {
			"links": {
				"tr": "#mixing-props-voice-volume",
				"dev": "#mixing-props-voice-volume"
			},
			"tests": ["silent", "x-soft", "soft", "medium", "loud", "x-loud", "20dB", "loud -10dB"]
		}
	}
};
