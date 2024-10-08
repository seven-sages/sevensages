/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./composables/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      height: {
        110: "28rem",
        128: "32rem",
      },
      screens: {
        "desktop": "1400px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
