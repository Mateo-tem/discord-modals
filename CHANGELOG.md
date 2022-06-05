# 🎈 Discord-Modals Change log

Hello! This is the Change log section of Discord-Modals. Here you can see what things have been changed in the different versions, to be informed. This will be updated every time there are new versions. I hope you enjoy this package :)

# v1.3.7 (Stable)

**Surprise!** We are back.

**Featured:** Discord Developers announced Select Menus in modals, they are about to finish to develop it, but you can use it now.
**So, now Discord-Modals supports Select Menus in modals!** 🎉

- Chore: Support Select Menus in Modals.
- Chore: Some improvements to FAQ.
- Chore: [Select Menus] Update readme to new examples.
- Chore: [Select Menus] Update docs.

# v1.3.6

**Probably** this will be the final version of Discord-Modals. Thank you so much for all the support!

**Why?** discord.js just released modals on v13.7 and in v14 (dev - unstable). In a very short time, this package will no longer make much sense when it already exists (on all the actual versions).

- Fix: Ephemeral option when replying to the Modal Submit Interaction.
- Add FAQ to readme.

# v1.3.5

- Style and Code Cleanup: All files.
- Chore: Add eslint.

# v1.3.4

- Fix: JSON Modals on `.showModal()` didn't work.

# v1.3.3

- TypeScript Compatibility: Add `.init()` method.
- Fix: Readme example type error `.addComponents()` on `Modal` class.

# v1.3.2

- Compatibility: change `discord-api-types` enums from `v10` to `v9`.
- `Modal` and `ModalSubmitInteraction` class: Now the `.components` property returns `ModalActionRow`s.
- Code cleanup.

# v1.3.1
- Fix: change `discord-api-types` enums from `v9` to `v10`.

# v1.3.0

- Fix bug: 'INVALID_CLIENT' error when the Client is valid on `.showModal()` method.
- Now the `TextInputComponent` returns an **Action Row Component**. Add `ModalActionRow` class and types.
- **Featured:** Now the `.showModal()` method supports **JSON Modals**.
- Fix error typings `ModalSubmitField`.
- **Featured:** Implement `.update()` method to `ModalSubmitInteraction` class.
- Fix types: `.showModal()` method, `.addComponents()` and `.setComponents()` of `Modal` class.
- Typings: `discord-api-types` updated to **v10**.

# v1.2.9 (Stable)

- Fix: Add types for reply options on `ModalSubmitInteraction` class.

# v1.2.8

- Fix: Add setPlaceholder type definition missing of `TextInputComponent` class.

# v1.2.7

- Fix types in the declaration file.
- Align documentation with typings.
- Fix bug (Compatibility with discord.js v14)
- Fix examples issues (Readme)

# v1.2.6

- Add types of discord-api-types/v9 in the declaration file.
- Add `.isRepliable()` and `.isFromMessage()` methods to `ModalSubmitInteraction` class.
- Add discord-modals to yarn.
- Update Readme and docs (yarn).

# v1.2.5

- Fix and add missing types in declaration file.
- Update Readme (Aspect: Example Code Block Formatter).
- package.json fixes.

# v1.2.4

> 🎉 **Important Update:**

- Add examples to constructors of the Classes.
- Fix error of `ModalSubmitField` class, if the field has not a valid value, before returns a empty string, now returns null.
- **Featured:** Add discord.js v14 (Dev) Support.
- **Featured:** Add TypeScript Support.
- Update documentation (djs v14).
- Update Readme (djs v14).

# v1.2.3

- Change `TextInputComponent` class method `.setValue()` to `.setDefaultValue()`.
- Documentation: Add limits and specifications to classes and update `TextInputComponent` class.

## v1.2.2

- Add recomendations on readme.
- Add `.message` property to `ModalSubmitInteraction` class. Some code cleanup there.
- Add types to Classes properties.
- Documentation: Add `ModalSubmitInteraction` class properties and add Errors codes & messages.
- Fix the `'INTERACTION_REQUIRED'` error message.

## v1.2.0 & v1.2.1

- Fix issue of errors.

## v1.1.9

- Add examples to classes. More comprehension.
- Improvements to documentation and fix errors.
- More organization in errors.
- Update readme.

## v1.1.8

- Fix compatibility issues. Now the package throws an error if you have a different version than discord.js v13 to avoid confusions.
- Update readme.

## v1.1.7

- Fix `.getTextInputValue()` & `.getField()` method of `ModalSubmitInteraction` class. Now if the customId is incorrect throws null.

## v1.1.6

- Add Errors directory and files.
- Fix `ModalSubmitInteraction#type` bug. Before returns 5, now returns 'MODAL_SUBMIT' type.
- Fix `.toJSON()` method of `TextInputComponent` class. Previously did not return the value.
- Fix `.getTextInputValue()` method of `ModalSubmitInteraction` class. Now if the customId is incorrect throws null.
- A little bit of code cleanup & maintenance. 

## v1.1.5

- Add Changelog file.
- Finish docs file.
- Add `ModalSubmitField` class, add `ModalSubmitInteraction#fields` property and add `.getField()` and `.getTextInputValue()` methods to `ModalSubmitInteraction` class.
- Update Readme with new Examples and fix typos.

## v1.1.4

- Fix ephemeral reply bug
- Add reply examples to readme.

## v1.1.3

- Update readme (Only compatible on discord.js v13)

## v1.1.2

- Fix `ModalSubmitInteraction#guild` bug (undefined).

## v1.1.1

- Fix `ModalSubmitInteraction#components` bug.
- Update readme with new examples.
- Add Docs file.

> **Powered by Discord-Modals**
