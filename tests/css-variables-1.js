export default {
	"title": "CSS Custom Properties for Cascading Variables Module Level 1",
	"links": {
		"tr": "css-variables-1",
		"dev": "css-variables-1"
	},
	"status": {
		"stability": "stable",
		"first-snapshot": 2018
	},
	"declaration": {
		"--*": {
			"links": {
				"tr": "#defining-variables",
				"dev": "#defining-variables"
			},
			"tests": ["--foo: 2px"]
		},
		"var(--*)": {
			"links": {
				"tr": "#using-variables",
				"dev": "#using-variables",
				"mdn": "--*"
			},
			"tests": [
				"width: var(--foo)", "width: var(--FOO)", "width: var(--foo, 4px)",
				"color: rgba(255, 255, 255, var(--foo, .2) )"
			]
		}
	}
};
