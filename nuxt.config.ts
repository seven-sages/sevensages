// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: "",
  },
  ssr: false,
  css: [
    "~/assets/css/tailwind.css",
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
    "nuxt-primevue",
    "@nuxt/devtools",
    "nuxt-directus",
  ],
  primevue: {
    usePrimeVue: true,
    options: {},
    importPT: undefined,
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
      prefix: '',
      name: undefined,
      include: undefined,
      exclude: undefined
    },
    directives: {
      prefix: '',
      name: undefined,
      include: undefined,
      exclude: undefined
    },
    composables: {
      prefix: '',
      name: undefined,
      include: undefined,
      exclude: undefined
    }
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
