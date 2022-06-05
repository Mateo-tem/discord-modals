'use strict';

const BaseMessageComponent = require('./BaseMessageComponent');
const ModalActionRow = require('./ModalActionRow');
const { MessageComponentTypes } = require('../util/Constants');
const Util = require('../util/Util');

/**
 * Represents a Select Menu Component of a Modal.
 * @extends {BaseMessageComponent}
 */
class SelectMenuComponent extends BaseMessageComponent {
  /**
   * Represents a Select Menu Component of a Modal.
   * @example
   * new SelectMenuComponent()
   * .setCustomId('menu-customid')
   * .setPlaceholder('Some text Here')
   * .addOptions(
   *   {
         label: "Option 1",
         description: "My first option",
         value: "option_1"
       },
       {
         label: "Option 2",
         description: "My second option",
         value: "option_2"
       }
   * );
   */
  constructor(data = {}) {
    super({ type: 'SELECT_MENU' });

    this.setup(data);
  }

  setup(data) {
    /**
     * The Custom Id of the Select Menu Component
     * @type {String}
     */
    this.customId = data.custom_id ?? data.customId ?? null;

    /**
     * The Placeholder (text when nothing is selected) of the Select Menu Component.
     * @type {String}
     */
    this.placeholder = data.placeholder ?? null;

    /**
     * Minimum number of selections allowed for the Select Menu Component.
     * @type {Number}
     */
    this.minValues = data.min_values ?? data.minValues ?? null;

    /**
     * Maximum number of selections allowed for the Select Menu Component.
     * @type {Number}
     */
    this.maxValues = data.max_values ?? data.maxValues ?? null;

    /**
     * The Options of the Select Menu Component.
     * @type {Array<APISelectMenuOption>}
     */
    this.options = this.constructor.normalizeOptions(data.options ?? []);

    /**
     * If the Select Menu Component is disabled.
     * @type {boolean}
     */
    this.disabled = data.disabled ?? false;
  }

  /**
   * Sets the Custom Id of a Select Menu Component.
   * @param {String} customId The Custom Id of a Select Menu Component.
   * @returns {SelectMenuComponent} A Select Menu Component.
   */
  setCustomId(customId) {
    this.customId = Util.verifyString(customId, RangeError, 'SELECT_MENU_CUSTOM_ID');
    return this;
  }

  /**
   * Sets a Boolean if a Select Menu Component will be disabled.
   * @param {boolean} [disabled=true] If the Select Menu Component will be disabled.
   * @returns {SelectMenuComponent} A Select Menu Component.
   */
  setDisabled(disabled = true) {
    this.disabled = disabled;
    return this;
  }

  /**
   * Sets the maximum number of selections allowed for the Select Menu Component.
   * @param {number} maxValues Number of selections to be allowed.
   * @returns {SelectMenuComponent} A Select Menu Component.
   */
  setMaxValues(maxValues) {
    this.maxValues = maxValues;
    return this;
  }

  /**
   * Sets the minimum number of selections allowed for the Select Menu Component.
   * @param {number} minValues Number of selections to be required.
   * @returns {SelectMenuComponent} A Select Menu Component.
   */
  setMinValues(minValues) {
    this.minValues = minValues;
    return this;
  }

  /**
   * Sets the placeholder of the Select Menu Component.
   * @param {string} placeholder The placeholder of the Select Menu Component.
   * @returns {SelectMenuComponent} A Select Menu Component.
   */
  setPlaceholder(placeholder) {
    this.placeholder = Util.verifyString(placeholder, RangeError, 'SELECT_MENU_PLACEHOLDER');
    return this;
  }

  /**
   * Adds options to the Select Menu Component.
   * @param {...APISelectMenuOptions} options The options to add.
   * @returns {SelectMenuComponent} A Select Menu Component.
   */
  addOptions(...options) {
    this.options.push(...this.constructor.normalizeOptions(options));
    return this;
  }

  /**
   * Sets the options of the Select Menu Component.
   * @param {...APISelectMenuOptions} options The options to set.
   * @returns {SelectMenuComponent} A Select Menu Component.
   */
  setOptions(...options) {
    this.spliceOptions(0, this.options.length, options);
    return this;
  }

  /**
   * Removes, replaces, and inserts options in the Select Menu Component.
   * @param {Number} index The index to start at.
   * @param {Number} deleteCount The number of options to remove.
   * @param {...APISelectMenuOptions} [options] The replacing option objects.
   * @returns {SelectMenuComponent} A Select Menu Component.
   */
  spliceOptions(index, deleteCount, ...options) {
    this.options.splice(index, deleteCount, ...this.constructor.normalizeOptions(...options));
    return this;
  }
  
  toJSON() {
    const actionRow = new ModalActionRow().addComponent(this);

    return actionRow.toJSON();
  }

  static normalizeOption(option) {
    let { label, value, description, emoji } = option;

    label = Util.verifyString(label, RangeError, 'SELECT_OPTION_LABEL');
    value = Util.verifyString(value, RangeError, 'SELECT_OPTION_VALUE');
    emoji = emoji ? Util.resolvePartialEmoji(emoji) : null;
    description = description ? Util.verifyString(description, RangeError, 'SELECT_OPTION_DESCRIPTION', true) : null;

    return { label, value, description, emoji, default: option.default ?? false };
  }

  static normalizeOptions(...options) {
    return options.flat(Infinity).map(option => this.normalizeOption(option));
  }
}

module.exports = SelectMenuComponent;
