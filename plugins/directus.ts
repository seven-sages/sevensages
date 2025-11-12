import { createDirectus, rest } from "@directus/sdk";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const directusUrl = config.public.directusUrl;

  if (!directusUrl) {
    throw new Error("Missing Directus URL. Set NUXT_PUBLIC_DIRECTUS_URL (or legacy NUXT_CMS_URL).");
  }

  const directus = createDirectus(directusUrl).with(rest());

  return {
    provide: {
      directus,
    },
  };
});
