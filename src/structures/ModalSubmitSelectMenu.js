'use strict';

/**
 * Represents a Select Menu of a Modal Submit Interaction.
 */

class ModalSubmitSelectMenu {
  constructor(data = {}) {
    /**
     * The type of the Select Menu Component.
     * @type {String}
     */

    this.type = "SELECT_MENU";

    this.setup(data);
  }

  setup(data) {
    /**
     * The Custom Id of the Select Menu Component.
     * @type {String}
     */

    this.customId = data.custom_id ?? null;

    /**
     * The Values of the Select Menu Component.
     * @type {Array<String>}
     */

    this.values = data.values ?? [];
  }
}

module.exports = ModalSubmitSelectMenu;
