# Documentation of Discord-Modals

<div align="center">
  <img src="https://cdn.discordapp.com/attachments/910547379617402960/942871547268436088/Discord-Modals.png" alt="Discord Modals" />
  <p align="center">
  <a href="https://www.npmjs.com/package/discord-modals">
    <img src="https://img.shields.io/npm/dt/discord-modals?style=for-the-badge" alt="npm" />
  </a>

  <a href="https://discord.gg/dscbots">
    <img src="https://img.shields.io/discord/852531635252494346?color=5865F2&label=Discord Server&style=for-the-badge" alt="Discord Server" />
  </a>
</p>

</div>

> **A package that allows your bot of discord.js v13 to create the new Discord Modals and interact with them.**

# 🔎 Installation

```sh
npm install discord-modals
```

# 📌 General

### Methods

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.showModal(modal, { client: Client, interaction: Interaction })`  |[Modal](#modal)| Shows the Modal to the Interaction User. |

# 🧩 Classes

## Modal

| Properties |Methods|
| ------------ | ------------ |
|  `.title`  | `.setTitle()` |
|  `.customId`  | `.setCustomId()` |
|  `.components`  | `.addComponents()` |
|    | `.setComponents()` |
|    | `.spliceComponents()` |
|    | `.toJSON()` |

### Properties

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.title`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Title of the Modal. |

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.customId`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Modal. |

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.components`  |[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)| The Text Input Components of the Modal. |

### Methods

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setTitle('modalTitle')`  |[Modal](#modal)| Sets the Title of the Modal. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setCustomId('modalCustomId')`  |[Modal](#modal)| Sets the Custom Id of the Modal. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.addComponents(TextInputComponent)`  |[Modal](#modal)| Adds the Components of the Modal. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setComponents(TextInputComponent)`  |[Modal](#modal)| Sets the Components of the Modal. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.spliceComponents()`  |[Modal](#modal)| Removes, replaces, and inserts components in the modal. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.toJSON()`  |[APIModal](https://discord.com/developers/docs/interactions/message-components#text-inputs)| Splice the Components of the Modal. |

## TextInputComponent (extends [BaseMessageComponent](https://discord.js.org/#/docs/discord.js/stable/class/BaseMessageComponent))

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

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.customId`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Text Input Component. |

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.label`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The label of a Text Input Component. |

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.minLength`  |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)| The minimum length of characters of a Text Input Component. |

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.maxLength`  |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)| The maximum length of characters of a Text Input Component. |

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.placeholder`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Placeholder of a Text Input Component. |

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.required`  |[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)| If a Text Input Component is required. |

### Methods

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setCustomId('textinput-customid')`  |[TextInputComponent](#textinputcomponent-extends-basemessagecomponenthttpsdiscordjsorgdocsdiscordjsstableclassbasemessagecomponent)| Sets the Custom Id of a Text Input Component. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setLabel('label')`  |[TextInputComponent](#textinputcomponent-extends-basemessagecomponenthttpsdiscordjsorgdocsdiscordjsstableclassbasemessagecomponent)| Sets the Label of a Text Input Component. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setMinLength(Number)`  |[TextInputComponent](#textinputcomponent-extends-basemessagecomponenthttpsdiscordjsorgdocsdiscordjsstableclassbasemessagecomponent)| Sets the Minimum Length of a Text Input Component. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setMaxLength(Number)`  |[TextInputComponent](#textinputcomponent-extends-basemessagecomponenthttpsdiscordjsorgdocsdiscordjsstableclassbasemessagecomponent)| Sets the Maximum Length of a Text Input Component. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setPlaceholder('textinput-placeholder')`  |[TextInputComponent](#textinputcomponent-extends-basemessagecomponenthttpsdiscordjsorgdocsdiscordjsstableclassbasemessagecomponent)| Sets the Placeholder of a Text Input Component. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setRequired(Boolean)`  |[TextInputComponent](#textinputcomponent-extends-basemessagecomponenthttpsdiscordjsorgdocsdiscordjsstableclassbasemessagecomponent)| Sets a Boolean if a Text Input Component is required. Default: false |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setStyle('SHORT or LONG')`  |[TextInputComponent](##textinputcomponent-extends-basemessagecomponenthttpsdiscordjsorgdocsdiscordjsstableclassbasemessagecomponent)| Sets the style of a Text Input Component. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setValue('textinput-prefilledvalue')`  |[TextInputComponent](#textinputcomponent-extends-basemessagecomponenthttpsdiscordjsorgdocsdiscordjsstableclassbasemessagecomponent)| Sets a prefilled value of a Text Input Component. |

## ModalSubmitField

| Properties |Methods|
| ------------ | ------------ |
|  `.type`  |  |
|  `.customId`  |  |
|  `.value`  |  |

### Properties

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.type`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The type of the Modal Submit Field ('TEXT_INPUT'). |

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.customId`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Modal Submit Field. |

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.value`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The value of the Modal Submit Field. |


## ModalSubmitInteraction (extends [Interaction](https://discord.js.org/#/docs/discord.js/stable/class/Interaction))

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

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.customId`  |[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The Custom Id of the Modal. |

| Name |Type|Description|
| ------------ | ------------ |------------ |
|  `.fields`  |[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)| The (Fields) Text Input Components of the Modal. |

### Methods

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.getTextInputValue('textinput-customid')`  |Number([TextInputComponent#customId](#textinputcomponent-extends-basemessagecomponenthttpsdiscordjsorgdocsdiscordjsstableclassbasemessagecomponent))| Gets a Text Input Component value. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.getField('textinput-customid')`  |[ModalSubmitField](#modalsubmitfield)| Gets a Modal Submit Field. |

# 🔨 Do you want to contribute to Discord-Modals?

- Check our [GitHub Repository](https://github.com/Mateo-tem/discord-modals) and Report Issues or make a Pull Request to contribute to this awesome project. We are waiting for you!

> **Powered by Discord-Modals**