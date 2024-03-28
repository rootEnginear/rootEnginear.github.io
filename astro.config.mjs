import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import qwikdev from "@qwikdev/astro";
import Compress from "astro-compress";
import Critters from "astro-critters";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://rootenginear.github.io",
  integrations: [
    svelte(),
    qwikdev(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      customPages: [
        "https://rootenginear.github.io/tpc-course-planner",
        "https://rootenginear.github.io/25th-parliament-meeting",
        "https://rootenginear.github.io/26th-parliament-meeting",
        "https://rootenginear.github.io/my-common-patterns",
      ],
    }),
    Critters(),
    Compress({
      HTML: {
        "html-minifier-terser": {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
        },
      },
      Image: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "aurora-x",
    },
  },
});
