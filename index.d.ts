import {
  Snowflake,
  APITextInputComponent,
  APISelectMenuComponent,
  APISelectMenuOption,
  APIModalInteractionResponseCallbackData,
  APIModalSubmitInteraction,
  APIModalActionRowComponent,
} from 'discord-api-types/v9';
import {
  Client,
  User,
  GuildMember,
  Permissions,
  Message,
  InteractionWebhook,
  Interaction,
  BaseMessageComponent,
  MessagePayload,
  InteractionReplyOptions,
  InteractionDeferReplyOptions,
  InteractionUpdateOptions,
} from 'discord.js';

export default function (client: Client): void;

export function init(client: Client): void;

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

export interface ModalSubmitFieldData {
  type?: string;
  custom_id?: string;
  value?: string;
}

export interface ModalSubmitSelectMenuData {
  type?: string;
  custom_id?: string;
  values?: string[];
}

export interface ModalData {
  title: string;
  custom_id: string;
  components: APITextInputComponent[] | APISelectMenuComponent[];
}

export class TextInputComponent extends BaseMessageComponent {
  constructor(data?: APITextInputComponent);

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
  setPlaceholder(placeholder: string): TextInputComponent;
  setRequired(required: boolean): TextInputComponent;
  setDefaultValue(value: string): TextInputComponent;
  toJSON(): APIModalActionRowComponent;
}

export type TextInputStyle = 'SHORT' | 'LONG';

export class SelectMenuComponent extends BaseMessageComponent {
  constructor(data?: APISelectMenuComponent);

  customId: string;
  placeholder: string;
  minValues: number;
  maxValues: number;
  options: APISelectMenuOption[];
  disabled: boolean;

  setCustomId(id: string): SelectMenuComponent;  
  setPlaceholder(placeholder: string): SelectMenuComponent;
  setMinValues(minValues: number): SelectMenuComponent;  
  setMaxValues(maxValues: number): SelectMenuComponent;    
  addOptions(...options: APISelectMenuOption[]): SelectMenuComponent;
  setOptions(...options: APISelectMenuOption[]): SelectMenuComponent;
  spliceOptions(): SelectMenuComponent;
  setDisabled(required: boolean): SelectMenuComponent;
  toJSON(): APIModalActionRowComponent;
}

export class Modal {
  constructor(data?: ModalData);

  title: string;
  customId: string;
  components: ModalActionRow[];

  setTitle(title: string): Modal;
  setCustomId(id: string): Modal;
  addComponents(...components: TextInputComponent[] | SelectMenuComponent[]): Modal;
  setComponents(...components: TextInputComponent[] | SelectMenuComponent[]): Modal;
  spliceComponents(): Modal;
  toJSON(): APIModalInteractionResponseCallbackData;
}

export class ModalSubmitField {
  constructor(data?: ModalSubmitFieldData);

  type: string;
  customId: string;
  value: string;
}

export class ModalSubmitSelectMenu {
  constructor(data?: ModalSubmitSelectMenuData);

  type: string;
  customId: string;
  values: string[];
}

export class ModalActionRow {
  constructor();

  type: 'ACTION_ROW';
  components: APITextInputComponent[] | APISelectMenuComponent[];

  addComponent(component: TextInputComponent | SelectMenuComponent): ModalActionRow;
  componentToJSON(component: TextInputComponent | SelectMenuComponent): APITextInputComponent | APISelectMenuComponent;
  toJSON(): APIModalActionRowComponent;
}

export class ModalSubmitInteraction extends Interaction {
  constructor(client?: Client, data?: APIModalSubmitInteraction);

  customId: string;
  fields: ModalSubmitField[];
  selectMenus: ModalSubmitSelectMenu[];
  deferred: boolean;
  ephemeral: boolean | null;
  replied: boolean;
  id: Snowflake;
  applicationId: Snowflake;
  channelId: Snowflake;
  user: User;
  member: GuildMember;
  memberPermissions: Permissions;
  locale: string;
  guildLocale: string;
  message: Message;
  webhook: InteractionWebhook;

  getTextInputValue(customId: string): string;
  getField(customId: string): ModalSubmitField;
  getSelectMenuValues(customId: string): string[];
  getSelectMenu(customId: string): ModalSubmitSelectMenu;
  isFromMessage(): boolean;
  isRepliable(): boolean;
  inGuild(): boolean;
  inCachedGuild(): boolean;
  inRawGuild(): boolean;
  deferReply(options: InteractionDeferReplyOptions): Promise<void>;
  reply(
    options: string | MessagePayload | InteractionReplyOptions
  ): Promise<void>;
  fetchReply(): Promise<Message>;
  deleteReply(): Promise<void>;
  followUp(
    options: string | MessagePayload | InteractionReplyOptions
  ): Promise<void>;
  update(
    options: string | MessagePayload | InteractionUpdateOptions
  ): Promise<void>
}

export function showModal(
  modal: Modal,
  options: {
    client: Client;
    interaction: Interaction;
  }
): Promise<Modal>;

declare module "discord.js" {
  interface Client {
    on(
      event: "modalSubmit",
      listener: (modal: ModalSubmitInteraction) => void | Promise<void>
    ): void;
  }
}
