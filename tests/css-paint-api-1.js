export default {
	"title": "CSS Painting API Level 1",
	"links": {
		"tr": "css-paint-api-1",
		"dev": "css-paint-api-1",
		"devtype": "houdini"
	},
	"status": {
		"stability": "experimental"
	},
	"values": {
		"properties": [
			"background-image",
			"list-style-image",
			"border-image",
			"cursor",
			"content"
		],
		"paint()": {
			"links": {
				"tr": "#paint-notation",
				"dev": "#paint-notation"
			},
			"tests": [
				"paint(company-logo)", "paint(chat-bubble, blue)", "paint(failing-argument-syntax, 1px, 2px)", "paint(arc, purple, 0.4turn, 0.8turn, 40px, 15px)"
			]
		}
	}
};
