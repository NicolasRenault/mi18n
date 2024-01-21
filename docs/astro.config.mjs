import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Two Mi18n",
			social: {
				github: "https://github.com/NicolasRenault/two-mi18n",
			},
			sidebar: [
				{
					label: "Getting Started",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Getting Started", link: "/guides/example/" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
