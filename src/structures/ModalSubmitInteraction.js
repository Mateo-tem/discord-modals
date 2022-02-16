const { InteractionWebhook } = require("discord.js")
const BaseMessageComponent = require("./BaseMessageComponent")
const Interaction = require("./Interaction");
const InteractionResponses = require('./interfaces/InteractionResponses');

class ModalSubmitInteraction extends Interaction {
  constructor(client, data) {
    super(client, data);

    this.type = data.type ?? null

    this.customId = data.data.custom_id;

    let modalComponents = []
    data.data.components.forEach(component => {
      modalComponents.push(component.components[0])
    });

    this.components = modalComponents ?? data.data.components?.map(c => BaseMessageComponent.create(c, this.client)) ?? [];

    this.webhook = new InteractionWebhook(this.client, this.applicationId, this.token);
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