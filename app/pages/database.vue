<script setup lang="ts">
import { readSingleton } from "@directus/sdk";

const { $directus } = useNuxtApp();
interface IDatabase {
  id?: string;
  Content: string;
  Heading: string;
}

const { data: databaseData } = await useAsyncData(
  "page:database",
  () => $directus.request(readSingleton("Database")) as Promise<IDatabase>,
);

if (!databaseData.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Failed to load database page",
  });
}

const database = databaseData.value;
</script>
<template>
  <div class="bg-[#FCFCFA] py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-(--breakpoint-md) px-4 md:px-8">
      <h1
        class="font-prata mb-4 text-center text-2xl font-bold text-primary-900 sm:text-3xl md:mb-6"
      >
        {{ database.Heading }}
      </h1>
      <div
        class="rich-text prose mb-6 text-justify text-primary-900 sm:text-lg md:mb-8"
        v-html="database.Content"
      ></div>
    </div>
  </div>
</template>
<style scoped>
:deep(a) {
  color: var(--color-link);
}
</style>
