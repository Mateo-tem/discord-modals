const BaseMessageComponent = require('./BaseMessageComponent');
const { TextInputStyles, MessageComponentTypes } = require('../util/Constants');
const { Util } = require('discord.js');
const { RangeError } = require('./errors');

class TextInputComponent extends BaseMessageComponent {
  constructor(data = {}) {
    super({ type: 'TEXT_INPUT' });

    this.setup(data);
  }

  setup(data) {

    this.customId = data.custom_id ?? data.customId ?? null;

    this.label = data.label ?? null;

    this.maxLength = data.max_length ?? data.maxLength ?? null;

    this.minLength = data.min_length ?? data.minLength ?? null;

    this.placeholder = data.placeholder ?? null;

    this.required = data.required ?? false;

    this.style = data.style ? TextInputComponent.resolveStyle(data.style) : null;

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
   * @param {String} style 'SHORT' or 'LONG'.
   * @returns {TextInputComponent} A Text Input Component.
  */

  setStyle(style) {
    this.style = TextInputComponent.resolveStyle(style);
    return this;
  }

  /**
   * Sets a prefilled value of a Text Input Component.
   * @param {String} value The value of the Text Input Component.
   * @returns {TextInputComponent} A Text Input Component.
  */

  setValue(value) {
    this.value = Util.verifyString(value, RangeError, 'TEXT_INPUT_VALUE');
    return this;
  }  

  toJSON() {
    return {
      type: 1,
      components: [
        {
          type: MessageComponentTypes[this.type],
          custom_id: this.customId,
          label: this.label,
          style: TextInputStyles[this.style],          
          min_length: this.minLength,
          max_length: this.maxLength,
          required: this.required,   
          value: this.value,
          placeholder: this.placeholder,                 
        }
      ]
      
    };
  }
  
  static resolveStyle(style) {
    return typeof style === 'string' ? style : TextInputStyles[style];
  }
}

module.exports = TextInputComponent;