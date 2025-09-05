export default {
	id: 'css-grid-1',
	title: 'CSS Grid Layout Module Level 1',
	link: 'css-grid-1',
	mdn: 'Glossary/Grid',
	status: 'stable',
	properties: {
		display: {
			link: '#grid-containers',
			tests: ['grid', 'inline-grid'],
		},
		'grid-template-columns': {
			link: '#track-sizing',
			tests: [
				'none',
				'auto',
				'100px',
				'1fr',
				'100px 1fr auto',
				'repeat(2, 100px 1fr)',
				'repeat(4, 10px [col-start] 250px [col-end]) 10px',
				'100px 1fr max-content minmax(min-content, 1fr)',
				'repeat(auto-fill, minmax(25ch, 1fr))',
				'10px [col-start] 250px [col-end]',
				'[first nav-start] 150px [main-start] 1fr [last]',
				'10px [col-start] 250px [col-end] 10px [col-start] 250px [col-end] 10px',
				'[a] auto [b] minmax(min-content, 1fr) [b c d] repeat(2, [e] 40px) repeat(5, auto)',
			],
		},
		'grid-template-rows': {
			link: '#track-sizing',
			tests: [
				'none',
				'auto',
				'100px',
				'1fr',
				'100px 1fr auto',
				'repeat(2, 100px 1fr)',
				'100px 1fr max-content minmax(min-content, 1fr)',
				'10px [row-start] 250px [row-end]',
				'[first header-start] 50px [main-start] 1fr [footer-start] 50px [last]',
			],
		},
		'grid-template-areas': {
			link: '#grid-template-areas-property',
			tests: ['none', "'articles'", "'head head'", "'head head' 'nav main' 'foot ....'"],
		},
		'grid-template': {
			link: '#explicit-grid-shorthand',
			tests: [
				'none',
				'auto 1fr auto / auto 1fr',
				"[header-top] 'a   a   a' [header-bottom] [main-top] 'b   b   b' 1fr [main-bottom] / auto 1fr auto",
			],
		},
		'grid-auto-columns': {
			link: '#auto-tracks',
			tests: [
				'auto',
				'1fr',
				'100px',
				'max-content',
				'minmax(min-content, 1fr)',
				'min-content max-content auto',
				'100px 150px 390px',
				'100px minmax(100px, auto) 10% 0.5fr fit-content(400px)',
			],
		},
		'grid-auto-rows': {
			link: '#auto-tracks',
			tests: [
				'auto',
				'1fr',
				'100px',
				'100px 30%',
				'100px 30% 1em',
				'min-content',
				'minmax(min-content, 1fr)',
				'min-content max-content auto',
				'100px minmax(100px, auto) 10% 0.5fr fit-content(400px)',
			],
		},
		'grid-auto-flow': {
			link: '#grid-auto-flow-property',
			tests: ['row', 'column', 'row dense', 'column dense'],
		},
		grid: {
			link: '#grid-shorthand',
			tests: [
				'auto-flow 1fr / 100px',
				'none / auto-flow 1fr',
				'auto-flow / auto 1fr',
				'repeat(auto-fill, 5em) / auto-flow 1fr',
				' auto-flow 1fr / repeat(auto-fill, 5em)',
				"'H	H ' 'A	B ' 'F	F ' 30px / auto 1fr",
			],
		},
		'grid-row-start': {
			link: '#line-placement',
			tests: ['auto', '4', 'C', 'C 2', 'span C', 'span 1'],
		},
		'grid-column-start': {
			link: '#line-placement',
			tests: ['auto', '4', 'C', 'C 2', 'span C', 'span 1'],
		},
		'grid-row-end': {
			link: '#line-placement',
			tests: ['auto', '4', 'C', 'C 2', 'span C', 'span 1'],
		},
		'grid-column-end': {
			link: '#line-placement',
			tests: ['auto', '4', 'C', 'C 2', 'span C', 'span 1'],
		},
		'grid-column': {
			link: '#placement-shorthands',
			tests: ['auto', '1', '-1', '1 / 1', '1 / -1', 'auto / auto', '2 / span 2'],
		},
		'grid-row': {
			link: '#placement-shorthands',
			tests: ['auto', '1', '-1', '1 / 1', '1 / -1', 'auto / auto', '2 / span 2'],
		},
		'grid-area': {
			link: '#placement-shorthands',
			tests: ['1 / 1', '1 / span 1', 'span 1 / 10 / -1'],
		},
		'grid-column-gap': {
			link: '#gutters',
			tests: ['0', '1em'],
		},
		'grid-row-gap': {
			link: '#gutters',
			tests: ['0', '1em'],
		},
		'grid-gap': {
			link: '#gutters',
			tests: ['0 0', '0 1em', '1em', '1em 1em'],
		},
	},
};
