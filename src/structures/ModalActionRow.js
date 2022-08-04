'use strict';

const BaseMessageComponent = require('./BaseMessageComponent');
const { MessageComponentTypes, TextInputStyles } = require('../util/Constants');

/**
 * Represents a Modal Action Row, containing a Text Input or a Select Menu Component.
 */

class ModalActionRow {
	constructor(data = {}) {
		/**
		 * The type of the Modal Action Row.
		 */

		this.type = 'ACTION_ROW';

		/**
		 * The components of this action row
		 */

		this.components = data.components?.map((component) => BaseMessageComponent.create(component)) ?? [];
	}

	/**
	 * Adds a Modal Component (Text Input or Select Menu).
	 * @param {TextInputComponent} component
	 */

	addComponent(component) {
		this.components.push(component);
		return this;
	}

	componentToJSON(component) {
		if (component.type === 'TEXT_INPUT') {
			return {
				type: MessageComponentTypes[component.type],
				custom_id: component.customId,
				label: component.label,
				style: TextInputStyles[component.style],
				min_length: component.minLength,
				max_length: component.maxLength,
				required: component.required,
				value: component.value,
				placeholder: component.placeholder,
			};
		}
		if (component.type === 'SELECT_MENU') {
			return {
				type: MessageComponentTypes[component.type],
				custom_id: component.customId,
				placeholder: component.placeholder,
				min_values: component.minValues,
				max_values: component.maxValues,
				options: component.options,
				disabled: component.disabled,
			};
		}
	}

	toJSON() {
		return {
			type: MessageComponentTypes.ACTION_ROW,
			components: this.components.map((c) => this.componentToJSON(c)),
		};
	}
}

module.exports = ModalActionRow;
