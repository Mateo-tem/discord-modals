'use strict';

const { Base, Permissions } = require('discord.js');

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

    this.memberPermissions = data.member?.permissions ? new Permissions(data.member.permissions).freeze() : null;

    this.locale = data.locale;

    this.guildLocale = data.guild_locale ?? null;

  }
}

module.exports = Interaction;