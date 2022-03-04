import { Snowflake } from 'discord-api-types/v9';
import {
  User,
  GuildMember,
  Permissions,
  Message,
  InteractionWebhook,
  Interaction,
  BaseMessageComponent
} from 'discord.js';

export enum TextInputStyles {
  SHORT = 1,
  LONG,
}

export enum MessageComponentTypes {
  ACTION_ROW = 1,
  BUTTON,
  SELECT_MENU,
  TEXT_INPUT,
}

export enum InteractionResponseTypes {
  PONG,
  CHANNEL_MESSAGE_WITH_SOURCE,
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
  DEFERRED_MESSAGE_UPDATE,
  UPDATE_MESSAGE,
  APPLICATION_COMMAND_AUTOCOMPLETE_RESULT,
  MODAL,
}

export enum InteractionTypes {
  PING,
  APPLICATION_COMMAND,
  MESSAGE_COMPONENT,
  APPLICATION_COMMAND_AUTOCOMPLETE,
  MODAL_SUBMIT,
}

export type MessageComponentType = keyof typeof MessageComponentTypes;

export type MessageComponentTypeResolvable =
  | string
  | number
  | MessageComponentType;

export interface BaseMessageComponentOptions {
  type?: MessageComponentType | MessageComponentTypes;
}

export interface TextInputComponentOptions {
  custom_id: string;
  label: string;
  max_length?: number;
  min_length?: number;
  placeholder?: string;
  required?: boolean;
  style: TextInputStyles;
  value?: string;
}

export interface ModalSubmitFieldOptions {
  custom_id?: string;
  value?: string;
}

export interface ModalOptions {
  title: string;
  custom_id: string;
  components: Array;
}

export class TextInputComponent extends BaseMessageComponent {
  constructor(options: TextInputComponentOptions);

  customId: string;
  label: string;
  minLength: number;
  maxLength: number;
  placeholder: string;
  required: boolean;
  style: TextInputStyle;
  value: string;

  setCustomId(id: string): TextInputComponent;
  setLabel(label: string): TextInputComponent;
  setMinLength(minLength: number): TextInputComponent;
  setMaxLength(maxLength: number): TextInputComponent;
  setStyle(style: TextInputStyle): TextInputComponent;
  setRequired(required: boolean): TextInputComponent;
  setDefaultValue(value: string): TextInputComponent;
}

export type TextInputStyle = 'SHORT' | 'LONG';

export class Modal {
  constructor(options: ModalOptions);

  title: string;
  customId: string;
  components: Map;

  setTitle(title: string): Modal;
  setCustomId(id: string): Modal;
  addComponents(component: TextInputComponent): Modal;
  setComponents(component: TextInputComponent): Modal;
  spliceComponents(): Modal;
}

export class ModalSubmitField extends BaseMessageComponent {
  constructor(options: ModalSubmitFieldOptions);

  customId: string;
  value: string;
}

export class ModalSubmitInteraction extends Interaction {
  customId: string;
  fields: Map<ModalSubmitField>;
  id: Snowflake;
  applicationId: Snowflake;
  channelId: Snowflake;
  user: User;
  member: GuildMember;
  memberPermissions: readonly Permissions;
  locale: string;
  guildLocale: string;
  message: Message;
  webhook: InteractionWebhook;

  getTextInputValue(customId: string): string;
  getField(customId: string): ModalSubmitField;
  deferReply(): void
  reply(): void
  fetchReply(): void
  deleteReply(): void
  followUp(): void
}

declare module 'discord.js' {
  interface Client {
      on(event: 'modalSubmit', listener: (modal: ModalSubmitInteraction) => void | Promise<void>): void
  }
}