<script setup lang="ts">
defineProps<{
  header?: string;
  content?: string;
  link?: string;
  img?: string;
}>();
</script>
<template>
  <a :href="link" class="block group">
    <img
      alt=""
      :src="img"
      class="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-lg saturate-[0.9] group-hover:saturate-100"
    />

    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{{ header }}</h3>

    <p class="mt-2 max-w-sm text-gray-700">
      {{ content }}
    </p>
  </a>
</template>
