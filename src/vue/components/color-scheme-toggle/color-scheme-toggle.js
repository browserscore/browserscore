const template = `
	<input ref="checkbox" type="checkbox" class="icon-before color-scheme-toggle" :title="'Toggle color scheme to ' + systemOpposite" v-model="checked" @input="checkedChanged" />
`;

/**
 * This seemingly simple component needs to account for several transitions:
 * - The user toggles the checkbox: store the inverse of the system color scheme
 * - The system color scheme changes
 * - localStorage changes (e.g. the user toggles the checkbox in another tab)
 */
let prefersColorScheme = matchMedia('(prefers-color-scheme: dark)');

function updatePage (colorScheme) {
	document.documentElement.style.colorScheme = colorScheme;
}

function invert (colorScheme) {
	return colorScheme === 'dark' ? 'light' : 'dark';
}

let env = {
	get system () {
		return prefersColorScheme.matches ? 'dark' : 'light';
	},

	get stored () {
		return localStorage.getItem('color-scheme-toggle');
	},

	get isInverted () {
		return this.stored && this.stored !== this.system;
	},
}

let { stored, system } = env;

if (stored === system) {
	stored = '';
	localStorage.removeItem('color-scheme-toggle');
}
else if (stored) {
	// Prevent flashing
	updatePage(env.isInverted ? invert(env.system) : '');
}

export default {
	template,
	data() {
		return {
			stored: env.stored,
			system: env.system,
			checked: env.isInverted,
		};
	},

	created () {
		prefersColorScheme.addEventListener('change', this);
		window.addEventListener('storage', this);
	},

	computed: {
		systemOpposite () {
			return invert(this.system);
		},
	},

	methods: {
		async handleEvent (evt) {
			let resume;

			window.removeEventListener('storage', this);

			if (evt.type === 'storage') {
				if (evt.key === 'color-scheme-toggle') {
					resume = this.storageChanged();
				}
			}
			else if (evt.type === 'change') {
				this.system = env.system;
				resume = this.systemChanged();
			}

			window.addEventListener('storage', this);
		},

		async persist (stored) {
			if (typeof stored !== 'string') {
				if (typeof stored === 'boolean') {
					// Checked
					stored = stored ? this.systemOpposite : '';
				}
				else {
					stored ??= this.checked ? this.systemOpposite : '';
				}

				this.stored = stored;
			}

			if (stored) {
				localStorage.setItem('color-scheme-toggle', stored);
			}
			else {
				localStorage.removeItem('color-scheme-toggle');
			}
		},

		systemChanged () {
			let system = env.system;
			this.system = system;
			let checked = this.stored && this.stored !== system;
			this.checked = checked;

			this.persist(checked);
		},

		storageChanged () {
			let stored = env.stored;
			this.stored = stored;
			this.checked = stored && stored !== this.system;
		},

		checkedChanged (evt) {
			window.removeEventListener('storage', this);

			let checked = evt.target.checked;

			this.persist(checked);

			window.addEventListener('storage', this);
		},
	},

	watch: {
		checked () {
			updatePage(this.checked ? this.systemOpposite : '');
		}
	},

};
