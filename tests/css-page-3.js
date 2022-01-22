export default {
	"title": "Paged Media Module Level 3",
	"links": {
		"tr": "css-page-3",
		"dev": "css-page-3"
	},
	"status": {
		"stability": "experimental"
	},
	"properties": {
		"page": {
			"links": {
				"tr": "#using-named-pages",
				"dev": "#using-named-pagest"
			},
			"tests": ["auto", "customName"]
		},
	},
	"@rules": {
		"@page": {
			"links": {
				"tr": "#at-page-rule",
				"dev": "#at-page-rule"
			},
			"tests": [
				"@page :blank { margin: 2cm }",
				"@page customName { margin: 2cm }"
			]
		}
	},
	"descriptors": {
		"@page/size": {
			"links": {
				"tr": "#page-size-prop",
				"dev": "#page-size-prop"
			},
			"tests": [
				"4in 6in", "4em 6em",
				"auto",
				"landscape",
				"portrait",
				"a3", "a4", "a5", "b4", "b5", "jis-b4", "jis-b5", "ledger", "legal", "letter",
				"a3 landscape",
				"a3 portrait",
				"landscape a3",
				"portrait a3"
			]
		},
		"@page/page-orientation": {
			"links": {
				"tr": "#page-orientation-prop",
				"dev": "#page-orientation-prop"
			},
			"tests": [
				"upright", "rotate-left", "rotate-right"
			]
		},
		"@page/marks": {
			"links": {
				"tr": "#marks",
				"dev": "#marks"
			},
			"tests": [
				"none", "crop", "cross", "crop cross"
			]
		},
		"@page/bleed": {
			"links": {
				"tr": "#bleed",
				"dev": "#bleed"
			},
			"tests": [
				"auto", "6pt"
			]
		}
	}
};
