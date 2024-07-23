// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{zinc.950}',
          inverseColor: '#ffffff',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}'
        },
        highlight: {
          background: '{zinc.950}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{zinc.950}',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
});

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

  ssr: true,
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
    "@nuxt/test-utils/module",
    '@primevue/nuxt-module',
    "@nuxt/devtools",
    "nuxt-directus",
  ],

  primevue: {
    options: {
      theme: {
        preset: Noir
      }
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

  compatibilityDate: "2024-07-23",
});
