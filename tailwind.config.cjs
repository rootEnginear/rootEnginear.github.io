/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans],
      serif: ["Space Grotesk Variable", ...defaultTheme.fontFamily.serif],
    },
    spacing: {
      0: "0",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
      16: "16px",
      32: "32px",
      64: "64px",
      "1rem": "1rem",
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
    },
    borderRadius: {
      4: "4px",
      16: "16px",
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
};
