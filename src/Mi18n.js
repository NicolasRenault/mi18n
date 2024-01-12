/**
 * Mi18n.js
 * Minimalist internationalization javascript library client-side. Really minimalist.
 *
 * @author Nicolas Renault https://nicolasrenault.com
 */
class Mi18n {
	/**
	 * Create a Mi18n instance.
	 * @param {Object} translations - The translations object. This object should contain a default property and at least a property for the default language.
	 * @throws {Error} If the array translations is not defined or if the default language is not defined.
	 */
	constructor(translations) {
		try {
			if (translations) {
				if (translations.default === undefined)
					throw new Error("default property is not defined.");
				if (translations[translations.default] === undefined)
					throw new Error(
						`The default language "${translations.default}" is not defined`
					);
			}
		} catch (error) {
			throw new Error(
				"[Mi18n] Something is wrong with the translation array:\n" +
					error.message
			);
		}

		this.translations = translations;
	}

	/**
	 * Load the translations for a specific language.
	 * Take all the HTML elements with the attribute data-Mi18n and replace the content with the translation.
	 * @param {string} lang - The language to load translations for.
	 */
	loadTranslations(lang) {
		const translationLang = this.#getTranslationsLang(lang);
		const Mi18n_elements = document.querySelectorAll("[data-Mi18n]");

		Mi18n_elements.forEach((element) => {
			element.dataset.mi18n.split(" ").forEach((data) => {
				const { key, attr } = this.#extractKeyAttribut(data);
				let translation = this.translations[translationLang][key];

				if (!translation)
					translation =
						this.translations[this.translations.default][key];

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
		const translationLang = this.#getTranslationsLang(lang);
		return this.translations[translationLang][key] ?? "";
	}

	/**
	 * Get the translations for a specific language.
	 * @private
	 * @param {string} lang - The language to get translations for.
	 * @returns {string} The language code.
	 */
	#getTranslationsLang(lang) {
		//Check if language code on format xx_XX exist. If not, slice it at format xx.
		if (lang.length == 5 && !(lang in this.translations))
			lang = lang.slice(0, 2);

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
	#extractKeyAttribut(text) {
		const regex = /^(.*?)\[(.*?)\]/;
		const matches = text.match(regex);

		if (matches) {
			return { key: matches[1], attr: matches[2] };
		} else {
			return { key: text, attr: "innerText" };
		}
	}
}

export default Mi18n;
