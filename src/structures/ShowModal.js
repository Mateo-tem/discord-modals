const { Client, Interaction } = require('discord.js');
const { InteractionResponseTypes } = require('../util/Constants');
const Modal = require('./Modal');

/**
 * Shows the Modal to the Interaction User.
 * @param {Modal} Modal Modal.
 * @param {Object} Options Client and Interaction.
 * @returns {Modal} Modal.
*/

async function showModal(modal, options){

    if (!modal) throw new Error('[discord-modals] MODAL_REQUIRED: No modal was provided.');
    if (!options) throw new Error('[discord-modals] OPTIONS_REQUIRED: No options were provided.');
    if (!options.client) throw new Error('[discord-modals] CLIENT_REQUIRED: No client was provided on the options.');
    if (!options.interaction) throw new Error('[discord-modals] INTERACTION_REQUIRED: No interaction was provided on the options.');
    if (!(modal instanceof Modal)) throw new Error('[discord-modals] INVALID_MODAL: The provided modal is invalid.');
    if (!(options.client instanceof Client)) throw new Error('[discord-modals] INVALID_CLIENT: The provided client is invalid.');
    if (!(options.interaction instanceof Interaction)) throw new Error('[discord-modals] INVALID_INTERACTION: The provided interaction is invalid.');

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