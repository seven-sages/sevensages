<script setup lang="ts">
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
    class="text-xl text-black transition duration-100"
  >
    <span class="link link-underline link-underline-black">{{ name }}</span>
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
