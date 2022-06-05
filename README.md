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

**What is that?** Modal is a popup of Text Input Components [[Example]](https://discord.com/assets/2087c4210e4723cc26ac1b265940c499.png). It's so cool and useful for many commands that needs arguments. Discord-Modals can be a solution if you want to test or use Modals right now. **Supports discord.js v13 and v14. Try it!**

# ✨ Setup
The most recommended is to put this on your main file.

```js
const { Client } = require('discord.js'); // Get the Client class
const client = new Client({ intents: 32767 }); // Create a Discord Client
const discordModals = require('discord-modals'); // Define the discord-modals package!
discordModals(client); // discord-modals needs your client in order to interact with modals

client.login('token'); // Login with your bot
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

> **Important:** Modals also support select menus. So, you need to know the select menu structure.

# 📜 Examples

If you are ready, take this examples.

- First, we are going to create a Modal.

```js
const { Modal } = require('discord-modals'); // Modal class

const modal = new Modal() // We create a Modal
.setCustomId('modal-customid')
.setTitle('Modal')
.addComponents();
```
> **This is a basic structure of a Modal, but something is missing. Yeah! Components.**

- We are going to create and add a Text Input Component and a Select Menu to the Modal.

```js
const { Modal, TextInputComponent, SelectMenuComponent } = require('discord-modals'); // Import all

const modal = new Modal() // We create a Modal
.setCustomId('modal-customid')
.setTitle('Modal')
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('name')
  .setLabel('Name')
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setPlaceholder('Write your name here')
  .setRequired(true), // If it's required or not

  new SelectMenuComponent() // We create a Select Menu Component
  .setCustomId('theme')
  .setPlaceholder('What theme of Discord do you like?')
  .addOptions(
    {
      label: "Dark",
      description: "The default theme of Discord.",
      value: "dark",
      emoji: "⚫"
    },
    {
      label: "Light",
      description: "Some people hate it, some people like it.",
      value: "light",
      emoji: "⚪"
    }
  )
);
```

> **Yay! We have the full Modal, but... How can i send/show a Modal?**

- We are going to use the `showModal()` method to send the modal in an interaction.

```js
const { Modal, TextInputComponent, SelectMenuComponent } = require('discord-modals'); // Import all

const modal = new Modal() // We create a Modal
.setCustomId('modal-customid')
.setTitle('Modal')
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('name')
  .setLabel('Name')
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setPlaceholder('Write your name here')
  .setRequired(true), // If it's required or not

  new SelectMenuComponent() // We create a Select Menu Component
  .setCustomId('theme')
  .setPlaceholder('What theme of Discord do you like?')
  .addOptions(
    {
      label: "Dark",
      description: "The default theme of Discord.",
      value: "dark",
      emoji: "⚫"
    },
    {
      label: "Light",
      description: "Some people hate it, some people like it.",
      value: "light",
      emoji: "⚪"
    }
  )
);

client.on('interactionCreate', (interaction) => {
  // Let's say the interaction will be a Slash Command called 'ping'.
  if(interaction.commandName === 'ping'){
    showModal(modal, {
      client: client, // Client to show the Modal through the Discord API.
      interaction: interaction // Show the modal with interaction data.
    });
  }
  
});

```

> **Congrats! You show the Modal to the Interaction User. Now, how can i receive the Modal Interaction?**

## 📢 Events: Receiving Modal Submit Interaction and extracting data

- discord-modals integrates to your Client a new event called `modalSubmit`. We are going to use it.
- To have access to the responses, just use the `.getTextInputValue()` method with the Custom Id of the Text Input Component, or if you use Select Menus, the same way, use the `.getSelectMenuValues()` method with the Custom Id of the Select Menu Component.

> **Recommendation:** Put your `modalSubmit` event on your main file or in an Event Handler.

```js
client.on('modalSubmit', async (modal) => {
  if(modal.customId === 'modal-customid') {
    const nameResponse = modal.getTextInputValue('name');
    const themeResponse = modal.getSelectMenuValues('theme');
    modal.reply(`Thank you for answering the form! Powered by discord-modals.\nSo, you are **${nameResponse}** and you like the **${themeResponse}** theme. Awesome!`);
  }  
});
```

> **And you made it! I hope this examples help you :)**

<img src="https://user-images.githubusercontent.com/79017590/172033349-816d4b8f-ab1b-4cb4-9d7a-f4919ba9aa70.gif" alt="Modal Test" width=700 />

# 📚 Documentation
- Check our documentation [here](https://github.com/Mateo-tem/discord-modals/blob/master/DOCS.md).

# ❓ FAQ

Can I show a modal, replying to a modal?
- No, Discord API don't support that, but there are plans to add that.

Can I add buttons/select menus to modals?

- Yes, but only select menus are supported at this moment. Discord API have plans to add other type of components. Be patient :)

Can I show a modal in a message?

- No, modals are **only for interactions** (Select Menus, Slash Commands, Buttons and Context Menu Commands). They are a response for interactions.

Can I add more than 5 Components in a modal?

- No, a modal supports **5 Action Rows (containing 1 Text Input Component or Select Menu per row)**. There is no plans in Discord API to increase the amount of rows per modal.

DiscordAPIError: Interaction has already been acknowledged.

- The `showModal()` method is a response of an interaction. also `reply()` or `deferReply()` are responses of an interaction.
If you give a response, you can't give a response again. So you need to remove `reply()` or `editReply()` on your code.

- If that doesn't work, probably you have the `modalSubmit` event on the same file of your command, please just add it to a event handler or just separate it.

# 🔨 Developers
- 『𝑴𝒂𝒕𝒆𝒐ᵗᵉᵐ』#9999

# ⛔ Issues/Bugs?
> **Please report it on our GitHub Repository [here](https://github.com/Mateo-tem/discord-modals/issues) to fix it inmmediately or join to the support server.**

> **Credits:** This package is based on discord.js, code base was extracted for this.
