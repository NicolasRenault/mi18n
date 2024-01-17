const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "lib/Mi18n.js"),
			name: "Mi18n",
			fileName: (format) => `Mi18n.${format}.js`,
		},
	},
});
