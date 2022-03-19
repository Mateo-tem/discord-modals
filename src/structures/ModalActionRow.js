const TextInputComponent = require("./TextInputComponent");
const { MessageComponentTypes, TextInputStyles } = require("../util/Constants");

/**
 * Represents a Modal Action Row, that contains a Text Input Component.
 */

class ModalActionRow {
  constructor() {

    /**
     * The type of the Modal Action Row.
     */

    this.type = MessageComponentTypes.ACTION_ROW;

    /**
     * The Text Input Component of this action row
    */

    this.components = [];
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
