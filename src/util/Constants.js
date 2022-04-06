'use strict';

exports.TextInputStyles = createEnum([null, 'SHORT', 'LONG']);

exports.MessageComponentTypes = createEnum([null, 'ACTION_ROW', 'BUTTON', 'SELECT_MENU', 'TEXT_INPUT']);

exports.InteractionResponseTypes = createEnum([
  null,
  'PONG',
  null,
  null,
  'CHANNEL_MESSAGE_WITH_SOURCE',
  'DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE',
  'DEFERRED_MESSAGE_UPDATE',
  'UPDATE_MESSAGE',
  'APPLICATION_COMMAND_AUTOCOMPLETE_RESULT',
  'MODAL',
]);

exports.InteractionTypes = createEnum([
  null,
  'PING',
  'APPLICATION_COMMAND',
  'MESSAGE_COMPONENT',
  'APPLICATION_COMMAND_AUTOCOMPLETE',
  'MODAL_SUBMIT',
]);

function createEnum(keys) {
  const obj = {};
  for (const [index, key] of keys.entries()) {
    if (key === null) continue;
    obj[key] = index;
    obj[index] = key;
  }
  return obj;
}
