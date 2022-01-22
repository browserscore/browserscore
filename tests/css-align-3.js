export default {
	"title": "CSS Box Alignment Module Level 3",
	"links": {
		"tr": "css-align-3",
		"dev": "css-align-3"
	},
	"status": {
		"stability": "stable"
	},
	"properties": {
		"align-self": {
			"links": {
				"tr": "#align-self-property",
				"dev": "#align-self-property"
			},
			"tests": ["auto", "normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start"]
		},
		"align-items": {
			"links": {
				"tr": "#align-items-property",
				"dev": "#align-items-property"
			},
			"tests": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start"]
		},
		"align-content": {
			"links": {
				"tr": "#align-justify-content",
				"dev": "#align-justify-content"
			},
			"tests": ["normal", "baseline", "first baseline", "last baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "unsafe start ", "safe start"]
		},
		"justify-self": {
			"links": {
				"tr": "#justify-self-property",
				"dev": "#justify-self-property"
			},
			"tests": ["auto", "normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start", "left", "right", "safe right"]
		},
		"justify-items": {
			"links": {
				"tr": "#justify-items-property",
				"dev": "#justify-items-property"
			},
			"tests": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start", "left", "right", "safe right", "legacy", "legacy left", "legacy right", "legacy center"]
		},
		"justify-content": {
			"links": {
				"tr": "#align-justify-content",
				"dev": "#align-justify-content"
			},
			"tests": ["normal", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "unsafe start ", "safe start", "left", "right", "safe right"]
		},
		"place-content": {
			"links": {
				"tr": "#place-content",
				"dev": "#place-content"
			},
			"tests": ["normal", "baseline", "first baseline", "last baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "unsafe start ", "safe start", "normal normal", "baseline normal", "first baseline normal", "space-between normal", "center normal", "unsafe start normal", "normal stretch", "baseline stretch", "first baseline stretch", "space-between stretch", "center stretch", "unsafe start stretch", "normal safe right", "baseline safe right", "first baseline safe right", "space-between safe right", "center safe right", "unsafe start safe right"]
		},
		"place-items": {
			"links": {
				"tr": "#place-items-property",
				"dev": "#place-items-property"
			},
			"tests": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "unsafe start ", "safe start", "normal normal", "stretch normal", "baseline normal", "first baseline normal", "self-start normal", "unsafe start normal", "normal stretch", "stretch stretch", "baseline stretch", "first baseline stretch", "self-start stretch", "unsafe start stretch", "normal last baseline", "stretch last baseline", "baseline last baseline", "first baseline last baseline", "self-start last baseline", "unsafe start last baseline", "normal legacy left", "stretch legacy left", "baseline legacy left", "first baseline legacy left", "self-start legacy left", "unsafe start legacy left"]
		},
		"gap": {
			"links": {
				"tr": "#gap-shorthand",
				"dev": "#gap-shorthand"
			},
			"tests": ["0 0", "0 1em", "1em", "1em 1em"]
		},
		"column-gap": {
			"links": {
				"tr": "#column-row-gap",
				"dev": "#column-row-gap"
			},
			"tests": ["0", "1em", "normal"]
		},
		"row-gap": {
			"links": {
				"tr": "#column-row-gap",
				"dev": "#column-row-gap"
			},
			"tests": ["0", "1em"]
		}
	}
};
