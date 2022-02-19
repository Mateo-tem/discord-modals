const { Client, version } = require('discord.js');
const ModalSubmitInteraction = require("./src/structures/ModalSubmitInteraction");

module.exports = (client) => {

    const discordjsVersion = new String("v" + version);
    if(!discordjsVersion.includes("v13")) throw new Error('[discord-modals] INVALID_VERSION: This package is only compatible with discord.js v13.');

    if (!client) throw new Error('[discord-modals] NO_CLIENT_PROVIDED: No client was provided. Please provide a client.');
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

module.exports.Modal = require("./src/structures/Modal");
module.exports.TextInputComponent = require("./src/structures/TextInputComponent");
module.exports.ModalSubmitInteraction = require("./src/structures/ModalSubmitInteraction");
module.exports.ModalSubmitField = require("./src/structures/ModalSubmitField");
module.exports.showModal = require("./src/structures/ShowModal");
module.exports.Interaction = require("./src/structures/Interaction");
module.exports.InteractionResponses = require("./src/structures/interfaces/InteractionResponses");
module.exports.Constants = require("./src/util/Constants");
module.exports.SnowflakeUtil = require("./src/util/SnowflakeUtil");