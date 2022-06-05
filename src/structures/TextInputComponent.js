'use strict';

const Util = require('../util/Util');
const BaseMessageComponent = require('./BaseMessageComponent');
const ModalActionRow = require('./ModalActionRow');
const { RangeError } = require('./errors');
const { TextInputStyles } = require('../util/Constants');

/**
 * Represents a Text Input Component of a Modal.
 * @extends BaseMessageComponent
 */

class TextInputComponent extends BaseMessageComponent {
  /**
   * Represents a Text Input Component of a Modal.
   * @example
   * new TextInputComponent()
   * .setCustomId('textinput-customid')
   * .setLabel('Some text Here')
   * .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
   * .setMinLength(4)
   * .setMaxLength(10)
   * .setPlaceholder('Write a text here')
   * .setRequired(true) // If it's required or not
   */

  constructor(data = {}) {
    super({ type: 'TEXT_INPUT' });

    this.setup(data);
  }

  setup(data) {
    /**
     * The Custom Id of the Text Input Component.
     * @type {String}
     */

    this.customId = data.custom_id ?? data.customId ?? null;

    /**
     * The Label of the Text Input Component.
     * @type {String}
     */

    this.label = data.label ?? null;

    /**
     * The Maximum Length of the Text Input Component.
     * @type {Number}
     */

    this.maxLength = data.max_length ?? data.maxLength ?? null;

    /**
     * The Minimum Length of the Text Input Component.
     * @type {Number}
     */

    this.minLength = data.min_length ?? data.minLength ?? null;

    /**
     * The Placeholder of the Text Input Component.
     * @type {String}
     */

    this.placeholder = data.placeholder ?? null;

    /**
     * If the Text Input Component is required.
     * @type {Boolean}
     */

    this.required = data.required ?? false;

    /**
     * The Style of the Text Input Component.
     * @type {String}
     */

    this.style = data.style ? TextInputComponent.resolveStyle(data.style) : null;

    /**
     * The Default/Pre-filled value of the Text Input Component.
     * @type {String}
     */

    this.value = data.value ?? null;
  }

  /**
   * Sets the Custom Id of a Text Input Component.
   * @param {String} customId The Custom Id of a Text Input Component.
   * @returns {TextInputComponent} A Text Input Component.
   */

  setCustomId(customId) {
    this.customId = Util.verifyString(customId, RangeError, 'TEXT_INPUT_CUSTOM_ID');
    return this;
  }

  /**
   * Sets the Label of a Text Input Component.
   * @param {String} label The Label of a Text Input Component.
   * @returns {TextInputComponent} A Text Input Component.
   */

  setLabel(label) {
    this.label = Util.verifyString(label, RangeError, 'TEXT_INPUT_LABEL');
    return this;
  }

  /**
   * Sets a Boolean if a Text Input Component is required. Default: false
   * @param {Boolean} required
   * @returns {TextInputComponent} A Text Input Component.
   */

  setRequired(required = true) {
    this.required = required;
    return this;
  }

  /**
   * Sets the Maximum Length of a Text Input Component.
   * @param {Number} maxLength The maximum length.
   * @returns {TextInputComponent} A Text Input Component.
   */

  setMaxLength(maxLength) {
    this.maxLength = maxLength;
    return this;
  }

  /**
   * Sets the Minimum Length of a Text Input Component.
   * @param {Number} minLength The minimum length.
   * @returns {TextInputComponent} A Text Input Component.
   */

  setMinLength(minLength) {
    this.minLength = minLength;
    return this;
  }

  /**
   * Sets the Placeholder of a Text Input Component.
   * @param {String} placeholder The placeholder of the Text Input Component.
   * @returns {TextInputComponent} A Text Input Component.
   */

  setPlaceholder(placeholder) {
    this.placeholder = Util.verifyString(placeholder, RangeError, 'TEXT_INPUT_PLACEHOLDER');
    return this;
  }

  /**
   * Sets the Style of a Text Input Component.
   * @param {String} style The style of the Text Input Component
   * @returns {TextInputComponent} A Text Input Component.
   */

  setStyle(style) {
    this.style = TextInputComponent.resolveStyle(style);
    return this;
  }

  /**
   * Sets a Default/Pre-filled Value of the Text Input Component.
   * @param {String} value The Default/Pre-filled value of the Text Input Component.
   * @returns {TextInputComponent} A Text Input Component.
   */

  setDefaultValue(value) {
    this.value = Util.verifyString(value, RangeError, 'TEXT_INPUT_VALUE');
    return this;
  }

  toJSON() {
    const actionRow = new ModalActionRow().addComponent(this);

    return actionRow.toJSON();
  }

  static resolveStyle(style) {
    return typeof style === 'string' ? style : TextInputStyles[style];
  }
}

module.exports = TextInputComponent;
