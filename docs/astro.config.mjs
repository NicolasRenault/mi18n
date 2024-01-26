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
					label: "Start Here",
					items: [
						{ label: "Getting Started", link: "/getting-started" },
					],
				},
				{
					label: "Concept",
					items: [
						{
							label: "Why Two Mi18n",
							link: "/concept/why-two-mi18n",
						},
						{ label: "Examples", link: "/concept/examples" },
					],
				},
				{
					label: "Usages",
					items: [
						{
							label: "Initialization",
							link: "/usages/initialization",
						},
						{ label: "translate()", link: "/usages/translate" },
						{
							label: "translateHTML()",
							link: "/usages/translate-html",
						},
					],
				},
				{
					label: "References",
					items: [
						{ label: "Fallbacks", link: "/references/fallbacks" },
						{
							label: "Errors",
							link: "/references/errors",
						},
					],
				},
			],
		}),
	],
});
