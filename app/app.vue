<script setup lang="ts">
useHead({
  title: "The Seven Sages of Rome",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon-light.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon-dark.svg",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  meta: [
    {
      name: "description",
      content: "Project website of the DFG funded Seven Sages of Rome project.",
    },
  ],
});

useServerSeoMeta({
  title: "The Seven Sages of Rome",
  ogTitle: "The Seven Sages of Rome project website.",
  description: "Project website of the DFG funded Seven Sages of Rome project.",
  ogDescription:
    "Project website of the DFG funded Seven Sages of Rome project.",
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
