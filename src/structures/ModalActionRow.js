'use strict';

const BaseMessageComponent = require('./BaseMessageComponent');
const { MessageComponentTypes, TextInputStyles } = require('../util/Constants');

/**
 * Represents a Modal Action Row, that contains a Text Input Component.
 */

class ModalActionRow {
  constructor(data = {}) {
    /**
     * The type of the Modal Action Row.
     */

    this.type = 'ACTION_ROW';

    /**
     * The Text Input Component of this action row
     */

    this.components = data.components?.map(component => BaseMessageComponent.create(component)) ?? [];
  }

  /**
   * Adds a Text Input Component.
   * @param {TextInputComponent} component
   */

  addComponent(component) {
    this.components.push(component);
    return this;
  }

  componentToJSON(component) {
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

  toJSON() {
    return {
      type: MessageComponentTypes.ACTION_ROW,
      components: this.components.map(c => this.componentToJSON(c)),
    };
  }
}

module.exports = ModalActionRow;
