const template = `
<label class="filter">
	<span class="label">{{ label }}:</span>
	<select id="filter" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
		<option v-if="withEmpty !== undefined" :value="''">{{ withEmpty === true || withEmpty === '' ? 'Any' : empty }}</option>
		<option v-for="label, value in valuesMap" :value="value">{{ label }}</option>
	</select>
</label>
`;

export default {
	props: {
		modelValue: {
			type: [String, Number, Boolean],
		},

		/**
		 * Two ways to provide values and labels:
		 * 1. Dictionary of values to labels
		 * 2. Array of values (without labels) and a function to get the label
		 */
		values: {
			type: [Array, Object],
			required: true,
		},

		/**
		 * Function to get the label for a value from the entries in this.values
		 * getLabel() can be useful even when using an object, to transform the value into a label
		 */
		getLabel: {
			type: Function,
		},

		type: {
			type: String,
		},

		multiple: {
			type: Boolean,
		},

		label: {
			type: String,
		},

		withEmpty: {
			type: String,
		},
	},

	emits: ["update:modelValue"],

	data () {
		return {
			value: this.modelValue,
		};
	},

	template,

	computed: {
		groupedItems () {
			return groupBy(this.items, this.groupBy, { sortValues: this.sortValues, sortKeys: this.sortKeys });
		},

		valuesList () {
			return Array.isArray(this.values) ? this.values : Object.keys(this.values);
		},

		valuesMap () {
			if (!Array.isArray(this.values) && !this.getLabel) {
				return this.values;
			}

			let entries;
			if (Array.isArray(this.values)) {
				entries = this.values.map((value, index) => ([value, this.getLabel ? this.getLabel(value, index) : value ]));
			}
			else if (this.getLabel) {
				// values is an object, but we have a getLabel function to transform entries into labels
				entries = Object.entries(this.values).map(([value, label]) => ([value, this.getLabel(value, label)]));
			}

			return Object.fromEntries(entries);
		},
	},
};
