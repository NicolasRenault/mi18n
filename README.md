# two-mi18n

> Minimalist Javascript library for internationalization in only two methods. Too minimalist.

`Two Mi18n` is a Javascript library for translating websites directly on the client.
The goal of this library is to provide the easiest way to translate any website.

-   Minimalist and easy to use: Only two methods
-   Lightweight: ~1.6 KB minified
-   Client-side oriented

## Getting started

### Installation

Since it is Client-side oriented, the best way to use it is to call the CDN with this script tag:

```html
<script
	defer
	src="https://unpkg.com/two-mi18n@latest/dist/TwoMi18n.umd.js"
></script>
```

### Usage

#### The translation object

The translation object is a simple Javascript object that contains the translations. The keys are the translation keys and the values are the translations.

**The translation object must have a `default` key that contains the default language. The default language value must exist in the translation object**

```js
const translations = {
	default: "en",
	en: {
		hello: "Hello",
		world: "World",
	},
	fr: {
		hello: "Bonjour",
		world: "Monde",
	},
};
```

#### The `TwoMi18n` object

The `TwoMi18n` object is the main object of the library. It contains the two methods of the library.

**The translation object will be validated by the `TwoMi18n` constructor. If the translation object is not valid, an error will be thrown.**

```js
const twoMi18n = new TwoMi18n(translations);
```

#### Translate in Javascript

The `translate` method is the method that will translate the website. It takes two arguments:

-   `key`: The translation key
-   `lang`: The language to translate to

```js
twoMi18n.translate("hello", "fr"); // Bonjour
```

#### Translate in HTML

In the HTML, add the `data-twomi18n` attribute to the elements that need to be translated. The value of the attribute is the translation key.

```html
<h1 data-twomi18n="hello"></h1>
```

The `translateHTML` method is the method that will translate all the elements with the `data-twomi18n` attribute.

It takes one argument:

-   `lang`: The language to translate to

```js
twoMi18n.translateHTML("fr");
```

##### Translate HTML attributes

The `translateHTML` method can also translate HTML attributes. To specify the attribute to translate, add the attribute name after the translation key between brackets.

```html
<input type="text" data-twomi18n="hello[placeholder]"></input>
```

You can translate multiple attributes by separating them with a space.

```html
<input
    type="text"
    data-twomi18n="world hello[placeholder] world[title]"
></input>
```

**Note: When the attribut is not specified, the `innerText` attribute is used.**

#### Full example

```html
<header>
	<h1 data-twomi18n="hello"></h1>
    <input
        type="text"
        data-twomi18n="world hello[placeholder] world[title]"
    ></input>
</header>

<script
	defer
	src="https://unpkg.com/two-mi18n@latest/dist/TwoMi18n.umd.js"
></script>

<script defer>
	const translations = {
		default: "en",
		en: {
			hello: "Hello",
			world: "World",
		},
		fr: {
			hello: "Bonjour",
			world: "Monde",
		},
	};

	const twoMi18n = new TwoMi18n(translations);

	twoMi18n.translateHTML("fr");
</script>
```

See the full documentation on [twomi18n.nicolasrenault.com](https://twomi18n.nicolasrenault.com/).

## Contribute

If you want to contribute to the project, you can open an [issue](https://github.com/NicolasRenault/two-mi18n/issues/new) or a [pull request](https://github.com/NicolasRenault/two-mi18n/compare).

## License

[MIT](https://github.com/NicolasRenault/two-mi18n/blob/main/LICENSE)
