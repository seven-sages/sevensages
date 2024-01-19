<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    class="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
    aria-label="Toggle Dark Mode"
    @click="toggleDark()"
  >
    <Icon v-if="isDark" name="heroicons-outline:moon" class="h-6 w-6" />
    <Icon v-else name="heroicons-outline:sun" class="h-6 w-6" />
  </button>
</template>
