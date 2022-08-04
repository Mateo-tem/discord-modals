'use strict';

const { Routes } = require('discord-api-types/v10');
const { BaseInteraction } = require('discord.js');
const Modal = require('../structures/Modal');
const { Error } = require('../structures/errors');
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
	if (!options.client.rest) throw new Error('INVALID_CLIENT');
	if (!(options.interaction instanceof BaseInteraction)) throw new Error('INVALID_INTERACTION');

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
		await options.client.rest.post(Routes.interactionCallback(options.interaction.id, options.interaction.token), {
			body: {
				type: InteractionResponseTypes.MODAL,
				data: _modal,
			},
		});
	} catch (error) {
		console.error('SHOW_MODAL_ERROR: An error occurred when showing a modal.', error);
	}
}

module.exports = showModal;
