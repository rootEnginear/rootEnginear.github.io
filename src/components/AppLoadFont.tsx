import { $, component$, useOnDocument } from "@builder.io/qwik";

const AppLoadFont = component$(() => {
  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      document
        .querySelectorAll("[data-lazy-font]")
        .forEach((el) => el.setAttribute("media", "all"));
    })
  );

  return null;
});

export default AppLoadFont;
