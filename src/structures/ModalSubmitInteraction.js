const { BaseMessageComponent } = require("discord.js")
const { Interaction } = require("discord.js");
const InteractionResponses = require('./interfaces/InteractionResponses');

class ModalSubmitInteraction extends Interaction {
  constructor(client, data) {
    super(client, data);

    this.customId = data.data.custom_id;

    this.components = data.data.components?.map(c => BaseMessageComponent.create(c, this.client)) ?? [];
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