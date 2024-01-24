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
						{ label: "Example", link: "/concept/example" },
					],
				},
				{
					label: "Methods",
					items: [
						{ label: "TwoMi18n class", link: "/methods/class" },
						{
							label: "translateHTML()",
							link: "/methods/translate-html",
						},
						{ label: "translate()", link: "/methods/translate" },
					],
				},
				{
					label: "References",
					items: [
						{
							label: "Errors",
							link: "/errors/errors",
						},
					],
				},
			],
		}),
	],
});
