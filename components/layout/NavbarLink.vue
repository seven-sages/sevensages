<script setup lang="ts">
defineProps<{
  name?: string;
  link?: string;
}>();
</script>

<template>
  <NuxtLink
    :to="link"
    class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 dark:text-white dark:hover:text-indigo-500"
  >
    {{ name }}
  </NuxtLink>
</template>
