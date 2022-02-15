# Documentation of Discord-Modals (Dev)

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

# 📌 Classes

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
|  `.setTitle()`  |Modal| Sets the Title of the Modal. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setCustomId()`  |Modal| Sets the Custom Id of the Modal. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.addComponents()`  |Modal| Adds the Components of the Modal. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.setComponents()`  |Modal| Sets the Components of the Modal. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.spliceComponents()`  |Modal| Splice the Components of the Modal. |

| Name |Returns|Description|
| ------------ | ------------ |------------ |
|  `.toJSON()`  |[APIModal](https://discord.com/developers/docs/interactions/message-components#text-inputs)| Splice the Components of the Modal. |
