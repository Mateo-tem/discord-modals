<div align="center">
  <img src="https://cdn.discordapp.com/attachments/910547379617402960/945169823648866414/Discord-Modals-Docs.png" alt="Discord Modals" />
  <p align="center">
  <a href="https://www.npmjs.com/package/discord-modals">
    <img src="https://img.shields.io/npm/dt/discord-modals?style=for-the-badge" alt="npm" />
  </a>

  <a href="https://discord.gg/dscbots">
    <img src="https://img.shields.io/discord/852531635252494346?color=5865F2&label=Discord Server&style=for-the-badge" alt="Discord Server" />
  </a>
</p>

</div>

> **Discord-Modals is a package that allows your discord.js v13 and v14 bot to create, and interact with Modals, a new Discord feature.**

# 🔎 Installation

```sh
npm install discord-modals
yarn add discord-modals
```

# 🔮 General

### Methods

```js
.init(client)
```
Initialize the receivements of Modal Submit Interactions.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Client*  |[Client](https://discord.js.org/#/docs/discord.js/stable/class/Client)| The Client to receive the Modal Submit Interaction. |

> Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)


```js
.showModal(modal, { client: Client, interaction: Interaction })
```
Shows the Modal to the Interaction User.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Modal*  |[Modal](#modal) or [JSONModal](https://discord.com/developers/docs/interactions/message-components#text-inputs)| The Modal to show. |
|  *Options#client*  |[Client](https://discord.js.org/#/docs/discord.js/stable/class/Client)| The Client to manipulate the Interaction for show the Modal. |
|  *Options#interaction*  |[Interaction](https://discord.js.org/#/docs/discord.js/stable/class/Interaction)| The Interaction to show the Modal. |

> Returns: [Modal](#modal)

# 🧩 Classes

## Modal
Represents a Modal Form to be shown in response to an Interaction.
- A modal can contain at most **5 Action Rows**. Each of them can contain **1 Text Input/Select Menu Component**.

```javascript
new Modal(data)
```

| Properties |Methods|
| ------------ | ------------ |
|  `.title`  | `.setTitle()` |
|  `.customId`  | `.setCustomId()` |
|  `.components`  | `.addComponents()` |
|    | `.setComponents()` |
|    | `.spliceComponents()` |
|    | `.toJSON()` |

### Properties

#### .title
The Title of the Modal.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .customId
The Custom Id of the Modal.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .components
The Components of the Modal.
> Returns: [Array<TextInputComponent|SelectMenuComponent>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Methods

```js
.setTitle('modalTitle')
```
Sets the Title of the Modal. (Max. 45 characters)

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *ModalTitle*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Title of the Modal. |

> Returns: [Modal](#modal)

```js
.setCustomId('modalCustomId')
```
Sets the Custom Id of the Modal. (Max. 100 characters)

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *ModalCustomId*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Modal. |

> Returns: [Modal](#modal)

```js
.addComponents(...components)
```
Adds the Components of the Modal.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Components*  |[TextInputComponent](#textinputcomponent) | [SelectMenuComponent](#selectmenucomponent)| The components to add in the Modal. |

> Returns: [Modal](#modal)

```js
.setComponents(...components)
```
Adds the Components of the Modal.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Components*  |[TextInputComponent](#textinputcomponent) | [SelectMenuComponent](#selectmenucomponent)| The components to set in the Modal. |

> Returns: [Modal](#modal)

```js
.spliceComponents()
```
Removes, replaces, and inserts components in the Modal.

> Returns: [Modal](#modal)

```js
.toJSON()
```
Transforms the Modal to a plain object.

> Returns: [APIModalInteractionResponseCallbackData](https://discord.com/developers/docs/interactions/message-components#text-inputs)

## TextInputComponent 
> extends [BaseMessageComponent](https://discord.js.org/#/docs/discord.js/stable/class/BaseMessageComponent)

Represents a Text Input Component of a Modal.

```javascript
new TextInputComponent(data)
```

| Properties |Methods|
| ------------ | ------------ |
|  `.customId`  | `.setCustomId()` |
|  `.label`  | `.setLabel()` |
|  `.minLength`  | `.setMinLength()` |
|  `.maxLength`  | `.setMaxLength()` |
|  `.placeholder`  | `.setPlaceholder()` |
|  `.required`  | `.setRequired()` |
|  `.style`  | `.setStyle()` |
|  `.value`  | `.setDefaultValue()` |
|    | `.toJSON()` |

### Properties

#### .customId
The Custom Id of the Text Input Component.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .label
The Label of the Text Input Component.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .minLength
The Minimum Length of the Text Input Component.
> Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### .maxLength
The Maximum Length of the Text Input Component.
> Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### .placeholder
The Placeholder of the Text Input Component.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .required
If the Text Input Component is required.
> Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

#### .style
The Style of the Text Input Component.
> Returns: [TextInputComponentStyle](#textinputcomponentstyle)

#### .value
The Default/Pre-filled value of the Text Input Component.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Methods

```js
.setCustomId('textinput-customid')
```
Sets the Custom Id of the Text Input Component. (Max. 100 characters)

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *TextInputCustomId*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setLabel('textinput-label')
```
Sets the Label of the Text Input Component. (Max. 45 characters)

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *TextInputLabel*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Label of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setMinLength(Number)
```
Sets the Minimum Length of the Text Input Component. (Between 1 - 4000)

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Number*  |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (Between 1 - 4000)| The Number of the Minimum Length of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setMaxLength(Number)
```
Sets the Maximum Length of the Text Input Component. (Between 1 - 4000)

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Number*  |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (Between 1 - 4000)| The Number of the Maximum Length of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setPlaceholder('Text Input Placeholder')
```
Sets the Placeholder of the Text Input Component. (Max. 100 characters)

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *TextInputPlaceholder*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Placeholder of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setRequired(Boolean)
```
Sets a Boolean if the Text Input Component is required. Default: false.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Boolean*  |[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)| The Boolean if the Text Input Component is required. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setStyle(TextInputStyle)
```
Sets the Style of the Text Input Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *TextInputStyle*  |[TextInputComponentStyle](#textinputcomponentstyle)| The Style of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setDefaultValue('Value')
```
Sets a Default/Pre-filled Value of the Text Input Component. (Max. 4000 characters)

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Value*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Default/Pre-filled value of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.toJSON()
```
Transforms the TextInputComponent to a plain object.

> Returns: [APITextInputComponent](https://discord.com/developers/docs/interactions/message-components#text-inputs)

### TextInputStyle

| Text |Value|Description|
| ------------ | ------------ |------------ |
|  SHORT  |1 [[Short]](https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles)| A single-line input |
|  LONG  |2 [[Paragraph]](https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles)| A multi-line input |

## SelectMenuComponent 
> extends [BaseMessageComponent](https://discord.js.org/#/docs/discord.js/stable/class/BaseMessageComponent)

Represents a Select Menu Component of a Modal.

```javascript
new SelectMenuComponent(data)
```

| Properties |Methods|
| ------------ | ------------ |
|  `.customId`  | `.setCustomId()` |
|  `.placeholder`  | `.setPlaceholder()` |
|  `.minValues`  | `.setMinValues()` |
|  `.maxValues`  | `.setMaxValues()` |
|  `.options`  | `.addOptions()` |
|  `.disabled`  | `.setOptions()` |
|    | `.spliceOptions()` |
|    | `.setDisabled()` |
|    | `.toJSON()` |

### Properties

#### .customId
The Custom Id of the Select Menu Component.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .placeholder
The Placeholder (text when nothing is selected) of the Select Menu Component.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .minValues
Minimum number of selections allowed for the Select Menu Component.
> Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### .maxValues
Maximum number of selections allowed for the Select Menu Component.
> Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### .options
The Options of the Select Menu Component.
> Returns: Array<[APISelectMenuOption](https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure)>

#### .disabled
If the Select Menu Component is disabled.
> Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### Methods

```js
.setCustomId('menu-customid')
```
Sets the Custom Id of the Select Menu Component. (Max. 100 characters)

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *MenuCustomId*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Select Menu Component. |

> Returns: [SelectMenuComponent](#selectmenucomponent)

```js
.setPlaceholder('Menu Placeholder')
```
Sets the Placeholder of the Select Menu Component. (Max. 150 characters)

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *MenuPlaceholder*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The placeholder of the Select Menu Component. |

> Returns: [SelectMenuComponent](#selectmenucomponent)

```js
.setMinValues(Number)
```
Sets the minimum number of selections allowed for the Select Menu Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Number*  |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (Between 1 - 25)| Number of selections to be required. |

> Returns: [SelectMenuComponent](#selectmenucomponent)

```js
.setMaxValues(Number)
```
Sets the maximum number of selections allowed for the Select Menu Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Number*  |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (Between 1 - 25)| Number of selections to be allowed. |

> Returns: [SelectMenuComponent](#selectmenucomponent)

```js
.addOptions(...options)
```
Adds options to the Select Menu Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Options*  |[APISelectMenuOption](https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure)| The options to add. |

> Returns: [SelectMenuComponent](#selectmenucomponent)

```js
.setOptions(...options)
```
Sets the options of the Select Menu Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Options*  |[APISelectMenuOption](https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure)| The options to set. |

> Returns: [SelectMenuComponent](#selectmenucomponent)

```js
.spliceOptions()
```
Removes, replaces, and inserts options in the Select Menu Component.

> Returns: [SelectMenuComponent](#selectmenucomponent)

```js
.setDisabled(Boolean)
```
Sets a Boolean if a Select Menu Component will be disabled.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Boolean*  |[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)| If the Select Menu Component will be disabled. |

> Returns: [SelectMenuComponent](#selectmenucomponent)

```js
.toJSON()
```
Transforms the Select Menu Component to a plain object.

> Returns: [APISelectMenuComponent](https://discord.com/developers/docs/interactions/message-components#select-menus-select-menu-example)

## ModalActionRow
Represents a Modal Action Row, that contains a Text Input Component.

| Properties |Methods|
| ------------ | ------------ |
|  `.type`  | `.addComponent()` |
|  `.components`  | `.componentToJSON()` |
|    | `.toJSON()` |

### Properties

#### .type
The type of the Modal Action Row (1).
> Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### .components
The Text Input/Select Menu Component of this Action Row.
> Returns: [Array<APITextInputComponent|APISelectMenuComponent>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Methods

```js
.addComponent(component)
```
Adds a Text Input/Select Menu Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Component*  |[TextInputComponent](#textinputcomponent)|[SelectMenuComponent](#selectmenucomponent)| The component to add in the Action Row. |

> Returns: [ModalActionRow](#modalactionrow)

```js
.componentToJSON(component)
```
Transforms a Text Input/Select Menu Component to a plain object.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Component*  |[TextInputComponent](#textinputcomponent)|[SelectMenuComponent](#selectmenucomponent)| The component to add in the Action Row. |

> Returns: [APITextInputComponent](https://discord.com/developers/docs/interactions/message-components#text-inputs) | [APISelectMenuComponent](https://discord.com/developers/docs/interactions/message-components#select-menus-select-menu-example) 

```js
.toJSON()
```
Transforms the Modal Action Row to a plain object.

> Returns: APIModalActionRowComponent<APITextInputComponent|APISelectMenuComponent>

## ModalSubmitField
Represents a Field of a Modal Submit Interaction.

| Properties |Methods|
| ------------ | ------------ |
|  `.type`  |  |
|  `.customId`  |  |
|  `.value`  |  |

### Properties

#### .type
The type of the Modal Submit Field (TEXT_INPUT).
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .customId
The Custom Id of the Modal Submit Field.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .value
The Value of the Modal Submit Field.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ModalSubmitSelectMenu
Represents a Select Menu Component of a Modal Submit Interaction.

| Properties |Methods|
| ------------ | ------------ |
|  `.type`  |  |
|  `.customId`  |  |
|  `.values`  |  |

### Properties

#### .type
The type of the Select Menu Component (SELECT_MENU).
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .customId
The Custom Id of the Select Menu Component.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .values
The Values of the Select Menu Component.
> Returns: [Array<String>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## ModalSubmitInteraction
> extends [Interaction](https://discord.js.org/#/docs/discord.js/stable/class/Interaction)

Represents a Modal Submit Interaction.

| Properties |Methods|
| ------------ | ------------ |
|  `.customId`  | `.getTextInputValue()` |
|  `.components`  | `.getField()` |
|  `.fields`  | `.getSelectMenuValues()` |
|  `.selectMenus`  | `.getSelectMenu()` |
|  `.id`  | `.deferReply()` |
|  `.applicationId`  | `.reply()` |
|  `.channelId`  | `.fetchReply()` |
|  `.guildId`  | `.editReply()` |
|  `.user`  | `.deleteReply()` |
|  `.member`  | `.followUp()` |
|  `.memberPermissions`  | `.update()` |
|  `.locale`  | `.isFromMessage()` |
|  `.guildLocale`  | `.isRepliable()` |
|  `.message`  |  |
|  `.version`  |  |
|  `.webhook`  |  |
|  `.type`  |  |

### Properties

#### .customId
The Custom Id of the Modal.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .components
The Action Rows of the modal with the Text Input Components.
> Returns: [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

#### .fields
The (Fields) Text Input Components of the Modal.
> Returns: [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

#### .selectMenus
The Select Menu Components of the Modal.
> Returns: [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

#### .id
The Id of the Modal Submit Interaction.
> Returns: [Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake)

#### .applicationId
The application's id.
> Returns: [Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake)

#### .channelId
The Id of the Channel this Modal Submit Interaction was sent in.
> Returns: [Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake)

#### .guildId
The Id of the Guild this Modal Submit Interaction was sent in.
> Returns: [Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake)

#### .user
The User which sent this Modal Submit Interaction.
> Returns: [User](https://discord.js.org/#/docs/discord.js/stable/class/User)

#### .member
If this Modal Submit Interaction was sent in a Guild, the Member which sent it.
> Returns: [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember)

#### .memberPermissions
If this Modal Submit Interaction was sent in a Guild, the Member which sent it.
> Returns: ?Readonly<[Permissions](https://discord.js.org/#/docs/discord.js/stable/class/Permissions)>

#### .locale
The Locale of the User who invoked this Modal Submit Interaction.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) [(Locale)](https://discord.com/developers/docs/reference#locales)

#### .guildLocale
The preferred Locale from the Guild this Modal Submit Interaction was sent in.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) [(Locale)](https://discord.com/developers/docs/reference#locales)

#### .message
The Message where the Modal Submit Interaction was invoked, if the Modal was invoked on a Message Component.
> Returns: [Message](https://discord.js.org/#/docs/discord.js/stable/class/Message)

#### .version
The Version.
> Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### .webhook
An associated Interaction Webhook, can be used to further interact with this Interaction.
> Returns: [InteractionWebhook](https://discord.js.org/#/docs/discord.js/stable/class/InteractionWebhook)

### Methods

```js
.getTextInputValue('textinput-customid')
```
Gets a Text Input Component value.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *TextInputCustomId*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Text Input Component. |

> Returns: [TextInputComponent#value](#textinputcomponent)

```js
.getField('textinput-customid')
```
Gets a Modal Submit Field.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *TextInputCustomId*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Text Input Component. |

> Returns: [ModalSubmitField](#modalsubmitfield)

```js
.getSelectMenuValues('menu-customid')
```
Gets the values of a Select Menu Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *MenuCustomId*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Select Menu Component. |

> Returns: [ModalSubmitSelectMenu#values](#modalsubmitselectmenu)

```js
.getSelectMenu('menu-customid')
```
Gets a Select Menu Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *MenuCustomId*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Select Menu Component. |

> Returns: [ModalSubmitSelectMenu](#modalsubmitselectmenu)

```js
.isFromMessage()
```
If the Modal Submit Interaction is from a message.

> Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

```js
.isRepliable()
```
If the Modal Submit Interaction is repliable.

> Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

# ❌ Errors

Discord-Modals integrates some errors to avoid issues and respect the structures.

| Code |Message|
| ------------ | ------------ |
|  `INVALID_VERSION`  | This package is only compatible with discord.js v13 and v14. |
|  `NO_CLIENT_PROVIDED`  | No Client was provided to interact with modals. |
|  `INVALID_CLIENT`  | The provided Client is invalid in this context. |
|  `MODAL_REQUIRED`  | No Modal was provided to show. |
|  `OPTIONS_REQUIRED`  | No Options were provided. |
|  `CLIENT_REQUIRED`  | No Client was provided on the showModal method options. |
|  `INTERACTION_REQUIRED`  | No Interaction was provided on the showModal method options. |
|  `INVALID_MODAL`  | The provided Modal is invalid in this context. |
|  `INVALID_INTERACTION`  | The provided Interaction is invalid in this context. |
|  `TEXT_INPUT_CUSTOM_ID`  | TextInputComponent customId must be a string. |
|  `TEXT_INPUT_LABEL`  | TextInputComponent label must be a string. |
|  `TEXT_INPUT_PLACEHOLDER` | TextInputComponent placeholder must be a string. |
|  `TEXT_INPUT_VALUE` | TextInputComponent value must be a string. |
|  `MODAL_CUSTOM_ID` | Modal customId must be a string. |
|  `MODAL_TITLE` | Modal title must be a string. |
|  `MODAL_INTERACTION_MESSAGE` | This Modal Submit Interaction does not have a message to update. |


# 🔨 Do you want to contribute to Discord-Modals?

- Check our [GitHub Repository](https://github.com/Mateo-tem/discord-modals) and Report Issues or make a Pull Request to contribute to this awesome project. We are waiting for you!

---

> **Powered by Discord-Modals**

- ❤️ Special thanks to [Leo Ua#4600](https://github.com/Leoxyzua), [polarsito#8964](https://github.com/polarsito) and [Andleo#1700](https://github.com/andleo17) for helping along the way!
