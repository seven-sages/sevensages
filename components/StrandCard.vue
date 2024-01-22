<script setup lang="ts">
defineProps<{
  header?: string;
  content?: number;
  link?: string;
  img?: img;
}>();
</script>
<template>
  <div
    class="relative mt-6 flex w-96 flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-md dark:bg-gray-700 dark:text-gray-200"
  >
    <div>
      <div
        class="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg"
      >
        <img :src="img" alt="card-image" />
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
      <button
        class="select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        More
      </button>
    </div>
  </div>
</template>
