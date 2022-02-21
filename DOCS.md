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

> **Discord-Modals is a package that allows your bot of discord.js v13 to create the new awesome Discord Modals and interact with them.**

# 🔎 Installation

```sh
npm install discord-modals
```

# 🔮 General

### Methods

```js
.showModal(modal, { client: Client, interaction: Interaction })
```
Shows the Modal to the Interaction User.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Modal*  |[Modal](#modal)| The Modal to show. |
|  *Options#client*  |[Client](https://discord.js.org/#/docs/discord.js/stable/class/Client)| The Client to manipulate the Interaction for show the Modal. |
|  *Options#interaction*  |[Interaction](https://discord.js.org/#/docs/discord.js/stable/class/Interaction)| The Interaction to show the Modal. |

> Returns: [Modal](#modal)

# 🧩 Classes

## Modal
Represents a Modal.

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
The Text Input Components of the Modal.
> Returns: [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

### Methods

```js
.setTitle('modalTitle')
```
Sets the Title of the Modal.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *ModalTitle*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Title of the Modal. |

> Returns: [Modal](#modal)

```js
.setCustomId('modalCustomId')
```
Sets the Custom Id of the Modal.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *ModalCustomId*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Modal. |

> Returns: [Modal](#modal)

```js
.addComponents(TextInputComponent)
```
Adds the Components of the Modal.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *TextInputComponent*  |[TextInputComponent](#textinputcomponent)| The Text Input Component to add in the Modal. |

> Returns: [Modal](#modal)

```js
.setComponents(TextInputComponent)
```
Sets the Components of the Modal.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *TextInputComponent*  |[TextInputComponent](#textinputcomponent)| The Text Input Component to set in the Modal. |

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

> Returns: [APIModal](https://discord.com/developers/docs/interactions/message-components#text-inputs)

## TextInputComponent 
> extends [BaseMessageComponent](https://discord.js.org/#/docs/discord.js/stable/class/BaseMessageComponent)

Represents a Text Input Component.

| Properties |Methods|
| ------------ | ------------ |
|  `.customId`  | `.setCustomId()` |
|  `.label`  | `.setLabel()` |
|  `.minLength`  | `.setMinLength()` |
|  `.maxLength`  | `.setMaxLength()` |
|  `.placeholder`  | `.setPlaceholder()` |
|  `.required`  | `.setRequired()` |
|  `.style`  | `.setStyle()` |
|  `.value`  | `.setValue()` |

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
The Prefilled Value of the Text Input Component.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Methods

```js
.setCustomId('textinput-customid')
```
Sets the Custom Id of the Text Input Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *TextInputCustomId*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setLabel('textinput-label')
```
Sets the Label of the Text Input Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *TextInputLabel*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Label of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setMinLength(Number)
```
Sets the Minimum Length of the Text Input Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Number*  |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (Between 1 - 4000)| The Number of the Minimum Length of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setMaxLength(Number)
```
Sets the Maximum Length of the Text Input Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Number*  |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (Between 1 - 4000)| The Number of the Maximum Length of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

```js
.setPlaceholder('Text Input Placeholder')
```
Sets the Placeholder of the Text Input Component.

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
.setValue('Value')
```
Sets the Value of the Text Input Component.

| Parameter |Type|Description|
| ------------ | ------------ |------------ |
|  *Value*  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Prefilled Value of the Text Input Component. |

> Returns: [TextInputComponent](#textinputcomponent)

### TextInputComponentStyle

| Text |Value|Description|
| ------------ | ------------ |------------ |
|  SHORT  |1 [[Short]](https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles)| A single-line input |
|  LONG  |2 [[Paragraph]](https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles)| A multi-line input |

## ModalSubmitField
Represents a Field of a Modal Submit Interaction.

| Properties |Methods|
| ------------ | ------------ |
|  `.type`  |  |
|  `.customId`  |  |
|  `.value`  |  |

### Properties

#### .type
The type of the Modal Submit Field ('TEXT_INPUT').
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .customId
The Custom Id of the Modal Submit Field.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .value
The Value of the Modal Submit Field.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ModalSubmitInteraction
> extends [Interaction](https://discord.js.org/#/docs/discord.js/stable/class/Interaction)

Represents a Modal Submit Interaction.

| Properties |Methods|
| ------------ | ------------ |
|  `.customId`  | `.getTextInputValue()` |
|  `.fields`  | `.getField()` |
|    | `.deferReply()` |
|    | `.reply()` |
|    | `.fetchReply()` |
|    | `.editReply()` |
|    | `.deleteReply()` |
|    | `.followUp()` |

### Properties

#### .customId
The Custom Id of the Modal.
> Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### .fields
The (Fields) Text Input Components of the Modal.
> Returns: [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

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

# 🔨 Do you want to contribute to Discord-Modals?

- Check our [GitHub Repository](https://github.com/Mateo-tem/discord-modals) and Report Issues or make a Pull Request to contribute to this awesome project. We are waiting for you!

> **Powered by Discord-Modals**