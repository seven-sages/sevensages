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
    "nuxt-icon",
    "nuxt-headlessui",
    "nuxt-vitest",
    "nuxt-primevue",
    "@nuxt/devtools",
    "nuxt-directus",
  ],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      exclude: ["Editor", "Chart"],
    },
  },
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
