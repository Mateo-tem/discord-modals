const BaseMessageComponent = require('./BaseMessageComponent');

/**
 * Represents a Field of a Modal Submit Interaction.
 * @extends BaseMessageComponent
*/

class ModalSubmitField extends BaseMessageComponent {
  constructor(data = {}) {
    super({ type: 'TEXT_INPUT' });

    this.setup(data);
  }

  setup(data) {

    /**
     * The Custom Id of the Modal Submit Field.
     * @type {String}
    */

    this.customId = data.custom_id ?? null;

    /**
     * The Value of the Modal Submit Field.
     * @type {String}
    */

    this.value = data.value ?? null;

  }
}

module.exports = ModalSubmitField;
