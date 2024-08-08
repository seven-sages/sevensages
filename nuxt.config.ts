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

  ssr: false,
  css: ["~/assets/css/tailwind.css", "primeicons/primeicons.css"],

  devtools: {
    vscode: {},
  },

  headlessui: {
    prefix: "",
  },

  colorMode: {
    preference: 'light'
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
    "@nuxt/fonts"
  ],

  primevue: {
    options: {
      theme: {
        preset: Noir,
        options: {
          darkModeSelector: '.dark-selector',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities',
          },
        },
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