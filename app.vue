<script setup lang="ts">
import "~/assets/css/tailwind.css";

useHead({
  title: "The Seven Sages of Rome",
  htmlAttrs: {
    lang: "en",
  },
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
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
