# 🎈 Discord-Modals Change log

Hello! This is the Change log section of Discord-Modals. Here you can see what things have been changed in the different versions to be informed. This will be updated every time there are new versions. I hope you like this package :)

## v1.1.8 (Stable)

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