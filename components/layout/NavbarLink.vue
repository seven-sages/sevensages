<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

defineProps<{
  name?: string;
  link?: string;
}>();

const { x, y } = useWindowScroll()
</script>

<template>
  <NuxtLink
    :to="link"
    class="text-lg font-semibold text-zinc-50 transition duration-100 hover:text-indigo-300"
    :class="{ 'text-zinc-800 hover:text-indigo-800': y > 0 }"
  >
    {{ name }}
  </NuxtLink>
</template>
