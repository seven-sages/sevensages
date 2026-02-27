import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "The Seven Sages of Rome",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  vite: {
    plugins: [tailwindcss() as any],
  },

  css: ["~/assets/css/main.css"],

  ui: {
    colors: {
      primary: 'primary',
      neutral: 'neutral'
    }
  },

  devtools: {
    vscode: {},
  },

  colorMode: {
    preference: "light",
  },

  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/test-utils/module",
    "@nuxt/devtools",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/ui",
  ],

  runtimeConfig: {
    public: {
      directusUrl:
        process.env.NUXT_PUBLIC_DIRECTUS_URL || process.env.NUXT_CMS_URL || "",
    },
  },

  compatibilityDate: "2024-07-23",
});
