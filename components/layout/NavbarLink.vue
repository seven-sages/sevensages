<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

defineProps<{
  name?: string;
  link?: string;
  index: boolean
}>();

const { y } = useWindowScroll()
</script>

<template>
  <NuxtLink
    :to="link"
    class="text-lg font-light text-zinc-50 transition duration-100"
    :class="{ 'text-zinc-800': y > 0 || !index }"
  >
    <span class="link link-underline" :class="[ y > 0 || !index ? 'link-underline-black' : 'link-underline-white' ]">{{ name }}</span>
  </NuxtLink>
</template>
<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
  background-size: 0 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size .5s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent), linear-gradient(#000000, #000000)
}

.link-underline-white {
  background-image: linear-gradient(transparent, transparent), linear-gradient(#ffffff, #ffffff)
}

.link-underline:hover {
  background-size: 100% 1px;
  background-position: 0 100%
}
</style>
