'use strict';

const { InteractionResponseType, MessageFlags, Routes } = require('discord-api-types/v9');
const { MessagePayload } = require('discord.js');
const Modal = require('../../structures/Modal');
const { Error } = require('../../structures/errors');

class InteractionResponses {
  async deferReply(options = {}) {
    if (this.deferred || this.replied) {
      throw new Error('INTERACTION_ALREADY_REPLIED');
    }
    this.ephemeral = options.ephemeral ?? false;
    await this.client.rest.post(Routes.interactionCallback(this.id, this.token), {
      body: {
        type: InteractionResponseType.DeferredChannelMessageWithSource,
        data: {
          flags: options.ephemeral ? MessageFlags.Ephemeral : undefined,
        },
      },
      auth: false,
    });
    this.deferred = true;

    return options.fetchReply ? this.fetchReply() : undefined;
  }

  async reply(options) {
    if (this.deferred || this.replied) {
      throw new Error('INTERACTION_ALREADY_REPLIED');
    }
    this.ephemeral = options.ephemeral ?? false;

    let messagePayload;
    if (options instanceof MessagePayload) messagePayload = options;
    else messagePayload = MessagePayload.create(this, options);

    const { body: data, files } = await messagePayload.resolveBody().resolveFiles();
    
    data.flags = options.ephemeral ? MessageFlags.FLAGS.EPHEMERAL : undefined;

    await this.client.rest.post(Routes.interactionCallback(this.id, this.token), {
      body: {
        type: InteractionResponseType.ChannelMessageWithSource,
        data,
      },
      files,
      auth: false,
    });
    this.replied = true;

    return options.fetchReply ? this.fetchReply() : undefined;
  }

  fetchReply() {
    return this.webhook.fetchMessage('@original');
  }

  async editReply(options) {
    if (!this.deferred && !this.replied) {
      throw new Error('INTERACTION_NOT_REPLIED');
    }
    const message = await this.webhook.editMessage('@original', options);
    this.replied = true;
    return message;
  }

  async deleteReply() {
    if (this.ephemeral) throw new Error('INTERACTION_EPHEMERAL_REPLIED');
    await this.webhook.deleteMessage('@original');
  }

  followUp(options) {
    if (!this.deferred && !this.replied) {
      return Promise.reject(new Error('INTERACTION_NOT_REPLIED'));
    }
    return this.webhook.send(options);
  }

  async deferUpdate(options = {}) {
    if (this.deferred || this.replied) {
      throw new Error('INTERACTION_ALREADY_REPLIED');
    }
    await this.client.rest.post(Routes.interactionCallback(this.id, this.token), {
      body: {
        type: InteractionResponseType.DeferredMessageUpdate,
      },
      auth: false,
    });
    this.deferred = true;

    return options.fetchReply ? this.fetchReply() : undefined;
  }

  async update(options) {
    if (this.deferred || this.replied) {
      throw new Error('INTERACTION_ALREADY_REPLIED');
    }

    let messagePayload;
    if (options instanceof MessagePayload) messagePayload = options;
    else messagePayload = MessagePayload.create(this, options);

    const { body: data, files } = await messagePayload.resolveBody().resolveFiles();

    try {
      await this.client.rest.post(Routes.interactionCallback(this.id, this.token), {
        body: {
          type: InteractionResponseType.UpdateMessage,
          data,
        },
        files,
        auth: false,
      });
      this.replied = true;

      return options.fetchReply ? this.fetchReply() : undefined;
    } catch (e) {
      throw new Error('MODAL_INTERACTION_MESSAGE');
    }
  }

  async showModal(modal) {
    const _modal = modal instanceof Modal ? modal : new Modal(modal);
    if (this.deferred || this.replied) {
      throw new Error('INTERACTION_ALREADY_REPLIED');
    }
    await this.client.rest.post(Routes.interactionCallback(this.id, this.token), {
      body: {
        type: InteractionResponseType.Modal,
        data: _modal.toJSON(),
      },
    });
  }

  static applyToClass(structure, ignore = []) {
    const props = [
      'deferReply',
      'reply',
      'fetchReply',
      'editReply',
      'deleteReply',
      'followUp',
      'deferUpdate',
      'update',
      'showModal',
    ];

    for (const prop of props) {
      if (ignore.includes(prop)) continue;
      Object.defineProperty(
        structure.prototype,
        prop,
        Object.getOwnPropertyDescriptor(InteractionResponses.prototype, prop),
      );
    }
  }
}

module.exports = InteractionResponses;
