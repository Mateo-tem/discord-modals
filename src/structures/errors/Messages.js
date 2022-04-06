'use strict';

const { register } = require('./DJSError');

const Messages = {
  // Discord-Modals package

  INVALID_VERSION: 'This package is only compatible with discord.js v13 and v14.',
  NO_CLIENT_PROVIDED: 'No Client was provided to interact with modals.',
  INVALID_CLIENT: 'The provided Client is invalid in this context.',
  MODAL_REQUIRED: 'No Modal was provided to show.',
  OPTIONS_REQUIRED: 'No Options were provided.',
  CLIENT_REQUIRED: 'No Client was provided on the showModal method options.',
  INTERACTION_REQUIRED: 'No Interaction was provided on the showModal method options.',
  INVALID_MODAL: 'The provided Modal is invalid in this context.',
  INVALID_INTERACTION: 'The provided Interaction is invalid in this context.',

  // Text Input Components

  TEXT_INPUT_CUSTOM_ID: 'TextInputComponent customId must be a string.',
  TEXT_INPUT_LABEL: 'TextInputComponent label must be a string.',
  TEXT_INPUT_PLACEHOLDER: 'TextInputComponent placeholder must be a string.',
  TEXT_INPUT_VALUE: 'TextInputComponent value must be a string.',

  // Message Components

  INVALID_TYPE: (name, expected, an = false) => `Supplied ${name} is not a${an ? 'n' : ''} ${expected}.`,

  // Interactions

  INTERACTION_ALREADY_REPLIED: 'The reply to this interaction has already been sent or deferred.',
  INTERACTION_NOT_REPLIED: 'The reply to this interaction has not been sent or deferred.',
  INTERACTION_EPHEMERAL_REPLIED: 'Ephemeral responses cannot be deleted.',
  MODAL_INTERACTION_MESSAGE: 'This Modal Submit Interaction does not have a message to update.',

  // Modals

  MODAL_CUSTOM_ID: 'Modal customId must be a string.',
  MODAL_TITLE: 'Modal title must be a string.',
};

for (const [name, message] of Object.entries(Messages)) register(name, message);
