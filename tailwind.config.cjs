/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk Variable", "Bai Jamjuree", ...defaultTheme.fontFamily.sans],
      serif: ["Space Grotesk Variable", "Bai Jamjuree", ...defaultTheme.fontFamily.serif],
      mono: ["Jetbrains Mono", "Bai Jamjuree", ...defaultTheme.fontFamily.mono],
      "bai-jamjuree": [
        "Space Grotesk Variable",
        "Bai Jamjuree",
        ...defaultTheme.fontFamily.sans,
      ],
      japanese: [
        "Space Grotesk Variable",
        "Bai Jamjuree",
        '"M PLUS 1"',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    spacing: {
      0: "0",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
      16: "16px",
      32: "32px",
      48: "48px",
      64: "64px",
      list: "2ch",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: colors.zinc,
      accent: "#e34234",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
    },
    borderRadius: {
      0: "0px",
      4: "4px",
      8: "8px",
      16: "16px",
      48: "48px",
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
};
