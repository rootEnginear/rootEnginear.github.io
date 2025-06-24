import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import qwikdev from "@qwikdev/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://rootenginear.github.io",
  integrations: [
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
        "https://rootenginear.github.io/svelte-action-motionone",
      ],
    }),
    (await import("astro-critters")).default(),
  ],
  markdown: {
    shikiConfig: {
      theme: "aurora-x",
    },
  },
});
