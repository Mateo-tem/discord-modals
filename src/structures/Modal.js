const BaseMessageComponent = require("./BaseMessageComponent");
const TextInputComponent = require("./TextInputComponent");
const { Util } = require("discord.js");
const { RangeError } = require("./errors");

/**
 * Represents a Modal Form to be shown in response to an Interaction.
*/

class Modal {

  /**
   * Represents a Modal Form to be shown in response to an Interaction.
   * @example
   * const modal = new Modal() // Modal constructor
   * .setCustomId('modal-customid')
   * .setTitle('Test of Discord-Modals!')
   * .addComponents(new TextInputComponent()); // Add a Text Input Component.
  */
 
  constructor(data = {}, client = null) {

    /**
     * The Text Input Components of the Modal.
     * @type {BaseMessageComponent}
    */

    this.components = data.components?.map(c => BaseMessageComponent.create(c, client)) ?? [];

    /**
     * The Custom Id of the Modal.
     * @type {String}
    */

    this.customId = data.custom_id ?? data.customId ?? null;

    /**
     * The Title of the Modal.
     * @type {String}
    */

    this.title = data.title ?? null;

  }

  /**
   * Adds the Components of the Modal.
   * @param {TextInputComponent[]} components The Text Input Components to add.
   * @returns {Modal} Modal.
  */

  addComponents(...components) {
    this.components.push(...components.flat(Infinity).map(c => BaseMessageComponent.create(c)));
    return this;
  }

  /**
   * Sets the Components of the Modal.
   * @param {TextInputComponent[]} components The Text Input Components to set.
   * @returns {Modal} Modal.
  */

  setComponents(...components) {
    this.spliceComponents(0, this.components.length, components);
    return this;
  }

  /**
   * Sets the Custom Id of the Modal.
   * @param {String} customId The Custom Id of the modal.
   * @returns {Modal} Modal.
  */

  setCustomId(customId) {
    this.customId = Util.verifyString(customId, RangeError, 'MODAL_CUSTOM_ID');
    return this;
  }

  /**
   * Removes, replaces, and inserts components in the modal.
   * @param {Number} index The index to start at.
   * @param {Number} deleteCount The number of components to remove.
   * @param {TextInputComponent[]} components The replacing components.
   * @returns {Modal} Modal.
  */

  spliceComponents(index, deleteCount, ...components) {
    this.components.splice(index, deleteCount, ...components.flat(Infinity).map(c => BaseMessageComponent.create(c)));
    return this;
  }

  /**
   * Sets the Title of the Modal.
   * @param {String} title The Title of the modal.
   * @returns {Modal} Modal.
  */
  
  setTitle(title) {
    this.title = Util.verifyString(title, RangeError, 'MODAL_TITLE');
    return this;
  }

  toJSON() {
    return {      
      title: this.title,
      custom_id: this.customId,
      components: this.components.map(c => c.toJSON()),
    };
  }
}

module.exports = Modal;