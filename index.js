const { Client } = require('discord.js');
const ModalSubmitInteraction = require("./src/structures/ModalSubmitInteraction");
const showModal = require('./src/structures/ShowModal');

module.exports = (client) => {
    if (!client) throw new Error('[discord-modals] NO_CLIENT_PROVIDED: No client was provided. Please provide a client')
    if (!(client instanceof Client)) throw new Error('[discord-modals] INVALID_CLIENT: The provided client is invalid.');

    client.ws.on("INTERACTION_CREATE", (data) => {
      
      if (!data.type) return;

      switch (data.type) {
        case 5:
          client.emit("modalSubmit", new ModalSubmitInteraction(client, data));
          break;

        default:
          client.emit("debug", `Unknown interaction component type received: ${data.data.component_type}`);
          break;
      }
    });
}

module.exports.Modal = require("./src/structures/Modal")
module.exports.TextInputComponent = require("./src/structures/TextInputComponent")
module.exports.ModalSubmitInteraction = require("./src/structures/ModalSubmitInteraction")
module.exports.showModal = require("./src/structures/ShowModal")
module.exports.Interaction = require("./src/structures/Interaction")
module.exports.InteractionResponses = require("./src/structures/interfaces/InteractionResponses")
module.exports.Constants = require("./src/Constants")