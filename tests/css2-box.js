import { repeat, combine } from '../src/combine.js';

const length = '1px';
const percentage = '1%';
const margin = [length, percentage, 'auto'];
const margin_1_4 = repeat(margin, {min: 1, max: 4});

const padding = [length, percentage];
const padding_1_4 = repeat(padding, {min: 1, max: 4});

const borderColors = ['red', 'transparent'];
const borderStyles = ['solid', 'none', 'hidden', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'];
const borderWidths = [length, 'thin', 'medium', 'thick'];

const borderColors_1_4 = repeat(borderColors, {min: 1, max: 4});
const borderStyles_1_4 = repeat(borderStyles.slice(0, 2), {min: 1, max: 4});
const borderWidths_1_4 = repeat(borderWidths.slice(0, 2), {min: 1, max: 4});

const borderShorthands = combine([borderWidths[0], borderStyles[0], borderColors[0]], { combinator: '||' });

export default {
	id: 'css2-box',
	title: 'CSS 2 Box Model',
	links: {
		tr: 'CSS22/box.html',
		dev: 'css2/',
	},
	status: 'stable',
	version: 2.2,
	properties: {
		border: {
			title: '`border` properties',
			children: {
				border: {
					link: '#border-shorthand-properties',
					children: {
						'border': {
							tests: borderShorthands,
						},
						'border-top': {
							tests: borderShorthands,
						},
						'border-right': {
							tests: borderShorthands,
						},
						'border-bottom': {
							tests: borderShorthands,
						},
						'border-left': {
							tests: borderShorthands,
						},
					},
				},
				'border-color': {
					link: '#border-color-properties',
					children: {
						'border-color': {
							tests: borderColors_1_4,
						},
						'border-top-color': {
							tests: borderColors,
						},
						'border-right-color': {
							tests: borderColors,
						},
						'border-bottom-color': {
							tests: borderColors,
						},
						'border-left-color': {
							tests: borderColors,
						},
					}
				},
				'border-style': {
					link: '#border-style-properties',
					children: {
						'border-style': {
							tests: borderStyles_1_4,
						},
						'border-top-style': {
							tests: borderStyles,
						},
						'border-right-style': {
							tests: borderStyles,
						},
						'border-bottom-style': {
							tests: borderStyles,
						},
						'border-left-style': {
							tests: borderStyles,
						},
					}
				},
				'border-width': {
					link: '#border-width-properties',
					children: {
						'border-width': {
							tests: borderWidths_1_4,
						},
						'border-top-width': {
							tests: borderWidths,
						},
						'border-right-width': {
							tests: borderWidths,
						},
						'border-bottom-width': {
							tests: borderWidths,
						},
						'border-left-width': {
							tests: borderWidths,
						},
					},
				},
			},
		},

		margin: {
			children: {
				margin: {
					link: '#propdef-margin',
					tests: margin_1_4,
				},
				'margin-right': {
					link: '#propdef-margin-right',
					tests: margin,
				},
				'margin-left': {
					link: '#propdef-margin-left',
					tests: margin,
				},
				'margin-top': {
					link: '#propdef-margin-top',
					tests: margin,
				},
				'margin-bottom': {
					link: '#propdef-margin-bottom',
					tests: margin,
				},
			},
		},

		padding: {
			link: '#padding-properties',
			children: {
				padding: {
					tests: padding_1_4,
				},
				'padding-top': {
					tests: padding,
				},
				'padding-right': {
					tests: padding,
				},
				'padding-bottom': {
					tests: padding,
				},
				'padding-left': {
					tests: padding,
				},
			},
		}
	},
};
