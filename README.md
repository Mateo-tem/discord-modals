<div align="center">
  <img src="https://cdn.discordapp.com/attachments/910547379617402960/942871547268436088/Discord-Modals.png" alt="Discord Modals" />
  <p align="center">
  <a href="https://www.npmjs.com/package/discord-modals">
    <img src="https://img.shields.io/npm/dt/discord-modals?style=for-the-badge" alt="npm" />
  </a>

  <a href="https://discord.gg/jD3xDVsqdr">
    <img src="https://img.shields.io/discord/852531635252494346?color=5865F2&label=Discord Server&style=for-the-badge" alt="Discord Server" />
  </a>
</p>

</div>

> **A package that allows your discord.js v13 and v14 bot to create, and interact with Modals, a new Discord feature.**

# 🔎 Installation

```sh
npm install discord-modals
yarn add discord-modals
```

# 🔮 What is this package for?

Recently, Discord API officialy announced **[Modal Interactions](https://discord.com/developers/docs/change-log#interaction-modals-and-application-command-attachment-option-type)**.

**What is that?** Modal is a popup of Text Input Components [[Example]](https://media.discordapp.net/attachments/910547379617402960/942881133379612682/Modals_Test.png?width=881&height=559). It's so cool and useful for many commands that needs arguments. However, discord.js hasn't added it yet. Discord-Modals can be a solution if you want to test or use Modals right now. **Supports discord.js v13 and v14. Try it!**

# ✨ Setup
The most recommended is to put this on your main file.

```js
const { Client } = require('discord.js') // Get the Client class
const client = new Client({ intents: 32767 }) // Create a Discord Client
const discordModals = require('discord-modals') // Define the discord-modals package!
discordModals(client); // discord-modals needs your client in order to interact with modals

client.login('token') // Login with your bot
```

> **Important:** Don't forget to put `discordModals(client)`, will be essential to receive the Modal Submit Interaction.

# ❓ How can i use it?

> First of all, we need to understand that Modals and Text Input Components are completely different. Modals is a popup that shows the text input components and text input are the components of modals. To understand better, you can explore the Discord API Documentation [here](https://discord.com/developers/docs/interactions/message-components#text-inputs).

**Modals have:**
- A Title
- A Custom Id
- Components (Action Rows with Text Inputs)

**Text Inputs have:**
- A Custom Id
- A Style (Short or Paragraph)
- A Label
- A minimum length
- A maximum length
- A value (A prefilled value if there is not text)
- And...a placeholder

If you have understood this, you can continue on "Examples" section.

# 📜 Examples

If you are ready, take this examples.

- First, we are going to create a Modal.

```js
const { Modal } = require('discord-modals') // Modal class

const modal = new Modal() // We create a Modal
.setCustomId('customid')
.setTitle('Test of Discord-Modals!')
.addComponents()
```
> **This is a basic structure of a Modal, but something is missing. Yeah! Text Input components.**

- We are going to create and add a Text Input Component to the Modal.

```js
const { Modal, TextInputComponent } = require('discord-modals') // Modal and TextInputComponent class

const modal = new Modal() // We create a Modal
.setCustomId('modal-customid')
.setTitle('Test of Discord-Modals!')
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('textinput-customid')
  .setLabel('Some text Here')
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(4)
  .setMaxLength(10)
  .setPlaceholder('Write a text here')
  .setRequired(true) // If it's required or not
);
```

> **Yay! We have the full Modal & Text Input Component, but... How can i send/show a Modal?**

- We are going to use the `showModal()` method to send the modal in an interaction.

```js
const { Modal, TextInputComponent, showModal } = require('discord-modals') // Now we extract the showModal method

const modal = new Modal() // We create a Modal
.setCustomId('modal-customid')
.setTitle('Test of Discord-Modals!')
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('textinput-customid')
  .setLabel('Some text Here')
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(4)
  .setMaxLength(10)
  .setPlaceholder('Write a text here')
  .setRequired(true) // If it's required or not
);

client.on('interactionCreate', (interaction) => {
  // Let's say the interaction will be a Slash Command called 'ping'.
  if(interaction.commandName === 'ping'){
    showModal(modal, {
      client: client, // Client to show the Modal through the Discord API.
      interaction: interaction // Show the modal with interaction data.
    })
  }
  
});

```

> **Congrats! You show the Modal to the Interaction User. Now, how can i receive the Modal Interaction?**

## 📢 Events: Receiving Modal Submit Interaction

- discord-modals integrates to your Client a new event called `modalSubmit`. We are going to use it.
- To have access to the responses, just use the `.getTextInputValue()` method with the Custom Id of the Text Input Component.

> **Recommendation:** Put your `modalSubmit` event on your main file or in an Event Handler.

### Reply Examples

- Usual Reply:

```js
const { Formatters } = require('discord.js');

client.on('modalSubmit', async (modal) => {
  if(modal.customId === 'modal-customid'){
    const firstResponse = modal.getTextInputValue('textinput-customid')
    modal.reply('Congrats! Powered by discord-modals.' + Formatters.codeBlock('markdown', firstResponse))
  }  
});
```

- Ephemeral Reply:

```js
const { Formatters } = require('discord.js');

client.on('modalSubmit', async (modal) => {
  if(modal.customId === 'modal-customid'){
    const firstResponse = modal.getTextInputValue('textinput-customid')
    await modal.deferReply({ ephemeral: true })
    modal.followUp({ content: 'Congrats! Powered by discord-modals.' + Formatters.codeBlock('markdown', firstResponse), ephemeral: true })
  }  
});
```

> **And you made it! I hope this examples help you :)**

![Final Result](https://cdn.discordapp.com/attachments/910547379617402960/943208236478247032/Discord-Modals-Test.gif)

# 📚 Documentation
- Check our documentation [here](https://github.com/Mateo-tem/discord-modals/blob/master/DOCS.md).

# 🔨 Developers
- 『𝑴𝒂𝒕𝒆𝒐ᵗᵉᵐ』#9999

# ⛔ Issues/Bugs?
> **Please report it on our GitHub Repository [here](https://github.com/Mateo-tem/discord-modals/issues) to fix it inmmediately or join to the support server.**

> **Credits:** This package is based on discord.js, code base was extracted for this.