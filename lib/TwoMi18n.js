/**
 * TwoMi18n.js
 * Minimalist internationalization javascript library client-side. Really minimalist.
 *
 * @author Nicolas Renault https://nicolasrenault.com
 * @license MIT
 * @see https://github.com/NicolasRenault/two-mi18n
 */
export default class TwoMi18n {
	/**
	 * Create a Two-Mi18n instance.
	 * @param {Object} translations - The translations object. This object should contain a default property and at least a property for the default language.
	 * @throws {Error} If the object translations is not defined or if the default language is not defined.
	 */
	constructor(translations) {
		try {
			if (translations) {
				if (translations.default === undefined)
					throw new Error("The 'default' property is not defined.");
				if (translations[translations.default] === undefined)
					throw new Error(
						`The default language "${translations.default}" is not defined in the translations object.`
					);
			} else {
				throw new Error(
					"The translations object is null or undefined."
				);
			}
		} catch (error) {
			throw new Error(
				"[Two-Mi18n] Something is wrong with the translation object:\n" +
					error.message
			);
		}

		this.translations = translations;
	}

	/**
	 * Load the translations for a specific language.
	 * Take all the HTML elements with the attribute data-Two-Mi18n and replace the content with the translation.
	 * @param {string} lang - The language to load translations for.
	 */
	translateHTML(lang) {
		const translationLang = this._getTranslationsLang(lang);
		const TwoMi18n_elements = document.querySelectorAll("[data-TwoMi18n]");

		TwoMi18n_elements.forEach((element) => {
			element.dataset.twomi18n.split(" ").forEach((data) => {
				const { key, attr } = this._extractKeyAttribut(data);
				let translation = this.translations[translationLang][key];

				if (!translation)
					translation =
						this.translations[this.translations.default][key];

				//TODO : Check if translation is undefined and make tanslation = "[Two-Mi18n]" + key

				if (attr === "innerText") {
					element[attr] = translation;
				} else {
					element.setAttribute(attr, translation);
				}
			});
		});
	}

	/**
	 * Get the translation at a specific key for a specific language.
	 * @param {string} key - The key to translate.
	 * @param {string} lang - The language to translate into.
	 * @returns {string} The translated string.
	 */
	translate(key, lang) {
		const translationLang = this._getTranslationsLang(lang);
		//TODO : Check if translation is undefined and make tanslation = "[Two-Mi18n]" + key

		return this.translations[translationLang][key] ?? "";
	}

	/**
	 * Get the translations for a specific language.
	 * If language not exist, slice it at format xx.
	 * If still not exist, set to the default language.
	 *
	 * @private
	 * @param {string} lang - The language to get translations for.
	 * @returns {string} The language code.
	 */
	_getTranslationsLang(lang) {
		if (!lang) throw new Error("[Two-Mi18n] No language specified.");

		//Check a first time if the language code exist. If not, slice it at format xx.
		if (!(lang in this.translations)) lang = lang.slice(0, 2);

		//Check if language exist. If not, set to the default
		if (!(lang in this.translations)) lang = this.translations.default;

		return lang;
	}

	/**
	 * Extract the key and attribute from a text string.
	 * @private
	 * @param {string} text - The text to extract from.
	 * @returns {Object} An object containing the key and attribute.
	 */
	_extractKeyAttribut(text) {
		const regex = /^(.*?)\[(.*?)\]/;
		const matches = text.trim().match(regex);

		if (matches) {
			return { key: matches[1], attr: matches[2] };
		} else {
			return { key: text, attr: "innerText" };
		}
	}
}
