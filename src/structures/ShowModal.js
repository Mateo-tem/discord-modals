const { Client, Interaction } = require('discord.js');
const { InteractionResponseTypes } = require('../util/Constants');
const Modal = require('./Modal');
const { Error } = require('./errors');

/**
 * Shows the Modal to the Interaction User.
 * @param {Modal} Modal Modal.
 * @param {Object} Options Client and Interaction.
 * @example
 * showModal(Modal, {
 *   client: Client, // Client to show the Modal through the Discord API.
 *   interaction: Interaction // Interaction to show the Modal with the Interaction ID & Token.
 * });
 * @returns {Modal} Modal.
*/

async function showModal(modal, options){

    if (!modal) throw new Error('MODAL_REQUIRED');
    if (!options) throw new Error('OPTIONS_REQUIRED');
    if (!options.client) throw new Error('CLIENT_REQUIRED');
    if (!options.interaction) throw new Error('INTERACTION_REQUIRED');
    if (!(modal instanceof Modal)) throw new Error('INVALID_MODAL');
    if (!(options.client instanceof Client)) throw new Error('INVALID_CLIENT');
    if (!(options.interaction instanceof Interaction)) throw new Error('INVALID_INTERACTION');

    const _modal = modal instanceof Modal ? modal : new Modal(modal, options.client);

    try{
        await options.client.api.interactions(options.interaction.id, options.interaction.token).callback.post({
            data: {
              type: InteractionResponseTypes.MODAL,
              data: _modal.toJSON(),
            },
        });
    } catch(error) {
        console.error('[discord-modals] SHOW_MODAL_ERROR: An error occurred when showing a modal.', error);
    }

    return new Modal(modal, options.client);    
    
}

module.exports = showModal;