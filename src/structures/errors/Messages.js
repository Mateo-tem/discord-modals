'use strict';

const { register } = require('./DJSError');

const Messages = {

  //Text Input Components

  TEXT_INPUT_CUSTOM_ID: 'TextInputComponent customId must be a string',
  TEXT_INPUT_LABEL: 'TextInputComponent label must be a string',
  TEXT_INPUT_PLACEHOLDER: 'TextInputComponent placeholder must be a string',
  TEXT_INPUT_VALUE: 'TextInputComponent value must be a string',

  //Message Components

  INVALID_TYPE: (name, expected, an = false) => `Supplied ${name} is not a${an ? 'n' : ''} ${expected}.`,

  //Interactions

  INTERACTION_ALREADY_REPLIED: 'The reply to this interaction has already been sent or deferred.',
  INTERACTION_NOT_REPLIED: 'The reply to this interaction has not been sent or deferred.',
  INTERACTION_EPHEMERAL_REPLIED: 'Ephemeral responses cannot be deleted.',

  //Modals

  MODAL_CUSTOM_ID: 'Modal customId must be a string',
  MODAL_TITLE: 'Modal title must be a string',

};

for (const [name, message] of Object.entries(Messages)) register(name, message);