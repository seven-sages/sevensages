<script setup lang="ts">
import { readSingleton } from "@directus/sdk";

const { $directus } = useNuxtApp();
interface IGender {
  id?: string;
  Content: string;
  Heading: string;
}

const gender = await $directus.request(readSingleton("Gender")) as IGender;
</script>
<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-(--breakpoint-md) px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:mb-6"
      >
        {{ gender.Heading }}
      </h1>
      <ClientOnly>
        <p
          class="mb-6 text-justify text-gray-800 sm:text-lg md:mb-8"
          v-html="gender.Content"
        />
      </ClientOnly>
    </div>
  </div>
</template>
