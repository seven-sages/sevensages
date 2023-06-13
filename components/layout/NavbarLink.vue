<script setup lang="ts">
defineProps<{
  name?: string;
  link?: string;
}>();
</script>

<template>
  <NuxtLink
    :to="link"
    class="text-lg font-semibold text-gray-600 dark:text-white transition duration-100 hover:text-indigo-500 dark:hover:text-indigo-500 active:text-indigo-700"
  >
    {{ name }}
  </NuxtLink>
</template>
