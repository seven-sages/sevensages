<script setup lang="ts">
withDefaults(
  defineProps<{
    class?: string;
    alt?: string;
  }>(),
  {
    alt: "The Seven Sages of Rome",
  },
);
</script>

<template>
  <img
    src="/logo.svg"
    :alt="alt"
    :class="class"
  >
</template>
