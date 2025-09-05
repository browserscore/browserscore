import { repeat, combine } from '../util.js';

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
			isGroup: true,
			children: {
				border: {
					link: '#border-shorthand-properties',
					title: '`border` and `border-<side>` shorthands',
					values: borderShorthands,
					children: ['border', 'border-top', 'border-right', 'border-bottom', 'border-left'],
				},
				'border-color': {
					link: '#border-color-properties',
					title: '`border-color` and `border-<side>-color`',
					isGroup: true,
					values: borderColors,
					children: [{id: 'border-color', values: borderColors_1_4}, 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'],
				},
				'border-style': {
					link: '#border-style-properties',
					title: '`border-style` and `border-<side>-style`',
					values: borderStyles,
					children: [{id: 'border-style', values: borderStyles_1_4}, 'border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style'],
				},
				'border-width': {
					link: '#border-width-properties',
					title: '`border-width` and `border-<side>-width`',
					values: borderWidths,
					children: [{id: 'border-width', values: borderWidths_1_4}, 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'],
				},
			},
		},

		margin: {
			title: '`margin` and `margin-<side>`',
			isGroup: true,
			values: margin,
			children: {
				margin: {
					link: '#propdef-margin',
					values: margin_1_4,
				},
				'margin-right': {
					link: '#propdef-margin-right',
				},
				'margin-left': {
					link: '#propdef-margin-left',
				},
				'margin-top': {
					link: '#propdef-margin-top',
				},
				'margin-bottom': {
					link: '#propdef-margin-bottom',
				},
			},
		},

		padding: {
			link: '#padding-properties',
			title: '`padding` and `padding-<side>`',
			isGroup: true,
			values: padding,
			children: [{id: 'padding', values: padding_1_4}, 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
		}
	},
};
