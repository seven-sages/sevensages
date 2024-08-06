<script setup lang="ts">
defineProps<{
  header?: string;
  content?: string;
  link?: string;
  img?: string;
  index: number;
}>();
</script>
<template>
  <div v-if="index % 2 == 0" class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80 group">
    <div class="order-first h-48 w-full bg-gray-100 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
      <img :src="img" loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-center saturate-[.75]" />
    </div>
    <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
      <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">{{ header }}</h2>

      <p class="mb-8 max-w-md text-gray-600">{{ content }}</p>

      <div class="mt-auto">
        <NuxtLink
          class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
          :to="link"
        >
          More
        </NuxtLink>
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
    <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
      <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">{{ header }}</h2>

      <p class="mb-8 max-w-md text-gray-600">{{ content }}</p>

      <div class="mt-auto">
        <NuxtLink
          class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
          :to="link"
        >
          More
        </NuxtLink>
      </div>
    </div>
    <div class="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
      <img :src="img" loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-center saturate-[.75]" />
    </div>
  </div>
</template>
