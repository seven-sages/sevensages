<script setup lang="ts">
import { readSingleton } from "@directus/sdk";

const { $directus } = useNuxtApp();
interface IImprint {
  id?: string;
  Content: string;
  Heading: string;
}

const { data: imprintData } = await useAsyncData(
  "page:imprint",
  () => $directus.request(readSingleton("Imprint")) as Promise<IImprint>,
);

if (!imprintData.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Failed to load imprint page",
  });
}

const imprint = imprintData.value;
</script>
<template>
  <div class="bg-[#FCFCFA] py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-(--breakpoint-md) px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:mb-6"
      >
        {{ imprint.Heading }}
      </h1>

      <span
        class="mb-6 text-justify text-gray-800 sm:text-lg md:mb-8"
        v-html="imprint.Content"
      />
    </div>
  </div>
</template>
