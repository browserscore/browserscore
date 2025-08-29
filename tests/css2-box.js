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
			link: '#border-shorthand-properties',
			tests: borderShorthands,
		},
		'border-color': {
			link: '#border-color-properties',
			tests: borderColors_1_4,
		},
		'border-style': {
			link: '#border-style-properties',
			tests: borderStyles_1_4,
		},
		'border-width': {
			link: '#border-width-properties',
			tests: borderWidths_1_4,
		},
		'border-top': {
			link: '#border-shorthand-properties',
			tests: borderShorthands,
		},
		'border-right': {
			link: '#border-shorthand-properties',
			tests: borderShorthands,
		},
		'border-bottom': {
			link: '#border-shorthand-properties',
			tests: borderShorthands,
		},
		'border-left': {
			link: '#border-shorthand-properties',
			tests: borderShorthands,
		},
		'border-top-color': {
			link: '#border-color-properties',
			tests: borderColors,
		},
		'border-right-color': {
			link: '#border-color-properties',
			tests: borderColors,
		},
		'border-bottom-color': {
			link: '#border-color-properties',
			tests: borderColors,
		},
		'border-left-color': {
			link: '#border-color-properties',
			tests: borderColors,
		},
		'border-top-style': {
			link: '#border-style-properties',
			tests: borderStyles,
		},
		'border-right-style': {
			link: '#border-style-properties',
			tests: borderStyles,
		},
		'border-bottom-style': {
			link: '#border-style-properties',
			tests: borderStyles,
		},
		'border-left-style': {
			link: '#border-style-properties',
			tests: borderStyles,
		},
		'border-top-width': {
			link: '#border-width-properties',
			tests: borderWidths,
		},
		'border-right-width': {
			link: '#border-width-properties',
			tests: borderWidths,
		},
		'border-bottom-width': {
			link: '#border-width-properties',
			tests: borderWidths,
		},
		'border-left-width': {
			link: '#border-width-properties',
			tests: borderWidths,
		},
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

		padding: {
			link: '#padding-properties',
			tests: padding_1_4,
		},
		'padding-top': {
			link: '#padding-properties',
			tests: padding,
		},
		'padding-right': {
			link: '#padding-properties',
			tests: padding,
		},
		'padding-bottom': {
			link: '#padding-properties',
			tests: padding,
		},
		'padding-left': {
			link: '#padding-properties',
			tests: padding,
		},
	},
};
