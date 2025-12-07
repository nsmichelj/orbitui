// @ts-check
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  integrations: [
    starlight({
      title: "OrbitUI Component Library",
      favicon: "/favicon.png",
      description:
        "A modular, customizable component library to accelerate your Astro projects with pre-built components powered by Tailwind CSS.",
      customCss: ["./src/styles/starlight.css"],
      logo: {
        dark: "./src/assets/logo/orbitui_logo_dark.svg",
        light: "./src/assets/logo/orbitui_logo_light.svg",
        replacesTitle: true,
        alt: "OrbitUI Logo",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nsmichelj/orbitui",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/JZHt3dNeJm",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/nsmichelj/orbitui/edit/main/apps/docs/",
      },
      components: {
        TwoColumnContent:
          "./src/components/overrides/TwoColumnContent/TwoColumnContent.astro",
        Pagination: "./src/components/overrides/pagination/Pagination.astro",
        ContentPanel:
          "./src/components/overrides/content-panel/ContentPanel.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/social-banner.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content:
              "Orbit UI Accessible, Customizable, & Lightweight component library",
          },
        },
      ],
    }),
  ],
});
