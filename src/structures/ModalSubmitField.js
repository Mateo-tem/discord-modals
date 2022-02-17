const BaseMessageComponent = require('./BaseMessageComponent');

class ModalSubmitField extends BaseMessageComponent {
  constructor(data = {}) {
    super({ type: 'TEXT_INPUT' });

    this.setup(data);
  }

  setup(data) {
    this.customId = data.custom_id ?? null;

    this.value = data.value ?? null;
  }
}

module.exports = ModalSubmitField;
