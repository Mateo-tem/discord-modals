'use strict';

// Credits to discord.js for the base of this code.

const { TypeError } = require('./errors');
const { MessageComponentTypes } = require('../util/Constants');

/**
 * Represents an interactive component of a Message.
 */

class BaseMessageComponent {
	constructor(data) {
		this.type = 'type' in data ? BaseMessageComponent.resolveType(data.type) : null;
	}

	static create(data, client) {
		let component;
		let { type } = data;

		if (typeof type === 'string') type = MessageComponentTypes[type];

		switch (type) {
			case MessageComponentTypes.TEXT_INPUT: {
				const TextInputComponent = require('./TextInputComponent');
				component = data instanceof TextInputComponent ? data : new TextInputComponent(data);
				break;
			}
			case MessageComponentTypes.SELECT_MENU: {
				const SelectMenuComponent = require('./SelectMenuComponent');
				component = data instanceof SelectMenuComponent ? data : new SelectMenuComponent(data);
				break;
			}
			default:
				if (client) {
					client.emit('debug', `[BaseMessageComponent] Received component with unknown type: ${data.type}`);
				} else {
					throw new TypeError('INVALID_TYPE', 'data.type', 'valid MessageComponentType');
				}
		}
		return component;
	}

	static resolveType(type) {
		return typeof type === 'string' ? type : MessageComponentTypes[type];
	}
}

module.exports = BaseMessageComponent;
