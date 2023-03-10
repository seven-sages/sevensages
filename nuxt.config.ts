// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-headlessui',
    'nuxt-vitest',
    '@nuxt/devtools',
    'nuxt-directus'
  ],
  experimental: {
    reactivityTransform: true
  },
  build: {
    transpile: ["primevue"]
  },
  css: [
    '~/assets/css/tailwind.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  colorMode: {
    classSuffix: ''
  },
  headlessui: {
    prefix: ''
  },
  devtools: {
    vscode: {}
  }
})
