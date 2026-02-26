<script setup lang="ts">
import { readSingleton } from "@directus/sdk";

const { $directus } = useNuxtApp();
interface IDutchEdition {
  id?: string;
  Content: string;
  Heading: string;
}

const { data: dutchEditionData } = await useAsyncData(
  "page:edition",
  () => $directus.request(readSingleton("Dutch_Edition")) as Promise<IDutchEdition>,
);

if (!dutchEditionData.value) {
  throw createError({ statusCode: 500, statusMessage: "Failed to load edition page" });
}

const dutchEdition = dutchEditionData.value;
</script>
<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-(--breakpoint-md) px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:mb-6"
      >
        {{ dutchEdition.Heading }}
      </h1>

      <span
        class="mb-6 list-inside text-justify text-gray-800 sm:text-lg md:mb-8"
        v-html="dutchEdition.Content"
      />
    </div>
  </div>
</template>
