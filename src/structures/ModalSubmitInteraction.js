const { InteractionWebhook } = require("discord.js")
const ModalSubmitField = require("./ModalSubmitField")
const BaseMessageComponent = require("./BaseMessageComponent")
const Interaction = require("./Interaction");
const InteractionResponses = require('./interfaces/InteractionResponses');

class ModalSubmitInteraction extends Interaction {
  constructor(client, data) {
    super(client, data);

    this.type = data.type ?? null

    this.customId = data.data.custom_id;

    let modalFields = []
    for ( let i = 0; i < data.data.components.length; i++ ){
      const field = data.data.components[i].components[0]
      modalFields.push(field)
    }

    this.fields = modalFields.map(f => new ModalSubmitField(f)) ?? data.data.components?.map(c => BaseMessageComponent.create(c, this.client)) ?? [];

    this.webhook = new InteractionWebhook(this.client, this.applicationId, this.token);
  }

  getTextInputValue(customId) {
    const field = this.fields.find(field => field.customId === customId)
    return field.value ?? null;
  }

  getField(customId) {
    const field = this.fields.find(field => field.customId === customId)
    return field ?? null;
  }

  deferReply() {}
  reply() {}
  fetchReply() {}
  editReply() {}
  deleteReply() {}
  followUp() {}
}

InteractionResponses.applyToClass(ModalSubmitInteraction, ['deferUpdate', 'update', 'showModal']);

module.exports = ModalSubmitInteraction;