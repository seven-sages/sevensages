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
    class="text-base text-black transition duration-100"
  >
    <LayoutCenterUnderline>
      {{ name }}
    </LayoutCenterUnderline>
  </NuxtLink>
</template>
<style scoped>
</style>
