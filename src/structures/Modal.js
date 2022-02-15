const BaseMessageComponent = require("./BaseMessageComponent")
const { Util } = require("discord.js")

class Modal {
  constructor(data = {}, client = null) {

    this.components = data.components?.map(c => BaseMessageComponent.create(c, client)) ?? [];

    this.customId = data.custom_id ?? data.customId ?? null;

    this.title = data.title ?? null;

  }

  addComponents(...components) {
    this.components.push(...components.flat(Infinity).map(c => BaseMessageComponent.create(c)));
    return this;
  }

  setComponents(...components) {
    this.spliceComponents(0, this.components.length, components);
    return this;
  }

  setCustomId(customId) {
    this.customId = Util.verifyString(customId, RangeError, 'MODAL_CUSTOM_ID');
    return this;
  }

  spliceComponents(index, deleteCount, ...components) {
    this.components.splice(index, deleteCount, ...components.flat(Infinity).map(c => BaseMessageComponent.create(c)));
    return this;
  }
  
  setTitle(title) {
    this.title = Util.verifyString(title, RangeError, 'MODAL_TITLE');
    return this;
  }

  toJSON() {
    return {
      components: this.components.map(c => c.toJSON()),
      custom_id: this.customId,
      title: this.title,
    };
  }
}

module.exports = Modal;