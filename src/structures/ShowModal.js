'use strict';

const { Interaction } = require('discord.js');
const Modal = require('./Modal');
const { Error } = require('./errors');
const { InteractionResponseTypes } = require('../util/Constants');

/**
 * Shows the Modal to the Interaction User.
 * @param {Modal} Modal Modal.
 * @param {Object} Options Client and Interaction.
 * @example
 * showModal(Modal, {
 *   client: Client, // Client to show the Modal through the Discord API.
 *   interaction: Interaction // Interaction data.
 * });
 * @returns {Modal} Modal.
 */

async function showModal(modal, options) {
  if (!modal) throw new Error('MODAL_REQUIRED');
  if (!options) throw new Error('OPTIONS_REQUIRED');
  if (!options.client) throw new Error('CLIENT_REQUIRED');
  if (!options.interaction) throw new Error('INTERACTION_REQUIRED');
  if (!options.client.api) throw new Error('INVALID_CLIENT');
  if (!(options.interaction instanceof Interaction)) throw new Error('INVALID_INTERACTION');

  let _modal = modal instanceof Modal ? modal : null;

  function isJSONModal(modalToCheck) {
    if (
      !_modal &&
      typeof modalToCheck === 'object' &&
      modalToCheck.title &&
      modalToCheck.custom_id &&
      modalToCheck.components
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (!isJSONModal(modal) && !(modal instanceof Modal)) throw new Error('INVALID_MODAL');

  switch (isJSONModal(modal)) {
    case true:
      _modal = modal;
      break;
    case false:
      _modal = _modal.toJSON();
      break;
  }

  try {
    await options.client.api.interactions(options.interaction.id, options.interaction.token).callback.post({
      data: {
        type: InteractionResponseTypes.MODAL,
        data: _modal,
      },
    });
  } catch (error) {
    console.error('SHOW_MODAL_ERROR: An error occurred when showing a modal.', error);
  }

  return new Modal(modal, options.client);
}

module.exports = showModal;
