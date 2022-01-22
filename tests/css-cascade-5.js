export default {
	"title": "CSS Cascading and Inheritance Level 5",
	"links": {
		"tr": "css-cascade-5",
		"dev": "css-cascade-5"
	},
	"status": {
		"stability": "experimental"
	},
	"values": {
		"properties": [
			"color",
			"font-weight",
			"background-image",
			"all"
		],
		"revert-layer": {
			"links": {
				"tr": "#revert-layer",
				"dev": "#revert-layer"
			},
			"tests": "revert-layer"
		}
	},
	"properties": {
		"all": {
			"links": {
				"tr": "#revert-layer",
				"dev": "#revert-layer"
			},
			"tests": "revert-layer"
		}
	},
	"@rules": {
		"@layer": {
			"links": {
				"tr": "#at-layer",
				"dev": "#at-layer"
			},
			"tests": [
				"@layer framework {\n  h1, h2 { color: maroon; background: white; }\n}",
				"@layer framework {\n  h1, h2 { color: maroon; background: white; }\n  \n  @media (prefers-color-scheme: dark) {\n    h1, h2 { color: red; background: black; }\n  }\n}",
				"@layer framework;",
				"@layer default, framework;"
			]
		}
	}
};
