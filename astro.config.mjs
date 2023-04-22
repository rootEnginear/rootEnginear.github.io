import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://rootenginear.github.io",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap({
      customPages: [
        "https://rootenginear.github.io/tpc-course-planner",
        "https://rootenginear.github.io/25th-parliament-meeting",
        "https://rootenginear.github.io/my-common-patterns",
      ],
    }),
    svelte(),
    compress({
      html: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
      img: false,
    }),
  ],
});
