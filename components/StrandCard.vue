<script setup lang="ts">
defineProps<{
  header?: string;
  content?: number;
  link?: string;
  img?: string;
}>();
</script>
<template>
  <div
    class="relative mt-6 flex flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 xl:w-96"
  >
    <div>
      <div
        class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl shadow-lg"
      >
        <img
          :src="img"
          class="h-full w-full xl:object-cover"
          alt="card-image"
        />
      </div>
      <div class="p-6">
        <h5
          class="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased"
        >
          {{ header }}
        </h5>
        <p
          class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
        >
          {{ content }}
        </p>
      </div>
    </div>
    <div class="p-6 pt-0">
      <NuxtLink
        class="select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        :to="link"
      >
        More
      </NuxtLink>
    </div>
  </div>
</template>
