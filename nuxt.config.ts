// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ["primevue"],
  },
  colorMode: {
    classSuffix: "",
  },
  css: [
    "~/assets/css/tailwind.css",
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  devtools: {
    vscode: {},
  },
  experimental: {
    reactivityTransform: true,
  },
  headlessui: {
    prefix: "",
  },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-headlessui",
    "nuxt-vitest",
    "@nuxt/devtools",
    "nuxt-directus",
  ],
  directus: {
    url: "https://sevensages-cms.zpd.wiki/",
    autoFetch: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
