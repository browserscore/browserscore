export default {
	"title": "CSS Transitions",
	"links": {
		"tr": "css-transitions-1",
		"dev": "css-transitions-1"
	},
	"status": {
		"stability": "stable"
	},
	"properties": {
		"transition-property": {
			"links": {
				"tr": "#transition-property-property",
				"dev": "#transition-property-property"
			},
			"tests": ["none", "all", "width", "width, height"]
		},
		"transition-duration": {
			"links": {
				"tr": "#transition-duration-property",
				"dev": "#transition-duration-property"
			},
			"tests": ["0s", "1s", "100ms"]
		},
		"transition-timing-function": {
			"links": {
				"tr": "#transition-timing-function-property",
				"dev": "#transition-timing-function-property"
			},
			"tests": [
				"ease", "linear", "ease-in", "ease-out", "ease-in-out",
				"cubic-bezier(.5, .5, .5, .5)",
				"cubic-bezier(.5, 1.5, .5, -2.5)",
				"step-start", "step-end", "steps(3, start)", "steps(5, end)"
			]
		},
		"transition-delay": {
			"links": {
				"tr": "#transition-delay-property",
				"dev": "#transition-delay-property"
			},
			"tests": ["1s", "-1s"]
		},
		"transition": {
			"links": {
				"tr": "#transition-shorthand-property",
				"dev": "#transition-shorthand-property"
			},
			"tests": "1s 2s width linear"
		}
	}
};
