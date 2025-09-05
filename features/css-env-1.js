export default {
	id: 'css-env-1',
	title: 'Environment Variables Level 1',
	links: {
		dev: 'css-env-1',
	},
	status: 'experimental',
	values: {
		properties: ['width', 'padding'],
		'env()': {
			links: {
				dev: '#env-function',
			},
			tests: [
				'env(safe-area-inset-top)',
				'env(safe-area-inset-top, 12px)',
				'env(safe-area-inset-right)',
				'env(safe-area-inset-right, 12px)',
				'env(safe-area-inset-bottom)',
				'env(safe-area-inset-bottom, 12px)',
				'env(safe-area-inset-left)',
				'env(safe-area-inset-left, 12px)',
			],
		},
	},
};
