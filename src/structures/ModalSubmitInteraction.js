const { InteractionWebhook } = require('discord.js');
const ModalSubmitField = require('./ModalSubmitField');
const BaseMessageComponent = require('./BaseMessageComponent');
const Interaction = require('./Interaction');
const InteractionResponses = require('./interfaces/InteractionResponses');
const { InteractionTypes } = require('../util/Constants');

class ModalSubmitInteraction extends Interaction {
  constructor(client, data) {
    super(client, data);

    this.type = InteractionTypes[data.type] ?? null;

    this.webhook = new InteractionWebhook(
      this.client,
      this.applicationId,
      this.token
    );

    this.customId = data.data.custom_id;

    let modalFields = [];
    for (let i = 0; i < data.data.components.length; i++) {
      const field = data.data.components[i].components[0];
      modalFields.push(field);
    }

    this.fields = modalFields.map((f) => new ModalSubmitField(f)) ?? data.data.components?.map((c) => BaseMessageComponent.create(c, this.client)) ?? [];
  }

  
  /**
   * Gets a Text Input Component value.
   * @param {string} customId The Custom Id of a Text Input Component.
   * @returns {string} The Value of a Text Input Component.
  */

  getTextInputValue(customId) {
    const field = this.fields.find((field) => field.customId === customId);

    if(field === undefined){
      return null;
    } else {
      return field.value;
    }

  }

  /**
   * Gets a Modal Submit Field.
   * @param {string} customId The Custom Id of a Text Input Component.
   * @returns {ModalSubmitField} Field of a Modal Submit Interaction.
  */

  getField(customId) {
    const field = this.fields.find((field) => field.customId === customId);

    if(field === undefined){
      return null;
    } else {
      return field;
    }

  }

  deferReply() {}
  reply() {}
  fetchReply() {}
  editReply() {}
  deleteReply() {}
  followUp() {}
}

InteractionResponses.applyToClass(ModalSubmitInteraction, [
  "deferUpdate",
  "update",
  "showModal",
]);

module.exports = ModalSubmitInteraction;
