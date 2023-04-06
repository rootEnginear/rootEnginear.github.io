/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans],
      serif: ["Space Grotesk Variable", ...defaultTheme.fontFamily.serif],
    },
    spacing: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
    },
    borderWidth: {
      DEFAULT: "1px",
    },
    borderRadius: {
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
};
