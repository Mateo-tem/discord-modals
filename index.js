const { version } = require('discord.js');
let ModalSubmitInteraction = require('./src/structures/ModalSubmitInteraction');
const { Error } = require('./src/structures/errors');
const { InteractionTypes } = require('./src/util/Constants');
const discordjsVersion = new String('v' + version); // Expected: v13 or v14...
if(discordjsVersion.includes('v14')) ModalSubmitInteraction = require('./src/v14/ModalSubmitInteraction');

module.exports = (client) => {

  // Compatibility with discord.js version.
  if (!discordjsVersion.includes('v13') && !discordjsVersion.includes('v14')) throw new Error('INVALID_VERSION');

  if (!client) throw new Error('NO_CLIENT_PROVIDED');
  if (!client.ws) throw new Error('INVALID_CLIENT');

  // We receive the 'INTERACTION_CREATE' event from WebSocket.
  
  client.ws.on('INTERACTION_CREATE', (data) => {

    if (!data.type) return;    

    switch (data.type) {      
      case InteractionTypes.MODAL_SUBMIT:
        client.emit('modalSubmit', new ModalSubmitInteraction(client, data));
        break;
    }

  });

}

// Exports the classes according to the discord.js version.

if (discordjsVersion.includes('v13')) {
  module.exports.Modal = require('./src/structures/Modal');
  module.exports.TextInputComponent = require('./src/structures/TextInputComponent');
  module.exports.SelectMenuComponent = require('./src/structures/SelectMenuComponent');
  module.exports.ModalSubmitInteraction = require('./src/structures/ModalSubmitInteraction');
  module.exports.ModalSubmitField = require('./src/structures/ModalSubmitField');
  module.exports.ModalSubmitSelectMenu = require('./src/structures/ModalSubmitSelectMenu');
  module.exports.ModalActionRow = require('./src/structures/ModalActionRow');
  module.exports.showModal = require('./src/structures/ShowModal');
  module.exports.Interaction = require('./src/structures/Interaction');
  module.exports.InteractionResponses = require('./src/structures/interfaces/InteractionResponses');
  module.exports.Constants = require('./src/util/Constants');
  module.exports.SnowflakeUtil = require('./src/util/SnowflakeUtil');
} else if (discordjsVersion.includes('v14')) {
  module.exports.Modal = require('./src/structures/Modal');
  module.exports.TextInputComponent = require('./src/structures/TextInputComponent');
  module.exports.SelectMenuComponent = require('./src/structures/SelectMenuComponent');
  module.exports.ModalSubmitInteraction = require('./src/v14/ModalSubmitInteraction');
  module.exports.ModalSubmitField = require('./src/structures/ModalSubmitField');
  module.exports.ModalSubmitSelectMenu = require('./src/structures/ModalSubmitSelectMenu');
  module.exports.ModalActionRow = require('./src/structures/ModalActionRow');
  module.exports.showModal = require('./src/v14/ShowModal');
  module.exports.Interaction = require('./src/v14/Interaction');
  module.exports.InteractionResponses = require('./src/v14/interfaces/InteractionResponses');
  module.exports.Constants = require('./src/util/Constants');
  module.exports.SnowflakeUtil = require('./src/util/SnowflakeUtil');
}

// Easier for typescript
module.exports.init = this;

/* Powered by:

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃       D i s c o r d - M o d a l s        ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
------ Developed by 『𝑴𝒂𝒕𝒆𝒐ᵗᵉᵐ』#9999 ------
https://www.npmjs.com/package/discord-modals

Credits to discord.js, code base was extracted for this.

*/
