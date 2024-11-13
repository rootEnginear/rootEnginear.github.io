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
      black: "#0f0d0d",
      white: "#f5f5f5",
      gray: colors.zinc,
      accent: "#cc3b3b",
      "alt-gray": {
        DEFAULT: "#aebbc1",
        50: "#f6f7f8",
        100: "#eaedef",
        200: "#dae0e3",
        300: "#c1cbcf",
        400: "#aebbc1",
        500: "#8b9ba6",
        600: "#7a8a96",
        700: "#6d7a88",
        800: "#5c6671",
        900: "#4c545c",
        950: "#31353a",
      },
      sawgrass: "#d3cda2",
      wine: "#4d232f",
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
