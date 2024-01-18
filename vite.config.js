const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "lib/TwoMi18n.js"),
			name: "TwoMi18n",
			fileName: (format) => `TwoMi18n.${format}.js`,
		},
	},
});
