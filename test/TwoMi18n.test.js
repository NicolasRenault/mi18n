import { expect, test } from "vitest";
import TwoMi18n from "../lib/TwoMi18n.js";

test("New class", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
			"hello-world-2": "Hello world 2!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
			"hello-world-2": "Bonjour le monde 2 !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance.translations).toEqual(translations);
});

test("No translations", () => {
	expect(() => {
		new TwoMi18n();
	}).toThrow("undefined");
});

test("No default property", () => {
	const translations = {
		en: {
			"hello-world": "Hello world!",
			"hello-world-2": "Hello world 2!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
			"hello-world-2": "Bonjour le monde 2 !",
		},
	};

	expect(() => {
		new TwoMi18n(translations);
	}).toThrow("property");
});

test("No default language", () => {
	const translations = {
		default: "en",
		fr: {
			"hello-world": "Bonjour le monde !",
			"hello-world-2": "Bonjour le monde 2 !",
		},
	};

	expect(() => {
		new TwoMi18n(translations);
	}).toThrow("language");
});

test("translate method with no language", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
			"hello-world-2": "Hello world 2!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
			"hello-world-2": "Bonjour le monde 2 !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(() => {
		TwoMi18n_instance.translate("hello-world");
	}).toThrow("language");
});

test("translate method", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
			"hello-world-2": "Hello world 2!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
			"hello-world-2": "Bonjour le monde 2 !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance.translate("hello-world", "en")).toEqual(
		"Hello world!"
	);
	expect(TwoMi18n_instance.translate("hello-world", "fr")).toEqual(
		"Bonjour le monde !"
	);
});

test("translate method fallback to default language", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
			"hello-world-2": "Hello world 2!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
			"hello-world-2": "Bonjour le monde 2 !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance.translate("hello-world", "es")).toEqual(
		"Hello world!"
	);
});

test("translate method with 5 characters language code", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
			"hello-world-2": "Hello world 2!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
			"hello-world-2": "Bonjour le monde 2 !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance.translate("hello-world", "fr_FR")).toEqual(
		"Bonjour le monde !"
	);
});

test("translate method with 5 characters language code and no translation", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
			"hello-world-2": "Hello world 2!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
			"hello-world-2": "Bonjour le monde 2 !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance.translate("hello-world", "es_ES")).toEqual(
		"Hello world!"
	);
});

test("translate method when key not found", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world-2": "Hello world 2!",
		},
		fr: {
			"hello-world-2": "Bonjour le monde 2 !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance.translate("hello-world", "en")).toEqual(
		"[Two-Mi18n]hello-world"
	);
});

test("_getTranslationsLang method with no language", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
			"hello-world-2": "Hello world 2!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
			"hello-world-2": "Bonjour le monde 2 !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(() => {
		TwoMi18n_instance._getTranslationsLang();
	}).toThrow("language");
});

test("_getTranslationsLang method", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance._getTranslationsLang("en")).toEqual("en");
	expect(TwoMi18n_instance._getTranslationsLang("fr")).toEqual("fr");
});

test("_getTranslationsLang method fallback to default language", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance._getTranslationsLang("es")).toEqual("en");
});

test("_getTranslationsLang method fallback to 2 characters language code", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance._getTranslationsLang("fr_FR")).toEqual("fr");
});

test("_getTranslationsLang method fallback to 2 characters language code and no translation", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
		},
		fr: {
			"hello-world": "Bonjour le monde !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance._getTranslationsLang("es_ES")).toEqual("en");
});

test("_getTranslationsLang method with full word language code", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
		},
		Français: {
			"hello-world": "Bonjour le monde !",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance._getTranslationsLang("Français")).toEqual(
		"Français"
	);
});

test("_extractKeyAttribut method default behavior", () => {
	const translations = {
		default: "en",
		en: {
			"hello-world": "Hello world!",
		},
	};

	const TwoMi18n_instance = new TwoMi18n(translations);

	expect(TwoMi18n_instance._extractKeyAttribut("hello-world")).toEqual({
		key: "hello-world",
		attr: "innerText",
	});
});

//! Cannot test the method translateHTML because it's using DOM elements.
//! If you have an idea, please tell me or feel free to contribute. https://github.com/NicolasRenault/two-mi18n/issues/
