// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  colorMode: {
    classSuffix: "",
  },
  ssr: false,
  css: ["~/assets/css/tailwind.css", "primeicons/primeicons.css"],
  devtools: {
    vscode: {},
  },
  headlessui: {
    prefix: "",
  },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-headlessui",
    "nuxt-vitest",
    "@nuxt/devtools",
    "nuxt-directus",
  ],
  directus: {
    url: process.env.NUXT_CMS_URL,
    autoFetch: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
