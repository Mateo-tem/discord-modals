const BaseMessageComponent = require("./BaseMessageComponent")
const { TextInputStyles, MessageComponentTypes } = require('../util/Constants');
const { Util } = require("discord.js")

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

  setCustomId(customId) {
    this.customId = Util.verifyString(customId, RangeError, 'TEXT_INPUT_CUSTOM_ID');
    return this;
  }

  setLabel(label) {
    this.label = Util.verifyString(label, RangeError, 'TEXT_INPUT_LABEL');
    return this;
  }

  setRequired(required = true) {
    this.required = required;
    return this;
  }

  setMaxLength(maxLength) {
    this.maxLength = maxLength;
    return this;
  }

  setMinLength(minLength) {
    this.minLength = minLength;
    return this;
  }

  setPlaceholder(placeholder) {
    this.placeholder = Util.verifyString(placeholder, RangeError, 'TEXT_INPUT_PLACEHOLDER');
    return this;
  }

  setStyle(style) {
    this.style = TextInputComponent.resolveStyle(style);
    return this;
  }

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
          placeholder: this.placeholder,
          required: this.required,          
        }
      ]
      
    };
  }
  
  static resolveStyle(style) {
    return typeof style === 'string' ? style : TextInputStyles[style];
  }
}

module.exports = TextInputComponent;