'use strict';

/**
 * Represents a Field of a Modal Submit Interaction.
 */

class ModalSubmitField {
	constructor(data = {}) {
		/**
		 * The type of the Modal Submit Field.
		 * @type {String}
		 */

		this.type = 'TEXT_INPUT';

		this.setup(data);
	}

	setup(data) {
		/**
		 * The Custom Id of the Modal Submit Field.
		 * @type {String}
		 */

		this.customId = data.custom_id ?? null;

		/**
		 * The Value of the Modal Submit Field.
		 * @type {String}
		 */

		switch (data.value.trim().length) {
			case 0:
				this.value = null;
				break;

			default:
				this.value = data.value ?? null;
		}
	}
}

module.exports = ModalSubmitField;
