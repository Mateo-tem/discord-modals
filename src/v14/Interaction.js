'use strict';

const { InteractionType } = require('discord-api-types/v9');
const { Base, PermissionsBitField } = require('discord.js');
const SnowflakeUtil = require('../util/SnowflakeUtil');

/**
 * Represents an Interaction.
 * @extends Base
 */

class Interaction extends Base {
  constructor(client, data) {
    super(client);

    this.id = data.id;

    Object.defineProperty(this, 'token', { value: data.token });

    this.applicationId = data.application_id;

    this.channelId = data.channel_id ?? null;

    this.guildId = data.guild_id ?? null;

    this.user = this.client.users._add(data.user ?? data.member.user);

    this.member = data.member ? this.guild?.members._add(data.member) ?? data.member : null;

    this.version = data.version;

    this.memberPermissions = data.member?.permissions
      ? new PermissionsBitField(data.member.permissions).freeze()
      : null;

    this.locale = data.locale;

    this.guildLocale = data.guild_locale ?? null;
  }

  get createdTimestamp() {
    return SnowflakeUtil.timestampFrom(this.id);
  }

  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  get channel() {
    return this.client.channels.cache.get(this.channelId) ?? null;
  }

  get guild() {
    return this.client.guilds.cache.get(this.guildId) ?? null;
  }

  inGuild() {
    return Boolean(this.guildId && this.member);
  }

  inCachedGuild() {
    return Boolean(this.guild && this.member);
  }

  inRawGuild() {
    return Boolean(this.guildId && !this.guild && this.member);
  }

  isRepliable() {
    return ![InteractionType.Ping, InteractionType.ApplicationCommandAutocomplete].includes(this.type);
  }
}

module.exports = Interaction;
