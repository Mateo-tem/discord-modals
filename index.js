const { Client, version } = require('discord.js');
const ModalSubmitInteraction = require("./src/structures/ModalSubmitInteraction");
const { Error } = require('./src/structures/errors');
const TextInputComponent = require('./src/structures/TextInputComponent');

module.exports = (client) => {

  // Compatibility with discord.js version.

  const discordjsVersion = new String("v" + version); // Expected: v13...
  if (!discordjsVersion.includes("v13")) throw new Error('INVALID_VERSION');

  if (!client) throw new Error('NO_CLIENT_PROVIDED');
  if (!(client instanceof Client)) throw new Error('INVALID_CLIENT');

  // We receive the 'INTERACTION_CREATE' event from WebSocket.
  
  client.ws.on('INTERACTION_CREATE', (data) => {

    if (!data.type) return;    

    switch (data.type) {      
      case 5:
        client.emit('modalSubmit', new ModalSubmitInteraction(client, data));
        break;

      default:
        client.emit('debug', `Unknown interaction component type received: ${data.data.component_type}`);
        break;
    }

  });

}

// Exports the classes.
module.exports.Modal = require("./src/structures/Modal");
module.exports.TextInputComponent = require("./src/structures/TextInputComponent");
module.exports.ModalSubmitInteraction = require("./src/structures/ModalSubmitInteraction");
module.exports.ModalSubmitField = require("./src/structures/ModalSubmitField");
module.exports.showModal = require("./src/structures/ShowModal");
module.exports.Interaction = require("./src/structures/Interaction");
module.exports.InteractionResponses = require("./src/structures/interfaces/InteractionResponses");
module.exports.Constants = require("./src/util/Constants");
module.exports.SnowflakeUtil = require("./src/util/SnowflakeUtil");

/* Powered by:

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃       D i s c o r d - M o d a l s        ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
------ Developed by 『𝑴𝒂𝒕𝒆𝒐ᵗᵉᵐ』#9999 ------

https://www.npmjs.com/package/discord-modals

*/